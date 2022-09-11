// 72. Break
//  There's special keyword in JavaScript called Brake, which we can use inside of loops to break out of that loop to stop its execution whenever JavaScript encouters break, that loop that it's enclosed is done
// Its not very commonly used in a for loop
// example 1

for (let i = 0; i < 10; i++) {
  console.log(i);
  if (i === 5) {
    break;
  }
}
// using break we can restructure our wile loop

const target = Math.floor(Math.random() * 10);
let guess = Math.floor(Math.random() * 10);

while (true) {
  if (target === guess) break;
  console.log(`Target: ${target} Guess: ${guess}`);
  guess = Math.floor(Math.random() * 10);
}
console.log(`Target: ${target} Guess: ${guess}`);
console.log(
  `Congrats while loop complete matching mubers was form Target: ${target} and from Guess: ${guess}`
);
