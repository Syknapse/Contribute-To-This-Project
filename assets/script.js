import numberOfFiles from '../archive/archiveFilesTotal.js'

const contributionsDisplay = document.getElementById('contributions-number')
const displayClass = document.getElementById('contributions-number').classList
let displayNumber = 0

// Create an array of ascending numbers corresponding with the number of archive files
const numberOfFilesArray = Array.from({ length: numberOfFiles }, (_, index) => index + 1)
const archiveCardsDirectory = './archive/cards'

// Import all archived cards and insert into the DOM
numberOfFilesArray.forEach(number => {
  // Fetch each JSON archive file based on its number
  fetch(`${archiveCardsDirectory}/archive_${number}.json`)
    .then(response => response.json())
    .then(data => {
      // For each file iterate over the data and create an array of the HTML card template
      const file = `archive_${number}.json`
      const link = `https://github.com/Syknapse/Contribute-To-This-Project/blob/master/archive/cards/${file}`
      const cards = data
        .map(card => {
          const { name, contacts, about, resources } = card
          // Insert each user data into the template
          return `
            <div class="card">
            <!-- Fetched from Archive: ${file} -->
              <p class="name">${name}</p>
              <p class="contact">
              ${contacts
                .map(
                  contact => `
                    <i class="${contact.icon}"></i>
                    <a href="${contact.link}" target="_blank">${contact.handle}</a>
                    `
                )
                .join('')}
              </p>
              <p class="about">${about}</p>
              <div class="resources">
                <p>3 Useful Dev Resources</p>
                <ul>
                ${resources
                  .map(
                    resource => `
                    <li>
                      <a href="${resource.link}" target="_blank" title="${resource.title}">${resource.text}</a>
                    </li>
                  `
                  )
                  .join('')}
                </ul>
              </div>
              <p><small>Fetched From: <a href="${link}" target="_blank">${file}</a></small></p>
            </div>
          `
        })
        .join('')
      const grid = document.querySelector('.grid')
      // Add the cards to the grid
      grid.innerHTML += cards
    })
    .catch(error => {
      console.error('Error importing archive JSON files:', error)
    })
    .finally(() => countUp())
})

// Prompt to archive when there are too many cards
const showInfoInConsole = () => {
  const cardsInIndex = document.getElementsByClassName('card').length - 1

  console.info('Cards in index.html', cardsInIndex)
  if (cardsInIndex > 100)
    console.warn(
      `Too many cards in index.html: ${cardsInIndex}. Run the archive_cards script. Follow instructions in archive/archiving_cards_guide`
    )
}
showInfoInConsole()

// display for the number of contributions
const countUp = () => {
  const numberOfCards = document.getElementsByClassName('card').length
  const numberOfContributors = numberOfCards - 1 // minus the example card

  setTimeout(() => {
    if (displayNumber < numberOfContributors) {
      displayNumber++
      contributionsDisplay.textContent = displayNumber
      countUp()
    }

    if (displayNumber === numberOfContributors) displayClass.add('rubberBand')
  }, 15)
}

// night mode feature
document.getElementById('toggle-box-checkbox').addEventListener('change', e => {
  if (e.target.checked) {
    document.body.classList.add('night')
  } else {
    document.body.classList.remove('night')
  }
})

// Current year for footer
const currentYearSpan = document.getElementById('currentYear')
const currentYear = new Date().getFullYear()
currentYearSpan.innerText = currentYear

// Search bar
const searchBar = document.getElementById('searchbar')
searchBar.addEventListener('input', searchCard)

function clearSearchHighlights() {
  const marks = Array.from(document.querySelectorAll('mark'))
  if (marks.length > 0) {
    marks.forEach(mark => {
      mark.outerHTML = mark.innerText
    })
  }
}

function applyHighlightToSearchResults(value, card) {
  const regex = new RegExp(value, 'gi')
  const cardElements = Array.from(card.querySelectorAll('*'))
  const matches = cardElements.filter(
    element => element.children.length === 0 && element.textContent.toLowerCase().includes(value)
  )

  if (value && value.length > 0) {
    matches.forEach(match => (match.innerHTML = match.textContent.replaceAll(regex, `<mark>$&</mark>`)))
  }
}

function searchCard() {
  let input = searchBar.value.toLowerCase()
  const cards = document.getElementsByClassName('card')

  clearSearchHighlights()

  for (let i = 0; i < cards.length; i++) {
    if (!cards[i].textContent.toLowerCase().includes(input)) {
      cards[i].style.display = 'none'
    } else {
      cards[i].style.display = 'flex'
      applyHighlightToSearchResults(input, cards[i])
    }
  }
}

// Get the button
let topButton = document.getElementById('topButton')

// When the user scrolls down 500px from the top of the document, show the button
window.onscroll = function() {
  // TODO this is very excessive, it fires all the time when a user is scrolling
  // We need to debounce or find a more economic way to trigger button show
  scrollFunction()
}
function scrollFunction() {
  if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
    topButton.style.display = 'flex'
  } else {
    topButton.style.display = 'none'
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0 // For Safari
  document.documentElement.scrollTop = 0 // For Chrome, Firefox, IE and Opera
}

topButton.addEventListener('click', topFunction)
