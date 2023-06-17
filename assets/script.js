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
const NUMBER_OF_FILES = 18
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

// JSON format archive fetching
const archiveFiles = 18
// Function to fetch the archive cards from JSON files and render them on the website
function fetchArchiveCards() {
  // Get the container element on your website where you want to render the cards
  const container = document.getElementById('archiveContainer');

  // Loop through each archive file
  for (let i = 1; i <= +archiveFiles; i++) {
    // Construct the file path
    // const filePath = `../archive/archive_${i}.json`;
    const filePath = `archive/archive_${i}.json`;

    // Fetch the JSON file
    fetch(filePath)
      .then(response => response.json())
      .then(data => {
        // Render the archive cards on the website
        renderArchiveCards(data, container);
      })
      .catch(error => {
        console.log(`Error fetching ${filePath}:`, error);
      });
  }
}

// Function to render the archive cards on the website
function renderArchiveCards() {
  // Fetch the JSON data from the archive files
  for (let i = 1; i <= archiveFiles; i++) {
    fetch(`archive/archive_${i}.json`)
      .then((response) => response.json())
      .then((data) => {
        // Iterate over each contributor in the JSON data
        data.forEach((contributor) => {
          // Create HTML elements for the contributor's card
          const card = document.createElement("div");
          card.classList.add("card");

          const name = document.createElement("p");
          name.classList.add("name");
          name.textContent = contributor.name;
          card.appendChild(name);

          const contact = document.createElement("p");
          contact.classList.add("contact");
          contributor.contacts.forEach((socialMedia) => {
            const link = document.createElement("a");
            link.href = socialMedia.link;
            link.target = "_blank";
            const icon = document.createElement("i");
            icon.classList.add("fab", `fa-${socialMedia.title}`);
            link.appendChild(icon);
            contact.appendChild(link);
          });
          card.appendChild(contact);

          const about = document.createElement("p");
          about.classList.add("about");
          about.textContent = contributor.about;
          card.appendChild(about);

          const resources = document.createElement("div");
          resources.classList.add("resources");
          const resourcesTitle = document.createElement("p");
          resourcesTitle.textContent = `${contributor.resources.length} Useful Dev Resources`;
          resources.appendChild(resourcesTitle);

          const resourcesList = document.createElement("ul");
          contributor.resources.forEach((resource) => {
            const resourceItem = document.createElement("li");
            const resourceLink = document.createElement("a");
            resourceLink.href = resource.link;
            resourceLink.target = "_blank";
            resourceLink.title = resource.title;
            resourceLink.textContent = resource.title;
            resourceItem.appendChild(resourceLink);
            resourcesList.appendChild(resourceItem);
          });

          resources.appendChild(resourcesList);
          card.appendChild(resources);

          // Append the contributor's card to the container
          const container = document.getElementById("archiveContainer");
          container.appendChild(card);
        });
      })
      .catch((error) => {
        console.error(`Error fetching archive_${i}.json:`, error);
      });
  }
}

// Call the function to fetch and render the archive cards
fetchArchiveCards();

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
let mybutton = document.getElementById('myBtn')

// When the user scrolls down 500px from the top of the document, show the button
window.onscroll = function() {
  scrollFunction()
}

function scrollFunction() {
  if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
    mybutton.style.display = 'flex'
  } else {
    mybutton.style.display = 'none'
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0 // For Safari
  document.documentElement.scrollTop = 0 // For Chrome, Firefox, IE and Opera
}
