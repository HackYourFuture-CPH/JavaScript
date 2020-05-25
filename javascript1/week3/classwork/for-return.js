/**
 * 4! = 4 * 3 * 2 * 1 = 24
 * 
 * 3! = 3 * 2 * 1 = 6
 * 
 * 2! = 2 * 1     = 2
 * 
 * 0! = 1
 * 
 * -1! = undefined
 * */

function factorial(number) {
    let fact = number;
    // i = iteration
    // let number = 4
    // number += 2 => number = number + 2
    for (let i = number-1; i >= 2; i--) {
        fact = fact * i; // fact *= i;
    }

    return fact;
}

let number = 4;
let fact = factorial(number);

console.log(number , "! = ", fact);