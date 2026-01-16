# Maintainer's Guide

This guide is for people who would like to join the project as maintainers and help manage and maintain it for the community.  
(This is **not** a guide for first-time contributors.)

## Translations

This tutorial is also available in [other languages](translations/README.md).

| [English](maintainer_guide.md) | [Bangla](translations/maintainer_guide/maintainer_guide.ben.md) | [Chinese (Traditional)](/translations/maintainer_guide/maintainer_guide.zho-tc.md) | [French (française)](translations/maintainer_guide/maintainer_guide.fra.md) | [German](translations/maintainer_guide/maintainer_guide.ger.md) |
| :---: | :---: | :---: | :---: | :---: |
| [Hindi](translations/maintainer_guide/maintainer_guide.hin.md) | [Indonesian](translations/maintainer_guide/maintainer_guide.ind.md) | [Italian](translations/maintainer_guide/maintainer_guide.ita.md) | [Japanese](translations/maintainer_guide/maintainer_guide.jpn.md) | [Korean](translations/maintainer_guide/maintainer_guide.kor.md) |
| [Portuguese](translations/maintainer_guide/maintainer_guide.por.md) | [Russian](translations/maintainer_guide/maintainer_guide.rus.md) | [Ukrainian](/translations/maintainer_guide/maintainer_guide.ukr.md) |

> Translations for project documentation are welcome.  
> Please read the [`Translation Guide`](translations/README.md) to contribute.

---

## Objectives

Our main objective is to provide contributors with quick and helpful feedback from the moment they submit a pull request. This primarily includes reviewing code and merging accepted pull requests.

In addition, maintainers ensure that the project continues to function correctly and remains as helpful and useful as possible for contributors.

## Who is this for?

Anyone with basic knowledge of Git and GitHub. You do not need to be an expert—this guide is designed to help even beginners.

This is an active project that receives regular contributions and helps many people make their first open-source contribution. Being a maintainer helps ensure contributors have a positive first experience and encourages them to continue contributing.

You can commit as much or as little time as you like. Together, we can keep the project running smoothly.

## Methodology

- Go to the project’s **Pull Requests** section and start with the oldest pull request that is not in the **changes requested** state.
- Open the pull request, go to the **Files changed** tab, and begin the code review.
- Review the PR and ensure it follows the specifications mentioned in the tutorial.
- Verify that the HTML, links, and data are correct. Ensure the card is positioned at the beginning of the file where required.
- Check for merge conflicts. If needed, merge the `master` branch into the PR branch to resolve them. Conflicts usually occur when the fork is outdated and multiple PRs modify similar sections.
- Resolve conflicts by adding the new card above cards that were added after the fork.
- If everything looks good, approve the PR and leave a message thanking the contributor for their work. Remember that many contributors are first-timers and benefit from encouragement.
- Merge the PR into `master`.

## Request changes

- Sometimes, there are issues in a pull request that should be fixed by the contributor, such as incorrect branching, broken HTML, missing information, or the card being placed in the wrong location. These cases occur when the tutorial was not followed correctly and are not simple merge conflicts.
- Start a code review on GitHub and request changes. Be as descriptive as possible—comment on the exact line, clearly explain what the problem is, how it can be fixed, and reassure the contributor that this is a normal part of the PR review process.
- Once you are ready, submit the review.
- Keep an eye on the discussion in case the contributor has follow-up questions you can help with. Our objective is to guide everyone to completion and support contributors throughout the process.
- After the requested changes are made, the pull request can be merged into `master`.

Always test that the changes have not broken the project and that the live page still works as expected. It is best practice to test changes locally before merging and to never merge anything that looks suspicious.

## Tools

If there are only a few pull requests, the entire review process can be handled directly on the project’s GitHub page.  
However, it is common to have multiple pending PRs, which can lead to merge conflicts. You can use any tools you are comfortable with to review diffs and resolve conflicts.

A recommended tool is [GitKraken](https://www.gitkraken.com/download). It provides a visual interface and makes project management easier when handling multiple pull requests.  
Download GitKraken, clone the project, and use it alongside your code editor. The integrated merge conflict tools give you full control to efficiently review PRs, resolve conflicts, and merge changes.

The project uses Prettier to ensure consistent formatting regardless of how contributors submit their PRs. This keeps the codebase consistent in terms of indentation and style.  
If the HTML file looks unformatted, run the following command in the project root:

```js
npx prettier --write index.html

---

## ✅ What to do now (final steps)
- Paste this into the file
- **Commit message**:  
  `Improve clarity, grammar, and consistency in Maintainer Guide`
- **PR description**:
