// function multiplyBy2(n) {
//   const product = n * 2;
//   return product;
// }

// console.log(multiplyBy2(5));
// console.log(multiplyBy2(3));
// console.log(multiplyBy2(50));
// console.log(multiplyBy2(123));

// function greetingGenerator(greeting) {
//   const greeter = (name) => console.log(`${greeting}! ${name}`);
//   return greeter;
// }

// const helloGreeter = greetingGenerator('Hello');
// helloGreeter('Charles');
// helloGreeter('Elizabeth');

// function generateNumbersArray(N) {
//   const result = [];

//   for (let i = 1; i <= N; i++) {
//     result.push(i);
//   }

//   return result;
// }

// function multiplierFactory(m) {
//   return (n) => m * n;
// }

// const multiplyBy5 = multiplierFactory(5);
// console.log(multiplyBy5(3));

// const numbersTil10 = generateNumbersArray(10);
// const numbersTil1000 = generateNumbersArray(1000);

// numbersTil1000.map(m => {
//   const multiplier = multiplierFactory(m);
//   const result = numbersTil10.map(n => multiplier(n));
//   console.log(result);
// })



function counterFactory(n) {
  let value = 0;
  return {
    increase: () => value += n,
    descrese: () => value -= n,
    get: () => value,
  };
}

// closure

const myCounter = counterFactory(23);

myCounter.increase();
myCounter.increase();
myCounter.increase();
console.log(myCounter.get());