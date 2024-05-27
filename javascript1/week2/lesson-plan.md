# Lesson plan
```
> Focus on having lots of in class exercises.

> DONT teach everything, let the students investigate topics on their own aswell!

> Focus on how to read documentation, google answers and google errors!!

> Teach towards the students being able to solve the homework
```

Remember to add the code you wrote in the class to the relevant class branch's class work folder. If the branch has not been created just create and push it :) If you dont have access, write to one from the core team. You can see an example below!

To find examples of what teachers have taught before go to the class branches in the classwork folder, Fx [class 07](https://github.com/HackYourFuture-CPH/JavaScript/tree/class07/JavaScript1/Week1/classwork)

If you find anything that could be improved then please create a pull request! We welcome changes, so please get involved if you have any ideas!!!

---

- Conditions
  - [Code inspiration](#if-sentences)
  - [Exercises](#if-sentences-1)
- Functions (https://twitter.com/wesbos/status/1105907924088565762)
  - General description - A function is a reusable piece of code.
  - Function usage
    - Arguments
  - Function creation 
    - Parameters - Acts as placeholders
    - Parameters vs arguments
    - Return value - Variable can capture return value. 
    - Calling a function on something `Math.random` - calling the function random on Math
  - [Code inspiration](#functions)
  - [Code inspiration 2](#if-and-function)
  - [Exercise](#function)
- Global vs local scope
  - Lexical scope - inner functions contain the scope of parent functions even if the parent function has returned.
  - [Code inspiration](#scope)
  - [Exercise](#scope-1)
- For loop
  - Try start off with giving the students the [Exercise string logger](#for-loop-1) and not explain for loop. Let them figure it out through the exercise (problem based learning)
  - [Code inspiration](#for-loop)
  - [Exercise string logger](#for-loop-1)
  - [Exercise send emails](#send-emails)

The students really struggle with the **return** value. What it means, how it is captured. What happens when nothing is returned etc. Try really hammering in this concept with lots of simple examples and exercises! Fx if a function is called get something. That means that something is returned from that function.

Zoey Zou made a nice Notion lesson plan here: https://www.notion.so/JS1-Week2-8f2d4b7e7ba0425ea4a9e97816e9ceb7


## Flipped classroom videos

[Flipped classroom videos](https://github.com/HackYourFuture-CPH/JavaScript/blob/main/javascript1/week2/preparation.md#flipped-classroom-videos)

## Code inspiration

### If sentences

```js
const age = 14

// if-else statement, `age > 18` is called an expression
// `age > 18` is called a boolean expression
if (age > 18) {
  console.log('Allowed')
} else {
  console.log('Denied')
}

if (age < 18) console.log("You're not old enough")

// Boolean operators
// && is called AND
// || is called OR
// ! is called NOT

// Chained if statement
if (age > 0 && age < 13) {
  console.log('You are a child')
} else if (age >= 13 && age < 20) {
  console.log('You are a teenager')
} else if (age <= 0) {
  console.log('You are an infant')
} else {
  console.log('You are an adult')
}

if (age < 18 || age === 18) { // same as saying `age <= 18`
  console.log('You are almost there')
}

// New example
const userRole = 'guest'
const isAdmin = userRole === 'admin'
const isLoggedIn = userRole !== 'guest'

if (isAdmin) {
  console.log('You are in charge')
} else if (isLoggedIn) {
  console.log('Welcome user')
} else {
  console.log('Welcome guest')
}

```

### Functions
```js
// usage
const randomNumber = Math.random();
console.log(randomNumber); // logs out some number between 0 and 1

const maxNumber = Math.max(3,5); // 3 and 5 are arguments
console.log(maxNumber); // logs out 5

// Creation
let todoItem = 'Buy Groceries';
console.log(todoItem);

// Create the function
function checkItem() {
    todoItem = todoItem + ' - done';
}

// use the function by calling it using ()
// If we dont call the function that code will NEVER EVER IN A MILLION YEARS run!
checkItem();
console.log(todoItem);

// a and b are called parameters. This function has two parameters
function sum(a, b) {
    return a + b;
}

// 5 and 10 are called arguments now when called in a function
// Arguments are "passed" to the function: "we pass `4` and `5` to the function sum
const returnedSum = sum(5, 10);
console.log(returnedSum); // logs 15


function multiply(a, b) {
    // the value of a will be substituted with the value of 10!
    // the value of b will be substituted with the value of 4!
    console.log(a, b); // logs out 10 4
    return a * b;
}

multiply(10, 4);

// Return value
function sum(a, b) {
    return a + b;
}
const returnedSum = sum(5, 10); // the variable returnedSum captures the return value from calling the function!
console.log(returnedSum); // logs 15

// If we dont return, we cannot capture the returned value!
function sumNoReturn(a, b) {
    a + b; // no return!
}
const returnedSum = sum(5, 10);
console.log(returnedSum); // logs undefined

// Calling a method on something
let s = " this is a string  ";
// calling a function (trim) on the string s
s.trim(); // -> "this is a string"
```

### If and function
```js
function isAuthenticated (userRole) { // userRole here is different from `var userRole`
  const isAdmin = userRole === 'admin'
  const isLoggedIn = userRole !== 'guest'

  if (isAdmin) {
    return true // if this is run, all other code after is ignored inside the function
  } else if (isLoggedIn) {
    return true
  }

  return false
}

console.log(userRole)
console.log(isAuthenticated(userRole))
console.log(isAuthenticated('admin'))
```

### Scope
```js
// Global scope
const globalScopeVariable = 'globalScopeVariable';
function outerFunction() {
    // function scope A
    console.log(globalScopeVariable);
    const outerFunctionScope = 'outerFunctionScope';

    function innerFunction() {
        // Function scope B
        console.log(globalScopeVariable);
        console.log(outerFunctionScope);
        
        const innerFunctionScope = 'innerFunctionScope';
    }

    console.log(innerFunctionScope);

   innerFunction();
}

outerFunction();


if (true) {
    const blockScope = 'blockScope';
}

console.log(blockScope)
```

### For loop
```js
function spam (number) {
  let repeated = '' // Define the simplest case

  // Think about the condition. How many times do we want to repeat
  for (let i = 0; i < number; i++) {
    repeated = repeated + 'hue' // What is our update rule
  }

  return repeated // Return in the end
}

console.log(spam(1))

// Test cases. I always do "empty" (here zero), once, and then a bunch of times
console.log(spam(0) === '')
console.log(spam(1) === 'hue')
console.log(spam(6) === 'huehuehuehuehuehue')
console.log(spam(14) === 'huehuehuehuehuehuehuehuehuehuehuehuehuehue')
```

## Exercises

### If sentences
Create an `if` sentence that will give a user a message based on his bank account balance. Use the `balance` variable and change that. 

- If a user has 0 or less balance log out 'Please deposit some money!'
- If a user has more than 0 and at most 1000 log out 'Your balance is looking okay'
- If a user has more than 1000 and at most 3000 log out 'Your balance is looking good'
- If a user has more than 3000 and at most 10000 log out 'Your balance is fantastic'
- If a user has more than 10000 log out 'Your balance is AMAZING!'

```js
const balance = 1000;
```

### Function
Create a function called `getCircleArea`. It should have the `radius` of the circle as parameter and return the circle area. What happens if we dont return anything in the function?

Create a function called `celciusToFahreneit` it should have a parameter called `celcius`. It should return the temperature in fahrenheit. 

Try call the function and check with google if the function returns the right value.

### Scope
With pen and paper write what is logged out.

```js
const global = 'global';
function scopeTest() {
    console.log(functionScope);
    console.log(global);
    const functionScope = 'functionScope';

    function tester() {
        console.log(global);

        const testerVariable = 'testerVariable';
    }

    tester();
    console.log(testerVariable);
}

scopeTest();
```

### For loop
#### Simple for loop
Create a for loop that logs out the numbers from 74 - 98

#### For loop in a function
Create a function that has two parameters: `stringToLog` and `numberOfTimesToLog`

When calling the function it should log out the `stringToLog` the amount of times specified in `numberOfTimesToLog`. Use a for loop.

```js
logString('hello', 3);
// hello
// hello
// hello
```

### Send emails
Imagine we work at a company. Peter from the HR department wants us to send out a couple of emails to some recepients. The only problem is that he sent us the email in a weird format: `benjamin@gmail.com|peter@gmail.com|hans@gmail.com|ahmad@gmail.com|sana@gmail.com|virgeen@gmail.com|mohammed@gmail.com`

Use the `sendEmailTo` function to send an email to all the recepients that we got from Peter.

*Hint* use the `.split` method and look up `iterating an array js for loop` on google.

```js
// This function emulates sending emails to receipients
function sendEmailTo(recepient) {
    // But really it only logs out a string
    console.log('email sent to ' + recepient);
}
```
