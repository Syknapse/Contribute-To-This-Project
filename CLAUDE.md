# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is an educational open-source project designed to teach first-time contributors how to use Git and GitHub. Contributors add a personal card to `index.html` following a specific template.

## Commands

```bash
npm run prettier-html    # Format index.html with Prettier
npm run archive_cards    # Archive old contributor cards from index.html to JSON files in archive/cards/
npm run clean            # Reset index.html to template structure
```

There are no test commands. CI checks Prettier formatting and HTML validation on every PR.

## Architecture

### Card Storage & Archiving

The project uses a two-tier storage system to keep `index.html` manageable:

- **`index.html`**: Contains the card template + the 10 most recent contributor cards
- **`archive/cards/archive_N.json`**: JSON files holding older cards (currently 26 files)
- **`assets/script.js`**: Dynamically imports all archive JSON files and renders archived cards in the browser alongside the live cards from `index.html`
- **`archive/archiveFilesTotal.js`**: Auto-generated file tracking the number of archive files; `script.js` imports this to know how many JSON files to fetch

When `npm run archive_cards` runs, `archive/archive_cards_script.js` (uses cheerio) extracts cards from `index.html`, keeps the template + 11 cards in place, and moves the rest into a new or existing archive JSON file.

### Card Template

Each contributor card in `index.html` follows a specific HTML structure with `class="card"`. When helping contributors add cards, preserve this structure exactly and place new cards directly after the template card (not at the end of the file).

### CI/CD

- **Prettier**: Enforces formatting on changed files in PRs. Run `npm run prettier-html` before committing changes to `index.html`.
- **HTML validation** (`html-validate`): Validates changed HTML files. Key rules: no duplicate IDs, double-quoted attributes, proper doctype, no unclosed tags.
- Both checks run via `.github/workflows/.travis.yml` (GitHub Actions despite the filename).

## Code Style

Configured in `prettier.config.js`:
- Print width: 120 characters
- Single quotes, no semicolons
- 2-space indentation
- Trailing commas (ES5), LF line endings
- Markdown files are excluded from Prettier formatting
