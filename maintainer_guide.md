# Maintainer's Guide

This guide is for those who would like to join the project as maintainers, to help manage and maintain the project for the community. (This is not a guide for **first-time contributors**)

This tutorial is also available in [other languages](translations/translation.md)

| [Bangla](translations/maintainer_guide/maintainer_guide_bangla.md) | [German](translations/maintainer_guide/maintainer_guide_german.md) | [Italian](translations/maintainer_guide/maintainer_guide_italian.md) | [Portuguese](translations/maintainer_guide/maintainer_guide_portuguese.md) |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | -------------------------------------------------------------------- | -------------------------------------------------------------------------- |


> Translations for either this README or the Maintainer README file are very welcome!.

## Objectives

Our main objective is to give our contributors the quickest feedback possible from the point they make their pull request. This primarily means giving code reviews, and merging accepted PRs.  
Apart from that we can maintain the project making sure everything is working correctly and as helpful and useful as it can be for our contributors.

## Who is this for?

Anyone with a bit of Git and GitHub skills. You don't have to be an expert, this guide should help even beginners. This is an active project that receives regular contributions and it helps many people make their first open source contribution. Being a maintainer on this project helps make sure it continues to give our contributors a good first experience and encouraging them to contribute more.

You can commit as much or as little time as you want to this. Between us we hopefully can keep it running smoothly.

## Methodology

- Go to the project's pull request section, start with the oldest pull request that is not in 'changes requested' state.
- Open a PR and go to the files changes tab and start a code review.
- Check the PR, make sure it follows the spec in the tutorial.
- Make sure the HTML, the links, and the data are all correct. Make sure the card is positioned at the start of the file where it should be.
- Next check for any conflicts. Merge `master` into the PR branch to fix the conflicts. Conflicts usually happen when it's been a while since the previous merges and several PRs are using the same outdated version.
- If this is the case fix the conflict. Usually you will have to add the new card on top of cards that had been added since the fork was made.
- If everything else is ok, approve the PR, write a message to the contributor thanking them for the contribution (remembering they are first timers and would benefit from encouragement).
- Merge the PR into `master`.

### Request changes

- Sometimes there are problems with the PR that should be fixed by the contributor like wrong branching, broken HTML, missing info, card placed in the wrong place. Anything where the tutorial wasn't followed correctly (and not simple merge conflicts).
- Start a code review on GitHub and request changes. Try to be as descriptive as possible, comment the exact line, tell them exactly what the problem is and how to fix it, and encourage them that this is a normal part of the PR review process.
- When you are ready submit the review.
- Keep an eye on the conversation in case the contributor has follow up questions you can help with. Our objective is to get everyone past the finish line, so we try to guide them all the way there.
- Once they fix the requested changes, the PR can be merged to `master`.

Please, always test that the changes have not broken the project and that the live page still works as expected. It's always best to test the changes locally before merging and never merge anything that looks suspicious.

## Tools

If there aren't a lot of accumulated PRs all of this process can be done directly in the project's GitHub page.  
However, it is not uncommon to have a few PRs waiting and that's when there will inevitably be some merge conflicts. You can use any tools you are familiar with to see diffs, and fix conflicts.  
I recommend the use of a tool like [GitKraken](https://www.gitkraken.com/download). It is visual and it allows for an easier management of the project when there is a few PRs to go through.  
Download GitKraken, clone the project. Using a combination of your code editor and GitKraken's integrated merge conflict tool gives you full control to quickly go through PRs, fixing conflicts and merging.

The project has Prettier installed to ensure that regardless of how a contributor submits the PR, the style guide will be enforced. The project this way is always maintained with the same indentation and style.  
If you notice the HTML file looking messy run below code in the project root.

```js
npx prettier --write index.html
```

It should try to format the file and if it can't it will show you the errors. Sometimes a missing closing tag or broken HTML is merged by mistake and this is a good way to spot and fix it.

If you are ever in doubt, you can always mention me or the other maintainers in the PR itself or DM me on [Twitter](https://twitter.com/Syknapse)

## Join us

Join us to help grow this project together. Get in touch with me on [Twitter](https://twitter.com/Syknapse) and send me your GitHub user name so I can add you.
[![Discord](https://badgen.net/discord/online-members/tWkvS4ueVF?label=Join%20Our%20Discord%20Server&icon=discord)](https://discord.gg/tWkvS4ueVF 'Join our Discord server!')
