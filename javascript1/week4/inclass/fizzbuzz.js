function fizzBuzz(a, b) {
  const fizzBuzzArray = [];
  for (let i = 1; i < 100; i++) {
    // console.log(i);
    if (i % a === 0 && i % b === 0) {
      // multiple of a and b print fizzBuzz
      //   console.log("fizzBuzz");
      fizzBuzzArray.push("fizzBuzz");
    } else if (i % a === 0) {
      // multiple of a print fizz
      //   console.log("fizz");
      fizzBuzzArray.push("fizz");
    } else if (i % b === 0) {
      // multiple of b print buzz
      //   console.log("buzz");
      fizzBuzzArray.push("buzz");
    } else {
      //   console.log(i);
      fizzBuzzArray.push(i);
    }
  }
  return fizzBuzzArray;
}

const output = fizzBuzz(3, 5);
console.log(output);

const output2 = fizzBuzz(4, 10);
console.log(output2);
