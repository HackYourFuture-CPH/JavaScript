## Learning goals
- [ ] Conditions: if, elseif, else. Negated.
- [ ] [Functions](#Functions): [Calling](#calling-a-function-on-something), defining, [parameters, arguments](#parameters--arguments)
- [ ] Global vs local scope
- [ ] For loop

Teaching note. Start off explaining functions with how to use a function fx explain why the Math.random function is smart, or Math.max. 

## Relevant links
* [Preparation](preparation.md)
* [Homework](homework.md)

### Recap Logical operators:

```js
0 = false
1 = true
```

#### AND `&&`   

| `&&` |0|1|
|------|-|-|
|0|0|0|
|1|0|1|

#### OR `||` 

| `\|\|` |0|1|
|------|-|-|
|0|0|1|
|1|1|1|

So you can say that false in combination with `&&` always returns true
```js
true && false //-> false
false && true //-> false
false || true //-> true
true || false //-> true
```

### Typeof

`typeof` always returns the data type in a string. 

So for example:
```js
let bar = 42; 
typeof bar    //-> 'number' 
typeof typeof bar; //->  'string'
```

So the data type of what `typeof` returns is always a string, bar on the other hand is still a number.

## Functions

A function is a reusable piece of code. It is used to hide away abstraction! Functions are *very* important in JavaScript, to the extent that some people call JavaScript a "function-oriented" language. 

### Two sides of a function

There are two sides to using function, using a function (calling a function) and creating a function.

#### Function usage

When you call a function some javascript code is run. Here's a simple example:

```js
const randomNumber = Math.random();
console.log(randomNumber); // logs out some number between 0 and 1
```

Here `Math.random` is a function. To activate the function we call it using paranthesis `()`. When calling it we get a randomNumber! We now dont need to think about all the code it takes to create a random number in javascript, we simply call the function and get a random number. Code has been abstracted away for us!

Some functions is called with arguments fx:

```js
const maxNumber = Math.max(3,5); // 3 and 5 are arguments
console.log(maxNumber); // logs out 5
```

Arguments are used to control the code inside a function.

#### Function creation

When we create a function we use the function keyword:

```js
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
```

```js
// a and b are called parameters. This function has two parameters
function sum(a, b) {
    return a + b;
}
```


```js
// 5 and 10 are called arguments now when called in a function
// Arguments are "passed" to the function: "we pass `4` and `5` to the function sum
const returnedSum = sum(5, 10);
console.log(returnedSum); // logs 15
```

So remember the difference between the word "parameter" and "argument". Many people confuse them, and that's not a big problem, but understanding the difference is always nice:

* A parameter is the name you want to give to the variable that is available inside of the function.
* An argument is the actual value you want to assign to the parameters when you call the function.

Parameters acts as a placeholder for the arguments. The value of the parameter will get substituted with the value of the argument.

```js
function multiply(a, b) {
    // the value of a will be substituted with the value of 10!
    // the value of b will be substituted with the value of 4!
    console.log(a, b); // logs out 10 4
    return a * b;
}

multiply(10 * 4);

```

##### Return value
Sometimes we want to get a value back when calling a function. Fx in the sum example. We want to call the function and get the sum back!

```js
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

```

If we dont return anything from the function, it will automatically return `undefined`. This is the functions way of saying that nothing was returned.


### Calling a function on something

In JavaScript, you can call functions *on* something. By this, we mean that you use the dot to call the function. For instance, when we say "call method `trim` on string `s`", we mean:

```js
let s = " this is a string  ";
s.trim(); // -> "this is a string"
```

However, there are functions that you don't call on anything:

```js
function sum(a, b) { return a + b; }
sum(4, 5); // -> 9
```

Here, you call the function `sum` on nothing.

