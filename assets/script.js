// select card length
var numberOfCards = document.getElementsByClassName("card").length;
var displayNumber = 0;
var contributionsDisplay = document.getElementById("contributions-number");
var displayClass = document.getElementById("contributions-number").classList;
var i = 1;


function countUp() {
    setTimeout(function() {
        displayNumber += 1;
        // print result to html
        contributionsDisplay.textContent = displayNumber;
        // increment and loop through
        i++;
        if (i < numberOfCards){
            countUp();
        }
        if (i === numberOfCards-1){
            displayClass.add("pulse");
            displayClass.add("count-complete");
        }
    }, 80)  // delay
}

countUp();

// add effect

