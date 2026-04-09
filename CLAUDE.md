# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Philosophy

Three principles govern every decision in this project — for AI assistants, human maintainers, and anyone proposing changes:

1. **Contributors first.** This project exists for first-time contributors. Every decision should minimise friction, provide clear feedback, and keep the experience as close to real-world Git/GitHub practice as possible.

2. **Minimum maintainability.** The goal is zero required maintainer intervention for normal card submissions. Automation should handle the full lifecycle. Maintainer time is precious — don't create processes that require regular manual attention.

3. **Simplicity.** No over-engineering. Prefer the simpler solution. Aggressively question whether added complexity is justified. Three lines of clear code beats a clever abstraction. When in doubt, do less.

These three principles exist in tension with each other (automation = complexity; security = friction). Always resolve that tension by asking: _what is the minimum intervention that keeps the contributor experience smooth and the maintainer burden low?_

## Project Overview

An educational open-source project that teaches first-time contributors how to use Git and GitHub. Contributors add a personal card by submitting a single HTML file via pull request. A bot validates and auto-merges valid submissions.

## Commands

```bash
npm run prettier-html    # Format index.html with Prettier
npx html-validate index.html cards/template.html    # Validate HTML locally
```

There are no test commands. CI checks Prettier formatting and HTML validation on every PR.

## Architecture

### Contributor card flow (v2)

1. Contributor copies `cards/template.html` to `cards/<github-username>.html`, fills it in, opens a PR
2. `validate-card-pr.yml` triggers on any PR touching `cards/*.html` or `index.html`
3. `scripts/validate-card-pr.js` fetches the card from the PR head (never checks out PR code), runs `scripts/validate-card.js`, posts a comment, then either auto-merges or exits 1
4. After merge, `card-to-archive.yml` triggers `scripts/card-to-archive.js` which parses the card, appends it to the latest `archive/json/archive_N.json` (max 50 entries per file, creates a new file if full), updates `archive/archiveFilesTotal.js`, then deletes `cards/<username>.html`

### Card structure

Each card is a standalone HTML fragment with this shape:

```html
<div class="card">
  <p class="name">...</p>
  <p class="contact"><!-- <i> icon + <a> link pairs --></p>
  <p class="about">...</p>
  <div class="resources">
    <ul>
      <!-- <li><a> items -->
    </ul>
  </div>
</div>
```

`scripts/validate-card.js` enforces this in phase 2 mode: name non-empty/non-placeholder, about non-empty, at least one contact link with a real href, resources (optional) max 5 with real hrefs.

### Archive & frontend rendering

- `archive/manifest.json` — auto-generated; `{ files: [...], totalArchivedCards: N }`
- `archive/json/archive_N.json` — arrays of card objects `{ name, contacts, about, resources }`
- `assets/main.js` — fetches manifest, lazy-loads archive files in batches of 3 via `IntersectionObserver`, shows contribution count immediately from manifest; loads all remaining files on search focus; also handles night mode, search highlighting, and scroll-to-top
- `index.html` — static shell; `#contributions` grid is empty on load, populated entirely by `main.js`

### Scripts directory

Node.js automation only — not browser code:

- `scripts/validate-card-pr.js` — called by the GitHub Actions workflow; orchestrates validation, commenting, merging, and archive dispatch
- `scripts/validate-card.js` — pure validation logic, exportable; used by validate-card-pr.js
- `scripts/card-to-archive.js` — converts `cards/<filename>.html` to JSON and appends to the archive

### CI/CD workflows

- `ci.yml` — runs on all PRs; checks Prettier formatting on changed files and HTML validation on changed `.html` files
- `validate-card-pr.yml` — `pull_request_target` trigger (runs base-branch code only, never PR code); validates and auto-merges card PRs
- `card-to-archive.yml` — triggered via `workflow_dispatch` after merge (primary) or `pull_request_target: closed` (fallback); runs the archive script and commits the result
- `stale.yml` — closes stale issues/PRs on a schedule

### Code style

`prettier.config.js`: print width 120, single quotes, no semicolons, 2-space indent, trailing commas (ES5), LF line endings. Markdown files are excluded from Prettier formatting (`.prettierignore`).

`html-validate` rules (`.htmlvalidate.json`): self-closing void elements, double-quoted attributes, doctype required. A separate config in `cards/.htmlvalidate.json` relaxes rules for card fragments (no doctype required).
