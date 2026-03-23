# v2 Implementation Roadmap — Contribute-To-This-Project

> Companion to `_v2/spec.md`. This document is the concrete implementation guide.
> Three phases: backlog clearance → new architecture → smaller fixes.
> No code is written here; every section references exact files and line numbers where relevant.

---

## Table of Contents

1. [Phase 1 — Backlog Processing Script](#phase-1--backlog-processing-script--complete)
2. [Phase 2 — v2 Architecture (Unified Archive)](#phase-2--v2-architecture-unified-archive)
3. [Phase 3 — Smaller Issues](#phase-3--smaller-issues)
4. [Critical Files Reference](#critical-files-reference)

---

## Phase 1 — Backlog Processing Script ✅ COMPLETE

### What was done

~223 open PRs existed, ~85% of which were standard card PRs editing `index.html`. All were processed.

**Approach taken (final):** `gh pr merge` was abandoned — every card PR had merge conflicts against the stale `index.html`. Instead: extract card HTML from diff `+` lines using cheerio, inject directly into master's `index.html`, commit `[skip ci]`, push, then close the PR with an explanation comment (shows as "Closed" on GitHub).

**Validation used (Phase 1 — lenient by design):** Only checks for exactly 1 `.card` div in the diff and a non-placeholder `.name`. Everything else (`.about`, contacts, resources) is ignored. The goal was inclusion: merge anything that represents a genuine, identifiable contribution.

### Outcome

| Category | Count |
| --- | --- |
| Cards injected + PR closed | 173 |
| `changes-requested` (invalid cards) | 19 |
| `maintainer-review` (non-card PRs) | 30 |
| Still open — need owner review | 10 (9 `maintainer-review`, 1 `changes-requested`) |

State fully tracked in `_v2/scripts/processed.json` on master.

### Files (all in `_v2/scripts/`)

| File | Purpose |
| --- | --- |
| `process-backlog.js` | Main script (batch inject + commit + close) |
| `validate-card.js` | phase1/phase2 mode validator — **reused in Phase 2** |
| `backlog-messages.js` | Comment templates — **reused in Phase 2** |
| `processed.json` | Final state; idempotency record |

---

## Phase 2 — v2 Architecture (Unified Archive)

### Design rationale

The original plan stored new cards as permanent `cards/[username].html` files plus a `manifest.json`, while old cards lived in `archive/cards/archive_N.json`. This creates two parallel storage systems and a `cards/` directory that grows without bound.

**Revised approach:** `cards/[username].html` is **ephemeral** — it exists only during the PR lifecycle. A post-merge Action immediately converts it to the existing JSON archive format and deletes the file. Result: one unified storage system, no directory bloat, `script.js` unchanged.

### New contribution flow

```text
contributor copies cards/template.html → cards/[username].html
      ↓
opens PR
      ↓
validate-card-pr.yml: validates + auto-merges on success
      ↓
push to master triggers card-to-archive.yml
      ↓
card-to-archive.js: converts HTML → JSON, appends to archive_N.json, deletes cards/[username].html
      ↓
commits [skip ci] — cards/ is clean again
```

### Why `cards/[username].html` instead of `index.html`

- Each contributor owns their own file → **zero merge conflicts** → PRs show green "Merged" (not "Closed")
- Contributor never touches the archive system — it is hidden entirely
- Accidentally editing someone else's card is impossible

---

### New Files

| File | Purpose |
| --- | --- |
| `cards/template.html` | Standalone card template for contributors to copy; never archived |
| `.github/workflows/validate-card-pr.yml` | Validate + auto-merge on card PRs |
| `.github/workflows/card-to-archive.yml` | Convert merged card HTML to JSON archive, delete file |
| `_v2/scripts/card-to-archive.js` | Node script run by `card-to-archive.yml` |
| `docs/tutorial_v1.md` | Archived v1 README tutorial |

### Modified Files

| File | Change |
| --- | --- |
| `README.md` | Full rewrite: copy `cards/template.html` → `cards/[username].html`, fill in, PR |
| `translations/README.*.md` | Add notice at top pointing to main README for v2 flow |
| `.github/workflows/.travis.yml` | Rename to `ci.yml`; update Prettier version; extend `files` glob to cover `cards/*.html` |

### `script.js` — NO CHANGES

The existing archive loading code is untouched. New cards flow directly into the same `archive/cards/archive_N.json` files via `card-to-archive.js`. The live page works without modification.

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
2. Run `validate-card.js` (phase2 mode) via Node + cheerio — reuses the module from Phase 1
3. Wrap in minimal HTML document for `html-validate`:

   ```html
   <!DOCTYPE html><html><body>{{ card content }}</body></html>
   ```

4. Run `html-validate` with `htmlvalidate.json` config (extends `html-validate:recommended`; key rules: `no-duplicate-id: error`, `attr-quotes: double`, `require-closing-tags: error`)

**On success:**

```bash
gh pr merge --squash
```

Uses `GITHUB_TOKEN` — no additional secrets required.

**On failure:**

- Post comment with specific errors and fix instructions (reuse `backlog-messages.js` templates or extend)
- `exit 1` to fail the check

**Additional trigger:** If `index.html` is in the PR's changed files → post friendly redirect comment explaining the new flow, close PR without merging.

---

### `card-to-archive.yml` — Key Design

**Trigger:**

```yaml
on:
  push:
    branches: [master]
    paths:
      - 'cards/*.html'
    paths-ignore:
      - 'cards/template.html'
```

**Steps:**

1. Checkout with `fetch-depth: 0`
2. Set up Node.js 20
3. Run `node _v2/scripts/card-to-archive.js [username].html` (filename passed as argument, detected from the push event)
4. Commit with `[skip ci]` to avoid triggering a CI loop

---

### `card-to-archive.js` — Logic

1. Read `cards/[username].html`, parse with cheerio
2. Extract card fields using functions ported from `archive/archive_cards_script.js`:
   - `extractContactDetails($card)` → contacts array (lines 20–45)
   - `extractResourceDetails($card)` → resources array (lines 47–68)
3. Build card JSON object: `{ name, contacts, about, resources }`
4. Read latest `archive/cards/archive_N.json`; if it has ≥50 entries, create `archive_N+1.json` and update `archive/archiveFilesTotal.js` (same logic as `archive/archive_cards_script.js:107`)
5. Append the card object to the target archive JSON file
6. Delete `cards/[username].html`
7. Stage and commit: `archive/cards/` + `archive/archiveFilesTotal.js` + `cards/[username].html` (deletion)

### Archive JSON schema (unchanged)

```json
[
  {
    "name": "Ada Lovelace",
    "contacts": [{ "icon": "fab fa-github", "link": "https://github.com/ada", "handle": "@ada" }],
    "about": "Mathematician and writer.",
    "resources": [{ "title": "First Resource", "link": "https://example.com", "text": "Description" }]
  }
]
```

`resources` is 0–5 items (Phase 2 validation allows it to be optional). Existing archive files remain untouched.

---

### `validate-card.js` — Phase 2 Checks

Same module used in Phase 1, but called with `mode: 'phase2'` (applied to `cards/[username].html` rather than a diff fragment).

**Phase 2 checks (stricter than Phase 1):**

1. Exactly one `.card` div
2. `.name` present, non-empty, not placeholder `"Your name"`
3. `.about` present, non-empty, not the placeholder text
4. `.contact` present with at least one link; no `href` containing `"your_user_handle"`
5. `.resources` optional (0–5 items); each `<li>` present must have `<a>` with a real `href` (not `"#"`)

**Output:**

```js
{ valid: true }
// or
{ valid: false, errors: ['Missing .name element'] }
```

---

### Transition Sequence (order matters)

1. Phase 1 complete ✓
2. Run `npm run archive_cards` (with temporary `minimumCardCount = 1`) until `index.html` has only the template card ✓ (done on branch)
3. Create `cards/` directory with `cards/template.html` ✓
4. Write `_v2/scripts/card-to-archive.js` ✓
5. Deploy `validate-card-pr.yml` and `card-to-archive.yml` ✓
6. Rewrite `README.md`; archive old tutorial to `docs/tutorial_v1.md` ✓
7. Add redirect notice to `translations/README.*.md` ✓
8. Rename `.travis.yml` → `ci.yml` ✓
9. Write `CONTRIBUTING.md`
10. **Pre-merge pass on master** (run on master immediately before the final merge):
    - Run `_v2/scripts/check-fixed-prs.js` — scans all open `changes-requested` PRs for valid cards (using phase1 lenient validation), injects and closes any that have been fixed since Phase 1, same approach as `process-backlog.js`
    - Run `npm run archive_cards` (temporary `minimumCardCount = 1`) to drain any new cards that accumulated in `index.html` since Phase 1 — commit on master
    - Merge `refactor/version_2` into master — both sides are template-only, no conflict
11. **Post-merge notifications** (run on master after the merge):
    - Run `_v2/scripts/notify-v1-prs.js` — posts a friendly v2 migration comment on every remaining open PR that still targets `index.html`, telling contributors to re-submit via the new `cards/` flow
12. Push master; verify live page with a test PR (`cards/test-username.html`)

### Scripts to write before step 10

**`_v2/scripts/check-fixed-prs.js`**
- Fetch all open PRs with label `changes-requested`
- For each: extract card HTML from diff (same approach as `process-backlog.js`)
- Validate with `validate-card.js` phase1 mode
- If valid: inject into `index.html`, commit `[skip ci]`, push, close PR with a success comment (reuse `welcomeComment` from `backlog-messages.js`)
- If still invalid: skip (leave for `notify-v1-prs.js`)
- Idempotent: respects `_v2/scripts/processed.json` — skips already-processed PRs

**`_v2/scripts/notify-v1-prs.js`**
- Fetch all open PRs that change `index.html` (covers `changes-requested` and any stale `maintainer-review` card PRs)
- Skip any already in `processed.json`
- Post a single comment explaining the new flow: the contributor should open a fresh PR adding `cards/their-username.html` instead
- Do NOT close — leave that to the stale bot or the contributor
- Mark each notified PR in `processed.json` to prevent double-posting

---

## Phase 3 — Smaller Issues

Ordered by priority. None of these block Phase 1 or Phase 2.

---

### 1. `CONTRIBUTING.md` (High priority — missing entirely)

Create at repo root. Target: under 300 lines.

**Sections:**

- Welcome (tone: encouraging, non-intimidating)
- How to add your card — link to README v2 tutorial
- What makes a valid PR — the exact validation rules in plain English (mirrors `validate-card.js` phase2 checks)
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

Also update stale messages to be less terse — mention what the contributor should do (push a fix, leave a comment explaining intent) rather than just warning of closure.

---

### 3. Prettier 3 Upgrade (Medium priority)

**Current:** pinned to `^1.18.2` in `package.json`.

**Steps:**

1. `npm install --save-dev prettier@^3.x`
2. Review `prettier.config.js` — `arrowParens: 'always'` is now the v3 default (can be removed or left explicit)
3. Run `npm run prettier-html` to reformat `index.html`
4. After `cards/` exists, ensure `prettier.config.js` covers `cards/*.html` (same options)
5. Update `ci.yml` — `creyD/prettier_action@v4.3` should be updated; verify it supports Prettier 3

---

### 4. Rename `.travis.yml` → `ci.yml` (Low priority)

**Change:** Rename `.github/workflows/.travis.yml` to `.github/workflows/ci.yml`.

**Also update:**

- Any README or translation files that reference `.travis.yml` by name
- The workflow `name:` field is already `Continuous Integration` — no change needed there

Do this as part of the Phase 2 CI update (when extending the workflow to cover `cards/*.html`) to bundle the rename with functional changes.

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

### 6. Link Validation — ~~DROPPED~~

Decided against lychee-based link validation. The false-positive rate is too high for this project's contributor profile: LinkedIn always returns `999` to crawlers, Twitter/X does the same, and personal sites may be temporarily unreachable. First-time contributors would get confusing failures with no way to fix them. `validate-card.js` phase2 already catches placeholder links (`#`, `your_user_handle`), which is the right level of link validation here.

---

### 7. Font Awesome Update (Medium priority)

**Change:** Find the Font Awesome CDN `<link>` in `index.html` and update to the current v6.x URL from the official CDN.

Check the current URL in `index.html` and replace with the latest v6.x kit or CDN link from fontawesome.com. This is a one-line change.

---

## Critical Files Reference

These files must be read in full before implementing each phase.

| File | Why | Relevant to |
| --- | --- | --- |
| `archive/archive_cards_script.js:20–68` | `extractContactDetails` + `extractResourceDetails` to port verbatim | Phase 2 |
| `archive/archive_cards_script.js:107` | `minimumCardCount = 11` logic; how archiving threshold works | Phase 2 |
| `archive/cards/archive_N.json` | Confirm schema (name, contacts, about, resources) before writing card-to-archive.js | Phase 2 |
| `archive/archiveFilesTotal.js` | Understand how `updateScriptFile()` works (auto-updated by archival script) | Phase 2 |
| `_v2/scripts/validate-card.js` | Existing validator; extend to phase2 mode | Phase 2 |
| `_v2/scripts/backlog-messages.js` | Existing comment templates; extend for Phase 2 error messages | Phase 2 |
| `.github/workflows/.travis.yml` | Full CI workflow before rename/update | Phase 2, Phase 3 item 4 |
| `.github/workflows/stale.yml` | Current stale values before changing | Phase 3 item 2 |
| `htmlvalidate.json` | Rules to extend for card fragment validation | Phase 2 |
| `package.json` | Current Prettier version (`^1.18.2`) | Phase 3 item 3 |
| `prettier.config.js` | Current Prettier config before v3 update | Phase 3 item 3 |
| `assets/script.js:218–222` | Scroll debounce TODO | Phase 3 item 5 |
