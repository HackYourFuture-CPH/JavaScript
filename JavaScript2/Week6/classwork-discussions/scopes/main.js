// // console.log('before function defined', total);
// const total = 10;

// function sumTwoNumbers(a, b) {
//   // function sayHello() {
//   //   console.log(`Hello, total is: ${total}`);
//   // }

//   // console.log('before adding', total);

//   // sayHello();
//   total = a + b;
//   // sayHello();
//   console.log('inside function', total);
// }

// console.log('before function called', total);

// sumTwoNumbers(5, 9);

// console.log('after function called', total);

// const numbers = [1, 2, 3];

// for (let num of numbers) {
// }

/**
 * 1. Global scope
 * 2. Function scope
 * 3. Block scope
 */

/**
 * `this` keyword
 */

const btn = document.querySelector('.myBtn');
console.log(btn);

function onClickHandler() {
  console.log(this.style);
}

btn.addEventListener('click', onClickHandler);

onClickHandler();

const myObject = {
  name: 'Charlie!',
};

onClickHandler.apply(myObject);


class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  describe() {
    return `My name is ${this.name}, ages is: ${this.age}`;
  }
}

const person1 = new Person('Murphy', 32);
console.log(person1.describe());
console.log(person1.describe.apply({name: 'Fake Murphy', age: 99}));
