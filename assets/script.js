import numberOfFiles from '../archive/archiveFilesTotal.js';

const contributionsDisplay = document.getElementById('contributions-number');
const displayClass = document.getElementById('contributions-number').classList;
let displayNumber = 0;
let searchTimeout = null;
let nightModeIntervalId = null;

// Create an array of ascending numbers corresponding with the number of archive files
const numberOfFilesArray = Array.from({ length: numberOfFiles }, (_, index) => index + 1);
const archiveCardsDirectory = './archive/cards';

// Import all archived cards and insert them into the DOM
const fetchAndDisplayCards = async () => {
  const grid = document.getElementById('contributions');
  
  for (const number of numberOfFilesArray) {
    try {
      const response = await fetch(`${archiveCardsDirectory}/archive_${number}.json`);
      const data = await response.json();
      const file = `archive_${number}.json`;
      const link = `https://github.com/Syknapse/Contribute-To-This-Project/blob/master/archive/cards/${file}`;
      
      const cardsHTML = data.map(card => {
        const { name, contacts, about, resources } = card;
        return `
          <div class="card">
            <!-- Fetched from Archive: ${file} -->
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
            <p><small>Fetched From: <a href="${link}" target="_blank">${file}</a></small></p>
          </div>
        `;
      }).join('');
      
      grid.innerHTML += cardsHTML;
    } catch (error) {
      console.error(`Error importing ${file}:`, error);
    } finally {
      countUp();
    }
  }

  showInfoInConsole();
};

// Display the number of contributions
const countUp = () => {
  const numberOfCards = document.getElementsByClassName('card').length;
  const numberOfContributors = numberOfCards - 1; // Minus the example card

  if (displayNumber < numberOfContributors) {
    displayNumber++;
    contributionsDisplay.textContent = displayNumber;
    setTimeout(countUp, 15);
  } else {
    displayClass.add('rubberBand');
  }
};

// Prompt to archive when there are too many cards
const showInfoInConsole = () => {
  const cardsInIndex = document.getElementsByClassName('card').length - 1;
  
  console.info('Cards in index.html:', cardsInIndex);
  
  if (cardsInIndex > 100) {
    console.warn(
      `Too many cards in index.html: ${cardsInIndex}. Run the archive_cards script. Follow instructions in archive/archiving_cards_guide`
    );
  }
};

// Night mode feature
const toggleNightMode = (isNightMode) => {
  document.body.classList.toggle('night', isNightMode);
  
  const cards = document.getElementsByClassName('card');
  let cardIndex = 0;
  const updateCount = 50; // Number of cards to update in one cycle
  const updateInterval = 500;

  const updateCardCss = () => {
    for (let i = 0; i < updateCount && cardIndex < cards.length; i++, cardIndex++) {
      cards[cardIndex].classList.toggle('night', isNightMode);
    }
    
    if (cardIndex >= cards.length) {
      clearInterval(nightModeIntervalId);
    }
  };

  updateCardCss(); // Update the first batch immediately
  nightModeIntervalId = setInterval(updateCardCss, updateInterval);
};

document.getElementById('toggle-box-checkbox').addEventListener('change', (e) => {
  if (nightModeIntervalId) {
    clearInterval(nightModeIntervalId);
  }
  
  toggleNightMode(e.target.checked);
});

// Current year for footer
document.getElementById('currentYear').innerText = new Date().getFullYear();

// Search bar functionality
const searchCard = () => {
  const input = searchBar.value.toLowerCase();

  if (searchTimeout) {
    clearTimeout(searchTimeout);
  }

  searchTimeout = setTimeout(() => {
    const cards = document.getElementsByClassName('card');
    
    clearSearchHighlights();

    Array.from(cards).forEach(card => {
      const cardText = card.textContent.toLowerCase();
      const isMatch = cardText.includes(input);
      card.style.display = isMatch ? 'flex' : 'none';
      
      if (isMatch) {
        applyHighlightToSearchResults(input, card);
      }
    });
  }, 500); // 500 millisecond delay between keystrokes
};

const clearSearchHighlights = () => {
  document.querySelectorAll('mark').forEach(mark => {
    mark.outerHTML = mark.innerText;
  });
};

const applyHighlightToSearchResults = (value, card) => {
  const regex = new RegExp(value, 'gi');
  const cardElements = Array.from(card.querySelectorAll('*')).filter(
    element => element.children.length === 0 && element.textContent.toLowerCase().includes(value)
  );

  cardElements.forEach(match => {
    match.innerHTML = match.textContent.replaceAll(regex, `<mark>$&</mark>`);
  });
};

document.getElementById('searchbar').addEventListener('input', searchCard);

// Scroll-to-top button functionality
const debounce = (func, wait) => {
  let timeout;
  return () => {
    clearTimeout(timeout);
    timeout = setTimeout(func, wait);
  };
};

const scrollFunction = debounce(() => {
  const topButton = document.getElementById('topButton');
  const shouldShow = document.body.scrollTop > 500 || document.documentElement.scrollTop > 500;
  topButton.style.display = shouldShow ? 'flex' : 'none';
}, 100);

window.onscroll = scrollFunction;

document.getElementById('topButton').addEventListener('click', () => {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE, and Opera
});

// Initial fetch of cards
fetchAndDisplayCards();
