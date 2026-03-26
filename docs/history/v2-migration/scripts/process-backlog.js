#!/usr/bin/env node
'use strict'

/**
 * Contribute-To-This-Project — backlog processing script
 *
 * Usage (must be run from the master branch):
 *   git checkout master && git pull origin master
 *   node _v2/scripts/process-backlog.js [--dry-run] [--batch N]
 *
 * Strategy for valid card PRs:
 *   Rather than merging the PR branch (which conflicts on index.html for every
 *   old PR), we extract the contributor's card from the diff and inject it
 *   directly into index.html on master. This bypasses merge conflicts entirely.
 *   At the end of each batch, all queued cards are committed and pushed together,
 *   then each PR is commented on and closed.
 *
 * Prerequisites:
 *   - Run from master branch (script will check and exit if not)
 *   - gh CLI authenticated (gh auth login)
 *   - npm install already run (cheerio must be available)
 *   - Run from repo root
 *
 * State is persisted to _v2/processed.json so re-running is always safe.
 */

const { execSync } = require('child_process')
const fs = require('fs')
const path = require('path')
const cheerio = require('cheerio')

const { validateCard } = require('../../../../scripts/validate-card')
const { welcomeComment, invalidComment, maintainerReviewComment } = require('../../../../scripts/backlog-messages')

// ---------------------------------------------------------------------------
// Config
// ---------------------------------------------------------------------------

const PROCESSED_FILE = path.resolve(process.cwd(), '_v2/scripts/processed.json')
const TMP_COMMENT_FILE = path.resolve(__dirname, '.tmp-comment.md')
const TMP_COMMIT_MSG_FILE = path.resolve(__dirname, '.tmp-commit-msg.txt')
const INDEX_FILE = path.resolve(process.cwd(), 'index.html')
const TEMPLATE_END_MARKER = '<!-- ________ *TEMPLATE* Contributor card END ________  -->'
const DELAY_MS = 500
const DEFAULT_BATCH = 30

// ---------------------------------------------------------------------------
// CLI args
// ---------------------------------------------------------------------------

const args = process.argv.slice(2)
const DRY_RUN = args.includes('--dry-run')

const batchEqArg = args.find(a => a.startsWith('--batch='))
const batchSpaceIdx = args.indexOf('--batch')
const BATCH = batchEqArg
  ? parseInt(batchEqArg.split('=')[1], 10)
  : batchSpaceIdx !== -1
    ? parseInt(args[batchSpaceIdx + 1], 10)
    : DEFAULT_BATCH

if (isNaN(BATCH) || BATCH < 1) {
  console.error('Invalid --batch value. Must be a positive integer.')
  process.exit(1)
}

// ---------------------------------------------------------------------------
// State helpers
// ---------------------------------------------------------------------------

function loadProcessed() {
  if (!fs.existsSync(PROCESSED_FILE)) return {}
  try {
    return JSON.parse(fs.readFileSync(PROCESSED_FILE, 'utf-8'))
  } catch {
    console.warn('Warning: could not parse processed.json, starting fresh.')
    return {}
  }
}

function saveProcessed(data) {
  if (DRY_RUN) return
  fs.writeFileSync(PROCESSED_FILE, JSON.stringify(data, null, 2))
}

// ---------------------------------------------------------------------------
// gh CLI wrappers
// ---------------------------------------------------------------------------

function gh(cmd) {
  return execSync(`gh ${cmd}`, { encoding: 'utf-8', stdio: ['pipe', 'pipe', 'pipe'] })
}

function postComment(number, body) {
  if (DRY_RUN) {
    console.log(`  [dry-run] Would comment on #${number}: "${body.split('\n')[0]}..."`)
    return
  }
  fs.writeFileSync(TMP_COMMENT_FILE, body)
  try {
    gh(`pr comment ${number} --body-file "${TMP_COMMENT_FILE}"`)
  } finally {
    if (fs.existsSync(TMP_COMMENT_FILE)) fs.unlinkSync(TMP_COMMENT_FILE)
  }
}

function addLabel(number, label) {
  if (DRY_RUN) {
    console.log(`  [dry-run] Would label #${number} → "${label}"`)
    return
  }
  gh(`pr edit ${number} --add-label "${label}"`)
}

function closePr(number) {
  if (DRY_RUN) {
    console.log(`  [dry-run] Would close #${number}`)
    return
  }
  gh(`pr close ${number}`)
}

function runArchive() {
  if (DRY_RUN) {
    console.log('  [dry-run] Would run: npm run archive_cards')
    return
  }
  console.log('  Running npm run archive_cards...')
  execSync('npm run archive_cards', { stdio: 'inherit' })
}

// ---------------------------------------------------------------------------
// Card extraction and injection
// ---------------------------------------------------------------------------

/**
 * Load the added lines of a unified diff into a cheerio instance.
 */
function extractCardFromDiff(diff) {
  const addedLines = diff
    .split('\n')
    .filter(l => l.startsWith('+') && !l.startsWith('+++'))
    .map(l => l.slice(1))
    .join('\n')
  return cheerio.load(addedLines, { xmlMode: false })
}

