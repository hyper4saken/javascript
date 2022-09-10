// CONCAT
// The concat() method is used to merge two or more arrays. This medthod does not change the existing arrays, but instead returns a new array

let fruits = ["banana", "orange"];
let veggies = ["cabbage", "brinjal"];

console.log(veggies.concat(fruits));
// or
console.log(fruits.concat(veggies));

let meats = ["chicken breast", "steak"];

let allFoods = fruits.concat(veggies, meats);
console.log(allFoods);
