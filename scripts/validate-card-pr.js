// Called by the validate-card-pr GitHub Actions workflow.
// Fetches PR metadata, validates the contributor card, posts a comment, and
// either auto-merges (valid) or exits 1 (invalid / bad file scope).
//
// Required env vars (set by the workflow):
//   GH_TOKEN            - GITHUB_TOKEN (set automatically by Actions)
//   PR_NUMBER           - pull request number
//   PR_AUTHOR           - PR author login
//   PR_HEAD_SHA         - head commit SHA of the PR
//   GITHUB_REPOSITORY   - owner/repo (set automatically by Actions)

'use strict'

const fs = require('fs')
const { execSync } = require('child_process')
const path = require('path')
const cheerio = require('cheerio')
const { validateCard } = require('./validate-card')

// ── env ────────────────────────────────────────────────────────────────────────
const { PR_NUMBER, PR_AUTHOR, PR_HEAD_SHA, GITHUB_REPOSITORY } = process.env

if (!PR_NUMBER || !PR_AUTHOR || !PR_HEAD_SHA || !GITHUB_REPOSITORY) {
  console.error('❌ Missing required env vars: PR_NUMBER, PR_AUTHOR, PR_HEAD_SHA, GITHUB_REPOSITORY')
  process.exit(1)
}

// ── helpers ────────────────────────────────────────────────────────────────────
function gh(cmd) {
  return execSync(cmd, { stdio: ['pipe', 'pipe', 'inherit'] })
    .toString()
    .trim()
}

function postComment(body) {
  const tmp = `/tmp/pr-comment-${PR_NUMBER}.md`
  fs.writeFileSync(tmp, body)
  gh(`gh pr comment ${PR_NUMBER} --body-file ${tmp}`)
}

function fail(body) {
  postComment(body)
  process.exit(1)
}

const README = `https://github.com/${GITHUB_REPOSITORY}#readme`

// ── get changed files ──────────────────────────────────────────────────────────
// Keep full file objects (path + changeType) for later checks.
const prFilesData = JSON.parse(gh(`gh pr view ${PR_NUMBER} --json files`)).files
const prFiles = prFilesData.map(f => f.path)
console.log(`Changed files: ${prFiles.join(', ')}`)

// ── file scope ─────────────────────────────────────────────────────────────────
const nonCardFiles = prFiles.filter(f => !/^cards\/[^/]+\.html$/.test(f))
if (nonCardFiles.length > 0) {
  fail(`Hi @${PR_AUTHOR}! 👋

This PR changes files outside the \`cards/\` directory:

${nonCardFiles.map(f => `- \`${f}\``).join('\n')}

Please submit a PR that only adds your card at \`cards/your-github-username.html\`. Any other changes need a separate PR with a linked issue first.`)
}

if (prFiles.length > 1) {
  // All files are cards/*.html at this point. Check if any are stale archived
  // cards — this happens when a contributor forks just before another card is
  // archived, then opens their PR after the archive workflow has deleted the file.
  const archivedFiles = []
  const newFiles = []

  for (const filePath of prFiles) {
    let hasHistory = false
    try {
      const commits = JSON.parse(
        gh(`gh api "repos/${GITHUB_REPOSITORY}/commits?path=${filePath}&sha=master&per_page=1"`)
      )
      hasHistory = commits.length > 0
    } catch {
      // Treat as new if the API call fails
    }
    if (hasHistory) {
      archivedFiles.push(path.basename(filePath))
    } else {
      newFiles.push(path.basename(filePath))
    }
  }

  if (archivedFiles.length > 0 && newFiles.length === 1) {
    const staleList = archivedFiles.map(f => `- \`${f}\``).join('\n')
    fail(`Hi @${PR_AUTHOR}! 👋

Your PR contains ${archivedFiles.length === 1 ? 'a card' : 'cards'} that ${archivedFiles.length === 1 ? 'was' : 'were'} recently archived from this repository:

${staleList}

This happens when you fork the repo just as another contributor's card is being archived — the file exists in your fork but has since been removed from master. The fix is simple: update your branch from upstream master to drop the stale ${archivedFiles.length === 1 ? 'file' : 'files'}:

\`\`\`bash
git fetch upstream
git rebase upstream/master
\`\`\`

Or if you're using GitHub Desktop, sync your fork with the upstream. Then push again and the bot will re-check automatically.`)
  }

  fail(`Hi @${PR_AUTHOR}! 👋

This PR changes more than one file. Please submit one card per PR — each contributor gets their own file.`)
}

const cardFile = prFiles[0]
const filename = path.basename(cardFile)
const cardChangeType = (prFilesData[0] && prFilesData[0].changeType) || 'ADDED'
const isCardUpdate = cardChangeType === 'MODIFIED'

if (filename === 'template.html') {
  fail(`Hi @${PR_AUTHOR}! 👋

It looks like you submitted \`cards/template.html\` itself rather than a copy of it.

Please copy \`cards/template.html\` to \`cards/your-github-username.html\` (using your actual GitHub username as the filename), fill it in, and submit that file instead.`)
}

