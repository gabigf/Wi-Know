$(function() {

  //Array containing all questions and answers
const cards = [
  {
    question: `Which 3 grapes can winemakers use to produce Champagne`,
    answer: `Chardonnay, Pinot Meunier, Pinot Noir`
  },

   {
    question: `Name 3 main areas of Champagne`,
    answer: `Marne Valley, Côte des Blancs, Reims Mountain`
  },

   {
    question: `Define dosage`,
    answer: `A mixture of wine and sugar that replaces the wine lost during disgorging.`
  },

  {
    question: `What are the age times for non vintage champagnes`,
    answer: `At least 15 months after bottling`
  },

  {
    question: `What are the age times for vintage champagnes`,
    answer: `At least 3 years after bottling`
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