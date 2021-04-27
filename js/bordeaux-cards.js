$(function() {

  //Array containing all questions and answers
const cards = [
  {
    question: `Name France's classic appellations for late harvest/ botrytis-affected wines in Bordeaux.`,
    answer: `Sauternes`
  },

  {
    question: `What does 'Gentil' mean?`,
    answer: `A blended wine including a minimum of 50% noble grapes. Superior designation for blends.`
  },

  {
    question: `What is in a typical Médoc blend?`,
    answer: `10%-20% Cabernet Franc, 25%-40% Merlot, 60%-80% Cabernet Sauvignon`
  },

  {
    question: `What are the 3 different quality levels of Bordeaux wine?`,
    answer: `Bordeaux, Region, Region + Chateau`
  },

  {
    question: `What are the 4 red wine regions that stand out in Bordeaux?`,
    answer: `Médoc, Graves/Pessac-Léognan, Pomerol, St-Émilion`
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