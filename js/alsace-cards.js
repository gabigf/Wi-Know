$(function() {

  //Array containing all questions and answers
const cards = [
  {
    question: `What would best describe Alsace's growing conditions?`,
    answer: `Varied soil types, dry, and sunny.`
  },

  {
    question: `What is a late harvest wine of Alsace called?`,
    answer: `Vendange Tardive`
  },

  {
    question: `What is 'Selection de Grains Nobles'?`,
    answer: `A late harvest, botrytized, sweet wine.`
  },

  {
    question: `What percentage of the Alsace wine produced is red?`,
    answer: `0-15`
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