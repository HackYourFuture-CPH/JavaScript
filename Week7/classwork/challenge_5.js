const arr = [9, 17, 25, 30, 51, 75, 120];

const isOddAndDivisibleBy5 = (a => (a%2 === 1)&&(a%5 === 0));

// traditional way of passing reult to next operation
let oldSum = arr.filter(isOddAndDivisibleBy5)
let oldReduce = oldSum.reduce((a, b)=> a+b)

// method chaining
const sum = arr
// .map() // map does something
.filter(isOddAndDivisibleBy5) // this filter does this
.reduce((a, b)=> a+b, 0); // this reduce adds it all up 

console.log(sum);
