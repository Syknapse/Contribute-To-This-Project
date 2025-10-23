import numberOfFiles from '../archive/archiveFilesTotal.js';

document.addEventListener('DOMContentLoaded', async () => {
  const contributionsDisplay = document.getElementById('contributions-number');
  const contributionsClass = contributionsDisplay.classList;
  const grid = document.getElementById('contributions');
  const searchBar = document.getElementById('searchbar');
  const topButton = document.getElementById('topButton');
  const currentYearSpan = document.getElementById('currentYear');
  const toggleCheckbox = document.getElementById('toggle-box-checkbox');

  let displayNumber = 0;
  let searchTimeout = null;
  let nightModeIntervalId = null;

  currentYearSpan.textContent = new Date().getFullYear();

  // ✅ Fetch all JSON files in parallel
  const archiveCardsDirectory = './archive/cards';
  const filePromises = Array.from({ length: numberOfFiles }, (_, i) =>
    fetch(`${archiveCardsDirectory}/archive_${i + 1}.json`)
      .then(res => res.json().then(data => ({ num: i + 1, data })))
      .catch(err => {
        console.error(`Failed to load archive_${i + 1}.json:`, err);
        return null;
      })
  );

  const results = (await Promise.all(filePromises)).filter(Boolean);

  // ✅ Build all cards in memory first, then inject once
  const cardHTML = results
    .map(({ num, data }) => {
      const file = `archive_${num}.json`;
      const link = `https://github.com/Syknapse/Contribute-To-This-Project/blob/master/archive/cards/${file}`;

      return data
        .map(({ name, contacts, about, resources }) => `
          <div class="card">
            <p class="name">${name}</p>
            <p class="contact">
              ${contacts.map(c => `
                <i class="${c.icon}"></i>
                <a href="${c.link}" target="_blank">${c.handle}</a>
              `).join('')}
            </p>
            <p class="about">${about}</p>
            <div class="resources">
              <p>3 Useful Dev Resources</p>
              <ul>
                ${resources.map(r => `
                  <li><a href="${r.link}" target="_blank" title="${r.title}">${r.text}</a></li>
                `).join('')}
              </ul>
            </div>
            <p><small>Fetched From: <a href="${link}" target="_blank">${file}</a></small></p>
          </div>
        `).join('');
    })
    .join('');

  grid.innerHTML += cardHTML;

  // ✅ Count animation (requestAnimationFrame based)
  const numberOfContributors = document.getElementsByClassName('card').length - 1;
  const countUp = () => {
    if (displayNumber < numberOfContributors) {
      displayNumber++;
      contributionsDisplay.textContent = displayNumber;
      requestAnimationFrame(countUp);
    } else {
      contributionsClass.add('rubberBand');
    }
  };
  countUp();

  // ✅ Log info
  const cardsInIndex = document.getElementsByClassName('card').length - 1;
  console.info('Cards in index.html:', cardsInIndex);
  if (cardsInIndex > 100) {
    console.warn(`Too many cards in index.html: ${cardsInIndex}. Run the archive_cards script.`);
  }

  // ✅ Night Mode Efficient Update
  toggleCheckbox.addEventListener('change', e => {
    if (nightModeIntervalId) clearInterval(nightModeIntervalId);

    const cards = document.querySelectorAll('.card');
    const isNightMode = e.target.checked;

    document.body.classList.toggle('night', isNightMode);

    let index = 0;
    const batchSize = 50;

    const updateBatch = () => {
      for (let i = 0; i < batchSize && index < cards.length; i++, index++) {
        cards[index].classList.toggle('night', isNightMode);
      }
      if (index < cards.length) {
        requestAnimationFrame(updateBatch);
      }
    };
    updateBatch();
  });

  // ✅ Search with Debounce
  function clearHighlights() {
    document.querySelectorAll('mark').forEach(mark => (mark.outerHTML = mark.innerText));
  }

  function highlightMatches(value, card) {
    const regex = new RegExp(value, 'gi');
    card.querySelectorAll('*:not(:has(*))').forEach(el => {
      if (el.textContent.toLowerCase().includes(value)) {
        el.innerHTML = el.textContent.replace(regex, `<mark>$&</mark>`);
      }
    });
  }

  searchBar.addEventListener('input', () => {
    clearTimeout(searchTimeout);
    searchTimeout = setTimeout(() => {
      const query = searchBar.value.toLowerCase().trim();
      clearHighlights();
      document.querySelectorAll('.card').forEach(card => {
        const match = card.textContent.toLowerCase().includes(query);
        card.style.display = match ? 'flex' : 'none';
        if (match && query) highlightMatches(query, card);
      });
    }, 300);
  });

  // ✅ Scroll-to-top (with throttle)
  const handleScroll = (() => {
    let ticking = false;
    return () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const show = window.scrollY > 500;
          topButton.style.display = show ? 'flex' : 'none';
          ticking = false;
        });
        ticking = true;
      }
    };
  })();

  window.addEventListener('scroll', handleScroll);
  topButton.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
});