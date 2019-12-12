var challengerOne = document.querySelector('#name-one-input');
var challengerTwo = document.querySelector('#name-two-input');
var guessOne = document.querySelector('#guess-one-input');
var guessTwo = document.querySelector('#guess-two-input');
var errorMessage = document.querySelector('.guess-error')
var submitGuessBtn = document.querySelector('#submit-guess-button')
var randomNum

window.onload = function() {
  generateRandomNumber()
}

submitGuessBtn.addEventListener('click', submitGuess)

function generateRandomNumber() {
  var minNum = Math.ceil(1)
  var maxNum = Math.floor(100)
  randomNum = Math.floor(Math.random() * (maxNum - minNum)) + minNum
  console.log(randomNum)
}

function enableSubmitGuessButton() {
  if (challengerOne.length && guessOne.length && challengerTwo.length && guessTwo.length) {
    console.log('enable submit', 'in here')
    submitGuessBtn.disabled = false;
  }
  else {
    errorMessage.hidden = false
  }
}

function submitGuess() {
  enableSubmitGuessButton()
}