// Nested arrays

const animalPairs = [
  ["doe", "buck"],
  ["ewe", "ram"],
  ["peahen", "peacock"],
];
console.log(animalPairs);

// indexing "peahen" and "peacock"
console.log(animalPairs[2]);

// indexing only "peacock"
console.log(animalPairs[2][1]);

// three levels of arrays

const animalPairs2 = [
  ["doe", ["buck", "stag"]],
  ["ewe", "ram"],
  ["peahen", "peacock"],
];
console.log(animalPairs2);

// indexing from three levels of arrays
console.log(animalPairs2[0][1][1]);
