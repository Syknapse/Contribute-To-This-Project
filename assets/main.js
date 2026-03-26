// ── shared state ───────────────────────────────────────────────────────────────
// These variables are shared across the archive loading, search, and UI sections.

const contributionsDisplay = document.getElementById('contributions-number')
const contributionsDisplayClass = document.getElementById('contributions-number').classList
const archiveCardsDirectory = './archive/json'
const searchBar = document.getElementById('searchbar')

let countUpCurrentNumber = 0 // tracks the current number shown in the counter animation
let searchTimeout = null // holds the debounce timer for the search input
let archiveFilesToLoad = [] // full list of archive filenames from the manifest
let archiveLoadedCount = 0 // how many files have been fetched so far
let intersectionObserver = null // watches the sentinel element to trigger lazy loading
let archiveFullyLoaded = false // true once all archive files have been fetched

const ARCHIVE_BATCH_SIZE = 3 // number of archive files to fetch per scroll trigger

// ── manifest & initialisation ──────────────────────────────────────────────────
// The manifest (archive/manifest.json) is fetched first. It contains the list of
// archive files and the pre-computed total card count. Everything else starts here.

fetch('./archive/manifest.json')
  .then(response => response.json())
  .then(manifest => {
    archiveFilesToLoad = [...manifest.files].reverse()
    countUpTo(manifest.totalArchivedCards)
    initLazyLoading()
  })
  .catch(error => console.error('Failed to load archive manifest:', error))

// ── card rendering ─────────────────────────────────────────────────────────────
// Takes the parsed JSON data from one archive file and appends the cards to the
// contributions grid. Also applies night mode to any newly added cards if active.

function renderCards(cardDataArray, sourceFile) {
  const sourceFileUrl = `https://github.com/Syknapse/Contribute-To-This-Project/blob/master/archive/json/${sourceFile}`

  const cardsHtml = cardDataArray
    .map(card => {
      const { name, contacts, about, resources } = card
      return `
        <div class="card">
          <!-- Fetched from Archive: ${sourceFile} -->
          <p class="name">${name}</p>
          <p class="contact">
            ${contacts
              .map(
                contact =>
                  `<i class="${contact.icon}"></i><a href="${contact.link}" target="_blank">${contact.handle}</a>`
              )
              .join('')}
          </p>
          <p class="about">${about}</p>
          <div class="resources">
            <p>3 Useful Dev Resources</p>
            <ul>
              ${resources
                .map(
                  resource =>
                    `<li><a href="${resource.link}" target="_blank" title="${resource.title}">${resource.text}</a></li>`
                )
                .join('')}
            </ul>
          </div>
          <p><small>Fetched From: <a href="${sourceFileUrl}" target="_blank">${sourceFile}</a></small></p>
        </div>
      `
    })
    .join('')

  const grid = document.getElementById('contributions')
  grid.innerHTML += cardsHtml

  // If night mode is active, apply the night class to any cards just added
  if (localStorage.getItem('theme') === 'night') {
    grid.querySelectorAll('.card:not(.night)').forEach(card => card.classList.add('night'))
  }
}

// ── lazy loading ───────────────────────────────────────────────────────────────
// A sentinel <div> is placed just below the contributions grid. An
// IntersectionObserver watches it: when it enters the viewport (with a 400px
// look-ahead margin), the next batch of archive files is fetched and rendered.
// This means only the first few files load on page open; the rest load on demand.

function loadNextBatch() {
  const nextBatch = archiveFilesToLoad.slice(archiveLoadedCount, archiveLoadedCount + ARCHIVE_BATCH_SIZE)

  if (nextBatch.length === 0) {
    stopLazyLoading()
    return
  }

  archiveLoadedCount += nextBatch.length

  Promise.all(nextBatch.map(file => fetch(`${archiveCardsDirectory}/${file}`).then(response => response.json())))
    .then(results => {
      results.forEach((cardData, index) => renderCards(cardData, nextBatch[index]))
      if (archiveLoadedCount >= archiveFilesToLoad.length) stopLazyLoading()
    })
    .catch(error => console.error('Error loading archive batch:', error))
}

function stopLazyLoading() {
  // Disconnect the observer once all files are loaded — no more scrolling needed
  if (intersectionObserver) {
    intersectionObserver.disconnect()
    intersectionObserver = null
  }
  archiveFullyLoaded = true
}

function initLazyLoading() {
  // The sentinel sits just after the grid. When it scrolls into view the observer
  // fires loadNextBatch(). The 400px rootMargin means loading starts before the
  // user actually reaches the bottom, keeping the experience seamless.
  const sentinel = document.createElement('div')
  sentinel.id = 'archive-sentinel'
  document.getElementById('contributions').after(sentinel)

  intersectionObserver = new IntersectionObserver(
    entries => {
      if (entries[0].isIntersecting) loadNextBatch()
    },
    { rootMargin: '400px' }
  )
  intersectionObserver.observe(sentinel)
  // Note: we do NOT call loadNextBatch() manually here. The observer fires
  // immediately on first observe() because the sentinel starts within the
  // 400px margin, so the first batch loads automatically.
}

// ── search: load all cards on focus ───────────────────────────────────────────
// Search only works on cards already in the DOM. When the user focuses the search
// bar, we stop lazy loading and fetch all remaining archive files at once so the
// search covers every card. The placeholder text signals that loading is in progress.
// { once: true } ensures this only runs on the very first focus.

