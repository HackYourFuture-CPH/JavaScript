// VSCode Extensions: Better Comments & nodemon
// * nodemon = like `node filename.js` but watches for changes on save
// ! Important - fix this
// Todo: Remember to..
// * Highlight
// ? Question

// * Can be useful when writing *pseudo code*
// ? Pseudeo code?
// Can easily get confused in the semantics (especially when it comes to conditional logic)
// Helps give you an overview => then write code

// declare age
// if age is above 18 => Allowed
// else => Denied

const age = 1;

// if-else statement, `age > 18` is called an expression
// `age > 18` is called a boolean expression
if (age > 18) {
  console.log("Allowed");
} else {
  console.log("Denied");
}

// if (age < 18) console.log("You're not old enough");

// if (true && true && true){

// }
// if (true && true && false){

// }

// Boolean operators
// && is called AND
// || is called OR
// ! is called NOT

// ? What will be logged if the age = 1?

// Chained if statement
if (age > 1 && age < 13) {
  console.log("You are a child");
} else if (age >= 13 && age < 20) {
  console.log("You are a teenager");
} else if (age <= 1) {
  console.log("You are an infant");
} else {
  console.log("You are an adult");
}

if (age < 18 || age === 18) {
  // same as saying `age <= 18`
  // console.log("You are almost there");
}

// New example
const userRole = "guest"; //string
const isAdmin = userRole === "admin"; //boolean
const isLoggedIn = userRole !== "guest"; //boolean

if (isAdmin) {
  console.log("You are in charge");
} else if (isLoggedIn) {
  console.log("Welcome user");
} else {
  console.log("Welcome guest");
}

// Tenary operator
//true ? "this code" : "else run this code"
// console.log(
//   age > 1 && age < 13
//     ? "You are a child"
//     : age >= 13 && age < 20
//     ? "You are a teenager"
//     : age <= 1
//     ? "You are an infant"
//     : "You are an adult"
// );
