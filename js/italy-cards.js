$(function() {

  //Array containing all questions and answers
const cards = [
  {
    question: `What is Piedmonts most planted white grape?`,
    answer: `Moscato Bianco - generally for the production of sparkling wines DOCG Astivia Charmat method `
  },

  {
    question: `What is Italy's most important river in Piedmont?`,
    answer: `Po River`
  },

  {
    question: `Name a sparkling red wine form Piedmont (DOCG)`,
    answer: `Brachetto d'Acqui`
  },

  {
    question: `Name a DOCG wine made by metodo classico and the only true rival to the style of Champagne in Italy`,
    answer: `Franciacorta DOCG - chardonnay, pinot nero and a max of 50% pinot bianco are permitted`
  },

  {
    question: `Name all Italian wine classifications`,
    answer: `DOCG, DOC, DOP, IGT, Vino`
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