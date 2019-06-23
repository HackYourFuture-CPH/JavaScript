/**
 * Create a function which returns an object with two methods:
 * 1. multiply -> multiply current value by
 *    given number
 * 2. get -> return current value
 */

function myFactory() {
  let value = 1;

  return {
    multiply: (num) => value = value * num,
    get: () => value,
  };
}

const multiplier = myFactory();
multiplier.multiply(123);
multiplier.multiply(5);
console.log(multiplier.get());