/**
 * Get the outer HTML of the .card div from a cheerio instance.
 */
function extractCardHtml($) {
  return $.html($('.card').first())
}

/**
 * Insert a card HTML block into index.html content, right after the template end marker.
 * Prettier will normalise indentation on commit.
 */
function insertCardIntoHtml(indexHtml, cardHtml) {
  if (!indexHtml.includes(TEMPLATE_END_MARKER)) {
    throw new Error('Template end marker not found in index.html')
  }
  return indexHtml.replace(TEMPLATE_END_MARKER, `${TEMPLATE_END_MARKER}\n\n        ${cardHtml.trim()}`)
}

// ---------------------------------------------------------------------------
// Batch commit & push
// ---------------------------------------------------------------------------

/**
 * Apply all pending card injections to index.html, commit, and push to master.
 * Then post welcome comments and close each PR.
 */
async function applyPendingMerges(pendingMerges, processed) {
  if (pendingMerges.length === 0) return 0

  if (DRY_RUN) {
    console.log(
      `\n  [dry-run] Would inject ${pendingMerges.length} cards into index.html, commit [skip ci], push, then close PRs`
    )
    return pendingMerges.length
  }

  console.log(`\nInjecting ${pendingMerges.length} card(s) into index.html...`)

  // Pull latest master before modifying
  execSync('git pull origin master', { stdio: 'inherit' })

  // Insert all cards
  let html = fs.readFileSync(INDEX_FILE, 'utf-8')
  for (const { number, authorLogin, cardHtml } of pendingMerges) {
    html = insertCardIntoHtml(html, cardHtml)
    console.log(`  Inserted @${authorLogin} (#${number})`)
  }
  fs.writeFileSync(INDEX_FILE, html)

  // Format
  console.log('  Running prettier...')
  execSync('npm run prettier-html', { stdio: 'pipe' })

  // Commit — include index.html, any new archive JSON files, and archiveFilesTotal.js
  const prList = pendingMerges.map(m => `#${m.number}`).join(' ')
  const commitMsg = `feat: add ${pendingMerges.length} contributor card(s) from backlog ${prList} [skip ci]`
  fs.writeFileSync(TMP_COMMIT_MSG_FILE, commitMsg)
  execSync('git add index.html archive/archiveFilesTotal.js "archive/cards/"', { stdio: 'pipe' })
  execSync(`git commit -F "${TMP_COMMIT_MSG_FILE}"`, { stdio: 'inherit' })
  fs.unlinkSync(TMP_COMMIT_MSG_FILE)

  // Push (retry once on failure)
  console.log('  Pushing to master...')
  try {
    execSync('git push origin master', { stdio: 'inherit' })
  } catch {
    console.log('  Push failed — pulling and retrying...')
    execSync('git pull --rebase origin master', { stdio: 'inherit' })
    execSync('git push origin master', { stdio: 'inherit' })
  }

  // Post comments + close PRs
  console.log('  Posting comments and closing PRs...')
  for (const { number, authorLogin } of pendingMerges) {
    try {
      await sleep(DELAY_MS)
      postComment(number, welcomeComment(authorLogin))
      await sleep(DELAY_MS)
      closePr(number)
      processed[number] = 'merged'
      saveProcessed(processed)
    } catch (e) {
      console.log(`  WARNING: could not comment/close #${number}: ${e.message.split('\n')[0]}`)
      processed[number] = 'merged:comment-failed'
      saveProcessed(processed)
    }
  }

  // Archive to keep index.html tidy
  runArchive()
  console.log()

  return pendingMerges.length
}

// ---------------------------------------------------------------------------
// Main
// ---------------------------------------------------------------------------

