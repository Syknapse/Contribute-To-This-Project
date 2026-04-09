# Archive

> [!WARNING]
> Never edit files in `archive/json/` or `archive/manifest.json` by hand. They are fully managed by automation. To remove a card, use the [Remove Card workflow](#removing-a-card-maintainers).

## Where did my card go?

When a pull request is merged, cards are moved from their individual HTML files (`cards/<username>.html`) into archive JSON files. This keeps the repository lightweight and reduces merge conflicts for contributors.

**This happens automatically — you don't need to do anything.**

Your card still appears on the live site exactly as before:
[https://syknapse.github.io/Contribute-To-This-Project](https://syknapse.github.io/Contribute-To-This-Project)

The original HTML file and your full contribution history are preserved in git history.

---

## How do I remove my card?

If you'd like your card removed from the site, open a GitHub issue with the title **"Remove my card"** and include your GitHub username. A maintainer will remove it using the automated workflow.

---

## How the archive system works (for maintainers)

### Adding cards (automatic)

Archiving runs automatically after every card PR is merged:

1. A card PR is merged into `master`
2. `validate-card-pr.js` polls until the merge is confirmed, then dispatches `card-to-archive.yml`
3. `scripts/card-to-archive.js` runs:
   - Parses `cards/<username>.html` and extracts name, contacts, about, and resources
   - Appends the card data to the latest `archive/json/archive_N.json` (max 50 entries per file — creates a new file when full)
   - Recounts all entries across all archive files and regenerates `archive/manifest.json`
   - Deletes `cards/<username>.html`
4. The bot commits and pushes the changes to `master`

### Removing a card (maintainers)

Use the **Remove Card** GitHub Actions workflow — never edit archive JSON files by hand.

**Via GitHub UI:**

1. Go to **Actions** → **Remove Card** → **Run workflow**
2. Enter the contributor's **GitHub username** (preferred) — the username is shown in the issue they open to request removal. Use display name only if the username is unknown.
3. Leave **Search by** as `username` (or switch to `name` if searching by display name)
4. Optionally enable **Dry run** to preview what would be removed without committing
5. Run — if multiple cards match (can happen with `--name`), the output will list them with index numbers; re-run with the **Index** field set to pick the right one
6. Once a single card is confirmed, the script removes it, recounts, updates `manifest.json`, and commits

**Via CLI:**

```bash
# Remove by GitHub username (preferred — direct match on canonical id)
node scripts/remove-card.js --username octocat

# Preview only (no changes)
node scripts/remove-card.js --username octocat --dry-run

# Remove by display name (if username is unknown)
node scripts/remove-card.js --name "Ada Lovelace"

# Multiple name matches? Pick one by index (shown in the output above)
node scripts/remove-card.js --name "Ada Lovelace" --index 1
```

The script errors if no match is found. If multiple cards match, it lists them with indices and waits for `--index N` — so nothing is ever deleted ambiguously.

### Manual archive trigger

If archiving fails (e.g. the workflow timed out), re-run it manually:

```bash
gh workflow run card-to-archive.yml --ref master -f filename=<username>.html
```

Or from the Actions tab: **Archive Card** → **Run workflow** → enter the filename.

### Integrity check

Every CI run verifies that `manifest.totalArchivedCards` matches the actual sum of entries across all archive files. If someone edits the archive directly and gets the count wrong, CI will fail with a clear error. This check runs on every PR and push to `master`.

### Files in this directory

| Path                          | Description                                                                                          |
| ----------------------------- | ---------------------------------------------------------------------------------------------------- |
| `archive/manifest.json`       | Auto-generated. Lists all archive files and the total card count. Do not edit manually.              |
| `archive/json/archive_N.json` | Auto-generated. Arrays of card objects `{ name, contacts, about, resources }`. Do not edit manually. |
