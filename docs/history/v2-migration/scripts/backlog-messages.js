'use strict'

const REPO = 'Syknapse/Contribute-To-This-Project'
const README_URL = `https://github.com/${REPO}#readme`

/**
 * Posted when a card PR is valid and about to be merged.
 */
function welcomeComment(author) {
  return `Hi @${author}! 👋

Your contributor card has been applied and is now live on the [project site](https://syknapse.github.io/${REPO.split('/')[1]}/). ✅

This PR is being closed rather than merged because \`index.html\` has had many updates since you submitted — your card was extracted from the diff and added directly to keep things clean. Your contribution is fully credited in the commit. Welcome to the project, and thank you! 🎉`
}

/**
 * Posted when a card PR fails validation.
 * @param {string} author
 * @param {string[]} errors - array returned by validateCard
 */
function invalidComment(author, errors) {
  const errorList = errors.map((e, i) => `${i + 1}. ${e}`).join('\n')

  return `Hi @${author}! 👋

Thanks for submitting your card! There are a few things to fix before we can merge:

${errorList}

**How to fix:** Open \`index.html\` in your fork, update your card to address the points above, and push the changes to the same branch. The [README](${README_URL}) has the full template and instructions if you need a reference.

Once you push a fix this PR will be reviewed again. Don't hesitate to ask if anything is unclear — we're happy to help! 🙌`
}

/**
 * Posted when a PR touches files beyond index.html and needs maintainer review.
 */
function maintainerReviewComment(author) {
  return `Hi @${author}! 👋

This PR touches files beyond \`index.html\`, so it needs a manual review from a maintainer. We've added the \`maintainer-review\` label and will take a look as soon as we can.

Thanks for your patience! 🙏`
}

/**
 * Posted by check-fixed-prs.js when a previously-flagged PR turns out to be
 * valid on re-check (contributor fixed the issues).
 */
function fixedComment(author) {
  return `Hi @${author}! 👋

Looks like you fixed the issues — your card is valid. ✅

It has been applied and is now live on the [project site](https://syknapse.github.io/${REPO.split('/')[1]}/). This PR is being closed rather than merged because \`index.html\` has had many updates since you submitted, but your contribution is fully credited in the commit. Thank you for sticking with it! 🎉`
}

/**
 * Posted by notify-v1-prs.js after the v2 migration, on PRs that still
 * target index.html and haven't been resolved.
 */
function v1MigrationComment(author) {
  return `Hi @${author}! 👋

We've recently updated how contributor cards are added to this project, and this PR is now out of date.

**The new way is simpler:**
1. Copy \`cards/template.html\` to \`cards/your-github-username.html\`
2. Fill in your details
3. Open a new PR with just that file — a bot will validate and auto-merge it for you, usually within minutes

See the [README](${README_URL}) for the full step-by-step tutorial.

We're closing this PR, but please don't be discouraged — re-submitting with the new flow takes just a few minutes and you'll be merged automatically. We'd love to have your card on the site! 🙌`
}

module.exports = { welcomeComment, invalidComment, maintainerReviewComment, fixedComment, v1MigrationComment }
