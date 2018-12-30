## Homework Week 5

## So why this homework?
We want you to realise that functions are just variables in javascript. It is exactly the same as string or a number. This homework forces you into using functions in weird ways that forces you to think differently about functions. 

### Step 1
1. We learned a little bit about callbacks in JS. A callback is simply a function passed to another function that gets executed (run) after a potentially long running operation has completed. There is another function called `setTimeout` that will wait a specified period of time and then execute a function. For example: 

```js
function doIt() {
    console.log('I am done');
}
setTimeout(doIt, 5000)
```
If you run the above code it will wait 5 seconds and print `I am done`. Please read something about setTimeout on MDN. The first argument to the `setTimeout` function is the callback (`doIt`)

You must write a function that takes 4 arguments.
- A start value 
- An end value
- A callback to call if the number is divisible by 3 
- A callback to use if the number is divisible by 5

The function should generate an array containing values from start value to end value (inclusive). 

Then the function should iterate over the array and call the second argument if the array value is divisible by 3

The function should call the second argument if the array value is divisible by 5 

Both functions should be called if the array value is divisible by both 3 and 5

```js
THIS IS FAKE CODE 
function threeFive(startIndex, stopIndex, threeCallback, fiveCallback) {
    // make array 
    // loop through the array. Check if you should call threeCallback and/or fiveCallback.
}
threeFive(10, 15, sayThree, sayFive);

// Should create an array [10,11,12,13,14,15]
// and call sayFive, sayThree, sayThree, sayFive  - please make sure you see why these calls are made before you start coding
```

5. We did some work with arrays - `let arr = [1,2,3]`
We can also nest arrays inside arrays like this `let arr2d = [[1,2], [3,4], [5,6]]` (for math people you can think of this as a matrix)
How would you print all the items of an array with 3 dimensions? 
How about with K dimensions? 
What if you didn't know how deep the array was nested? (You don't have to write code for this but think about it)

6. Here are two functions that look like they do the something similar but they print different results. Please explain what's going on here.

```js
let x = 9; 
function f1(val) { 
    val = val+1; 
    return val;
}
f1(x);
console.log(x);


let y = { x: 9 };
function f2(val) {
    val.x = val.x + 1;
    return val;
}
f2(y);
console.log(y);
```
If you are confused please run the code and then consult Google for "javaScript pass by value pass by reference"


### Step 2

1) Create a new website with external js file

2) Add a button (e.g. 'click me') that when clicked `console.logs` 'you clicked me!'

3) Add an input element where you can write numbers. When the button is clicked, get the number from the input element. Use the `threeFive` function we created earlier. If the number if divisible with 3 set the background color to blue (using a function you call `threeFive` with). If the number is divisible with 5 set the background color to yellow.

4) Create a button with the text called show location. When this button is clicked the location on the user should be found using this browser api: https://developer.mozilla.org/en-US/docs/Web/API/Geolocation_API
Now show that location on a map using fx the Google maps api: https://developers.google.com/maps/documentation/javascript/tutorial

5) Create funtions that are used in these different ways:
- Create an array with 3 items. All items should be functions. Go through the array and call them.
- Create a function as a const and try creating a function normally. Call both function. 
- Create an object that has a key whose value is a function. Try calling this function. 
- Create two setTimeouts one uses a function that is defined as a const. The other uses an anonomous function that is defined inside the setTimeout. 
- Create a function (outer) that returns a function (inner). Call the outer function and assign the return to a variable. Now call this variable (that is the inner function)

## Feedback giving time!
Find a student to give feedback using this site: https://hyf-peer-review.herokuapp.com/
The feedback should be given after the homework has been handed in preferably latest two days after. 

To help you get started we have created some ressources about giving feedback. Find them here: https://github.com/HackYourFuture-CPH/curriculum/tree/master/review

### Hand in Homework:
Go over your homework one last time:
- Does every file run without errors and with the correct results?
- Have you used `const` and `let` and avoided `var`?
- Do the variable, function and argument names you created follow the [Naming Conventions](https://github.com/HackYourFuture/fundamentals/blob/master/fundamentals/naming_conventions.md)?
- Is your code well-formatted (see [Code Formatting](https://github.com/HackYourFuture/fundamentals/blob/master/fundamentals/naming_conventions.md))?

If you can answer yes to the above questions then you are ready to hand if the homework:
* Find the hyf-homework git repo (forked from [here](https://github.com/HackYourFuture-CPH/hyf-homework))
* Add your homework files in the Javascript/javascript2/week2 folder
* To submit the homework use the link in the top of your classes slack channel. 