// 71. More with while loops

// while loops more excels when you're writing a loop where you don't know exactly how many times its going to run.
// example the chess game

// For simple version whould be to make a number fame and a guessing game where we won't even be guessing oursevel

const target = Math.floor(Math.random() * 10);
let guess = Math.floor(Math.random() * 10);
while (guess !== target) {
  console.log(`Target: ${target} Guess: ${guess}`);
  guess = Math.floor(Math.random() * 10);
}
console.log(`Target: ${target} Guess: ${guess}`);
console.log(
  `Congrats while loop complete matching mubers was form Target: ${target} and from Guess: ${guess}`
);
