const fs = require('fs')
const path = require('path')

// 1. Where are the source files?
const archiveDir = path.join(__dirname, 'archive', 'json')
const outputFile = path.join(__dirname, 'assets', 'search-index.json')

console.log('🚀 Starting Index Builder...')

try {
  // 2. Read all filenames in the archive/json folder
  const files = fs.readdirSync(archiveDir)
  const searchIndex = []

  files.forEach(file => {
    // Only process .json files
    if (path.extname(file) === '.json') {
      const filePath = path.join(archiveDir, file)
      const content = JSON.parse(fs.readFileSync(filePath, 'utf8'))

      // 3. Extract only what we need to search
      content.forEach(card => {
        searchIndex.push({
          u: card.username || '', // 'u' for username (the unique ID)
          n: card.name.toLowerCase(), // 'n' for name (searchable)
          a: card.about.toLowerCase(), // 'a' for about (searchable)
        })
      })
    }
  })

  // 4. Save the combined data to one tiny file
  fs.writeFileSync(outputFile, JSON.stringify(searchIndex))

  console.log(`✅ Success! Indexed ${searchIndex.length} contributors.`)
  console.log(`📂 Saved to: ${outputFile}`)
} catch (err) {
  console.error('❌ Error building index:', err)
}
