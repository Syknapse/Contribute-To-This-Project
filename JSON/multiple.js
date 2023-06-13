const fs = require('fs')
const cheerio = require('cheerio')

// Array to store the card objects
for (let i = 1; i <= 18; i++) {
  const htmlFile = `../archive/archive_${i}.html`
  const json = `../archive_test/archive_${i}.json`

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

  const cards = []

  // Read the HTML file
  const html = fs.readFileSync(htmlFile, 'utf-8')

  // Load the HTML into Cheerio
  const $ = cheerio.load(html)

  // Fetch all the cards
  const cardElements = $('.card')

  // Iterate over each card
  cardElements.each((index, element) => {
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
    cards.push(card)
  })

  // Convert the cards array to JSON
  const jsonData = JSON.stringify(cards, null, 2)

  // Write the JSON data to a file
  fs.writeFileSync(json, jsonData, 'utf-8')
}

console.log('Conversion complete!')
