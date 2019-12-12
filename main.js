let challengerOne = document.querySelector('#name-one-input');
let challengerTwo = document.querySelector('#name-two-input');
let guessOne = document.querySelector('#guess-one-input');
let guessTwo = document.querySelector('#guess-two-input');
var randomNum

window.onload = () => {
  generateRandomNumber()
}

const generateRandomNumber = () => {
  let minNum = Math.ceil(1)
  let maxNum = Math.floor(100)
  randomNum = Math.floor(Math.random() * (maxNum - minNum)) + minNum
}