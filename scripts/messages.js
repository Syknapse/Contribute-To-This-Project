'use strict'

// All bot comment messages in one place.
// No logic here — just functions that return strings.
// Update wording here without touching validate-card-pr.js.

const SITE_URL = 'https://syknapse.github.io/Contribute-To-This-Project'

function successMerged(author) {
  return `Hi @${author}! 🎉

Thank you so much for your contribution!

Your card has been merged and will be live at [Contribute To This Project](${SITE_URL}) shortly.

Welcome to the project — you've just made your mark in open source! Feel free to share it, star the repo, and help other first-timers find their way here. 🌟`
}

function validationFailed(author, filename, errors, readmeUrl) {
  const errorList = errors.map((e, i) => `${i + 1}. ${e}`).join('\n')
  return `Hi @${author}! 👋

Thanks for your card! A few things need fixing before we can merge:

${errorList}

**How to fix:** Update \`cards/${filename}\` in your branch to address each point above, then push. The bot will re-check automatically. The [README](${readmeUrl}) has the full template and field descriptions if you need a reference.

Don't hesitate to ask if anything is unclear — we're happy to help! 🙌`
}

function wrongFile(author, nonCardFiles) {
  const fileList = nonCardFiles.map(f => `- \`${f}\``).join('\n')
  return `Hi @${author}! 👋

This PR changes files outside the \`cards/\` directory:

${fileList}

Please submit a PR that only adds your card at \`cards/your-github-username.html\`. Any other changes need a separate PR with a linked issue first.`
}

function tooManyFiles(author) {
  return `Hi @${author}! 👋

This PR changes more than one file. Please submit one card per PR — each contributor gets their own file.`
}

function submitTemplate(author) {
  return `Hi @${author}! 👋

It looks like you submitted \`cards/template.html\` itself rather than a copy of it.

Please copy \`cards/template.html\` to \`cards/your-github-username.html\` (using your actual GitHub username as the filename), fill it in, and submit that file instead.`
}

function invalidFilename(author, filename) {
  return `Hi @${author}! 👋

The filename \`${filename}\` isn't valid. Card filenames must only contain letters, numbers, hyphens, and underscores — for example: \`your-github-username.html\`.`
}

function duplicateFilename(author, filename) {
  return `Hi @${author}! 👋

A card file named \`cards/${filename}\` already exists in this repository. This usually means two PRs with the same filename were submitted at the same time.

If you're trying to update your existing card, please make sure your fork is up to date with master and reopen the PR. If you believe this is an error, leave a comment and a maintainer will take a look.`
}

function staleArchivedFiles(author, archivedFiles) {
  const count = archivedFiles.length
  const staleList = archivedFiles.map(f => `- \`${f}\``).join('\n')
  return `Hi @${author}! 👋

Your PR contains ${count === 1 ? 'a card' : 'cards'} that ${count === 1 ? 'was' : 'were'} recently archived from this repository:

${staleList}

This happens when you fork the repo just as another contributor's card is being archived — the file exists in your fork but has since been removed from master. The fix is simple: update your branch from upstream master to drop the stale ${count === 1 ? 'file' : 'files'}:

\`\`\`bash
git fetch upstream
git rebase upstream/master
\`\`\`

Or if you're using GitHub Desktop, sync your fork with the upstream. Then push again and the bot will re-check automatically.`
}

function fetchFailed(author) {
  return `Hi @${author}! 👋

We couldn't read your card file from this PR. This is usually a transient issue — please close and reopen the PR to trigger a re-check, or leave a comment and a maintainer will take a look.`
}

module.exports = {
  successMerged,
  validationFailed,
  wrongFile,
  tooManyFiles,
  submitTemplate,
  invalidFilename,
  duplicateFilename,
  staleArchivedFiles,
  fetchFailed,
}
