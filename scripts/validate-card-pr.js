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
const prFiles = JSON.parse(gh(`gh pr view ${PR_NUMBER} --json files`)).files.map(f => f.path)
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
  fail(`Hi @${PR_AUTHOR}! 👋

This PR changes more than one file. Please submit one card per PR — each contributor gets their own file.`)
}

const cardFile = prFiles[0]
const filename = path.basename(cardFile)

if (filename === 'template.html') {
  fail(`Hi @${PR_AUTHOR}! 👋

It looks like you submitted \`cards/template.html\` itself rather than a copy of it.

Please copy \`cards/template.html\` to \`cards/your-github-username.html\` (using your actual GitHub username as the filename), fill it in, and submit that file instead.`)
}

if (!/^[a-zA-Z0-9_-]+\.html$/.test(filename)) {
  fail(`Hi @${PR_AUTHOR}! 👋

The filename \`${filename}\` isn't valid. Card filenames must only contain letters, numbers, hyphens, and underscores — for example: \`your-github-username.html\`.`)
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

// ── success: merge then dispatch archive ───────────────────────────────────────
console.log(`✅ Card is valid — merging PR #${PR_NUMBER}`)
try {
  gh(`gh pr merge ${PR_NUMBER} --squash --auto`)
  console.log('🎉 Auto-merge enabled — will merge once all checks pass.')
} catch {
  // --auto requires branch protection; fall back to immediate merge
  gh(`gh pr merge ${PR_NUMBER} --squash`)
  console.log('🎉 PR merged.')
}

// Dispatch card-to-archive.yml via workflow_dispatch.
// workflow_dispatch is NOT suppressed by GITHUB_TOKEN (unlike push/PR events),
// so this fires reliably regardless of how the merge was performed.
try {
  gh(`gh workflow run card-to-archive.yml --ref master -f filename=${filename}`)
  console.log(`📦 Dispatched card-to-archive for ${filename}`)
} catch (err) {
  console.log(`⚠️  Could not dispatch card-to-archive: ${err.message.split('\n')[0]}`)
  console.log('   The pull_request_target:[closed] trigger will handle it as fallback.')
}
