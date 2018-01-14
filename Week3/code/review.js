/*
• Functions
• Code flow (order of execution) 
• Basic DOM manipulations [img src, innerHTML]
• Code commenting
• Code debugging using the browser
• Beautifying your code
*/


/* 

Code debugging 

In this class we will be using the chrome developer tools to run our javascript in. 

*/



/* Functions */


// Lets first make a really simple function that logs out the word cake a specific number of times. This is called a named function

function cakeLogger(numberOfCakes) {
    let cakeString = '';
    for (let i = 0; i < numberOfCakes; i++) {
        cakeString += 'cake ';
    }

    return cakeString;
}

cakeLogger(10);

/*
numberOfCakes is called parameters -> like a machine with dials that are parameters. They act as placeholders
10 is the function argument

So what exactly happens. numberOfCakes is a placeholder for the integer 10!

Now what is possible in js is to assign a function to a variable, what makes javascript functional programming language

Lets reassign cakeLogger to a variable

*/

// the variable cakeLoggerVariable referes to an anonomous function
const cakeLoggerVariable = function(numberOfCakes) {
    console.log(numberOfCakes);
    let cakeString = '';
    for (let i = 0; i < numberOfCakes; i++) {
        cakeString += 'cake ';
    }

    return cakeString;
}

cakeLoggerVariable(3);

// this function can be passed around and even be called by other functions:

function testFunctionA(functionPlaceholder) {
    // functionToPass is a parameter (remember placeholder for cakeLogger)
    const shortCakeString = functionPlaceholder(2);

    console.log(shortCakeString);

    // testFunctionB(functionPlaceholder);
}


testFunctionA(cakeLoggerVariable);

/*

Go really crazy!!
function testFunctionB(functionPlaceholder){
    const longCakeString = functionPlaceholder(10);
}
*/

/* Exercise 1 */


/*  Code flow (order of execution) */
/*

Different contexts: Global and execution.

Only one global and multiple execution contexts

Global context always at bottom.


When js is loaded it enters global scope.
If a function is called the program enters a new execution context, and pushes that context to the execution stack.This complete stack is called the callstack
Multiple functions
When the function is done, pop the context.


http://latentflip.com/loupe/


Remember these things:

1 Global context.
Infinite function contexts.
Each function call creates a new execution context, even a call to itself.
Execution Context in Detail

In a execution context these things happen:

Creation Stage [when the function is called, but before it executes any code inside]:
    Create the Scope Chain.
    Create variables, functions and arguments.
    Determine the value of "this".
Activation / Code Execution Stage:
    Assign values, references to functions and interpret / execute code.

*/


function a(x) {
     // Function a added to the stack
     b(x);
     // Function a removed from the stack;
}

function b(x) {
      // Function b is added to the stack
      //throw "Too big";
      console.log("Value passed is "+ x);
      // Function b is removed from the stack
}

// Starting work for the global stack
a(22);
// Stopping work for this stack. stack would be empty after this

// Explain the crossing out part


/* Do exercise 2 */








/* HTML interaction */

const testIdElement = document.querySelector('#test-id');
console.log(testIdElement);

testIdElement.innerHTML = 'test';
testIdElement.style.backgroundColor = 'blue';


const div = document.createElement('div');
div.innerHTML = 'We created this div!!!';

const div2 = document.createElement('div');
div2.innerHTML = 'New div';


const queueDiv = document.querySelector('.queue');
queueDiv.appendChild(div);
queueDiv.appendChild(div2);
console.log(div);

console.log(document.querySelector('h1'));
document.getElementById('queue');



[1,2].forEach(function(element) {
    console.log(element);
});


/* Do exercise 3 */

/*

Commenting js, css and html

Now for the hard part: when to comment? When you work for different companies, you will see different styles. Embrace something you like, and then learn to let go. Google on "when to comment code?" and you'll find a big bunch of different opinions. 
The general concept is, however, that it is there to help make the code more easy to understand. Note, however, that comments can also make code more difficult to understand when not applied properly. 

*/



/*

Beautifying your code
http://jsbeautifier.org/

This can be done in the editor aswell. Google for your editors name and the beautify

*/

