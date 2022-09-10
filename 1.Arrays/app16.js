// includes() and indexOf()

// include() method determines whether an arry inclues a certain value among its entries, returning 'true' or 'false' as appropriate.

let ingredients = [
  "water",
  "corn starch",
  "flour",
  "cheese",
  "brown sugar",
  "shrimp",
  "eel",
  "butter",
];

ingredients.includes("fish");
// it will return 'false'
ingredients.includes("eel");
// it will return 'true'
ingredients.includes("corn");
// it will return 'false' cause it will match exact strings

if (ingredients.includes("eel")) {
  console.log("ewwwwwwwwwwwwwwwwww");
}
// if it is true it will print out 'ewwwwwwwwwwww'

// indexOf() method returns the first index at which a given element can be found in the array, or -1 if it is not present.
ingredients.indexOf("brown sugar");
// it will retrun 4
ingredients.indexOf("yellow");
// it will retrun -1
