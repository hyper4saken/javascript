// SWITCH
// break will end the line if meets requierments
day = 8;

switch (day) {
  case 1:
    console.log("MONDAY");
    break;
  case 2:
    console.log("TUESDAY");
    break;
  case 3:
    console.log("WEDNESDAY");
    break;
  case 4:
    console.log("THURSDAY");
    break;
  case 5:
    console.log("FRIDAY");
    break;
  case 6:
    console.log("SATURDAY");
    break;
  case 7:
    console.log("SUNDAY");
    break;
  default:
    console.log("Invalid Day");
}

// Example 2
let emoji = "lips";

switch (emoji) {
  case "sad face":
  case "happy face":
    console.log("Yellow");
    break;
  case "eggplant":
    console.log("Purple");
  case "heart":
  case "lips":
    console.log("red");
}
