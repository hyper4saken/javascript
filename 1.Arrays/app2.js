//else if / else

// example 1
let rating = 5;

if (rating === 3) {
  console.log("You are superman!");
} else if (rating === 2) {
  console.log("Umm kind of superman!");
} else if (rating === 1) {
  console.log("Get lost man");
} else {
  console.log("Shit");
}

// example 2
let highScore = 1200;
let userScore = 1300;

if (userScore >= highScore) {
  console.log(`Congrats! You have the new high score of ${userScore}`);
  highScore = userScore;
} else {
  console.log(
    `Good Game. Your score of ${userScore} did not beat the high score of ${highScore}.`
  );
}
