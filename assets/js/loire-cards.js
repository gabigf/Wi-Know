$(function() {

  //Array containing all questions and answers
const cards = [
  {
    question: `Name the major sub-regions of the Loire Valley`,
    answer: `Pays Nantars, Anjou-Saumur, Touraine, Central vineyards`
  },

   {
    question: `Define Pouilly-Fumé`,
    answer: `Pouilly-Fumé is 100% sauvignon blanc from the Loire Valley`
  },

   {
    question: `Define Pouilly-Fuissé`,
    answer: `Pouilly-Fuissé is 100% chardonnay from Mâconnais region in Burgundy`
  }
]


// Counter to keep track of which card is being displayed
let currentIndex = 0;


// Total amount of cards to cycle through
const totalCards = cards.length;


// Variables to set card display elements
const setQuestionDisplay = () => $('#question').html(`${cards[currentIndex].question}`);
const setAnswerDisplay = () => $('#answer').html(`${cards[currentIndex].answer}`);
const setCardIndexDisplay = () => $('h4').html(`${currentIndex + 1} | ${totalCards}`);


// Function to set card display
const setDisplay = () => {
  setCardIndexDisplay();
  setQuestionDisplay();
  setAnswerDisplay();
}


// Function to set the initial display
const initialDisplay = () => {
  $('#question').html(`${cards[0].question}`);
  $('#answer').html(`${cards[0].answer}`);
  $('h4').html(`${currentIndex + 1} | ${totalCards}`);
}


// Card flip animation with click eventListener
$('.inner-card').on('click', function() {
  $(this).toggleClass('flip');
});


// Click event listener for right arrow button
$('button.right').on('click', function() {
  currentIndex++;
  if(currentIndex === totalCards) {
    currentIndex = 0;
  }
  if($('.inner-card').hasClass('flip')) {
    $('.inner-card').toggleClass('flip');
  }
    setDisplay();
});


// Click event listener for left arrow button
$('button.left').on('click', function() {
  currentIndex--;
  if(currentIndex < 0) {
    currentIndex = totalCards - 1;
  }
  if($('.inner-card').hasClass('flip')) {
    $('.inner-card').toggleClass('flip');
  }
    setDisplay();
});


// Calling function to set the initial display when loading the page
initialDisplay();


});