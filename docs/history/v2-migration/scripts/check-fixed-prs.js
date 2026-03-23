#!/usr/bin/env node
'use strict'

/**
 * Contribute-To-This-Project — pre-merge fixed-PR check
 *
 * Run this on master BEFORE merging the v2 branch.
 * It scans every open PR labelled "changes requested", re-validates the card,
 * and merges any that have been fixed since Phase 1.
 *
 * Usage (must be run from the master branch):
 *   git checkout master && git pull origin master
 *   node docs/history/v2-migration/scripts/check-fixed-prs.js [--dry-run]
 *
 * What it does:
 *   - Fetches all open PRs with the "changes requested" label
 *   - Skips PRs already marked "merged" in processed.json
 *   - For each remaining PR: extracts the card from the diff, validates
 *     with phase1 (lenient) mode
 *   - Valid cards: inject into index.html, batch-commit [skip ci], push,
 *     post fixedComment, close PR, mark "merged" in processed.json
 *   - Still-invalid cards: leave untouched for notify-v1-prs.js
 *
 * After this script completes, run npm run archive_cards (with minimumCardCount = 1)
 * to drain new cards from index.html, then merge the v2 branch.
 */

const { execSync } = require('child_process')
const fs = require('fs')
const path = require('path')
const cheerio = require('cheerio')

const { validateCard } = require('../../../../scripts/validate-card')
const { fixedComment } = require('../../../../scripts/backlog-messages')

// ── config ─────────────────────────────────────────────────────────────────────
const PROCESSED_FILE = path.resolve(process.cwd(), '_v2/scripts/processed.json')
const TMP_COMMENT_FILE = path.resolve(__dirname, '.tmp-comment.md')
const TMP_COMMIT_MSG_FILE = path.resolve(__dirname, '.tmp-commit-msg.txt')
const INDEX_FILE = path.resolve(process.cwd(), 'index.html')
const TEMPLATE_END_MARKER = '<!-- ________ *TEMPLATE* Contributor card END ________  -->'
const DELAY_MS = 500

// ── CLI args ───────────────────────────────────────────────────────────────────
const DRY_RUN = process.argv.includes('--dry-run')

// ── helpers (same pattern as process-backlog.js) ───────────────────────────────
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

function closePr(number) {
  if (DRY_RUN) {
    console.log(`  [dry-run] Would close #${number}`)
    return
  }
  gh(`pr close ${number}`)
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms))
}

function extractCardFromDiff(diff) {
  const addedLines = diff
    .split('\n')
    .filter(l => l.startsWith('+') && !l.startsWith('+++'))
    .map(l => l.slice(1))
    .join('\n')
  return cheerio.load(addedLines, { xmlMode: false })
}

function extractCardHtml($) {
  return $.html($('.card').first())
}

function insertCardIntoHtml(indexHtml, cardHtml) {
  if (!indexHtml.includes(TEMPLATE_END_MARKER)) {
    throw new Error('Template end marker not found in index.html')
  }
  return indexHtml.replace(TEMPLATE_END_MARKER, `${TEMPLATE_END_MARKER}\n\n        ${cardHtml.trim()}`)
}

