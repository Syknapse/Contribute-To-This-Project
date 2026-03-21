# Spec for v2.0 of Contribute-To-This-Project

## Project Identity & Non-Negotiables

- **Free tier only** — no paid services, no paid tiers of any tool or platform
- **Preserve the "writing HTML" experience** — contributors must write actual HTML code and see it live on the site. This is the core value proposition.
- **Maximize PR merges** — the project's ethos is inclusion. Reject only PRs that automation genuinely cannot handle.
- **First-time contributor friendly** — every decision must consider a person who has never opened a PR before
- **Welcoming to new maintainers** — processes, documentation, and automation must be understandable to a maintainer who joins cold

Owner has full admin access to the GitHub repo (branch protection, Actions, secrets, all settings).

---

## The Three Problems

### 1. Backlog of Open PRs (~223 open)

**Context:** ~85% are standard contributor card PRs in the old format (editing `index.html` directly). The rest are translations, feature PRs, and fixes.

**Goal:** Merge as many card PRs as possible using automation. Reject only PRs that automation genuinely cannot salvage.

**Approach:**

- **Phase 1** (before v2 launch): Write an automated script/workflow to process old-format PRs in bulk
  - Extract each contributor's card from the `index.html` diff
  - Validate it (structure, required fields, valid HTML)
  - Auto-merge if valid; close with a friendly message if not fixable
- **Validation threshold:** Reject only what cannot be auto-fixed (bad HTML that can't be repaired, missing required card fields, PRs that touch files beyond index.html without justification)
- **Non-card PRs** (translations, fixes): handled separately, semi-automated — maintainer reviews, tooling handles the mechanics

### 2. Automation of the Contribution Workflow (v2 Architecture)

**The core problem:** All contributors currently edit the same `index.html`, causing constant merge conflicts and formatting corruption.

### v2 Solution: One file per contributor (hybrid approach)

**Contribution flow:**

- Contributor creates `cards/[username].html` containing only their `<div class="card">...</div>` block
- PR touches only their own file — zero conflicts by design
- Automation validates and merges the PR
- Card appears live on the site

**Assembly (recommendation: client-side dynamic loading):**

- A GH Action maintains a `cards/manifest.json` listing all card filenames
- On each PR merge, the Action appends the new card to the manifest and commits it
- `script.js` fetches the manifest at runtime, then fetches each `cards/*.html` and renders it alongside archived cards
- This is consistent with how archive JSON files are loaded today — no new patterns
- No build step, no secrets needed, works entirely within free GitHub Actions/Pages

**Automation levels:**

- **Card PRs:** minimal to zero maintainer time — validate → auto-approve/merge → manifest updates → card is live
- **Non-card PRs (translations, fixes, features):** semi-automated — maintainer reviews content/intent, tooling handles conflict resolution, formatting, and merge mechanics

**Tutorial strategy:**

- Create a new v2 tutorial (README_v2 or separate guide) for the new `cards/[username].html` flow
- Keep the existing tutorial intact — translations remain valid for v1
- Translations are updated over time by the community; no forced migration

**Transition period:**

- New PRs will continue arriving in the old format while we build v2
- The Phase 1 backlog script will handle these as they come in
- Once v2 is live, the repo prominently signals the new flow; old-format PRs get a friendly redirect

### 3. Smaller Issues (to address in Phase 3)

These are improvements that make the project easier to contribute to, maintain, and run — addressed after the two main workstreams are complete.

| Item | Priority | Notes |
| ------ | ---------- | ------- |
| Create `CONTRIBUTING.md` | High | Missing entirely; critical for a first-timer project (GH issue #4455) |
| Stale bot timing | High | Currently closes PRs in 1–4 days — far too aggressive for first-timers; needs loosening |
| Prettier upgrade | Medium | Pinned to `^1.18.2` (2018); upgrade to `^3.x` |
| CI Prettier enforcement gaps | Medium | Issue #4422 — not all cases caught |
| Automated link validation | Medium | Issue #4421 — no link checking in CI |
| Font Awesome update | Medium | Flagged in issue #4117 |
| Fix broken links in Turkish README | Medium | Issue #4436 |
| Rename `.github/workflows/.travis.yml` | Low | Misleading filename for a GitHub Actions workflow |
| Scroll debounce in `assets/script.js:219` | Low | TODO already in code |
| More beginner-friendly issues | Low | Issue #4223 |

---

## Success Criteria

- All salvageable backlog PRs merged with zero maintainer time
- New card PRs go live on the site with zero maintainer action (or near-zero)
- Non-card PRs have a clear, semi-automated review path
- v2 contribution flow is documented and welcoming to first-timers
- New maintainers can onboard from documentation alone
- Project costs nothing to run

---

## What This Spec Does NOT Cover Yet

- Specific technical implementation details (to be planned in ROADMAP.md)
- Exact GitHub Actions workflow design
- Script implementation for backlog processing
- Sequencing and milestones for execution