searchBar.addEventListener(
  'focus',
  function loadAllRemainingForSearch() {
    if (archiveFullyLoaded) return

    stopLazyLoading()

    const remainingFiles = archiveFilesToLoad.slice(archiveLoadedCount)
    archiveLoadedCount = archiveFilesToLoad.length

    const originalPlaceholder = searchBar.placeholder
    searchBar.placeholder = 'Loading all cards…'

    Promise.all(remainingFiles.map(file => fetch(`${archiveCardsDirectory}/${file}`).then(response => response.json())))
      .then(results => {
        results.forEach((cardData, index) => renderCards(cardData, remainingFiles[index]))
      })
      .catch(error => console.error('Error loading all archive files:', error))
      .finally(() => {
        searchBar.placeholder = originalPlaceholder
      })
  },
  { once: true }
)

// ── contribution counter ───────────────────────────────────────────────────────
// Animates the contributions number from 0 up to the target over ~1.5 seconds.
// The target comes from manifest.json (pre-computed total), so it displays
// immediately without waiting for any cards to render in the DOM.

function countUpTo(targetNumber) {
  const totalSteps = 50
  const stepInterval = 1500 / totalSteps // ~30ms per step
  const stepIncrement = Math.ceil(targetNumber / totalSteps)

  function tick() {
    countUpCurrentNumber = Math.min(countUpCurrentNumber + stepIncrement, targetNumber)
    contributionsDisplay.textContent = countUpCurrentNumber

    if (countUpCurrentNumber < targetNumber) {
      setTimeout(tick, stepInterval)
    } else {
      contributionsDisplayClass.add('rubberBand') // bounce animation when counter reaches final number
    }
  }

  tick()
}

// ── night mode ─────────────────────────────────────────────────────────────────
// Toggles night mode on the body and all card elements. Cards are updated in
// batches of 50 every 500ms to avoid layout jank when thousands are in the DOM.

let nightModeIntervalId = null
const themeToggle = document.getElementById('toggle-box-checkbox')

// Apply saved theme on page load
const savedTheme = localStorage.getItem('theme')
if (savedTheme === 'night') {
  document.body.classList.add('night')
  themeToggle.checked = true
}

themeToggle.addEventListener('change', event => {
  if (nightModeIntervalId) clearInterval(nightModeIntervalId)

  const cards = document.getElementsByClassName('card')
  const totalCards = cards.length
  let currentCardIndex = 0
  const { checked: isNightMode } = event.target

  // Apply to the body immediately, then batch-update the cards
  if (isNightMode) {
    document.body.classList.add('night')
    localStorage.setItem('theme', 'night')
  } else {
    document.body.classList.remove('night')
    localStorage.setItem('theme', 'light')
  }

  const CARDS_PER_BATCH = 50
  const BATCH_INTERVAL_MS = 500

  function updateNextCardBatch() {
    for (let offset = 0; offset < CARDS_PER_BATCH; offset++) {
      if (currentCardIndex + offset >= totalCards) {
        clearInterval(nightModeIntervalId)
        return
      }
      if (isNightMode) {
        cards[currentCardIndex + offset].classList.add('night')
      } else {
        cards[currentCardIndex + offset].classList.remove('night')
      }
    }
    currentCardIndex += CARDS_PER_BATCH
  }

  updateNextCardBatch()
  nightModeIntervalId = setInterval(updateNextCardBatch, BATCH_INTERVAL_MS)
})

// ── footer year ────────────────────────────────────────────────────────────────
document.getElementById('currentYear').innerText = new Date().getFullYear()

// ── search ─────────────────────────────────────────────────────────────────────
// Filters visible cards as the user types, with a 500ms debounce to avoid
// running on every keystroke. Matching text within each card is highlighted.

searchBar.addEventListener('input', searchCard)

function clearSearchHighlights() {
  // Unwrap all <mark> elements, replacing them with their plain text content
  document.querySelectorAll('mark').forEach(mark => {
    mark.outerHTML = mark.innerText
  })
}

function highlightMatchesInCard(searchValue, cardElement) {
  // Only highlight leaf nodes (elements with no children) that contain the search term
  const regex = new RegExp(searchValue, 'gi')
  const leafNodes = Array.from(cardElement.querySelectorAll('*')).filter(
    element => element.children.length === 0 && element.textContent.toLowerCase().includes(searchValue)
  )

  if (searchValue.length > 0) {
    leafNodes.forEach(node => (node.innerHTML = node.textContent.replaceAll(regex, `<mark>$&</mark>`)))
  }
}

function searchCard() {
  const searchInput = searchBar.value.toLowerCase()

  if (searchTimeout) clearTimeout(searchTimeout)

  // Debounce: wait until the user pauses typing before running the search
  searchTimeout = setTimeout(() => {
    const cards = document.getElementsByClassName('card')
    clearSearchHighlights()

    for (let index = 0; index < cards.length; index++) {
      const cardMatchesSearch = cards[index].textContent.toLowerCase().includes(searchInput)
      cards[index].style.display = cardMatchesSearch ? 'flex' : 'none'
      if (cardMatchesSearch) highlightMatchesInCard(searchInput, cards[index])
    }
  }, 500)
}

// ── scroll to top ──────────────────────────────────────────────────────────────
// Shows a "back to top" button once the user has scrolled 500px down.
// Scroll events are debounced to avoid running on every pixel of scroll.

const topButton = document.getElementById('topButton')
let scrollDebounceId = null

window.addEventListener('scroll', () => {
  if (scrollDebounceId) clearTimeout(scrollDebounceId)
  scrollDebounceId = setTimeout(updateTopButtonVisibility, 100)
})

function updateTopButtonVisibility() {
  const scrolled = document.body.scrollTop > 500 || document.documentElement.scrollTop > 500
  topButton.style.display = scrolled ? 'flex' : 'none'
}

topButton.addEventListener('click', () => {
  document.body.scrollTop = 0
  document.documentElement.scrollTop = 0
})
