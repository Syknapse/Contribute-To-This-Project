const fs = require('fs')
const path = require('path')
const cheerio = require('cheerio')

const htmlFile = `index.html`
const archiveDir = 'archive'
const script = 'assets/script.js'

// Function to extract contact details
function extractContactDetails(contactElement) {
  const contactDetails = []
  const contactLinks = contactElement.find('a')

  contactLinks.each((index, link) => {
    const titleElement = $(link).prev()
    const title = titleElement.attr('class') ? titleElement.attr('class').replace('fab fa-', '') : ''
    const url = $(link).attr('href')

    contactDetails.push({
      title: title,
      link: url,
    })
  })
  console.log('Extracted contact details')

  return contactDetails
}

// Function to extract resource details
function extractResourceDetails(resourcesElement) {
  const resources = []
  const resourceElements = resourcesElement.find('li')

  // Extract details for each resource
  resourceElements.each((index, element) => {
    const resource = {
      title: '',
      link: '',
    }

    const linkElement = $(element).find('a')
    resource.title = linkElement.attr('title') || ''
    resource.link = linkElement.attr('href') || ''

    resources.push(resource)
  })
  console.log('Extracted resource details')

  return resources
}

// Function to save cards in a JSON file
function saveCardsAsJSON(cards, filePath) {
  const jsonData = JSON.stringify(cards, null, 2)
  fs.writeFileSync(filePath, jsonData)
  console.log('Saved cards as JSON')
}

// Function to delete selected cards from the index.html file
function deleteCardsFromHTML(selectedCards) {
  selectedCards.each((index, element) => {
    $(element).remove()
  })

  const updatedHTML = $.html()
  fs.writeFileSync(htmlFile, updatedHTML)
  console.log('Deleted cards from HTML')
}

// Function to update the script.js file
function updateScriptFile(script, nextNumber) {
  const scriptFile = fs.readFileSync(script, 'utf-8')

  const updatedScript = scriptFile.replace(/const numberOfFiles = \d+/, `const numberOfFiles = ${nextNumber}`)
  fs.writeFileSync(script, updatedScript)
  console.log('Updated script.js file')
}

// Read the HTML file
const html = fs.readFileSync(htmlFile, 'utf-8')

// Load the HTML into Cheerio
const $ = cheerio.load(html)

// Fetch all the cards
const cardElements = $('.card')

// Exclude the first 10 cards
const selectedCards = cardElements.slice(10)

// Convert selected cards to JSON
const jsonCards = convertToJSON(selectedCards)

// Function to convert cards to JSON format
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
  console.log('Converted cards to JSON')
  return jsonCards
}

// Determine the next sequential number for the archive file
const archiveFiles = fs.readdirSync(archiveDir)
const nextNumber = archiveFiles.length + 1
const archiveFilePath = path.join(archiveDir, `archive_${nextNumber}.json`)

// Save selected cards in a JSON file
saveCardsAsJSON(jsonCards, archiveFilePath)

// Delete selected cards from index.html
deleteCardsFromHTML(selectedCards)

// Update the script.js file
updateScriptFile(script, nextNumber)

console.log('Conversion complete!')
