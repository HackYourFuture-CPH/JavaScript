/***
 *  return : returns from "the function"
 *  
 *  return answer; // will return answer from function
 *  
 *  break : breaks out of the loop.
 *          and the loop is not a function
 *          so we cannot "return" something from the break
 * 
 *  continue : continues to the next iteration of the loop
 *          we cannot continue an answer
 * 
 *  continue; // valid;
 *  break; // valid
 * 
 *  break answer;
 * 
 */

function printTable(number) {
    let multiplier = 1;
    while (multiplier <= 10) {
        let tableValue = multiplier * number;
        if (tableValue > 100) {
            return;
        }
        console.log(tableValue);
        multiplier += 1;
    }
    console.log("Out of loop!");
}
//printTable(27);

function printTableBreak(number) {
    let multiplier = 1;
    while (multiplier <= 10) {
        let tableValue = multiplier * number;
        if (tableValue > 100) {
            break;
        }
        console.log(tableValue);
        multiplier += 1;
    }
    console.log("Out of loop!");
}
printTableBreak(27);



function printTableContinue(number) {
    let multiplier = 1;
    while (multiplier <= 10) {
        let tableValue = multiplier * number;
        if (tableValue % 2 == 0) {
            multiplier += 1;
            continue; 
        }
        console.log(tableValue);
        multiplier += 1;
    }
    console.log("Out of loop!");
}
//printTableContinue(27);