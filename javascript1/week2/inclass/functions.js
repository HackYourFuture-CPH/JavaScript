// VSCode Extensions: Better Comments & nodemon
// * nodemon = like `node filename.js` but watches for changes on save
// ! Important - fix this
// Todo: Remember to..
// * Highlight
// ? Question

// WHAT ARE FUNCTIONS?
// A function is a reusable piece of code
// console.log() is a great example of this

// FUNCTION DEFINITION

// 👇 keyword   👇 function name   👇 parameters   👇 Scope start
function goodFunctionName(parameter1, parameter2) {
  // Function body
  const total = parameter1 + parameter2;

  // 👇 return value of function (result of the function's calculations)
  return total;
  // ⚠️ Any code after the return function won't run
}
// ☝️ Scope end

// Calling the Function
// console.log(goodFunctionName(1, 2));

// usage
// const randomNumber = Math.random();
// console.log(randomNumber); // logs out some number between 0 and 1

// const maxNumber = Math.max(3, 5); // 3 and 5 are arguments
// console.log(maxNumber); // logs out 5

// Creation
let todoItem = "Buy Groceries";
// console.log(todoItem);

// Create the function
function checkItem() {
  todoItem = todoItem + " - done";
}

// ? What happens now when I save?

// use the function by calling it using ()
// just like console.log()

// ! Nothing unless we call then function using ()
// checkItem();
// console.log(todoItem);

// a and b are called parameters. This function has two parameters
function sum(a, b) {
  return a + b;
}

// 5 and 10 are called arguments now when called in a function
// Arguments are "passed" to the function: "we pass `4` and `5` to the function sum
// const returnedSum = sum(5, 10);
// console.log(returnedSum);

// function multiply(a, b) {
//   // the value of a will be substituted with the value of 10!
//   // the value of b will be substituted with the value of 4!
//   console.log(a, b); // logs out 10 4
//   return a * b;
// }

// console.log(multiply(10, 4));

// Return value
// function sum(a, b) {
//     return a + b;
// }
// const returnedSum = sum(5, 10); // the variable returnedSum captures the return value from calling the function!
// console.log(returnedSum); // logs 15

// If we dont return, we cannot capture the returned value!
// function sumNoReturn(a, b) {
//     a + b; // no return!
// }
// const returnedSum = sum(5, 10);
// console.log(returnedSum); // logs undefined

// Calling a method on something
// let s = " this is a string  ";
// calling a function (trim) on the string s
// s.trim(); // -> "this is a string"

// ? Bonus Question #1:
// What does `name = “World”`  mean in the following statement?

// function sayHello(greeting, name = "World") {
//   return `${greeting} ${name}!`;
// }

// console.log(sayHello("Howdy", "Partner"));
// console.log(sayHello("Howdy"));

// ? Bonus Question #2:
// What's the difference between parameter and argument?

// function addNumbers(a, b) {  // 'a' and 'b' are parameters (when declaring the function)
//   return a + b;
// }

// addNumbers(5, 3);  // 5 and 3 are arguments

// * Out of "scope" for this session but you may come across arrow functions when Googling
const addNumbers = (a, b) => a + b;

function addNumbers(a, b) {
  return a + b;
}
