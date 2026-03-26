# Contributing to Contribute To This Project

First of all — welcome, and thank you for being here. This project exists specifically to help people make their first open source contribution, so whatever your experience level, you are in the right place.

This guide covers everything you need to know about contributing. If you just want to get started, the [README](README.md) has the full step-by-step tutorial.

---

## How to add your card

The full tutorial is in the [README](README.md). Here's the short version:

1. Fork this repository and clone it to your machine.
2. Create a new branch.
3. Copy `cards/template.html` to `cards/your-github-username.html`.
4. Fill in your card with your details.
5. Commit, push, and open a pull request.

A bot will automatically check your PR. If everything looks good it will be merged for you — no waiting around.

---

## What makes a valid PR

The bot checks for these things when you submit. Reading this list before you open your PR will save you a round-trip.

**The file:**

- Your PR must only change one file: `cards/your-github-username.html`
- The filename must be your actual GitHub username — only letters, numbers, hyphens, and underscores, ending in `.html`
- Don't submit `cards/template.html` itself — make a copy of it first
- Don't change `index.html` or any other file. If you do, the bot will explain the new flow and close the PR

**The card content:**

- **Name** — must be filled in, not left as `"Your name"`
- **About** — must be filled in, not left as the placeholder text
- **Contact** — at least one link, with a real URL (not `your_user_handle`)
- **Resources** — optional, but if you include them each one needs a real link, not `#`. Maximum 5

That is genuinely it. As long as those things are in order, the bot will merge your card automatically.

---

## What happens after you submit

Once you open a pull request, a bot runs a validation check on your card. This usually takes less than a minute.

- **If your card is valid** — the bot merges the PR automatically and you'll get a GitHub notification. Your card will be live on the [project page](https://syknapse.github.io/Contribute-To-This-Project/) shortly after.
- **If something needs fixing** — the bot will leave a comment on your PR listing exactly what the issue is and how to fix it.

---

## My PR was flagged — what do I do?

Read the bot's comment carefully. It will tell you specifically what needs fixing.

Once you know what to change:

1. Go back to your `cards/your-github-username.html` file in your branch
2. Make the fix
3. Commit and push to the same branch

That's all. The PR will update automatically. The bot will re-run the check automatically when you push. You don't need to open a new PR.

---

## Contributing something other than a card

Non-card contributions are very welcome. This includes:

- **Translations** — translating the README or tutorial into another language
- **Bug fixes** — something broken, a layout issue, a validation edge case
- **Documentation** — improving clarity, fixing outdated instructions, adding examples
- **Accessibility** — better screen reader support, keyboard navigation, contrast
- **Performance** — loading speed, rendering improvements
- **New features** — must have clear scope and fit the project's goals

### Open an issue first

Before writing any code, [open an issue](https://github.com/Syknapse/Contribute-To-This-Project/issues/new) describing what you want to change and why. A good issue includes:

- What the current behaviour is
- What you propose to change
- Why it improves the project

This signals your intent so no one else starts the same work in parallel. **You don't need to wait for a response** — once the issue is open, go ahead and start. If there's a concern with the approach, it will be raised in the PR review. The exception is small things like typos or broken links, which are fine to fix and submit directly without an issue.

### Branch and PR conventions

- Branch names: `fix/short-description`, `docs/short-description`, `translation/language-name`
- Fill in the PR template — use the "Making another type of change?" section
- Link your issue in the PR body: `Resolves #123`

### What to expect from review

PRs are reviewed by maintainers as time allows. If changes are requested, the bot will mark the PR and leave a comment. If a PR receives no activity for 30 days it may be closed by the stale bot — you can always reopen it.

### What is out of scope

- Changes to the core card template structure (`cards/template.html`)
- Changes that affect the auto-merge or archive pipeline without prior maintainer discussion
- Large refactors or new dependencies without a linked issue and prior agreement

---

## Code of conduct

This project follows the [Contributor Covenant Code of Conduct](https://www.contributor-covenant.org/version/2/1/code_of_conduct/). By participating, you are expected to uphold it. In short: be kind, be patient, and remember that many people here are doing this for the very first time.

If you have a problem or want to connect with the community, join our [Discord server](https://discord.gg/tWkvS4ueVF).
