// 73., For ..of loop
// FOR ..OF is a really simple syntax and it addresses a common use case for a loop where we want to iterate over an iterable and iterable could be something lika an array or a string

// example 1
let subreddits = ["soccer", "popheads", "cringe", "books"];
for (let i = 0; i < subreddits.length; i++) {
  console.log(subreddits[i]);
}

// example 2 same code with for ..of

for (let sub of subreddits) {
  console.log(sub);
}
//  We don't have to access the array using square brackets and a number sub is going to automatically have each element it's stored in at each time through the loop

// Example 3
// we can also do for ..of to some string

for (let char of "cockadoodledoo") {
  console.log(char.toUpperCase());
}
// for each time we'are going to uppercase over each character in a string or over each character in a string, each element in an array. We don't need an indices or an index. All we do is say for each thing in subreddit so let sub of subreddits let item plot element let character. Its lot cleaner and lot easier to use it.
