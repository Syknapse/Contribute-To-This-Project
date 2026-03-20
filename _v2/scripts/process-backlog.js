#!/usr/bin/env node
'use strict'

/**
 * Contribute-To-This-Project — backlog processing script
 *
 * Usage:
 *   node _v2/scripts/process-backlog.js [--dry-run] [--batch N]
 *
 * Prerequisites:
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

const { validateCard } = require('./validate-card')
const { welcomeComment, invalidComment, maintainerReviewComment } = require('./backlog-messages')

// ---------------------------------------------------------------------------
// Config
// ---------------------------------------------------------------------------

const PROCESSED_FILE = path.resolve(__dirname, 'processed.json')
const TMP_COMMENT_FILE = path.resolve(__dirname, '.tmp-comment.md')
const DELAY_MS = 500
const ARCHIVE_EVERY = 10
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
    const preview = body.split('\n')[0]
    console.log(`  [dry-run] Would comment on #${number}: "${preview}..."`)
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

function mergeSquash(number) {
  if (DRY_RUN) {
    console.log(`  [dry-run] Would merge #${number} --squash`)
    return
  }
  gh(`pr merge ${number} --squash --delete-branch`)
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
// Card extraction
// ---------------------------------------------------------------------------

/**
 * Extract the added lines from a unified diff and load them into cheerio.
 * Returns a cheerio instance so validate-card.js can query it.
 */
function extractCardFromDiff(diff) {
  const addedLines = diff
    .split('\n')
    .filter(l => l.startsWith('+') && !l.startsWith('+++'))
    .map(l => l.slice(1))
    .join('\n')

  return cheerio.load(addedLines, { xmlMode: false })
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

  const processed = loadProcessed()
  const alreadyProcessedCount = Object.keys(processed).length
  if (alreadyProcessedCount > 0) {
    console.log(`Resuming: ${alreadyProcessedCount} PRs already recorded in processed.json\n`)
  }

  // Fetch open PRs
  console.log('Fetching open PRs...')
  const prs = JSON.parse(
    gh('pr list --state open --limit 300 --json number,title,author,files,labels,isDraft')
  )
  console.log(`Found ${prs.length} open PRs\n`)

  let mergeCount = 0
  let batchCount = 0
  let skipCount = 0
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

    if (labelNames.some(l => ['maintainer-review', 'changes-requested'].includes(l))) {
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
      await sleep(DELAY_MS)
      addLabel(number, 'maintainer-review')
      await sleep(DELAY_MS)
      postComment(number, maintainerReviewComment(authorLogin))
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
      console.log(`  ERROR fetching diff for #${number}: ${e.message}`)
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
      console.log('  ✓ Valid')
      await sleep(DELAY_MS)
      postComment(number, welcomeComment(authorLogin))
      await sleep(DELAY_MS)
      mergeSquash(number)
      processed[number] = 'merged'
      saveProcessed(processed)
      results.merged.push(number)
      mergeCount++

      // Run archive every N merges to keep index.html tidy
      if (mergeCount % ARCHIVE_EVERY === 0) {
        console.log(`\n  [archive] ${mergeCount} merges reached — running archive_cards`)
        runArchive()
        console.log()
      }
    } else {
      console.log(`  ✗ Invalid — ${result.errors.length} error(s):`)
      result.errors.forEach(e => console.log(`    · ${e}`))
      await sleep(DELAY_MS)
      postComment(number, invalidComment(authorLogin, result.errors))
      await sleep(DELAY_MS)
      addLabel(number, 'changes-requested')
      processed[number] = 'labeled:changes-requested'
      saveProcessed(processed)
      results.invalid.push(number)
    }

    batchCount++
  }

  // Final archive run if we ended mid-cycle
  if (!DRY_RUN && mergeCount > 0 && mergeCount % ARCHIVE_EVERY !== 0) {
    console.log('\nRunning final archive_cards...')
    runArchive()
  }

  // ── Summary ──────────────────────────────────────────────────────────────

  console.log('\n═══════════════════════════════════════════════════')
  console.log('  Summary')
  console.log('═══════════════════════════════════════════════════')
  console.log(`  Merged:            ${results.merged.length}`)
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
