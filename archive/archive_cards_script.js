// Run this script with `node archive/archive_cards_script.js` or `npm run archive_cards`
// This script will copy all the .cards elements in index.html. It will leave the first 11 cards (template + 10 cards) and convert all the remainder into json format.
// It will create a new json file called archive_[number].json incrementing number by 1, it will copy the json cards there.
// It will then remove the cards from the html file.
// Finally it will update a special file called archiveFilesTotal which is used by script js to iterate over all the archive files
const fs = require('fs')
const path = require('path')
const cheerio = require('cheerio')

// Path to file with cards to be archived
const htmlFile = `index.html`
// Path to directory to store created json archive
const archiveDir = 'archive/cards'
// Path to file where number of files in archive directory is saved
const archiveFilesTotal = 'archive/archiveFilesTotal.js'
// Number of cards to keep in index.html
const minimumCardCount = 11

// Extract contact details
function extractContactDetails(contactElement) {
  const contactDetails = []
  const contactLinks = contactElement.find('a')

  contactLinks.each((index, link) => {
    const iconElement = $(link)
      .prev()
      .is('i')
      ? $(link).prev('i')
      : $(link).find('i')
    const icon = iconElement.attr('class')
    const url = $(link).attr('href')
    const handle = $(link)
      .text()
      .trim()

    contactDetails.push({
      icon: icon,
      link: url,
      handle: handle,
    })
  })

  return contactDetails
}

// Extract resource details
function extractResourceDetails(resourcesElement) {
  const resources = []
  const resourceElements = resourcesElement.find('li')

  // Extract details for each resource
  resourceElements.each((index, element) => {
    const resource = {
      title: '',
      link: '',
      text: '',
    }

    const linkElement = $(element).find('a')
    resource.title = linkElement.attr('title') || ''
    resource.link = linkElement.attr('href') || ''
    resource.text = linkElement.text().trim() || ''

    resources.push(resource)
  })

  return resources
}

// Save cards in a JSON file
function saveCardsAsJSON(cards, filePath, num) {
  const jsonData = JSON.stringify(cards, null, 2)
  fs.writeFileSync(filePath, jsonData)
  console.log(`\u{1F4C2} Created archive_${num}.json`)
}

// Delete selected cards from the index.html file
function deleteCardsFromHTML(selectedCards) {
  selectedCards.each((index, element) => {
    $(element).remove()
  })

  const updatedHTML = $.html()
  fs.writeFileSync(htmlFile, updatedHTML)
  console.log(`\u{1F6AE} Deleted cards from ${htmlFile}`)
}

// Update the archiveFilesTotal.js file
function updateScriptFile(archiveFilesTotal, nextNumber) {
  const scriptFile = fs.readFileSync(archiveFilesTotal, 'utf-8')

  const updatedScript = scriptFile.replace(/const numberOfFiles = \d+/, `const numberOfFiles = ${nextNumber}`)
  fs.writeFileSync(archiveFilesTotal, updatedScript)
  console.log(`\u{1F4C3} Updated ${archiveFilesTotal}`)
}

// Read the HTML file
const html = fs.readFileSync(htmlFile, 'utf-8')

// Load the HTML into Cheerio
const $ = cheerio.load(html)

// Fetch all the cards
const cardElements = $('.card')
const cardsCount = cardElements.length

if (cardsCount <= minimumCardCount) {
  return console.log(`\u{1F6D1} There are fewer than 10 cards in ${htmlFile}. Please try again later.`)
} else {
  // Exclude the first 10 cards + template card
  const selectedCards = cardElements.slice(minimumCardCount)

  // Convert selected cards to JSON
  const jsonCards = convertToJSON(selectedCards)

  // Convert cards to JSON format
  function convertToJSON(cards) {
    // Array to store the card objects
    const jsonCards = []

    // Iterate over each card
    cards.each((index, element) => {
      const card = {}

      // Extract name
      card.name = $(element)
        .find('.name')
        .text()
        .trim()

      // Extract contact details
      const contactElement = $(element).find('.contact')
      card.contacts = extractContactDetails(contactElement)

      // Extract about section
      card.about = $(element)
        .find('.about')
        .text()
        .trim()

      // Extract resources
      const resourcesElement = $(element).find('.resources')
      card.resources = extractResourceDetails(resourcesElement)

      // Add the card object to the array
      jsonCards.push(card)
    })
    console.log('\u{23F3} Converting cards to JSON...')
    return jsonCards
  }

  // Determine the next sequential number for the archive file
  const archiveFiles = fs.readdirSync(archiveDir)
  const nextNumber = archiveFiles.length + 1
  const archiveFilePath = path.join(archiveDir, `archive_${nextNumber}.json`)

  // Save selected cards in a JSON file
  saveCardsAsJSON(jsonCards, archiveFilePath, nextNumber)

  // Delete selected cards from index.html
  deleteCardsFromHTML(selectedCards)

  // Update the archiveFilesTotal.js file
  updateScriptFile(archiveFilesTotal, nextNumber)

  console.log('\u{1F4AF} Conversion complete!')
}
