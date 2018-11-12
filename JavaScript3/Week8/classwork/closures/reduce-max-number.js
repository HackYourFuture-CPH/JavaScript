console.log('script initiated');


// Promblem: Find the max number of an array
const numbers = [1,2,33,56,88,7,545,34,34];

/*
Solution: Lets use reduce. The reduce function reduces multiple items in an array
down to one variable. In this case we want to reduce an array of numbers down to
the largest number in that array.
Using Math.max for each iteration we return the largest number between the 
accumulator and the currentValue. This will in the end give us the largest
number in the array.
*/
const maxNumber = numbers.reduce((acc, value) => Math.max(acc, value), numbers[0]);
