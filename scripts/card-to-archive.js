// Converts a contributor card file (cards/[username].html) into the JSON archive format.
// Called by the card-to-archive GitHub Action after a card PR is merged.
//
// Usage: node scripts/card-to-archive.js <filename>
//   e.g. node scripts/card-to-archive.js syknapse.html
//
// The script:
//   1. Reads cards/<filename>, parses the card div
//   2. Extracts name, contacts, about, resources
//   3. Appends to the latest archive JSON (creates a new file if latest has >=50 entries)
//   4. Regenerates archive/manifest.json (file list + total card count)
//   5. Deletes cards/<filename>

const fs = require('fs')
const path = require('path')
const cheerio = require('cheerio')

// ── paths ──────────────────────────────────────────────────────────────────────
const CARDS_DIR = 'cards'
const ARCHIVE_DIR = 'archive/json'
const MANIFEST = 'archive/manifest.json'
const MAX_ENTRIES_PER_FILE = 50

// ── args ───────────────────────────────────────────────────────────────────────
const filename = process.argv[2]
if (!filename) {
  console.error('Usage: node card-to-archive.js <filename>')
  console.error('Example: node card-to-archive.js syknapse.html')
  process.exit(1)
}

const cardPath = path.join(CARDS_DIR, filename)
if (!fs.existsSync(cardPath)) {
  console.error(`File not found: ${cardPath}`)
  process.exit(1)
}

// ── extraction helpers (ported from archive/archive_cards_script.js) ───────────
function extractContactDetails($, contactElement) {
  const contactDetails = []
  const contactLinks = contactElement.find('a')

  contactLinks.each((index, link) => {
    const iconElement = $(link).prev().is('i') ? $(link).prev('i') : $(link).find('i')
    const icon = iconElement.attr('class')
    const url = $(link).attr('href')
    const handle = $(link).text().trim()

    contactDetails.push({ icon, link: url, handle })
  })

  return contactDetails
}

function extractResourceDetails($, resourcesElement) {
  const resources = []
  const resourceElements = resourcesElement.find('li')

  resourceElements.each((index, element) => {
    const linkElement = $(element).find('a')
    resources.push({
      title: linkElement.attr('title') || '',
      link: linkElement.attr('href') || '',
      text: linkElement.text().trim() || '',
    })
  })

  return resources
}

// ── parse card ─────────────────────────────────────────────────────────────────
const html = fs.readFileSync(cardPath, 'utf-8')
const $ = cheerio.load(html)
const $card = $('.card')

if ($card.length === 0) {
  console.error(`No .card element found in ${cardPath}`)
  process.exit(1)
}

const card = {
  name: $card.find('.name').text().trim(),
  contacts: extractContactDetails($, $card.find('.contact')),
  about: $card.find('.about').text().trim(),
  resources: extractResourceDetails($, $card.find('.resources')),
}

console.log(`📇 Parsed card for: ${card.name}`)

// ── upsert: remove any existing archive entry for this username ────────────────
// If the contributor already has a card in the archive (e.g. they opened a new PR
// to fix a mistake), remove the old entry before appending the new one.
// This prevents duplicate archive entries without requiring a special update flow.
const username = path.basename(filename, '.html').toLowerCase()
const allArchiveFiles = fs
  .readdirSync(ARCHIVE_DIR)
  .filter(f => f.match(/^archive_\d+\.json$/))
  .sort((a, b) => parseInt(a.match(/\d+/)[0]) - parseInt(b.match(/\d+/)[0]))

for (const archiveFile of allArchiveFiles) {
  const filePath = path.join(ARCHIVE_DIR, archiveFile)
  const entries = JSON.parse(fs.readFileSync(filePath, 'utf-8'))
  const idx = entries.findIndex(entry =>
    entry.contacts.some(c => {
      const handle = (c.handle || '').replace(/^@/, '').toLowerCase()
      const link = (c.link || '').toLowerCase()
      return handle === username || link.endsWith(`/${username}`)
    })
  )
  if (idx !== -1) {
    entries.splice(idx, 1)
    fs.writeFileSync(filePath, JSON.stringify(entries, null, 2))
    console.log(`🔄 Removed existing entry for "${username}" from ${archiveFile} — will be replaced with updated card`)
    break
  }
}

// ── determine target archive file ──────────────────────────────────────────────
const archiveFiles = fs
  .readdirSync(ARCHIVE_DIR)
  .filter(f => f.match(/^archive_\d+\.json$/))
  .sort((a, b) => {
    const n = f => parseInt(f.match(/\d+/)[0])
    return n(a) - n(b)
  })

let targetPath
let newFileCreated = false

if (archiveFiles.length === 0) {
  targetPath = path.join(ARCHIVE_DIR, 'archive_1.json')
  fs.writeFileSync(targetPath, '[]')
  newFileCreated = true
  console.log('📂 Created archive_1.json')
} else {
  const latestFile = archiveFiles[archiveFiles.length - 1]
  const latestPath = path.join(ARCHIVE_DIR, latestFile)
  const entries = JSON.parse(fs.readFileSync(latestPath, 'utf-8'))

  if (entries.length >= MAX_ENTRIES_PER_FILE) {
    const nextNumber = archiveFiles.length + 1
    targetPath = path.join(ARCHIVE_DIR, `archive_${nextNumber}.json`)
    fs.writeFileSync(targetPath, '[]')
    newFileCreated = true
    console.log(`📂 Created archive_${nextNumber}.json`)
  } else {
    targetPath = latestPath
  }
}

// ── append card ────────────────────────────────────────────────────────────────
const existing = JSON.parse(fs.readFileSync(targetPath, 'utf-8'))
existing.push(card)
fs.writeFileSync(targetPath, JSON.stringify(existing, null, 2))
console.log(`✅ Appended card to ${path.basename(targetPath)} (${existing.length} entries)`)

// ── update manifest.json (always regenerate from filesystem) ──────────────────
const allFiles = fs
  .readdirSync(ARCHIVE_DIR)
  .filter(f => f.match(/^archive_\d+\.json$/))
  .sort((a, b) => parseInt(a.match(/\d+/)[0]) - parseInt(b.match(/\d+/)[0]))

let totalArchivedCards = 0
for (const file of allFiles) {
  totalArchivedCards += JSON.parse(fs.readFileSync(path.join(ARCHIVE_DIR, file), 'utf-8')).length
}

fs.writeFileSync(MANIFEST, JSON.stringify({ files: allFiles, totalArchivedCards }, null, 2))
console.log(`📋 Updated manifest.json → ${allFiles.length} files, ${totalArchivedCards} cards`)

// ── delete the card file ───────────────────────────────────────────────────────
fs.unlinkSync(cardPath)
console.log(`🗑️  Deleted ${cardPath}`)
