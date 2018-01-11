/* Exercise 1 */

// Create an index.html and a main.js Reference the js script in the index.html file and make sure you can log something to the console.

// now create two functions as variables. One that returns your firstname and one that returns your surname.
// create another function called fullName that can take two functions as the parameters. This function should log out your fullName.  



/* Exercise 2 */

// Write down with paper what will be printed and in what order

const firstFunction = function (functionToCall) {
    for (let i = 0; i < 3; i++) {
        console.log(i);
    }

    functionToCall();
    console.log('In first function');
}


function test() {
    console.log('This is a test');
}


function second() {
    console.log('In second function');
    test();
}


firstFunction(second)

