const fs = require('fs')
const path = require('path')
const cheerio = require('cheerio')

const htmlFile = `../index_test.html`
const archiveDir = '../archive_test'

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

  const spanElement = $('#cmnt')

  // Remove HTML comments using regex
  const spanHTML = spanElement.html().replace(/<!--[\s\S]*?-->/g, '');

  // Remove empty lines
  const updatedHTMLWithoutEmptyLines = spanHTML.replace(/^\s*\n/gm, '');

  // Update the HTML inside the span element
  spanElement.html(updatedHTMLWithoutEmptyLines);

  // Get the remaining cards
  const remainingCards = spanElement.children('.card');

  // Clear the content inside the span element
  spanElement.empty();

  spanElement.append('\n<!-- DO NOT modify the TEMPLATE directly, make a copy and paste it below -->\n')
  spanElement.append('<!-- Keep one line of space above and below your card -->\n')
  spanElement.append('<!-- ========= Paste YOUR CARD directly BELOW this line ========= -->\n')
  spanElement.append('\n<!-- Start -->\n')

  /// Insert the remaining cards with comments and line breaks
  remainingCards.each((index, element) => {
    const cardHTML = $.html(element);
    if (cardHTML.trim() !== '') {
      // Add a comment before the card
      spanElement.append(`\n<!-- Card ${index + 1} START -->\n`);

      // Add the card content
      spanElement.append(`${cardHTML}\n`);

      // Add a comment after the card
      spanElement.append(`<!-- Card ${index + 1} END -->\n`);
    }
  });

  spanElement.append('<!-- End -->\n')
  spanElement.append('\n<!-- <<<<< Do not change anything below this line >>>>> -->\n')
  spanElement.append('<!-- -------------------------------------------------- -->\n')

  /// Get the updated HTML string
  const updatedHTMLString = $.html();

  // Write the updated HTML back to the index.html file
  fs.writeFileSync(htmlFile, updatedHTMLString);
}

// Read the HTML file
const html = fs.readFileSync(htmlFile, 'utf-8')

// Load the HTML into Cheerio
const $ = cheerio.load(html, { xmlMode: true })

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
