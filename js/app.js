'use strict';

let userName = prompt('What is your name?');

console.log(userName);

questionBeer();
questionCostume();
questionAge();
questionGame();
questionHalloween();
numberGame();
movieGame();

// Question 1
function questionBeer(){
let beer = prompt('Do you like beer?');
console.log(beer);

let lowerCaseBeer = beer.toLowerCase();
let upperCaseBeer = beer.toUpperCase();

console.log(lowerCaseBeer);
console.log(upperCaseBeer);

if (lowerCaseBeer === 'yes' || lowerCaseBeer === 'y') {
  alert('Awesome! Me too!');
} else if ( lowerCaseBeer === 'no' || lowerCaseBeer === 'n') {
  alert('Thats too bad :(');
} else {
  alert('Please answer yes or no');
}
console.log(beer);
}


// Question 2

function questionCostume(){
let suit = prompt('Do you like my suit?');

let lowerCaseSuit = suit.toLowerCase();
let upperCaseSuit = suit.toUpperCase();

console.log(lowerCaseSuit);
console.log(upperCaseSuit);

if (lowerCaseSuit === 'yes' || lowerCaseSuit === 'y') {
  alert('Its a David S Pumkins Costume!');
} else if ( lowerCaseSuit === 'no' || lowerCaseSuit === 'n') {
  alert('Thats too bad :(');
} else {
  alert('Please answer yes or no');
}
}

// Question 3

function questionAge(){
let age = prompt('Am I over 40?');

let lowerCaseAge = age.toLowerCase();
let upperCaseAge = age.toUpperCase();

console.log(lowerCaseAge);
console.log(upperCaseAge);

if (lowerCaseAge === 'yes' || lowerCaseAge === 'y') {
  alert('Correct!');
} else if ( lowerCaseAge === 'no' || lowerCaseAge === 'n') {
  alert('I am actually');
} else {
  alert('Please answer yes or no');
}
}

// Question 4

function questionGame(){
let game = prompt('Do you want to play a game?');

let lowerCaseGame = game.toLowerCase();
let upperCaseGame  = game.toUpperCase();

console.log(lowerCaseGame);
console.log(upperCaseGame);

if (lowerCaseGame === 'yes' || lowerCaseGame === 'y') {
  alert('Let\'s play a board game!');
} else if ( lowerCaseGame === 'no' || lowerCaseGame === 'n') {
  alert('Bummer');
} else {
  alert('Please answer yes or no');
}
}

// Question 5
function questionHalloween(){
let halloween = prompt('Do you like Halloween?');

let lowerCaseHalloween = halloween.toLowerCase();
let upperCaseHalloween  = halloween.toUpperCase();

console.log(lowerCaseHalloween);
console.log(upperCaseHalloween);

if (lowerCaseHalloween === 'yes' || lowerCaseHalloween === 'y') {
  alert('Trick or Treat!');
} else if ( lowerCaseHalloween === 'no' || lowerCaseHalloween === 'n') {
  alert('That\'s too bad. Its my favorite time of year.');
} else {
  alert('Please answer yes or no');
}
}

alert('Thanks for visiting my website ' + userName);

// Number guessing game

function numberGame(){
let counter1 = 3;

while (counter1 > -1) {
  let userGuess = prompt('Guess a number between 1 and 10');
  if (userGuess == 7) {
    alert('Correct!');
    counter1 = -1;
  } else if (userGuess > 7) {
    alert('Too high. You have ' + counter1 + ' more guesses');
  } else if (userGuess < 7) {
    alert('Too low. You have ' + counter1 + ' more guesses');
  }
  counter1--;
}
alert('The correct answer was 7');
}
// Movie guessing game
function movieGame(){
let pointArray = [] // Creates an array for the number attempts
let correctMovies = ['scott pilgrim', 'ghost world'] // Correct answers
let counter = 6; // Counter for 6 guesses
let rightAnswer = false; // Switches the value for correct answer

while (rightAnswer === false && counter > 0) { // While loop. if var right Answer strictly equal to false and counter greater than 0 then run next line. Both conditions must be true.

  let userGuess1 = prompt('Which movies are based on graphic novels?'); // Prompt for user guess
  let userGuess = userGuess1.toLowerCase(); // changes user answer to lowercase

  for (let i = 0; i < correctMovies.length; i++) { // for loop. Establishes the variable i

    if (userGuess === correctMovies[i]) { // if var userGuess is strictly equal to any of the correctMovies array the run next line
      alert('Correct!') // Correct alert
      rightAnswer = true; // Right answer equals true stops the loop
      alert('Congratulations! You had ' + (pointArray.length) + ' wrong answers.') // Alert used pointArray length to tell the user how many attempts they had
      alert('Possible answers were: ' + correctMovies [0] + ' and '+ correctMovies [1]); // alert to tell the user the correct answers from correctMovies array
    }
  }

  if (rightAnswer === false) { // if right answer is found to be false then an alert follows and the while loop is run again
    alert('Incorrect.'); // alert for incorrect

  }
  counter--; //decrement counter (Counts down by 1)

  pointArray.push(counter); // this pushes the counter to a new array called pointArray

  console.log(pointArray) // console.log check

}
}