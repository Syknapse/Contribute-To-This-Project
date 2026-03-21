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

module.exports = { welcomeComment, invalidComment, maintainerReviewComment }
