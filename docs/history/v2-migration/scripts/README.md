# Phase 1 — Backlog Processing Scripts

## Quick start (Monday morning)

```bash
# 1. Navigate to repo root
cd /Users/syk/projects/Contribute-To-This-Project

# 2. Confirm gh is authenticated
gh auth status

# 3. Dry run first (always safe, makes no changes)
node _v2/scripts/process-backlog.js --dry-run --batch 30

# 4. Go live
node _v2/scripts/process-backlog.js --batch 30

# 5. Repeat step 4 until all PRs are processed
#    The script tells you when to run again ("Batch limit reached. Run again to continue.")
```

---

## What the script does

Processes open PRs in batches of 30 (default). For each PR:

| PR type | Action |
| --- | --- |
| Only `index.html` changed, has a real name | Welcome comment → merge (squash) |
| Only `index.html` changed, name is missing/placeholder or no card found | Specific error comment → `changes-requested` label |
| Any other files changed | Maintainer note comment → `maintainer-review` label |

Every 10 merges, `npm run archive_cards` runs automatically to keep `index.html` tidy.

---

## State and idempotency

Processed PR numbers are saved to `_v2/scripts/processed.json` after every action.
Re-running the script is always safe — already-processed PRs are silently skipped.

If your laptop restarts mid-run, just run the script again. It picks up where it left off.

---

## Flags

| Flag | Effect |
| --- | --- |
| `--dry-run` | Preview only. No comments, labels, or merges. |
| `--batch N` | Process N PRs per run (default: 30). |
| `--batch=N` | Same, alternative syntax. |

---

## Validation logic (Phase 1 — lenient)

A card PR passes if:
1. Exactly one `.card` div appears in the diff
2. The `.name` element is present, non-empty, and not the template placeholder (`"Your name"`)

Everything else (`.about`, `.contact`, resources, title attributes) is **not checked** in Phase 1.
The philosophy: these PRs are months old. Merge genuine contributions; don't punish first-timers for minor oversights.

Phase 2 will use a stricter mode of the same validator at PR submission time.

---

## Files

| File | Purpose |
| --- | --- |
| `process-backlog.js` | Main script — run this |
| `validate-card.js` | Card validation (phase1/phase2 modes) |
| `backlog-messages.js` | Comment templates |
| `processed.json` | Auto-generated state file (created on first run) |

---

## Expected outcome (from dry run on 2026-03-20)

| Result | Count |
| --- | --- |
| Merges | ~74 (will increase with lenient validator) |
| Changes requested | ~119 (will decrease) |
| Maintainer review | ~30 |
| Total open PRs | 223 |

With the lenient Phase 1 validator (name-only check), expect merge count to rise significantly
from the 74 shown in the dry run — many of those 119 invalids had real names but minor issues.

Run `--dry-run --batch 300` again Monday to get the updated count before going live.
