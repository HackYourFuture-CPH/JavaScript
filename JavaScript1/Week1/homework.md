## Homework week 1:
![Hacking](https://media.giphy.com/media/eCqFYAVjjDksg/giphy.gif)
## Before you start with the homework:

1. Watch: [What is programming](https://www.khanacademy.org/computing/computer-programming/programming/intro-to-programming/v/programming-intro) Just watch the 2 min video, you do not have to do the entire JavaScript course (It could be useful later on though). 

## Step 1: JavaScript

> For all the following exercises create a new `.js` file. Try to find a proper name for each file or make a small comment about what it does inside for future reference.

1. Write a `console.log` statement saying "Hello World!" for each language that you know.

For example:

```
Halo, dunia! // Indonesian
Ciao, mondo! // Italian
Hola, mundo! // Spanish
```

2. Consider the following code:

```js
console.log('I'm awesome');
```

Copy the code in your `.js` file and run it. You will see that you will get a SyntaxError. Find a solution for this error. Hint: read the error message carefully, it also gives an indication of where the problem is.

3. Working with variables
  * Declare a variable `x` and initialize it with an integer, using these exact steps:  
  * First, _declare_ your variable `x` (do not initialize it yet).  
  * Add a `console.log` statement that explains in words what _you think_ the value of `x` is, like in this example:  

```js
  // TODO -> here you initialize your variable
  console.log('the value of my variable x will be: whateverYouThinkItWillLog');
```

  * Add a `console.log` statement that logs the value of `x`.  
  * Now _initialize_ your variable `x` with an integer.  
  * Next, add a `console.log` statement that explains what _you think_ the value of `x` is.  
  * Add a `console.log` statement that logs the value of `x`.  
  Steps to be taken:

```js
  // TODO -> here you declare your variable
  console.log('the value of x will be: whateverYouThinkItWillLog');
  // TODO -> log the actual value of x
  // TODO -> here you initialize your variable
  console.log('the value of x will be: whateverYouThinkItWillLog');
  // TODO -> log value of x again
```

4. Working with variables
  * Declare a variable `y` and assign a string to it.  
  * Write a `console.log` statement in which you explain in words what _you think_ the value of the string is.  
  * Now `console.log` the variable `y`.  
  * Now assign a new string to the variable `y`.  
  * Just like what you did before write a `console.log` statement that explains in words what you think will be logged to the console.  
  * Now console.log `y` again.  

```js
  // TODO -> here you declare AND assign your string
  console.log('the value of my string will be: whateverYouThinkItWillLog');
  // TODO -> log the actual value of the string to the console
  // TODO -> assign a new value to your variable x
  console.log('the value of my string will be: whateverYouThinkItWillLog');
  // TODO -> log the actual value of the string to the console
```

5. Working with variables
  * How do you round the number 7.25, to the nearest integer (i.e., whole number)?  
  * Declare a variable `z` and assign the number 7.25 to it.  
  * `console.log` `z`.  
  * Declare another variable `a` that has the value of `z` but rounded to the nearest integer.  
  * `console.log` `a`.  
  * So now we have `z` and `a` find a way to compare the two values and store the highest of the two in a new variable.  
  * `console.log` the highest value.  

6. Arrays  
  * Declare an empty array. Make sure that the name you choose indicates 'plurality', because an array is capable of containing more than one element. (See [Naming conventions](https://github.com/HackYourFuture/fundamentals/blob/master/fundamentals/naming_conventions.md)).  
  * Write a `console.log` statement that explains in words what you think the value of the array is.  
  * `console.log` your array.  
  * Create an array that has your favorite animals inside (see if you can find a good name that exactly describes what this variable will hold).  
  * Log your array.  
  * Add a statement that adds Daan's favorite animal ('baby pig') to the *existing array*.  
  * Log your new array!  

7. More strings<br>
Let's consider the following string: `let myString = "this is a test"`.  
  * Add the string to your file and console.log it.  
  * Find a way to get the length of `myString`.  
  * `console.log` the length of `myString`.  

8. Write a program that checks the types of two variables and prints out `SAME TYPE` if they are the same type.  
  * First declare at least four variables and assign them different data types.  
  * For each variable write a `console.log` statement that logs the value
  ```js
  let foo = 3;
  console.log('The value of my variable foo is: ' + foo);
  ```

  (Curious to know what a `foo` is? Check [this article](https://en.wikipedia.org/wiki/Metasyntactic_variable) on Wikipedia.)

  * Now write a `console.log` statement wherein you first explain in words what you think the _type_ of your variables is.  
  * Now use `typeof` to log the actual _type_ of your variables.  
  * Now compare the types of your different variables with one another.  
  * Make sure to also show a message when the variables you are comparing are not the same type.  

For example:

```js
let x = 9;
let y = 'Hello';

if (...) {
    console.log('SAME TYPE');
}
// TODO -> add a way of giving feedback if your variables don't have the same type
```

9. Modulo operator
  * What is logged out
    ```
    const x = 7;
    const newX = x % 3;
    console.log(newX);
    ```
  * Add at least 3 `console.log` statements in which you show that you understand what `%` does.  

10. Variable types 
  * Can you store multiple types in an array? Numbers and strings? Make an example that illustrates your answer.  
  * Can you compare infinities? - does 6/0 === 10/0? How can you test this?  
  * Add `console.log` statements to the above program in which you show that you understand the concepts (just like you've done in the above assignments).  

## Step 2:

* Create a page that contains jQuery
* Make something fadeIn and fadeOut when you click on something

## Step 3: **Some freeCodeCamp challenges:**

On freeCodeCamp.com please do the [Basic JavaScript](https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/basic-javascript) exercises up and until the **"Shopping List"** exercise (there are some topics we did not cover but you can do it).

### How to hand in Homework:

```
steps:
• Create a new repository (name it something like hyf-javascript1) make sure you select the option: initialize with README
• inside this repository create a folder "week1"
• Upload the files you created on your computer inside the week1 folder, write a description for this "commit"
• Your repository should now contain all your homework files. Open the files from the github website to check if this all worked out
• Post the link on your classes slack channel
```

### Hint

If you solve the FreeCodeCamp challenges and they are new concepts to you and you would like to take a look at them later on in the program, Copy your answers from FCC in a .js file and upload them to Github in a repository for future reference. In this way you build your own little documentation, if you look back at them first try to understand what it does before you run them.
