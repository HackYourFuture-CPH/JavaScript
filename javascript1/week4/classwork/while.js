// Two syntaxes "for" loops
// 1. for
// 2. while


/***
 *  while (condition with var x) {
 *   // do something
 *   // change x
 * }
 * 
 */

let x = 1;
let isRaining = true;
while (isRaining) {
    console.log("I will stay home");
    x += 1;
    if (x == 1000000) {
        isRaining = false;
    }
} 
console.log(" x = ", x);
console.log("I will go out!");


// life 