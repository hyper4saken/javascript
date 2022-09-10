// JOIN and REVERSE

// reverse() method reverses and array in place. The first array elemnt becomes the last, and the last array elemnt becomes the first.
let letters = ["H", "T", "O", "M", "E"];
console.log(letters);
letters.reverse();
console.log(letters);

// the join() method creas and retruns a new string by concatenating all of the lements in array, seperated by commas or a specified separator string. If the array has only one item, then that item will be returned without using the seprator.
let letter2 = ["H", "T", "O", "M", "E"];
console.log(letter2.join());
console.log(letter2.reverse().join("."));
