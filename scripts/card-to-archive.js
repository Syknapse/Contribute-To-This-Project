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
//   4. Updates archive/archiveFilesTotal.js if a new archive file was created
//   5. Deletes cards/<filename>

const fs = require('fs')
const path = require('path')
const cheerio = require('cheerio')

// ── paths ──────────────────────────────────────────────────────────────────────
const CARDS_DIR = 'cards'
const ARCHIVE_DIR = 'archive/json'
const ARCHIVE_FILES_TOTAL = 'archive/archiveFilesTotal.js'
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

// ── update archiveFilesTotal.js if a new archive file was created ──────────────
if (newFileCreated) {
  const allFiles = fs.readdirSync(ARCHIVE_DIR).filter(f => f.match(/^archive_\d+\.json$/))
  const script = fs.readFileSync(ARCHIVE_FILES_TOTAL, 'utf-8')
  const updated = script.replace(/const numberOfFiles = \d+/, `const numberOfFiles = ${allFiles.length}`)
  fs.writeFileSync(ARCHIVE_FILES_TOTAL, updated)
  console.log(`📃 Updated archiveFilesTotal.js → ${allFiles.length}`)
}

// ── delete the card file ───────────────────────────────────────────────────────
fs.unlinkSync(cardPath)
console.log(`🗑️  Deleted ${cardPath}`)