async function applyMerges(pendingMerges, processed) {
  if (pendingMerges.length === 0) return 0
  if (DRY_RUN) {
    console.log(`\n[dry-run] Would inject ${pendingMerges.length} fixed card(s), commit [skip ci], push, comment and close`)
    return pendingMerges.length
  }

  console.log(`\nInjecting ${pendingMerges.length} fixed card(s) into index.html...`)
  execSync('git pull origin master', { stdio: 'inherit' })

  let html = fs.readFileSync(INDEX_FILE, 'utf-8')
  for (const { number, authorLogin, cardHtml } of pendingMerges) {
    html = insertCardIntoHtml(html, cardHtml)
    console.log(`  Inserted @${authorLogin} (#${number})`)
  }
  fs.writeFileSync(INDEX_FILE, html)

  console.log('  Running prettier...')
  execSync('npm run prettier-html', { stdio: 'pipe' })

  const prList = pendingMerges.map(m => `#${m.number}`).join(' ')
  const commitMsg = `feat: add ${pendingMerges.length} fixed card(s) from changes-requested PRs ${prList} [skip ci]`
  fs.writeFileSync(TMP_COMMIT_MSG_FILE, commitMsg)
  execSync('git add index.html', { stdio: 'pipe' })
  execSync(`git commit -F "${TMP_COMMIT_MSG_FILE}"`, { stdio: 'inherit' })
  fs.unlinkSync(TMP_COMMIT_MSG_FILE)

  console.log('  Pushing to master...')
  try {
    execSync('git push origin master', { stdio: 'inherit' })
  } catch {
    console.log('  Push failed — pulling and retrying...')
    execSync('git pull --rebase origin master', { stdio: 'inherit' })
    execSync('git push origin master', { stdio: 'inherit' })
  }

  console.log('  Posting comments and closing PRs...')
  for (const { number, authorLogin } of pendingMerges) {
    try {
      await sleep(DELAY_MS)
      postComment(number, fixedComment(authorLogin))
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

  console.log()
  return pendingMerges.length
}

// ── main ───────────────────────────────────────────────────────────────────────
async function main() {
  console.log('\n═══════════════════════════════════════════════════')
  console.log('  check-fixed-prs — pre-merge re-validation pass')
  console.log(`  Mode: ${DRY_RUN ? 'DRY RUN (no changes will be made)' : 'LIVE'}`)
  console.log('═══════════════════════════════════════════════════\n')

  if (!DRY_RUN) {
    const branch = execSync('git rev-parse --abbrev-ref HEAD', { encoding: 'utf-8' }).trim()
    if (branch !== 'master') {
      console.error(`Error: must be run from the master branch (currently on "${branch}")`)
      console.error('Run: git checkout master && git pull origin master')
      process.exit(1)
    }
    console.log('Pulling latest master...')
    execSync('git pull origin master', { stdio: 'inherit' })
    console.log()
  }

  const processed = loadProcessed()

  // Fetch only open PRs labelled "changes requested"
  console.log('Fetching open "changes requested" PRs...')
  const prs = JSON.parse(
    gh('pr list --state open --label "changes requested" --limit 100 --json number,author,files')
  )
  console.log(`Found ${prs.length} open PR(s) with "changes requested" label\n`)

  if (prs.length === 0) {
    console.log('Nothing to do.')
    return
  }

  const pendingMerges = []
  const results = { merged: [], stillInvalid: [], errors: [] }

  for (const pr of prs) {
    const { number, author, files } = pr
    const authorLogin = author?.login ?? 'unknown'
    const changedFiles = (files ?? []).map(f => f.path)

    // Skip if already fully resolved
    if (processed[number] === 'merged') {
      console.log(`#${number} — already merged, skipping`)
      continue
    }

    // Only re-check PRs that touch index.html (card PRs)
    if (!changedFiles.includes('index.html')) {
      console.log(`#${number} [@${authorLogin}] — doesn't touch index.html, skipping`)
      continue
    }

    console.log(`#${number} [@${authorLogin}] — re-checking...`)

    await sleep(DELAY_MS)
    let diff
    try {
      diff = gh(`pr diff ${number}`)
    } catch (e) {
      console.log(`  ERROR fetching diff: ${e.message.split('\n')[0]}`)
      results.errors.push(number)
      continue
    }

    const $ = extractCardFromDiff(diff)
    const result = validateCard($, { mode: 'phase1' })

    if (result.valid) {
      const cardHtml = extractCardHtml($)
      console.log('  ✓ Now valid — queued for injection')
      pendingMerges.push({ number, authorLogin, cardHtml })
      processed[number] = 'pending'
      saveProcessed(processed)
      results.merged.push(number)
    } else {
      console.log(`  ✗ Still invalid: ${result.errors.join('; ')}`)
      results.stillInvalid.push(number)
    }
  }

  const mergeCount = await applyMerges(pendingMerges, processed)

  console.log('═══════════════════════════════════════════════════')
  console.log('  Summary')
  console.log('═══════════════════════════════════════════════════')
  console.log(`  Fixed and merged:  ${mergeCount}`)
  console.log(`  Still invalid:     ${results.stillInvalid.length}`)
  if (results.stillInvalid.length > 0) {
    console.log(`    PRs: #${results.stillInvalid.join(', #')}`)
    console.log('    → These will be notified by notify-v1-prs.js after the merge')
  }
  console.log(`  Errors:            ${results.errors.length}`)
  if (DRY_RUN) console.log('\n  (Dry run — no actual changes were made)')
  console.log()
}

main().catch(e => {
  console.error('\nFatal error:', e.message)
  process.exit(1)
})
