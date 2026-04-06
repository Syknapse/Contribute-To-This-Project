// Removes a contributor card from the archive by GitHub username or display name.
// Recounts and updates archive/manifest.json automatically.
//
// Usage:
//   node scripts/remove-card.js --username octocat
//   node scripts/remove-card.js --name "Ada Lovelace"
//   node scripts/remove-card.js --username octocat --dry-run
//   node scripts/remove-card.js --name "Ada Lovelace" --index 1   ← pick from multiple matches
//
// --username matches the canonical `username` field (GitHub handle, set at archive time).
// --name matches the display name; use --index N if multiple cards share the same name.
//
// Called by the remove-card GitHub Actions workflow (workflow_dispatch),
// or run locally by a maintainer.

const fs = require('fs')
const path = require('path')

const ARCHIVE_DIR = 'archive/json'
const MANIFEST = 'archive/manifest.json'

// ── parse args ─────────────────────────────────────────────────────────────────
const args = process.argv.slice(2)
const get = flag => {
  const i = args.indexOf(flag)
  return i !== -1 ? args[i + 1] : null
}
const nameArg = get('--name')
const usernameArg = get('--username')
const indexArg = get('--index')
const selectedIndex = indexArg !== null ? parseInt(indexArg, 10) : null
const dryRun = args.includes('--dry-run')

if (!nameArg && !usernameArg) {
  console.error('Usage: node remove-card.js --username github-handle | --name "Display Name" [--index N] [--dry-run]')
  process.exit(1)
}

// ── search all archive files ───────────────────────────────────────────────────
const archiveFiles = fs
  .readdirSync(ARCHIVE_DIR)
  .filter(f => f.match(/^archive_\d+\.json$/))
  .sort((a, b) => parseInt(a.match(/\d+/)[0]) - parseInt(b.match(/\d+/)[0]))

const matches = []

for (const file of archiveFiles) {
  const filePath = path.join(ARCHIVE_DIR, file)
  const entries = JSON.parse(fs.readFileSync(filePath, 'utf-8'))

  entries.forEach((entry, index) => {
    let matched = false
    if (usernameArg) {
      const target = usernameArg.replace(/^@/, '').toLowerCase()
      matched = (entry.username || '').toLowerCase() === target
    } else if (nameArg) {
      matched = entry.name.toLowerCase() === nameArg.toLowerCase()
    }

    if (matched) {
      matches.push({ file, filePath, index, entry })
    }
  })
}

// ── report findings ────────────────────────────────────────────────────────────
if (matches.length === 0) {
  console.log(`❌ No card found matching ${usernameArg ? `username "${usernameArg}"` : `name "${nameArg}"`}`)
  process.exit(1)
}

const formatMatch = (m, i) => {
  const contacts = m.entry.contacts.map(c => [c.handle, c.link].filter(Boolean).join(' → ')).join(' | ')
  return `   [${i}] "${m.entry.name}"  (@${m.entry.username || 'unknown'})  •  ${m.file} (entry ${m.index})\n       ${m.entry.about || '(no about)'}\n       Contacts: ${contacts}`
}

if (matches.length > 1 && selectedIndex === null) {
  console.log(`⚠️  Found ${matches.length} matches — re-run with --index N to select one:\n`)
  matches.forEach((m, i) => console.log(formatMatch(m, i)))
  console.log(
    `\nExample: node scripts/remove-card.js ${usernameArg ? `--username "${usernameArg}"` : `--name "${nameArg}"`} --index 0`
  )
  process.exit(1)
}

if (selectedIndex !== null && (selectedIndex < 0 || selectedIndex >= matches.length)) {
  console.error(`❌ --index ${selectedIndex} is out of range (0–${matches.length - 1})`)
  process.exit(1)
}

const chosen = selectedIndex !== null ? matches[selectedIndex] : matches[0]
const { file, filePath, index, entry } = chosen

console.log(`\n🔍 Card to be removed:\n`)
console.log(formatMatch(chosen, selectedIndex ?? 0))
console.log()

if (dryRun) {
  console.log('🧪 Dry run — no changes made.')
  process.exit(0)
}

// ── remove entry ──────────────────────────────────────────────────────────────
const entries = JSON.parse(fs.readFileSync(filePath, 'utf-8'))
entries.splice(index, 1)
fs.writeFileSync(filePath, JSON.stringify(entries, null, 2))
console.log(
  `✅ Removed "${entry.name}" (@${entry.username || 'unknown'}) from ${file} (${entries.length} entries remaining)`
)

// ── recount and update manifest ───────────────────────────────────────────────
const allFiles = fs
  .readdirSync(ARCHIVE_DIR)
  .filter(f => f.match(/^archive_\d+\.json$/))
  .sort((a, b) => parseInt(a.match(/\d+/)[0]) - parseInt(b.match(/\d+/)[0]))

let totalArchivedCards = 0
for (const f of allFiles) {
  totalArchivedCards += JSON.parse(fs.readFileSync(path.join(ARCHIVE_DIR, f), 'utf-8')).length
}

fs.writeFileSync(MANIFEST, JSON.stringify({ files: allFiles, totalArchivedCards }, null, 2))
console.log(`📋 Updated manifest.json → ${allFiles.length} files, ${totalArchivedCards} total cards`)
