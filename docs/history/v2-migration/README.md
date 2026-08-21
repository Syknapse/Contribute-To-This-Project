# v2 Migration — History

This directory is an archive of the planning and tooling used to migrate
Contribute-To-This-Project from v1 (single shared `index.html`) to v2
(individual `cards/[username].html` files with automated validation and archiving).

Migration was completed in early 2026. Nothing here needs to run again.

---

## Contents

| Path                         | Description                                                                      |
| ---------------------------- | -------------------------------------------------------------------------------- |
| `ROADMAP.md`                 | Full implementation guide — phases, design rationale, transition sequence        |
| `spec.md`                    | Original v2 specification                                                        |
| `scripts/README.md`          | Phase 1 backlog-processing run guide                                             |
| `scripts/process-backlog.js` | Phase 1 — processed ~223 open PRs by injecting cards directly into `index.html`  |
| `scripts/check-fixed-prs.js` | Pre-merge — re-validated `changes-requested` PRs; merged any that had been fixed |
| `scripts/notify-v1-prs.js`   | Post-merge — posted v2 migration instructions on every remaining v1-style PR     |

---

## What the migration did

### Phase 1 — Backlog clearance

~223 open PRs existed, all editing `index.html` and all conflicting with each other.
`gh pr merge` was abandoned because every PR had merge conflicts against the stale base.

Instead, `process-backlog.js` extracted each contributor's card HTML from the diff,
injected it directly into `index.html` on master, committed `[skip ci]`, pushed, then
closed the PR with an explanation comment.

**Outcome:**

| Category                            | Count |
| ----------------------------------- | ----- |
| Cards injected + PR closed          | 173   |
| `changes-requested` (invalid cards) | 19    |
| `maintainer-review` (non-card PRs)  | 30    |

State tracked in `_v2/scripts/processed.json`.

### Phase 2 — New architecture

Contributors now submit `cards/[username].html` instead of editing `index.html`.
This gives each contributor their own file — no merge conflicts, PRs show green "Merged".

A GitHub Actions workflow (`validate-card-pr.yml`) validates the card automatically
and merges it on success. A second workflow (`card-to-archive.yml`) then converts the
card to JSON, appends it to `archive/json/archive_N.json`, and deletes the card file.
The `cards/` directory stays clean; `script.js` is unchanged.

### Pre-merge pass

Before the v2 branch was merged into master, `check-fixed-prs.js` re-scanned all
`changes-requested` PRs. Contributors who had fixed their cards since Phase 1 were
automatically injected and their PRs closed with a success message.

### Post-merge notifications

After the merge, `notify-v1-prs.js` posted a friendly v2 migration comment on every
remaining open PR that still targeted `index.html`, directing contributors to re-submit
via the new `cards/` flow.

---

## State file

`_v2/scripts/processed.json` — idempotency record used by all three migration scripts.
It was left in place on master after the migration so re-runs are always safe.
