# Archive

## Where did my card go?

After a number of contributions accumulate, cards are moved from their individual HTML files (`cards/<username>.html`) into archive JSON files. This keeps the repository lightweight and reduces merge conflicts for contributors.

**This happens automatically — you don't need to do anything.**

Your card still appears on the live site exactly as before:
[https://syknapse.github.io/Contribute-To-This-Project](https://syknapse.github.io/Contribute-To-This-Project)

The original HTML file and your full contribution history are preserved in git history.

---

## How the archive system works (for maintainers)

### Pipeline

Archiving is fully automated and runs after every card merge:

1. A card PR is merged into `master`
2. `validate-card-pr.js` polls until the merge is confirmed, then dispatches `card-to-archive.yml` via `workflow_dispatch`
3. `scripts/card-to-archive.js` runs:
   - Parses `cards/<username>.html` and extracts name, contacts, about, and resources
   - Appends the card data to the latest `archive/json/archive_N.json` (max 50 entries per file — creates a new file when full)
   - Regenerates `archive/manifest.json` with the updated file list and total card count
   - Deletes `cards/<username>.html`
4. The bot commits and pushes the changes to `master`

### Manual trigger

If archiving fails (e.g. the workflow timed out or was skipped), re-run it manually:

```bash
gh workflow run card-to-archive.yml --ref master -f filename=<username>.html
```

Or trigger it from the Actions tab in GitHub: **Archive Card** → **Run workflow** → enter the filename.

### Files in this directory

| Path                          | Description                                                                                          |
| ----------------------------- | ---------------------------------------------------------------------------------------------------- |
| `archive/manifest.json`       | Auto-generated. Lists all archive files and the total card count. Do not edit manually.              |
| `archive/json/archive_N.json` | Auto-generated. Arrays of card objects `{ name, contacts, about, resources }`. Do not edit manually. |

> [!WARNING]
> Never edit files in `archive/json/` or `archive/manifest.json` by hand. They are fully managed by `scripts/card-to-archive.js`.
