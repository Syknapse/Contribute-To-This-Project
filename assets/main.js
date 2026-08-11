// ── shared state ───────────────────────────────────────────────────────────────
const contributionsDisplay = document.getElementById('contributions-number')
const contributionsDisplayClass = document.getElementById('contributions-number').classList
const archiveCardsDirectory = './archive/json'
const searchBar = document.getElementById('searchbar')

let countUpCurrentNumber = 0
let searchTimeout = null
let archiveFilesToLoad = []
let archiveLoadedCount = 0
let intersectionObserver = null
let archiveFullyLoaded = false

const ARCHIVE_BATCH_SIZE = 3
let searchIndex = [] // Fast data storage

// ── search index loading ───────────────────────────────────────────────────────
fetch('./assets/search-index.json')
  .then(response => response.json())
  .then(data => {
    searchIndex = data
    console.log('🚀 Search Index loaded and ready!')
  })
  .catch(err => console.error('Failed to load search index:', err))

// ── manifest & initialisation ──────────────────────────────────────────────────
fetch('./archive/manifest.json')
  .then(response => response.json())
  .then(manifest => {
    archiveFilesToLoad = [...manifest.files].reverse()
    countUpTo(manifest.totalArchivedCards)
    initLazyLoading()
  })
  .catch(error => console.error('Failed to load archive manifest:', error))

// ── card rendering ─────────────────────────────────────────────────────────────
function renderCards(cardDataArray, sourceFile) {
  const sourceFileUrl = `https://github.com/Syknapse/Contribute-To-This-Project/blob/master/archive/json/${sourceFile}`

  const cardsHtml = cardDataArray
    .map(card => {
      const { username, name, contacts, about, resources } = card
      return `
        <div class="card"${username ? ` data-username="${username}"` : ''}>
          <p class="name">${name}</p>
          <p class="contact">
            ${contacts
              .map(
                contact =>
                  `<a href="${contact.link}" target="_blank"><i class="${contact.icon}"></i>${contact.handle}</a>`
              )
              .join('')}
          </p>
          <p class="about">${about}</p>
          <div class="resources">
            <p>3 Useful Dev Resources</p>
            <ul>
              ${resources.map(res => `<li><a href="${res.link}" target="_blank" title="${res.title}">${res.text}</a></li>`).join('')}
            </ul>
          </div>
          <p><small>Fetched From: <a href="${sourceFileUrl}" target="_blank">${sourceFile}</a></small></p>
        </div>
      `
    })
    .join('')

  const grid = document.getElementById('contributions')
  grid.insertAdjacentHTML('beforeend', cardsHtml)
}

// ── lazy loading ───────────────────────────────────────────────────────────────
function loadNextBatch() {
  const nextBatch = archiveFilesToLoad.slice(archiveLoadedCount, archiveLoadedCount + ARCHIVE_BATCH_SIZE)
  if (nextBatch.length === 0) {
    stopLazyLoading()
    return
  }
  archiveLoadedCount += nextBatch.length

  Promise.all(nextBatch.map(file => fetch(`${archiveCardsDirectory}/${file}`).then(res => res.json())))
    .then(results => {
      results.forEach((cardData, index) => renderCards([...cardData].reverse(), nextBatch[index]))
      if (archiveLoadedCount >= archiveFilesToLoad.length) stopLazyLoading()
    })
    .catch(error => console.error('Error loading archive batch:', error))
}

function stopLazyLoading() {
  if (intersectionObserver) {
    intersectionObserver.disconnect()
    intersectionObserver = null
  }
  archiveFullyLoaded = true
}

function initLazyLoading() {
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
}

// ── optimized search ───────────────────────────────────────────────────────────
searchBar.addEventListener('input', searchCard)

function clearSearchHighlights() {
  document.querySelectorAll('mark').forEach(mark => {
    mark.outerHTML = mark.innerText
  })
}

function highlightMatchesInCard(searchValue, cardElement) {
  const escaped = searchValue.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
  const regex = new RegExp(escaped, 'gi')
  const leafNodes = Array.from(cardElement.querySelectorAll('*')).filter(
    el => el.children.length === 0 && el.textContent.toLowerCase().includes(searchValue)
  )
  if (searchValue.length > 0) {
    leafNodes.forEach(node => (node.innerHTML = node.textContent.replaceAll(regex, `<mark>$&</mark>`)))
  }
}

function searchCard() {
  const query = searchBar.value.toLowerCase()
  if (searchTimeout) clearTimeout(searchTimeout)

  searchTimeout = setTimeout(() => {
    const cards = document.getElementsByClassName('card')
    clearSearchHighlights()

    // 1. Filter the fast JSON index
    const matches = searchIndex.filter(item => item.n.includes(query) || item.a.includes(query))

    // 2. Map matches to a Set for O(1) lookup speed
    const matchedUsernames = new Set(matches.map(m => m.u))

    // 3. Toggle visibility and highlight
    for (let card of cards) {
      const username = card.dataset.username
      const isMatch = !query || matchedUsernames.has(username)

      card.classList.toggle('hidden', !isMatch)

      if (isMatch && query) {
        highlightMatchesInCard(query, card)
      }
    }
  }, 300)
}

// ── contribution counter ───────────────────────────────────────────────────────
function countUpTo(targetNumber) {
  const totalSteps = 50
  const stepInterval = 1500 / totalSteps
  const stepIncrement = Math.ceil(targetNumber / totalSteps)

  function tick() {
    countUpCurrentNumber = Math.min(countUpCurrentNumber + stepIncrement, targetNumber)
    contributionsDisplay.textContent = countUpCurrentNumber
    if (countUpCurrentNumber < targetNumber) {
      setTimeout(tick, stepInterval)
    } else {
      contributionsDisplayClass.add('rubberBand')
    }
  }
  tick()
}

// ── theme & utility ────────────────────────────────────────────────────────────
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

applyTheme(localStorage.getItem('theme'))
document.querySelectorAll('.theme-swatch').forEach(swatch => {
  swatch.addEventListener('click', () => applyTheme(swatch.dataset.theme))
})

document.getElementById('currentYear').innerText = new Date().getFullYear()

// ── share & scroll ─────────────────────────────────────────────────────────────
const shareButton = document.getElementById('shareButton')
shareButton.addEventListener('click', async () => {
  const shareData = {
    title: 'Contribute To This Project',
    url: 'https://syknapse.github.io/Contribute-To-This-Project/',
  }
  if (navigator.share) {
    try {
      await navigator.share(shareData)
    } catch {}
  } else {
    await navigator.clipboard.writeText(shareData.url)
  }
})

const topButton = document.getElementById('topButton')
window.addEventListener('scroll', () => {
  const scrolled = document.documentElement.scrollTop > 200
  topButton.style.display = scrolled ? 'flex' : 'none'
})

topButton.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' })
})
