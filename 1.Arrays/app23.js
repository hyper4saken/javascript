const student = {
  firstName: "David",
  lastName: "Jones",
  strengths: ["Music", "Art"],
  exams: {
    midterm: 92,
    final: 88,
  },
};

console.log(student);

// if we want to find the average of the exams
const avg = (student.exams.midterm + student.exams.final) / 2;
console.log("Student average on both exams is " + avg);

// if you want access 'Art' form strengths
console.log(student.strengths[1]);

const game = {
  player1: {
    username: "Cody",
    playingAs: "X",
  },
  payer2: {
    username: "Eva",
    playingAs: "O",
  },
  board: [
    ["O", null, "X"],
    ["X", "O", null],
    [null, "X", "O"],
  ],
};
