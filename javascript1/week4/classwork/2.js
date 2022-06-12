// write a function (fizzBuzz)
// takes two inputs - fizz, buzz
// returns an array of numbers to 100 [1, 2 ... 100]
// replace numbers divisible by fizz with 'fizz', and same for buzz
// replace numbers divisble by both with 'fizzBuzz'
// for example fizz = 3, buzz = 5
// [1, 2, 'fizz', 4, 'buzz', 'fizz', 7, 8, 'fizz', 'buzz', 11, 'fizz', 13, 14, 'fizzBuzz', 16, 17 ..]

function fizzBuzz (fizz = 3, buzz = 5) {
    let arr = [];

    for(let i  = 1; i <= 100; i++){
        if(i % fizz === 0 && i % buzz === 0) {
            arr.push('fizzBuzz');
        } else if(i % fizz === 0) {
            arr.push('fizz');
        } else if(i % buzz === 0) {
            arr.push('buzz');
        } else {
            arr.push(i);
        }
    }

    // for(let i  = 1; i <= 100; i++){
    //     arr.push(i);

    //     if(arr[i] % fizz === 0 && arr[i] % buzz === 0) {
    //         arr[i] = 'fizzBuzz';
    //     } else if(i % fizz === 0) {
    //         arr.push('fizz');
    //     } else if(i % buzz === 0) {
    //         arr.push('buzz');
    //     }
    // }

    return arr;
}

const x = 5, y = 6;

fizzBuzz(x, y);
console.log(fizzBuzz(11, 17));
// console.log(fizzBuzz())
// fizzBuzz(7)
