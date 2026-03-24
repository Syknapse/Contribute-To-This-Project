// ── state ──────────────────────────────────────────────────────────────────────
const contributionsDisplay = document.getElementById('contributions-number')
const displayClass = document.getElementById('contributions-number').classList
const archiveCardsDirectory = './archive/json'
const searchBar = document.getElementById('searchbar')

let displayNumber = 0
let searchTimeout = null
let filesToLoad = []
let loadedCount = 0
let observer = null
let fullyLoaded = false

const BATCH_SIZE = 3

// ── initialise: fetch manifest then start lazy loading ─────────────────────────
fetch('./archive/manifest.json')
  .then(r => r.json())
  .then(manifest => {
    filesToLoad = manifest.files
    countUpTo(manifest.totalArchivedCards)
    initLazyLoading()
  })
  .catch(err => console.error('Failed to load archive manifest:', err))

// ── render cards from one archive file into the grid ──────────────────────────
function renderCards(data, file) {
  const link = `https://github.com/Syknapse/Contribute-To-This-Project/blob/master/archive/json/${file}`
  const cards = data
    .map(card => {
      const { name, contacts, about, resources } = card
      return `
        <div class="card">
          <!-- Fetched from Archive: ${file} -->
          <p class="name">${name}</p>
          <p class="contact">
            ${contacts.map(c => `<i class="${c.icon}"></i><a href="${c.link}" target="_blank">${c.handle}</a>`).join('')}
          </p>
          <p class="about">${about}</p>
          <div class="resources">
            <p>3 Useful Dev Resources</p>
            <ul>
              ${resources
                .map(r => `<li><a href="${r.link}" target="_blank" title="${r.title}">${r.text}</a></li>`)
                .join('')}
            </ul>
          </div>
          <p><small>Fetched From: <a href="${link}" target="_blank">${file}</a></small></p>
        </div>
      `
    })
    .join('')

  const grid = document.getElementById('contributions')
  grid.innerHTML += cards

  if (localStorage.getItem('theme') === 'night') {
    grid.querySelectorAll('.card:not(.night)').forEach(card => card.classList.add('night'))
  }
}

// ── lazy loading with IntersectionObserver ─────────────────────────────────────
function loadNextBatch() {
  const batch = filesToLoad.slice(loadedCount, loadedCount + BATCH_SIZE)
  if (batch.length === 0) {
    disconnectObserver()
    return
  }
  loadedCount += batch.length

  Promise.all(batch.map(file => fetch(`${archiveCardsDirectory}/${file}`).then(r => r.json())))
    .then(results => {
      results.forEach((data, i) => renderCards(data, batch[i]))
      if (loadedCount >= filesToLoad.length) disconnectObserver()
    })
    .catch(err => console.error('Error loading archive batch:', err))
}

function disconnectObserver() {
  if (observer) {
    observer.disconnect()
    observer = null
  }
  fullyLoaded = true
}

function initLazyLoading() {
  const sentinel = document.createElement('div')
  sentinel.id = 'archive-sentinel'
  document.getElementById('contributions').after(sentinel)

  observer = new IntersectionObserver(
    entries => {
      if (entries[0].isIntersecting) loadNextBatch()
    },
    {
      rootMargin: '400px',
    }
  )
  observer.observe(sentinel)

  loadNextBatch() // load first batch immediately without waiting to scroll
}

// ── load all remaining files on search focus ───────────────────────────────────
function loadAllRemaining() {
  if (fullyLoaded) return
  disconnectObserver()

  const remaining = filesToLoad.slice(loadedCount)
  loadedCount = filesToLoad.length

  const originalPlaceholder = searchBar.placeholder
  searchBar.placeholder = 'Loading all cards…'

  Promise.all(remaining.map(file => fetch(`${archiveCardsDirectory}/${file}`).then(r => r.json())))
    .then(results => {
      results.forEach((data, i) => renderCards(data, remaining[i]))
    })
    .catch(err => console.error('Error loading all archive files:', err))
    .finally(() => {
      searchBar.placeholder = originalPlaceholder
    })
}

// ── contribution counter ───────────────────────────────────────────────────────
function countUpTo(target) {
  const steps = 50
  const interval = 1500 / steps
  const increment = Math.ceil(target / steps)

  const tick = () => {
    displayNumber = Math.min(displayNumber + increment, target)
    contributionsDisplay.textContent = displayNumber
    if (displayNumber < target) {
      setTimeout(tick, interval)
    } else {
      displayClass.add('rubberBand')
    }
  }
  tick()
}

// ── night mode ─────────────────────────────────────────────────────────────────
let nightModeIntervalId = null
const themeToggle = document.getElementById('toggle-box-checkbox')

const currentTheme = localStorage.getItem('theme')
if (currentTheme === 'night') {
  document.body.classList.add('night')
  themeToggle.checked = true
}

themeToggle.addEventListener('change', e => {
  if (nightModeIntervalId) {
    clearInterval(nightModeIntervalId)
  }

  const cards = document.getElementsByClassName('card')
  const { length: cardCount } = cards
  let cardIndex = 0

  const { checked: isNightMode } = e.target

  if (isNightMode) {
    document.body.classList.add('night')
    localStorage.setItem('theme', 'night')
  } else {
    document.body.classList.remove('night')
    localStorage.setItem('theme', 'light')
  }

  const updateCount = 50
  const updateInterval = 500

  const updateCardCss = () => {
    for (let i = 0; i < updateCount; i++) {
      if (cardIndex + i >= cardCount) {
        clearInterval(nightModeIntervalId)
        return
      }
      if (isNightMode) {
        cards[cardIndex + i].classList.add('night')
      } else {
        cards[cardIndex + i].classList.remove('night')
      }
    }
    cardIndex += updateCount
  }

  updateCardCss()
  nightModeIntervalId = setInterval(updateCardCss, updateInterval)
})

// ── footer year ────────────────────────────────────────────────────────────────
const currentYearSpan = document.getElementById('currentYear')
currentYearSpan.innerText = new Date().getFullYear()

// ── search ─────────────────────────────────────────────────────────────────────
searchBar.addEventListener('input', searchCard)
searchBar.addEventListener('focus', loadAllRemaining, { once: true })

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
  const input = searchBar.value.toLowerCase()

  if (searchTimeout) {
    clearTimeout(searchTimeout)
  }

  searchTimeout = setTimeout(async () => {
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
  }, 500)
}

// ── scroll to top ──────────────────────────────────────────────────────────────
let topButton = document.getElementById('topButton')
let scrollDebounceId = null

window.addEventListener('scroll', () => {
  if (scrollDebounceId) clearTimeout(scrollDebounceId)
  scrollDebounceId = setTimeout(scrollFunction, 100)
})

function scrollFunction() {
  if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
    topButton.style.display = 'flex'
  } else {
    topButton.style.display = 'none'
  }
}

topButton.addEventListener('click', () => {
  document.body.scrollTop = 0
  document.documentElement.scrollTop = 0
})
