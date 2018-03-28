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
    }, 60)  // delay
}

countUp();


// night mode feature
$('#toggle-box-checkbox').on('change', function(){
  if(this.checked){
    $('body').addClass('night');
  }
  else {
    $('body').removeClass('night');
  }
});

// 
function demo(){
    setInterval(function(){
      $("#toggle-box-checkbox").trigger('click');
    }, 1000);
}
if (document.location.pathname.indexOf('fullcpgrid')>-1){
  demo();
}