import numberOfFiles from '../archive/archiveFilesTotal.js';

const contributionsDisplay = document.getElementById('contributions-number');
const displayClass = contributionsDisplay.classList;
const searchBar = document.getElementById('searchbar');
const topButton = document.getElementById('topButton');
const currentYearSpan = document.getElementById('currentYear');
const archiveCardsDirectory = './archive/cards';
const updateCount = 50;
const updateInterval = 500;
const searchDelay = 500; // Milliseconds

let displayNumber = 0;
let searchTimeout = null;
let nightModeIntervalId = null;

// Update the current year in the footer
currentYearSpan.innerText = new Date().getFullYear();

// Fetch and render all cards
const fetchCards = async () => {
  try {
    const responses = await Promise.all(
      Array.from({ length: numberOfFiles }, (_, index) =>
        fetch(`${archiveCardsDirectory}/archive_${index + 1}.json`).then(response => response.json())
      )
    );
    responses.forEach(data => {
      const file = `archive_${data[0].fileNumber}.json`; // Adjust according to your JSON structure
      const link = `https://github.com/Syknapse/Contribute-To-This-Project/blob/master/archive/cards/${file}`;
      const cards = data.map(card => createCardHTML(card, link)).join('');
      const grid = document.getElementById('contributions');
      grid.innerHTML += cards;
    });
  } catch (error) {
    console.error('Error importing archive JSON files:', error);
  } finally {
    countUp();
  }
};

// Create HTML for a card
const createCardHTML = (card, fileLink) => {
  const { name, contacts, about, resources } = card;
  return `
    <div class="card">
      <!-- Fetched from Archive: ${fileLink} -->
      <p class="name">${name}</p>
      <p class="contact">
        ${contacts.map(contact => `
          <i class="${contact.icon}"></i>
          <a href="${contact.link}" target="_blank">${contact.handle}</a>
        `).join('')}
      </p>
      <p class="about">${about}</p>
      <div class="resources">
        <p>3 Useful Dev Resources</p>
        <ul>
          ${resources.map(resource => `
            <li>
              <a href="${resource.link}" target="_blank" title="${resource.title}">${resource.text}</a>
            </li>
          `).join('')}
        </ul>
      </div>
      <p><small>Fetched From: <a href="${fileLink}" target="_blank">${fileLink}</a></small></p>
    </div>
  `;
};

// Count up animation for the number of contributions
const countUp = () => {
  const numberOfCards = document.getElementsByClassName('card').length;
  const numberOfContributors = numberOfCards - 1; // minus the example card

  const updateDisplay = () => {
    if (displayNumber < numberOfContributors) {
      displayNumber++;
      contributionsDisplay.textContent = displayNumber;
      setTimeout(updateDisplay, 15);
    } else {
      displayClass.add('rubberBand');
    }
  };

  updateDisplay();
};

// Night mode toggle
const toggleNightMode = (isNightMode) => {
  document.body.classList.toggle('night', isNightMode);
  const cards = document.getElementsByClassName('card');
  Array.from(cards).forEach(card => {
    card.classList.toggle('night', isNightMode);
  });
};

document.getElementById('toggle-box-checkbox').addEventListener('change', e => {
  if (nightModeIntervalId) {
    clearInterval(nightModeIntervalId);
  }

  const isNightMode = e.target.checked;
  toggleNightMode(isNightMode);
});

// Search functionality
function clearSearchHighlights() {
  document.querySelectorAll('mark').forEach(mark => {
    mark.outerHTML = mark.innerText;
  });
}

function applyHighlightToSearchResults(value, card) {
  const regex = new RegExp(value, 'gi');
  Array.from(card.querySelectorAll('*'))
    .filter(element => element.children.length === 0 && element.textContent.toLowerCase().includes(value))
    .forEach(match => {
      match.innerHTML = match.textContent.replace(regex, `<mark>$&</mark>`);
    });
}

function searchCard() {
  const input = searchBar.value.toLowerCase();

  if (searchTimeout) {
    clearTimeout(searchTimeout);
  }

  searchTimeout = setTimeout(() => {
    const cards = document.getElementsByClassName('card');

    clearSearchHighlights();

    Array.from(cards).forEach(card => {
      const cardText = card.textContent.toLowerCase();
      card.style.display = cardText.includes(input) ? 'flex' : 'none';
      if (card.style.display === 'flex') {
        applyHighlightToSearchResults(input, card);
      }
    });
  }, searchDelay);
}

searchBar.addEventListener('input', searchCard);

// Scroll-to-top button
const debounceScrollFunction = () => {
  if (scrollTimeout) {
    clearTimeout(scrollTimeout);
  }
  scrollTimeout = setTimeout(scrollFunction, 100);
};

let scrollTimeout = null;

window.onscroll = debounceScrollFunction;

function scrollFunction() {
  if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
    topButton.style.display = 'flex';
  } else {
    topButton.style.display = 'none';
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

topButton.addEventListener('click', topFunction);

// Initialize the page by fetching cards
fetchCards();
