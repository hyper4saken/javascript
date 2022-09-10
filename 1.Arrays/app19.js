// the splice() method changes the contents of an array by removing or replacing existing elements and/or adding new elements in place.

let animals = ["shark", "salmon", "whale", "bear", "lizard", "tortoise"];
console.log(animals);

// splice(startIndex, deleteCount, itemsToInsert);

// insert new value after shark
// INSERTING w/ SPLICE
// at index 1, delete 0 items and insert 'octopus'
animals.splice(1, 0, "octopus");
console.log(animals);

// delete value from array, `3` is the value position and `2` is how many items you want to delete
// at index `3`, delete 2 items
animals.splice(3, 2);
console.log(animals);

// REPLACING w/ SPLICE
// at index 3, delete 2 items and replace them with "orca" and "grizzly"
animals.splice(3, 2, "orca", "grizzly");
console.log(animals);
