let arr = [1,2,3];

// for(let i=0; i<arr.length; i++){
//     console.log(arr[i])
// }

// function logElement(element, index, arrRef){
//     console.log(element, index, arrRef)
// }

// arr.forEach(logElement)

let twiceArray = [];
function makeTwice(val){
    twiceArray.push(val*2)
    // return val*2;
}

// console.log(arr[1]*2);
// const twiceArray = arr.map(makeTwice);
arr.forEach(makeTwice);
console.log(twiceArray, arr);
// console.log(arr);

let arr2 = [32, 48, 30];

const checkDivisibilityByThree = val => {
    const check = val % 3 === 0;
    // console.log(check);
    return check;
}

const divisibleByThree = arr2.filter(checkDivisibilityByThree)

// console.log(divisibleByThree, arr2);
console.log(arr2.findIndex(checkDivisibilityByThree));
