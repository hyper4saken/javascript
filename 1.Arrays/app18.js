// the slice() method returs a shallow copy of a portion of an array into a new array object selected form begin to end(end not included) where begin and end represent the index of items in that array. The original arry will not be modified.
let animals = ["shark", "salmon", "whale", "bear", "lizard", "tortoise"];
console.log(animals);

let swimmers = animals.slice(0, 3);
console.log(swimmers);

let mammals = animals.slice(2, 4);
console.log(mammals);

let reptiles = animals.slice(4);
console.log(reptiles);

let quadruped = animals.slice(-3);
console.log(quadruped);

// you can also make a copy of an array using slice()

let copyAnimal = animals.slice();
console.log(copyAnimal);
