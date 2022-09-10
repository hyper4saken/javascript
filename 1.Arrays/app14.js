// Shift and unshift
// shift - remove form start
// unshift add to start

//unshift
let dishesToDo = [];
console.log(dishesToDo);

dishesToDo.unshift("Big Platter");
console.log(dishesToDo);

dishesToDo.unshift("Large Plate");
console.log(dishesToDo);

// when adding more than one item it follow the item order and place in fornt of previous item in array
dishesToDo.unshift("spoon", "creal bowl");
console.log(dishesToDo);

dishesToDo.unshift("mug");
console.log(dishesToDo);

// shift() methods remove the first elemnt from a array and returns that removed element.
dishesToDo.shift();
// remove the first element
console.log(dishesToDo);
