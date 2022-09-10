// For Loops we use
//  for (
//     [initialExpression];
//     [condition];
//     [incrementExpression]
// )

// lets pring `hello world` ten times in console with number behind
// increment by 1
for (let i = 1; i <= 10; i++) {
  console.log("Hello World " + i); //+ i will print the count behind hello world
}

// lets do same code increment by 3
for (let j = 1; j <= 10; j += 3) {
  // j +=3 it add 3 each time it runs to j
  console.log("New World " + j);
}

// let generate first 20 perfect squares
//  1x1 1
//  2x2 4
//  3x3 9

for (let num = 1; num <= 20; num++) {
  console.log(`${num} x ${num} = ${num * num}`);
}

// we can also do reverse loop
for (let k = 200; k >= 0; k -= 25) {
  console.log(k);
}
