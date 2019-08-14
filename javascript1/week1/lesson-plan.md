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

- Intro JavaScript
  - What is it, what can you use it for
- Setup js either via browser or via node. 
  - Mentors decision.
- Console.log
  - Depending on node or browser explain where the logs can be found.
- Variable declaration and assignment
  - `var`
  - `let`
  - `const` - Always use `const` until it won't `let` you
- Variable types
  - Typeof
  - `String`
    - Indexes - low priority
    - `.length` - low priority
    - `.toLowerCase` - low priority
  - `Number`
    - Show float and int is just a number in js
  - `Array`
      - Creation
      - Indexing
      - Items
      - No map, filter, push etc!
  - `Boolean` - Students investigate `boolean` and explain for fellow students
  - [Code inspiration](#variable-types)
  - [Exercises](#variable-types-1)
- Comparison operators
  - Equality operators
    - Equality `==`
    - Inequality `!=`
    - Identity / strict equality `===`
    - Non-identity / strict inequality `!==`
    - Why does `7 == '7'` returns true and `9 === '9'` returns false?
  - Relational operators
    - Greater than operator `>`
    - Greater than or equal operator `>=`
    - Less than operator `<`
    - Less than or equal operator `<=`
  - [Code inspiration](#Equality)
- Arithmetic operators
  - Addition `+` - also for strings
  - Subtraction `-`
  - Multiplication `*`
  - Division `/`
  - Remainder (sometimes called modulo) `%` - Students investigate how modulo works
  - [Code inspiration](#arithmetic-operators)
  - [Exercise](#follow-up-exercises)
- Errors
  - How to read and fix errors. Show some practical examples.
  - [Exercise](#fix-the-errors)
- [Last exercise, pizza project](#pizza-project)


## Code inspiration

### Variable types

```js
console.log('Hello world');

var x;
x = 22;


x = 33;
var x = 22;


const test = 1;
// Bad, we get an error!
test = 2;

let letTest = 4;
console.log(letTest);
letTest = 20;
console.log(letTest);

// types:
// Number
let numberConst = 2;
console.log(numberConst);
console.log(typeof numberConst);
// BAD BAD BAD NAMING!!!!
numberConst = 'hello';
console.log(typeof numberConst);

// String
const stringConst = 'Write some text';
console.log(stringConst);

// Boolean
const booleanConst = false;
console.log(booleanConst);
console.log(typeof booleanConst);

// Array
const arrayConst = [];
const shoppingList = ['egg', 'apples', 'flour', 3, false];
console.log(shoppingList);
const shoppingListType = typeof shoppingList;
console.log(typeof shoppingListType);

console.log(shoppingList[1]);
console.log(typeof shoppingList[4]);

const shoppingListApples = shoppingList[1];
const lastItemShoppingList = shoppingList[4];
console.log(lastItemShoppingList);
console.log(typeof lastItemShoppingList);

// undefined
const undefinedExample = shoppingList[5];

let undefined1;
console.log(undefined1);
console.log(typeof undefined1);

console.log(typeof '0');
const stringConst2 = " asd";
console.log(stringConst2);

console.log(stringConst2[0]);
console.log(shoppingList.length);
console.log(stringConst2.length);
```

### Equality
```js
console.log(1 == 1);
console.log(1 == 2);

console.log(1 != 2);

console.log('HELLO' == 2);

console.log('1' == 1);
// both value and type should be true
console.log('1' !== 1);

console.log(1 > 8);

console.log(1 < 8);

console.log(1 <= 1);


console.log(1 === 1 && 3 === 4);
console.log((1 !== 1 || 3 === 4) && true );
```

### Arithmetic operators
```js
console.log(1 + 2);

console.log(1 - 2);

console.log(10 / 5);

console.log(10 * 5);
console.log(21 / 5);
console.log(21 % 5);

console.log("hello " + 23);
console.log("hello " + "23");
```

## Exercises

## Variable types
With pen and paper write down what is logged out:

```js
// Types
console.log(typeof 3);
console.log(typeof -33);
console.log(typeof '3');
const threeConst = 3;
console.log(threeConst);
let threeLet = 3;
console.log(threeLet);
console.log(typeof 'console.log("console.log(console.log(""))")');
console.log(typeof typeof 45);
const names = ['benjamin', 'Christopher'];
console.log(typeof names[0]);
console.log(typeof [3][0]);
console.log(typeof true);
```

### Follow up exercises
1. Create a variable that is 24 times 55
2. Create a const and set it to be equal to your name
3. With javascript `console.log` the first character in your name
4. Create an array with 3 strings, three numbers and three booleans
5. `console.log` the 4. element in the array made above
6. *Optional* with javascript `console.log` the last character in your name.


### Fix the errors
Fix the errors in this script:

```js
const name = 'benjamin';
name = 'benjamin-better';

const pizzaPrice = 78;
const pizzaPriceDiscounted = pizzaprice - 10;

const users = ['peter', 'Johnny', 'Børge'];

const lastUser = users[3];

```

### Pizza project

#### Part 1
1. Create a special new folder called "pizza-exercise"
2. Inside the folder create a new html file called "index.html"
3. Also inside the folder create a new JavaScript file called "pizza.js"
4. Remember to Include the pizza.js script in the html file
5. Write a log statement, so you know that your javascript code is running:
```console.log("I love pizza");```
6. Create a variable to store the name of your favourite pizza
7. Create a variable to store the price of the pizza
8. Now log at statement to the console that will show the pizza man the entire pizza order in a language he understands, eg. like this:
```New pizza order: <name of pizza>. The price of the pizza is:  <price of pizza>```


#### Part 2
Now we will modify the program so that you can order multiple pizzas and also decide if the pizzas should be family size

1. Create a new variable to store the amount of pizzas you would like to order

2. Create a new variable to store whether or not you would to order a family size pizza.

3. Now write a formula to calculate the total price of your pizza order, and save it in a variable called totalPrice (if the pizza is family size the prize of the pizza is doubled.

4. Modify the log statement for the pizza man so it includes wether or not the pizza is family size, and now show the total price of the order
```New pizza order: <amount of pizzas> <family or not?> <name of pizza>. Total cost for the order is:  <total price>```

5. Try to change the price of the pizza and if the pizza should be family size, and then check if the total price is calculated correctly.

