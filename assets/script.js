const contributionsDisplay = document.getElementById('contributions-number')
const displayClass = document.getElementById('contributions-number').classList
let displayNumber = 0

const showInfoInConsole = () => {
  const cardsInIndex = document.getElementsByClassName('card').length - 1

  console.info('Cards in index.html', cardsInIndex)
  if (cardsInIndex > 30) console.warn('Too many cards in index.html. Move older cards to archive.', cardsInIndex)
}
showInfoInConsole()


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

const NUMBER_OF_FILES = 7
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
$('#toggle-box-checkbox').on('change', function() {
  if (this.checked) {
    $('body').addClass('night')
  } else {
    $('body').removeClass('night')
  }
})

function demo() {
  setInterval(function() {
    $('#toggle-box-checkbox').trigger('click')
  }, 1000)
}
if (document.location.pathname.indexOf('fullcpgrid') > -1) {
  demo()
}
