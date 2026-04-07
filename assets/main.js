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
      const { username, name, contacts, about, resources } = card
      return `
        <div class="card"${username ? ` data-username="${username}"` : ''}>
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
      results.forEach((cardData, index) => renderCards([...cardData].reverse(), nextBatch[index]))
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
        results.forEach((cardData, index) => renderCards([...cardData].reverse(), remainingFiles[index]))
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

// ── theme switcher ─────────────────────────────────────────────────────────────
// Sets data-theme on <body>. All styling is handled entirely by CSS — no per-card
// class changes needed. Switching a theme is a single attribute write.

const THEMES = ['candid-orange', 'mauritius', 'classic', 'retro']
const DEFAULT_THEME = 'candid-orange'

function applyTheme(themeName) {
  const theme = THEMES.includes(themeName) ? themeName : DEFAULT_THEME
  document.body.dataset.theme = theme
  localStorage.setItem('theme', theme)
  document.querySelectorAll('.theme-swatch').forEach(swatch => {
    swatch.classList.toggle('active', swatch.dataset.theme === theme)
  })
}

// Apply saved theme on load; fall back to default if unknown or first visit
applyTheme(localStorage.getItem('theme'))

document.querySelectorAll('.theme-swatch').forEach(swatch => {
  swatch.addEventListener('click', () => applyTheme(swatch.dataset.theme))
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
  const escaped = searchValue.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
  const regex = new RegExp(escaped, 'gi')
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
      const cardMatchesSearch = !searchInput || cards[index].textContent.toLowerCase().includes(searchInput)
      cards[index].classList.toggle('hidden', !cardMatchesSearch)
      if (cardMatchesSearch && searchInput) highlightMatchesInCard(searchInput, cards[index])
    }
  }, 500)
}

// ── share button ───────────────────────────────────────────────────────────────
// Uses the Web Share API on supported browsers (mobile + modern desktop).
// Falls back to copying the URL to clipboard on unsupported browsers (Firefox).

const shareButton = document.getElementById('shareButton')

shareButton.addEventListener('click', async () => {
  const shareData = {
    title: 'Contribute To This Project',
    text: 'Contribute To This Project. An easy Git and GitHub project for first-time contributors, with a full tutorial.',
    url: 'https://syknapse.github.io/Contribute-To-This-Project/',
  }

  if (navigator.share) {
    try {
      await navigator.share(shareData)
    } catch {
      // User cancelled the share dialog — do nothing
    }
  } else {
    // Fallback: copy URL to clipboard
    await navigator.clipboard.writeText(shareData.url)
    const original = shareButton.innerHTML
    shareButton.innerHTML = '<i class="fas fa-check"></i> Copied!'
    setTimeout(() => (shareButton.innerHTML = original), 2000)
  }
})

// ── scroll to top ──────────────────────────────────────────────────────────────
// Shows a "back to top" button once the user has scrolled 200px down.
// Scroll events are debounced to avoid running on every pixel of scroll.

const topButton = document.getElementById('topButton')
let scrollDebounceId = null

window.addEventListener('scroll', () => {
  if (scrollDebounceId) clearTimeout(scrollDebounceId)
  scrollDebounceId = setTimeout(updateTopButtonVisibility, 100)
})

function updateTopButtonVisibility() {
  const scrolled = document.body.scrollTop > 200 || document.documentElement.scrollTop > 200
  topButton.style.display = scrolled ? 'flex' : 'none'
}

topButton.addEventListener('click', () => {
  document.body.scrollTop = 0
  document.documentElement.scrollTop = 0
})
