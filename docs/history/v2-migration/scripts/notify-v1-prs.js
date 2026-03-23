#!/usr/bin/env node
'use strict'

/**
 * Contribute-To-This-Project — post-merge v2 migration notifier
 *
 * Run this on master AFTER merging the v2 branch.
 * It posts a friendly migration comment on every open PR that still targets
 * index.html, telling contributors how to re-submit using the new cards/ flow.
 *
 * Usage (must be run from the master branch):
 *   git checkout master && git pull origin master
 *   node docs/history/v2-migration/scripts/notify-v1-prs.js [--dry-run]
 *
 * What it does:
 *   - Fetches all open PRs that change index.html
 *   - Skips PRs already marked "merged" or "notified" in processed.json
 *   - Posts v1MigrationComment on each remaining PR
 *   - Closes the PR (the v2 bot will handle any future re-submission)
 *   - Marks each notified PR as "notified" in processed.json (idempotent)
 *
 * Does NOT inject or touch index.html — this is notification only.
 */

const { execSync } = require('child_process')
const fs = require('fs')
const path = require('path')

const { v1MigrationComment } = require('../../../../scripts/backlog-messages')

// ── config ─────────────────────────────────────────────────────────────────────
const PROCESSED_FILE = path.resolve(process.cwd(), '_v2/scripts/processed.json')
const TMP_COMMENT_FILE = path.resolve(__dirname, '.tmp-comment.md')
const DELAY_MS = 600

// ── CLI args ───────────────────────────────────────────────────────────────────
const DRY_RUN = process.argv.includes('--dry-run')

// ── helpers ────────────────────────────────────────────────────────────────────
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

// ── main ───────────────────────────────────────────────────────────────────────
async function main() {
  console.log('\n═══════════════════════════════════════════════════')
  console.log('  notify-v1-prs — post-merge migration notifier')
  console.log(`  Mode: ${DRY_RUN ? 'DRY RUN (no changes will be made)' : 'LIVE'}`)
  console.log('═══════════════════════════════════════════════════\n')

  if (!DRY_RUN) {
    const branch = execSync('git rev-parse --abbrev-ref HEAD', { encoding: 'utf-8' }).trim()
    if (branch !== 'master') {
      console.error(`Error: must be run from the master branch (currently on "${branch}")`)
      console.error('Run: git checkout master && git pull origin master')
      process.exit(1)
    }
  }

  const processed = loadProcessed()

  // Fetch all open PRs — we'll filter to index.html ones below
  console.log('Fetching open PRs...')
  const prs = JSON.parse(
    gh('pr list --state open --limit 300 --json number,author,files')
  )

  // Filter to PRs that change index.html (v1-style card submissions)
  const v1Prs = prs.filter(pr =>
    (pr.files ?? []).some(f => f.path === 'index.html')
  )
  console.log(`Found ${v1Prs.length} open PR(s) targeting index.html\n`)

  if (v1Prs.length === 0) {
    console.log('Nothing to notify.')
    return
  }

  const results = { notified: [], skipped: [], errors: [] }

  for (const pr of v1Prs) {
    const { number, author } = pr
    const authorLogin = author?.login ?? 'unknown'

    // Skip if already handled
    const status = processed[number]
    if (status === 'merged' || status === 'notified') {
      console.log(`#${number} — already ${status}, skipping`)
      results.skipped.push(number)
      continue
    }

    console.log(`#${number} [@${authorLogin}] — notifying...`)

    try {
      await sleep(DELAY_MS)
      postComment(number, v1MigrationComment(authorLogin))
      await sleep(DELAY_MS)
      closePr(number)
      processed[number] = 'notified'
      saveProcessed(processed)
      results.notified.push(number)
      console.log('  ✓ Commented and closed')
    } catch (e) {
      console.log(`  ERROR on #${number}: ${e.message.split('\n')[0]}`)
      processed[number] = 'error:notify-failed'
      saveProcessed(processed)
      results.errors.push(number)
    }
  }

  console.log('\n═══════════════════════════════════════════════════')
  console.log('  Summary')
  console.log('═══════════════════════════════════════════════════')
  console.log(`  Notified and closed: ${results.notified.length}`)
  console.log(`  Already handled:     ${results.skipped.length}`)
  console.log(`  Errors:              ${results.errors.length}`)
  if (results.errors.length > 0) {
    console.log(`  Error PRs: #${results.errors.join(', #')}`)
  }
  if (DRY_RUN) console.log('\n  (Dry run — no actual changes were made)')
  console.log()
}

main().catch(e => {
  console.error('\nFatal error:', e.message)
  process.exit(1)
})