async function main() {
  console.log('\n═══════════════════════════════════════════════════')
  console.log('  Contribute-To-This-Project — backlog processor')
  console.log(`  Mode: ${DRY_RUN ? 'DRY RUN (no changes will be made)' : 'LIVE'}`)
  console.log(`  Batch size: ${BATCH}`)
  console.log('═══════════════════════════════════════════════════\n')

  // Guard: must be on master for direct injection to work
  if (!DRY_RUN) {
    const branch = execSync('git rev-parse --abbrev-ref HEAD', { encoding: 'utf-8' }).trim()
    if (branch !== 'master') {
      console.error(`Error: must be run from the master branch (currently on "${branch}")`)
      console.error('Run: git checkout master && git pull origin master')
      process.exit(1)
    }
    // Pull before starting
    console.log('Pulling latest master...')
    execSync('git pull origin master', { stdio: 'inherit' })
    console.log()
  }

  const processed = loadProcessed()
  const alreadyProcessedCount = Object.keys(processed).length
  if (alreadyProcessedCount > 0) {
    console.log(`Resuming: ${alreadyProcessedCount} PRs already recorded in processed.json\n`)
  }

  // Fetch open PRs
  console.log('Fetching open PRs...')
  const prs = JSON.parse(gh('pr list --state open --limit 300 --json number,title,author,files,labels,isDraft'))
  console.log(`Found ${prs.length} open PRs\n`)

  let batchCount = 0
  let skipCount = 0
  const pendingMerges = [] // queued for batch commit at end
  const results = { merged: [], invalid: [], maintainerReview: [], skipped: [], errors: [] }

  for (const pr of prs) {
    if (batchCount >= BATCH) {
      console.log(`\nBatch limit (${BATCH}) reached. Run again to continue.`)
      break
    }

    const { number, author, files, labels, isDraft } = pr
    const authorLogin = author?.login ?? 'unknown'
    const changedFiles = (files ?? []).map(f => f.path)
    const labelNames = (labels ?? []).map(l => l.name)

    // ── Skip conditions ────────────────────────────────────────────────────

    if (processed[number]) {
      console.log(`#${number} — already processed (${processed[number]}), skipping`)
      skipCount++
      continue
    }

    if (isDraft) {
      console.log(`#${number} — draft PR, skipping`)
      processed[number] = 'skipped:draft'
      saveProcessed(processed)
      skipCount++
      results.skipped.push(number)
      continue
    }

    if (labelNames.some(l => ['maintainer-review', 'changes requested'].includes(l))) {
      console.log(`#${number} — already labeled (${labelNames.join(', ')}), skipping`)
      processed[number] = 'skipped:already-labeled'
      saveProcessed(processed)
      skipCount++
      results.skipped.push(number)
      continue
    }

    // ── Categorise ─────────────────────────────────────────────────────────

    const isCardPr = changedFiles.length === 1 && changedFiles[0] === 'index.html'
    const category = isCardPr ? 'card-pr' : 'non-card-pr'

    console.log(`#${number} [@${authorLogin}] ${category}  files: ${changedFiles.join(', ')}`)

    // ── Non-card PR ────────────────────────────────────────────────────────

    if (!isCardPr) {
      try {
        await sleep(DELAY_MS)
        addLabel(number, 'maintainer-review')
        await sleep(DELAY_MS)
        postComment(number, maintainerReviewComment(authorLogin))
      } catch (e) {
        console.log(`  ERROR on #${number}: ${e.message.split('\n')[0]}`)
        processed[number] = 'error:label-failed'
        saveProcessed(processed)
        results.errors.push(number)
        batchCount++
        continue
      }
      processed[number] = 'labeled:maintainer-review'
      saveProcessed(processed)
      results.maintainerReview.push(number)
      batchCount++
      continue
    }

    // ── Card PR: fetch diff ────────────────────────────────────────────────

    await sleep(DELAY_MS)
    let diff
    try {
      diff = gh(`pr diff ${number}`)
    } catch (e) {
      console.log(`  ERROR fetching diff for #${number}: ${e.message.split('\n')[0]}`)
      processed[number] = 'error:diff-fetch'
      saveProcessed(processed)
      results.errors.push(number)
      batchCount++
      continue
    }

    // ── Validate ───────────────────────────────────────────────────────────

    const $ = extractCardFromDiff(diff)
    const result = validateCard($, { changedFiles })

    if (result.valid) {
      const cardHtml = extractCardHtml($)
      console.log('  ✓ Valid — queued for injection')
      pendingMerges.push({ number, authorLogin, cardHtml })
      // Mark as pending so a crash mid-batch doesn't reprocess
      processed[number] = 'pending'
      saveProcessed(processed)
      results.merged.push(number) // optimistic; corrected to 'merged' in applyPendingMerges
    } else {
      console.log(`  ✗ Invalid — ${result.errors.length} error(s):`)
      result.errors.forEach(e => console.log(`    · ${e}`))
      try {
        await sleep(DELAY_MS)
        postComment(number, invalidComment(authorLogin, result.errors))
        await sleep(DELAY_MS)
        addLabel(number, 'changes requested')
      } catch (e) {
        console.log(`  ERROR on #${number}: ${e.message.split('\n')[0]}`)
        processed[number] = 'error:label-failed'
        saveProcessed(processed)
        results.errors.push(number)
        batchCount++
        continue
      }
      processed[number] = 'labeled:changes-requested'
      saveProcessed(processed)
      results.invalid.push(number)
    }

    batchCount++
  }

  // ── Apply all queued card injections ───────────────────────────────────────

  const mergeCount = await applyPendingMerges(pendingMerges, processed)

  // ── Summary ───────────────────────────────────────────────────────────────

  console.log('═══════════════════════════════════════════════════')
  console.log('  Summary')
  console.log('═══════════════════════════════════════════════════')
  console.log(`  Injected & closed: ${mergeCount}`)
  console.log(`  Needs fixes:       ${results.invalid.length}`)
  console.log(`  Maintainer review: ${results.maintainerReview.length}`)
  console.log(`  Skipped:           ${skipCount}`)
  console.log(`  Errors:            ${results.errors.length}`)
  if (results.errors.length > 0) {
    console.log(`  Error PRs: #${results.errors.join(', #')}`)
  }
  console.log(`\n  processed.json updated at:\n  ${PROCESSED_FILE}`)
  if (DRY_RUN) console.log('\n  (Dry run — no actual changes were made)')
  console.log()
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms))
}

main().catch(e => {
  console.error('\nFatal error:', e.message)
  process.exit(1)
})
