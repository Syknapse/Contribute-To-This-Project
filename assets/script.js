const contributionsDisplay = document.getElementById('contributions-number')
const displayClass = document.getElementById('contributions-number').classList
const numberOfCards = document.getElementsByClassName('card').length
const numberOfContributors = numberOfCards - 1 // minus the example card
let displayNumber = 0
let i = 0

function countUp() {
  setTimeout(function() {
    displayNumber += 1
    // print result to html
    contributionsDisplay.textContent = displayNumber
    // increment and loop through
    i++
    if (i < numberOfContributors) {
      countUp()
    }

    if (i === numberOfContributors) {
      displayClass.add('pulse')
      displayClass.add('count-complete')
    }
  }, 15) // delay
}

countUp()

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
