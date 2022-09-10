// Nesting condition

let password = "sonohill";

if (password.length >= 6) {
  if (password.indexOf(" ") === -1) {
    console.log("Valid password");
  } else {
    console.log("Password is long enough, but cannot contain spaces");
  }
} else {
  console.log(
    "Password is not long enough. It must contain at leaset 6 character."
  );
}
