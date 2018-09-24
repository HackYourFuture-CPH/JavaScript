console.log('Hello world');

var x;
x = 22;


x = 33;
var x = 22;


const test = 1;
// Bad, we get an error!
// test = 2;

let letTest = 4;
console.log(letTest);
letTest = 20;
console.log(letTest);

// types:
// Number
let numberConst = 2;
console.log(numberConst);
console.log(typeof numberConst);
// BAD BAD BAD NAMING!!!!
numberConst = 'hello';
console.log(typeof numberConst);

// String
const stringConst = 'Write some text';
console.log(stringConst);

// Boolean
const booleanConst = false;
console.log(booleanConst);
console.log(typeof booleanConst);

// Array
const arrayConst = [];
const shoppingList = ['egg', 'apples', 'flour', 3, false];
console.log(shoppingList);
const shoppingListType = typeof shoppingList;
console.log(typeof shoppingListType);

console.log(shoppingList[1]);
console.log(typeof shoppingList[4]);

const shoppingListApples = shoppingList[1];
const lastItemShoppingList = shoppingList[4];
console.log(lastItemShoppingList);
console.log(typeof lastItemShoppingList);

// undefined
const undefinedExample = shoppingList[5];

let undefined1;
console.log(undefined1);
console.log(typeof undefined1);

console.log(typeof '0');
const stringConst2 = " asd";
console.log(stringConst2);

console.log(stringConst2[0]);
console.log(shoppingList.length);
console.log(stringConst2.length);

console.log(1 == 1);
console.log(1 == 2);

console.log(1 != 2);

console.log('HELLO' == 2);

console.log('1' == 1);
// both value and type should be true
console.log('1' !== 1);

console.log(1 > 8);

console.log(1 < 8);

console.log(1 <= 1);


console.log(1 === 1 && 3 === 4);
console.log((1 !== 1 || 3 === 4) && true );


console.log(1 + 2);

console.log(1 - 2);

console.log(10 / 5);

console.log(10 * 5);
console.log(21 / 5);
console.log(21 % 5);

console.log("hello " + 23);
console.log("hello " + "23");

if (1 === 2) {
    console.log(true);
} else {
    console.log(false);
}
















