/* 
  1. Store correct answers
   - When quiz begins, no answers are correct
*/

let correct = 0;

// 2. Store the rank of a player

let rank;

// 3. Select the <main> HTML element

const main = document.querySelector('main')

/*
  4. Ask at least 5 questions
   - Store each answer in a variable
   - Keep track of the number of correct answers
*/

const answer1 = prompt("Name a programming language that's also a gem.");
if ( answer1.toUpperCase() === 'Ruby') {
  coreect += 1;
}

const answer2 = prompt("Name a programming language that's also a snake.");
if ( answer2.toUpperCase() === 'Phyton') {
  coreect += 1;
}

const answer3 = prompt("What languages do you use to style web pages?");
if ( answer3.toUpperCase() === 'CSS') {
  coreect += 1;
}

const answer4 = prompt("What languages do you use to build the structure of the web pages?");
if ( answer4.toUpperCase() === 'HTML') {
  coreect += 1;
}

const answer5 = prompt("What languages do you use to build the structure of the web pages?");
if ( answer5.toUpperCase() === 'HTML') {
  coreect += 1;
}

/*
  5. Rank player based on number of correct answers
   - 5 correct = Gold
   - 3-4 correct = Silver
   - 1-2 correct = Bronze
   - 0 correct = No crown
*/


// 6. Output results to the <main> element

