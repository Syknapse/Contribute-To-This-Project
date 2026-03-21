# v2 Implementation Roadmap — Contribute-To-This-Project

> Companion to `_v2/spec.md`. This document is the concrete implementation guide.
> Three phases: backlog clearance → new architecture → smaller fixes.
> No code is written here; every section references exact files and line numbers where relevant.

---

## Table of Contents

1. [Phase 1 — Backlog Processing Script](#phase-1--backlog-processing-script)
2. [Phase 2 — v2 Architecture](#phase-2--v2-architecture)
3. [Phase 3 — Smaller Issues](#phase-3--smaller-issues)
4. [Critical Files Reference](#critical-files-reference)

---

## Phase 1 — Backlog Processing Script

### Overview

~223 open PRs exist, ~85% of which are standard card PRs that edit `index.html`. The goal is to merge every salvageable card PR with zero maintainer time.

**Execution model:** Local Node.js script run by the repo owner using the `gh` CLI. One-time operation. Local is preferable to a GitHub Action because it can be paused mid-run, inspected after each batch, retried selectively, and does not require a workflow dispatch setup.

**Prerequisites:**

- `gh` CLI authenticated (`gh auth login`)
- `npm install` already run (cheerio is available)
- Run from repo root

---

### Files to Create

```text
_v2/scripts/
  process-backlog.js      ← main script
  validate-card.js        ← validation module (reused in Phase 2)
  backlog-messages.js     ← comment templates
```

---

### `process-backlog.js` — Main Script Logic

#### Step 1: Fetch open PRs

```js
const prs = JSON.parse(
  execSync('gh pr list --state open --limit 300 --json number,title,author,files').toString()
)
```

Fields used: `number`, `title`, `author.login`, `files[].path`.

#### Step 2: Categorize each PR

| Category | Condition |
| --- | --- |
| `card-pr` | Only `index.html` in changed files |
| `non-card-pr` | Changed files include things beyond `index.html` (translations, feature files, etc.) |
| `skip` | Already labeled `maintainer-review`; bot already commented; draft PR |

#### Step 3: Extract card from diff (card PRs only)

```js
const diff = execSync(`gh pr diff ${number}`).toString()
```

From the `+` lines in the diff, extract the `<div class="card">...</div>` block using cheerio. Port `extractContactDetails` and `extractResourceDetails` from `archive/archive_cards_script.js` (lines 20–68). Load the extracted HTML fragment with `cheerio.load(fragment)`.

#### Step 4: Validate via `validate-card.js`

See validation module spec below. Returns `{ valid: boolean, errors: string[] }`.

#### Step 5: Dispatch

| Result | Action |
| --- | --- |
| Valid card | Post welcome comment → `gh pr merge --squash --number <N>` |
| Invalid card | Post specific failure comment listing each error + how to fix → `gh pr edit --add-label "changes-requested"` |
| Non-card PR | `gh pr edit --add-label "maintainer-review"` → post maintainer-review comment |

#### Step 6: Prevent `index.html` bloat

Auto-run after every 10 merges (not configurable — this is safety behaviour, not optional):

```js
execSync('npm run archive_cards')
```

`archive_cards` is idempotent — if `index.html` has ≤11 cards it exits immediately, so running it frequently has no downside. Keeps `index.html` at ≤11 cards (template + 10). Mirrors existing logic in `archive/archive_cards_script.js:107`.

**Recommended run pattern:** `node process-backlog.js --batch 30`. Review log output after each batch, then re-run. The script must track processed PR numbers (write to a local `_v2/processed.json` file) so re-running never double-processes a PR.

#### CLI flags

| Flag | Behavior |
| --- | --- |
| `--dry-run` | Print what would happen; make no API calls |
| `--batch N` | Process only the first N card PRs, then stop (default: 30) |

#### Rate limiting

Insert a 500ms delay between each `gh` API call:

```js
await new Promise(resolve => setTimeout(resolve, 500))
```

---

### `validate-card.js` — Validation Module

**Design principle — Phase 1 is lenient by intent.**

These PRs were submitted months ago by first-time contributors who are unlikely to return and fix minor mistakes. Rejecting a card because of a missing tooltip attribute or an unfilled `.about` field punishes people for small oversights on a submission they may not even remember making. The goal is inclusion: merge everything that represents a genuine, identifiable contribution. Reserve stricter rules for Phase 2, where automation can guide contributors in real time at the moment they submit.

**Two modes** (set via the `mode` option):

| Mode | Used in | Philosophy |
| --- | --- | --- |
| `'phase1'` (default) | Backlog script | Lenient — merge if the card has a real name |
| `'phase2'` | `validate-card-pr.yml` | Strict — full field and resource validation |

**Phase 1 checks (hard blocks only):**

1. Exactly one `.card` div in the diff (zero = no card added; >1 = whole file pasted)
2. `.name` present, non-empty, not the placeholder `"Your name"`

Everything else (`.about`, `.contact`, resources, title attributes) is ignored in Phase 1. If the contributor has a name and a card structure, they get merged.

**Phase 2 checks (additionally):**

1. `.about` present, non-empty, not the placeholder text
2. `.contact` present with at least one link; no `href` containing `"your_user_handle"`
3. `.resources` optional (0–5 items); each `<li>` present must have `<a>` with a real `href` (not `"#"`)

**Output:**

```js
{ valid: true }
// or
{ valid: false, errors: ['Missing .name element'] }
```

**Reuse in Phase 2:** The same module is used by `validate-card-pr.yml` with `mode: 'phase2'`, applied to `cards/[username].html` instead of a diff fragment.

---

### `backlog-messages.js` — Comment Templates

Export named string templates (use template literals with parameters):

| Export | When used |
| --- | --- |
| `welcomeComment(author)` | Valid card, about to be merged |
| `invalidComment(author, errors)` | Invalid card; `errors` is the array from `validate-card.js` |
| `maintainerReviewComment(author)` | Non-card PR |
| `alreadyProcessedComment()` | PR was already handled by a previous run |

Comments must be friendly and actionable. Invalid comments must list each specific error and link to the relevant README section for the fix.

---

## Phase 2 — v2 Architecture

### New Contribution Flow

```text
contributor creates cards/[username].html
      ↓
opens PR
      ↓
validate-card-pr.yml runs (validates + auto-merges)
      ↓
push to master triggers update-manifest.yml
      ↓
manifest.json updated + committed [skip ci]
      ↓
script.js fetches manifest at runtime → card appears live
```

---

### New Files

| File | Purpose |
| --- | --- |
| `cards/template.html` | Reference card template for contributors; never rendered |
| `cards/manifest.json` | Auto-maintained list of all card filenames; written only by the Action |
| `.github/workflows/validate-card-pr.yml` | Validates card PRs + auto-merges valid ones |
| `.github/workflows/update-manifest.yml` | Rebuilds manifest after a card is merged to master |
| `docs/tutorial_v1.md` | Archived v1 tutorial (moved from README) |
| `_v2/scripts/update-manifest.js` | Node script called by `update-manifest.yml` |

---

### Modified Files

| File | Change |
| --- | --- |
| `assets/script.js` | Add manifest fetch block after line 72 (after existing archive block) |
| `README.md` | Full rewrite as v2 tutorial |
| `translations/README.*.md` | Add notice at top pointing to main README for v2 flow |
| `.github/workflows/.travis.yml` | Rename to `ci.yml`; update Prettier version; extend `files` glob to cover `cards/*.html` |

---

### `cards/manifest.json` — Structure

```json
{
  "version": 2,
  "cards": ["octocat.html", "syknapse.html"]
}
```

- Append-only in normal operation
- Only `update-manifest.yml` writes to it — contributors never touch it
- `update-manifest.js` does a full directory scan (`fs.readdirSync('cards/')`) and rebuilds the array each run, so it is self-healing if files are deleted

---

### `assets/script.js` — Manifest Fetch Block

Insert **after line 72** (after the closing `})` of the `numberOfFilesArray.forEach` block). The existing archive loading code (lines 1–72) is untouched.

```js
// Load v2 cards from manifest
fetch('./cards/manifest.json')
  .then(response => response.json())
  .then(manifest => {
    const grid = document.getElementById('contributions')
    return Promise.all(
      manifest.cards.map(filename =>
        fetch(`./cards/${filename}`)
          .then(r => r.text())
          .then(html => {
            grid.insertAdjacentHTML('afterbegin', html)
            if (localStorage.getItem('theme') === 'night') {
              const newCard = grid.querySelector('.card:not(.night)')
              if (newCard) newCard.classList.add('night')
            }
          })
          .catch(() => {}) // silently skip missing files
      )
    )
  })
  .catch(error => console.error('Error loading cards manifest:', error))
  .finally(() => countUp())
```

`insertAdjacentHTML('afterbegin', ...)` inserts newest cards at the top. `countUp()` is called in `finally()` — same pattern as the archive block at line 71. Missing card files are silently skipped so a bad filename in the manifest never breaks the page.

---

### `validate-card-pr.yml` — Key Design

**Trigger:**

```yaml
on:
  pull_request:
    branches: [master]
    paths:
      - 'cards/*.html'
```

**Pre-validation checks (fail fast, post specific comment):**

1. Any file outside `cards/` changed → reject
2. More than one card file changed → reject
3. Filename does not match `[a-zA-Z0-9_-]+\.html` → reject
4. Filename is `template.html` → reject

**Card validation:**

1. Read `cards/[username].html`
2. Wrap in minimal HTML document:

   ```html
   <!DOCTYPE html><html><body>{{ card content }}</body></html>
   ```

3. Run `html-validate` with `htmlvalidate.json` config (extends `html-validate:recommended`; key rules: `no-duplicate-id: error`, `attr-quotes: double`, `require-closing-tags: error`). The `doctype-html: error` rule applies to the wrapper, not the fragment.
4. Run `validate-card.js` checks (same module from Phase 1) against the card file

**On success:**

```bash
gh pr review --approve
gh pr merge --squash
```

Uses `GITHUB_TOKEN` — no additional secrets required.

**On failure:**

- Post comment with specific errors and fix instructions
- `exit 1` to fail the check

---

### `update-manifest.yml` — Key Design

**Trigger:**

```yaml
on:
  push:
    branches: [master]
    paths:
      - 'cards/*.html'
```

**Steps:**

1. Checkout with `fetch-depth: 0`
2. Set up Node.js 20
3. Run `node _v2/scripts/update-manifest.js`
4. Commit `cards/manifest.json` with message `chore: update cards manifest [skip ci]`

The `[skip ci]` prevents the push from re-triggering CI and creating a loop.

---

### Transition Sequence (order matters)

1. Phase 1 completes — backlog is cleared
2. Create `cards/` directory, `cards/template.html`, `cards/manifest.json` (empty `{ "version": 2, "cards": [] }`)
3. Deploy `validate-card-pr.yml` and `update-manifest.yml`
4. Update `assets/script.js` (add manifest fetch block after line 72)
5. Run `npm run archive_cards` repeatedly until `index.html` has only the template card (1 card remaining)
6. Rewrite `README.md` as v2 tutorial; move old tutorial content to `docs/tutorial_v1.md`
7. Add redirect notice to `translations/README.*.md` files
8. Add third trigger to `validate-card-pr.yml`: if `index.html` is in the PR's changed files, post a friendly comment explaining the new flow and close the PR without merging
9. Push everything to master; verify live page loads archive cards + new manifest cards

---

## Phase 3 — Smaller Issues

Ordered by priority. None of these block Phase 1 or Phase 2.

---

### 1. `CONTRIBUTING.md` (High priority — missing entirely; refs issue #4455)

Create at repo root. Target: under 300 lines.

**Sections:**

- Welcome (tone: encouraging, non-intimidating)
- How to add your card — link to README v2 tutorial
- What makes a valid PR — the exact validation rules in plain English (mirrors `validate-card.js` checks)
- What happens after you submit — "the bot reviews within minutes; if valid, it auto-merges"
- My PR was closed — "read the bot's comment carefully; push a fix to the same branch"
- Non-card contributions — open an issue first to discuss; PRs without a linked issue may be closed
- Code of conduct — link to standard GitHub CoC or add inline

---

### 2. Stale Bot Timing (High priority)

**Current values** (`.github/workflows/stale.yml`):

| Job | `days-before-stale` | `days-before-close` |
| --- | --- | --- |
| `intentions-not-clear` | 1 | 2 |
| `changes-requested` | 1 | 4 |

**Target values** (under v2, most card PRs auto-merge; stale only applies to failed/non-card PRs):

| Job | `days-before-stale` | `days-before-close` |
| --- | --- | --- |
| `intentions-not-clear` | 14 | 14 |
| `changes-requested` | 21 | 21 |

**Also update stale messages** to be less terse — mention what the contributor should do (push a fix, leave a comment explaining intent) rather than just warning of closure.

---

### 3. Prettier 3 Upgrade (Medium priority)

**Current:** pinned to `^1.18.2` in `package.json`.

**Steps:**

1. `npm install --save-dev prettier@^3.x`
2. Review `prettier.config.js` — `arrowParens: 'always'` is now the v3 default (can be removed or left explicit)
3. Run `npm run prettier-html` to reformat `index.html`
4. After `cards/` exists, ensure `prettier.config.js` covers `cards/*.html` (same options)
5. Update `.github/workflows/.travis.yml` (or `ci.yml` after rename) — `creyD/prettier_action@v4.3` should be updated; verify it supports Prettier 3

---

### 4. Rename `.travis.yml` → `ci.yml` (Low priority)

**Change:** Rename `.github/workflows/.travis.yml` to `.github/workflows/ci.yml`.

**Also update:**

- Any README or translation files that reference `.travis.yml` by name
- The workflow `name:` field is already `Continuous Integration` — no change needed there

**Do this as part of the CI update in Phase 2** (when extending the workflow to cover `cards/*.html`) to bundle the rename with functional changes.

---

### 5. Scroll Debounce (Low priority — TODO already in code)

**Location:** `assets/script.js:218–222`

**Current code:**

```js
window.onscroll = function() {
  // TODO this is very excessive, it fires all the time when a user is scrolling
  // We need to debounce or find a more economic way to trigger button show
  scrollFunction()
}
```

**Fix:** Replace with a debounced `addEventListener`:

```js
let scrollDebounceId = null
window.addEventListener('scroll', () => {
  if (scrollDebounceId) clearTimeout(scrollDebounceId)
  scrollDebounceId = setTimeout(scrollFunction, 100)
})
```

100ms debounce is sufficient for a show/hide toggle. `window.onscroll` is replaced entirely — do not keep both.

---

### 6. Link Validation (Medium priority — refs issue #4421)

Add a `lychee` job to `ci.yml` (after the rename from `.travis.yml`):

```yaml
link-check:
  runs-on: ubuntu-latest
  steps:
    - uses: actions/checkout@v4
    - name: Get changed card files
      id: changed-files
      uses: tj-actions/changed-files@v46
      with:
        files: 'cards/*.html'
    - name: Check links
      if: steps.changed-files.outputs.any_changed == 'true'
      uses: lycheeverse/lychee-action@v2
      with:
        args: ${{ steps.changed-files.outputs.all_changed_files }}
```

Run only on changed `cards/*.html` files (not `index.html` — too many existing links to audit at once). Fail PR if any link returns a non-2xx/3xx response.

---

### 7. Font Awesome Update (Medium priority — refs issue #4117)

**Change:** Find the Font Awesome CDN `<link>` in `index.html` and update to the current v6.x URL from the official CDN.

Check the current URL in `index.html` and replace with the latest v6.x kit or CDN link from fontawesome.com. This is a one-line change.

---

## Critical Files Reference

These files must be read in full before implementing each phase.

| File | Why | Relevant to |
| --- | --- | --- |
| `assets/script.js:1–72` | Archive loading pattern — template for manifest fetch block | Phase 2 |
| `assets/script.js:218–222` | Scroll debounce TODO | Phase 3 item 5 |
| `archive/archive_cards_script.js:20–68` | `extractContactDetails` + `extractResourceDetails` to port | Phase 1 |
| `archive/archive_cards_script.js:107` | `minimumCardCount = 11` logic | Phase 1 |
| `.github/workflows/.travis.yml` | Full CI workflow before rename/update | Phase 2, Phase 3 item 4 |
| `.github/workflows/stale.yml` | Current stale values before changing | Phase 3 item 2 |
| `htmlvalidate.json` | Rules to extend for fragment-mode card validation | Phase 1, Phase 2 |
| `package.json` | Current Prettier version (`^1.18.2`) | Phase 3 item 3 |
| `prettier.config.js` | Current Prettier config before v3 update | Phase 3 item 3 |
