'use strict';

let userName = prompt('What is your name?');

console.log(userName);

// Question 1

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

// Question 2

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

// Question 3

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

// Question 4

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

// Question 5

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

alert('Thanks for visiting my website ' + userName);


