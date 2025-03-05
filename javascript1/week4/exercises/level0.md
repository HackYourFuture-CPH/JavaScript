



# Warm-up Exercises
> [!IMPORTANT]
> These warm-up exercises are designed to ease you into the material. You don't need to complete all of them; instead, choose 1-2 sections that interest you and work on those. When you're ready for more challenging tasks, proceed to the [Level 1 exercises](./level1.md).

[!TIP]
> **Divide and Conquer** is a programming technique that breaks a problem into smaller, more manageable subproblems, solves them individually, and then combines their solutions to solve the original problem. It is used to reduce problem complexity and making it easier to implement a solution and estimate the effort required.

## 🎓 0.1 Running your Javascript
There are two main ways of running Javascript: Via the Browser or through the terminal using `node`
1. Create a `.js` file which logs:
    * A regular log: `Hello World`
    * A warning log: `Something is about to happen...`
    * An error log: `KABOOOOM`
2. Run a script through the Browser
    * Create a HTML file which include the javascript file
    * Run the HTML file in the Browser
    * Open the Developer Tools to see your logs
3. Run the script via Node
    * Check if node is installed by running `node -v`. If it doesn't understand the command you have to [install Node](https://nodejs.org/en/download)
    * Open the Terminal in VS Code
    * Run the javascript file using the command `node <path to your file>`. <br>
    For instance `node ./script.js`

## 🧱🔥 0.2 Variables & Scope
1. Declare three variables: `name`, `age`, and `isStudent`. Assign appropriate values to them.
2. Can you help me fix my code?
    ``` js
    const name = "Alice";
    const age = 16;
    const country = "USA";
    const message = "";
    const status = "";

    if (age < 18) {
        status = "minor";
    } else {
        status = "adult";
    }

    message = `${name} is a ${status} from ${country}.`;

    console.log(message); // Alice is a minor from USA.
    ```
3. Why is my code not working?
    ```js
    const canSee = true;
    if (canISee) {
        let room = "This room is not dark";
    }
    else {
        room = "This room is pitch black";
    }
    console.log(room);
    ```


## 🧱✨ 0.3 Data types
1. Define variables with different data types (string, number, boolean, undefined, null, object, array). They should all be something you may have for your team.
    ```js
    const team = "Team 31";
    // add more variables here...
    ```
2. Use `typeof` to check and print the type of each variable.
3. Guess the output, then run the code to see if you got it right.
    ```js
    const a = 10;
    const b = -10;
    const c = "100"
    const d = "no";
    const e = true;
    const f = false;
    const g = null;

    console.log("#1", a + a, typeof (a + a)); // output is "#1 20 number"

    // guess the output of the following statements
    console.log("#2", a + b, typeof (a + b)); 
    console.log("#3", a + c, typeof (a + c));
    console.log("#4", a + d, typeof (a + d));
    console.log("#5", a + e, typeof (a + e));
    console.log("#6", a + f, typeof (a + f));
    console.log("#7", a + g, typeof (a + g));
    ```


## 🧱 0.4 Conditions
1. Write a function that takes a user’s age as input and prints whether they are a child (0-12), a teenager (13-19), or an adult (20+).
2. Create a function that asks for a number and prints whether it is positive, negative, or zero.
3. Write a function that checks if a given year is a leap year (Hint: A leap year is divisible by 4).



## 🧱 0.5 Loops
1. Print numbers from 1 to 10 using a for loop.
2. Print a countdown from 10 to 1 using a for loop.
2. Print even numbers between 1 and 20 using a for loop.
4. Use a for...of loop to print each value in this array:
    ```js
    const names = ["john", "jane", "joe"];
    ```


## 🧱 0.6 Arrays
1. Create an array of five favorite foods and print each item using a for..of loop.
1. Write a function that takes an array of numbers and returns the sum of all elements. What is the sum of `[5, 10, -98, 17.5, 365, -2.5]`?
1. Given an array `[10, 20, 30, 40, 50]`, write code to remove the last element and add 60 at the end.
1. Write a function that finds the largest number in an array



## 🧱 0.7 Objects
1. Create an object representing a book with properties: `title`, `author`, and `yearPublished`.
2. Write a function that takes a book object and returns a string: `{title} by {author}, published in {yearPublished}`.
3. Add a method getAge to the book object that returns how old the book is based on the current year.
4. Write a function that takes an array of book objects and returns an array of all book titles.


## 🧱 0.8 Functions
1. Write a function `greet` that takes a name as a parameter and returns a greeting message
    ```js
    console.log(greet("Alice")); // "Hello, Alice!"
    ```
2. Write a function `add` that takes two numbers and returns their sum.
    ```js
    console.log(add(5, 3)); // 8
    ```
3. Write a function `square` that returns the square of a number. Then, write another function `sumOfSquares` that takes two numbers and returns the sum of their squares.
    ```js
    console.log(sumOfSquares(3, 4)); // 25 (3² + 4² = 9 + 16)
    ```