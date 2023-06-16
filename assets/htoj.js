const fs = require('fs')
const path = require('path')
const cheerio = require('cheerio')

const htmlFile = `index.html`
const archiveDir = 'archive'

// Function to extract contact details
function extractContactDetails(contactElement) {
  const contact = {}

  // Fetch all the social media links
  const socialMediaLinks = contactElement.find('a')

  // Iterate over each social media link
  socialMediaLinks.each((index, element) => {
    const linkElement = $(element)
    const network = linkElement.prev('i').attr('class')
    const link = linkElement.attr('href')

    if (network && link) {
      const networkName = network.split('fa-')[1]
      contact[networkName] = link
    }
  })

  return contact
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

  return resources
}

// Function to save cards in a JSON file
function saveCardsAsJSON(cards, filePath) {
  const jsonData = JSON.stringify(cards, null, 2)
  fs.writeFileSync(filePath, jsonData)
}

// Function to delete selected cards from the index.html file
function deleteCardsFromHTML(selectedCards) {
  selectedCards.each((index, element) => {
    $(element).remove()
  })

  const updatedHTML = $.html()
  fs.writeFileSync(htmlFile, updatedHTML)
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
    card.contact = extractContactDetails(contactElement)

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

console.log('Conversion complete!')
