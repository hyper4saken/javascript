// 69. Nested For Loops

// Example 1
// Outer loops run first for once and inner loops complete the cycle and then outer loops run again till it will meet its condition
for (let i = 1; i <= 5; i++) {
  console.log("OUTER LOOP:", i);
  for (let j = 10; j >= 0; j -= 2) {
    console.log("  INNER LOOP:", j);
  }
}

// example 2
const gameBoard = [
  [4, 32, 8, 4],
  [64, 8, 32, 2],
  [8, 32, 16, 4],
  [2, 8, 4, 2],
];

let totalScore = 0;
for (let k = 0; k < gameBoard.length; k++) {
  let row = gameBoard[k];
  for (let l = 0; l < row.length; l++) {
    totalScore += row[l];
  }
}
console.log(totalScore);
