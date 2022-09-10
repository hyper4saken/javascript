let loggedInUser;

if (!loggedInUser) {
  console.log("Get out of here!!!");
}

// Example 1
let flavour = "watermelon";

if (flavour !== "grape" && flavour !== "cherry") {
  console.log("We dont have that flavour");
}

// Example 2
if (!(flavour === "grape" && flavour === "cherry")) {
  console.log("we only have grape and cherry");
}
