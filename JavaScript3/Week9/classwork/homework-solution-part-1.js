let arr = [];
for( let i=1; i<=1000;i++){
    arr.push(i);
}
console.log(arr);

function divisibilityChecker(n) {
    return function(x) {
        return x % n === 0;
    }
}

const divisibilityCheckerFive = divisibilityChecker(3);
console.log(divisibilityCheckerFive(2)) // logs out false
console.log(divisibilityCheckerFive(9)) // logs out true

const result = [];
for (let i = 1; i <= 30; i++) {
    const divisibleIteration = divisibilityChecker(i);
    const divisebleByIterationNumber = arr.filter((number) => {
        return divisibleIteration(number);
    });
    result.push(divisebleByIterationNumber.length);
}

console.log(result);