if (!/^[a-zA-Z0-9_-]+\.html$/.test(filename)) {
  fail(`Hi @${PR_AUTHOR}! 👋

The filename \`${filename}\` isn't valid. Card filenames must only contain letters, numbers, hyphens, and underscores — for example: \`your-github-username.html\`.`)
}

// ── check for duplicate card filename ──────────────────────────────────────────
// A new card (ADDED) whose filename already exists on master means two PRs with
// the same filename were submitted around the same time. Fail early rather than
// silently overwriting the existing card.
if (!isCardUpdate) {
  let fileExistsOnMaster = false
  try {
    gh(`gh api "repos/${GITHUB_REPOSITORY}/contents/${cardFile}?ref=master"`)
    fileExistsOnMaster = true
  } catch {
    // 404 — file doesn't exist on master yet, which is expected for new cards
  }
  if (fileExistsOnMaster) {
    fail(`Hi @${PR_AUTHOR}! 👋

A card file named \`cards/${filename}\` already exists in this repository. This usually means two PRs with the same filename were submitted at the same time.

If you're trying to update your existing card, please make sure your fork is up to date with master and reopen the PR. If you believe this is an error, leave a comment and a maintainer will take a look.`)
  }
}

// ── fetch card HTML from PR head (only this content comes from the PR) ─────────
console.log(`Fetching ${cardFile} at ${PR_HEAD_SHA}...`)
let html
try {
  const encoded = gh(`gh api "repos/${GITHUB_REPOSITORY}/contents/${cardFile}?ref=${PR_HEAD_SHA}" --jq '.content'`)
  html = Buffer.from(encoded.replace(/\s/g, ''), 'base64').toString('utf-8')
} catch (err) {
  fail(`Hi @${PR_AUTHOR}! 👋

We couldn't read \`${cardFile}\` from your PR. This is usually a transient issue — please close and reopen the PR to trigger a re-check, or leave a comment and a maintainer will take a look.`)
}

// ── validate card content ──────────────────────────────────────────────────────
const $ = cheerio.load(html)
const result = validateCard($, { mode: 'phase2' })

if (!result.valid) {
  const errorList = result.errors.map((e, i) => `${i + 1}. ${e}`).join('\n')
  fail(`Hi @${PR_AUTHOR}! 👋

Thanks for your card! A few things need fixing before we can merge:

${errorList}

**How to fix:** Update \`cards/${filename}\` in your branch to address each point above, then push. The bot will re-check automatically. The [README](${README}) has the full template and field descriptions if you need a reference.

Don't hesitate to ask if anything is unclear — we're happy to help! 🙌`)
}

// ── success: enable auto-merge then wait and dispatch archive ──────────────────
// Branch protection on master makes --auto always available. The PR merges once
// all required status checks pass (typically 1-3 minutes).
//
// pull_request_target:[closed] is suppressed when GITHUB_TOKEN performs the merge,
// so we cannot rely on it to trigger card-to-archive. Instead, we poll until the
// PR is merged and then dispatch workflow_dispatch — which is never suppressed.

// Guard against re-runs on already-merged/closed PRs (e.g. a late synchronize
// event arriving after the PR has already been processed).
const prState = JSON.parse(gh(`gh pr view ${PR_NUMBER} --json state`)).state
if (prState === 'MERGED') {
  console.log(`✅ PR #${PR_NUMBER} is already merged — nothing to do.`)
  process.exit(0)
}
if (prState === 'CLOSED') {
  console.log(`⚠️  PR #${PR_NUMBER} is closed — skipping merge.`)
  process.exit(0)
}

console.log(`✅ Card is valid — merging PR #${PR_NUMBER}`)
gh(`gh pr merge ${PR_NUMBER} --squash --auto`)
console.log('🎉 Auto-merge enabled — waiting for merge to complete...')

const MAX_ATTEMPTS = 40
const POLL_INTERVAL_SECONDS = 15
let merged = false

for (let attempt = 1; attempt <= MAX_ATTEMPTS; attempt++) {
  execSync(`sleep ${POLL_INTERVAL_SECONDS}`)
  const state = JSON.parse(gh(`gh pr view ${PR_NUMBER} --json state`)).state
  console.log(`Attempt ${attempt}/${MAX_ATTEMPTS} — PR state: ${state}`)
  if (state === 'MERGED') {
    merged = true
    break
  }
}

if (merged) {
  try {
    gh(`gh workflow run card-to-archive.yml --ref master -f filename=${filename}`)
    console.log(`📦 Dispatched card-to-archive for ${filename}`)
  } catch (err) {
    console.log(`⚠️  Could not dispatch card-to-archive: ${err.message.split('\n')[0]}`)
    console.log('   Trigger it manually: gh workflow run card-to-archive.yml --ref master -f filename=' + filename)
  }
} else {
  console.log(`⚠️  PR did not merge within ${(MAX_ATTEMPTS * POLL_INTERVAL_SECONDS) / 60} minutes.`)
  console.log('   Trigger archive manually: gh workflow run card-to-archive.yml --ref master -f filename=' + filename)
}
