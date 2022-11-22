const contributionsDisplay = document.getElementById('contributions-number')
const displayClass = document.getElementById('contributions-number').classList
let displayNumber = 0

// show up there are too many cards
const showInfoInConsole = () => {
  const cardsInIndex = document.getElementsByClassName('card').length - 1

  console.info('Cards in index.html', cardsInIndex)
  if (cardsInIndex > 100) console.warn('Too many cards in index.html. Move older cards to archive.', cardsInIndex)
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

// adding the archive cards to the grid
const createArchiveObject = i => {
  const container = document.querySelector('.container')
  const archiveObject = document.createElement('object')
  archiveObject.setAttribute('id', `archiveObject_${i}`)
  archiveObject.setAttribute('data', `archive/archive_${i}.html`)
  archiveObject.setAttribute('type', 'text/html')
  archiveObject.setAttribute('width', '300')
  archiveObject.setAttribute('height', '5000')
  container.append(archiveObject)
}
const NUMBER_OF_FILES = 14
let current = 1
const getArchiveCards = i => {
  createArchiveObject(i)

  document.getElementById(`archiveObject_${i}`).onload = function() {
    const archiveObject = document.getElementById(`archiveObject_${i}`)
    const cards = archiveObject.contentDocument.querySelectorAll('.card')
    const grid = document.querySelector('.grid')

    cards.forEach(card => grid.append(card))
    archiveObject.remove()

    if (current < NUMBER_OF_FILES) {
      current++
      getArchiveCards(current)
    }
    countUp()
  }
}

getArchiveCards(current)

// night mode feature
document.getElementById("toggle-box-checkbox").addEventListener('change', () => { 
   if (this.checked) {  
      document.getElementsByTagName('body').classList.add("night") 
     } else {  
      document.getElementsByTagName('body').classList.remove("night")  }});



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

  if (value && value.length > 1) {
    matches.forEach(match => (match.innerHTML = match.textContent.replaceAll(regex, `<mark>${value}</mark>`)))
  }
}

function searchCard() {
  let input = searchBar.value.toLowerCase()
  const cards = document.getElementsByClassName('card')

  clearSearchHighlights()

  for (i = 0; i < cards.length; i++) {
    if (!cards[i].textContent.toLowerCase().includes(input)) {
      cards[i].style.display = 'none'
    } else {
      cards[i].style.display = 'flex'
      applyHighlightToSearchResults(input, cards[i])
    }
  }
}


// Get the button:
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "flex";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}