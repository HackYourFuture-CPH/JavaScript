/**
 * 4! = 4 * 3 * 2 * 1 = 24
 * 
 * 3! = 3 * 2 * 1 = 6
 * 
 * 2! = 2 * 1     = 2
 * 
 * 0! = 1
 * 
 * -1! = 
 * */

function factorial(number) {
    let fact = number;
    if (number < 0) {
        console.error("Factorial of negative numbers is not defined. ")
        return;
    }
    if (number == 0) {
        return 1;
    }
    for (let i = number-1; i >= 2; i--) {
        fact = fact * i; // fact *= i;
    }
    return fact;
}

let number = 0;
let fact = factorial(number);


console.log(number , "! = ", fact);