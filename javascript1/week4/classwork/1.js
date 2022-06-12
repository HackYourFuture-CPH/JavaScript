// write a function (printNums)
// takes one input - num
// console log 1 to num
// let i = 1;

// function printNums (num){
//     let i = 1;

//     for(; i <= num; i++){
//         console.log(i);
//     }

//     console.log(`i = ${i}`);
// }

// printNums(21);
// printNums(5);

// write a function (getNumberArray)
// takes one input - num
// returns an array [1, 2 ... num]

function getNumberArray (num){
    let arr = [];

    for(let i=0; i < num; i++){
        arr.push(i+1);
    }

    // console.log(`i = ${i}`);
    return arr;
}

console.log(getNumberArray(9));
console.log('test getNumberArray(3)', getNumberArray(3).length === 3);