// 68. for loops + arrays
// To loop over an array, start at 0 and continue to the last index (length-1)

// exmaple 1
const examScore = [98, 77, 84, 91, 57, 66];

for (let i = 0; i < examScore.length; i++) {
  //reason for using < than <= cause length on arrays is 5 it will cause undefined in the end. lets run the same code with <=
  console.log(i, examScore[i]);
}

// running the same code with <= at last you get undefiend
for (let j = 0; j <= examScore.length; j++) {
  console.log(j, examScore[j]);
}

// example 2
// each elemnt is object
const myStudents = [
  {
    firstName: "Zeus",
    grade: 86,
  },
  {
    firstName: "Arthemis",
    grade: 97,
  },
  {
    firstName: "Hera",
    grade: 72,
  },
  {
    firstName: "Apollo",
    grade: 90,
  },
];

for (let k = 0; k < myStudents.length; k++) {
  let student = myStudents[k];
  //   declaring variable for literals if we don't define here we have to write long code like ${myStudents.[k].firstName}
  console.log(`${student.firstName} scored ${student.grade}`);
}

// Example 3

const word = "stressed";
for (let l = word.length - 1; l >= 0; l--) {
  console.log(word[l]);
}
// same code with reversed
const words = "stressed";
let reversedWord = "";
for (let l = word.length - 1; l >= 0; l--) {
  reversedWord += words[l];
}
console.log(reversedWord);

// example 4
// lets find the average of the total number
const myStudentsAvg = [
  {
    firstName: "Zeus",
    grade: 86,
  },
  {
    firstName: "Arthemis",
    grade: 97,
  },
  {
    firstName: "Hera",
    grade: 72,
  },
  {
    firstName: "Apollo",
    grade: 90,
  },
];
let total = 0;
for (let k = 0; k < myStudentsAvg.length; k++) {
  let studentAvg = myStudentsAvg[k];
  total += studentAvg.grade;
}
console.log(total / myStudentsAvg.length);
