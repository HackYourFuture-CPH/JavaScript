// operators
// Assignment operator
const thisIsNotAGoodVariableName = 10;

// Equality operators
// == equal
const applesBananas = "Apples" == "Bananas";
console.log(applesBananas);
console.log(typeof applesBananas);

// != not equal
const notApplesBananas = "Apples" != "Bananas";
console.log(notApplesBananas);
console.log(typeof notApplesBananas);

// === strict equal with numbers
const numberEqual = "1" === 1;
console.log(numberEqual); // this will be false
console.log(typeof numberEqual);

// !== strict not equal with numbers
const numberNotEqual = "2" !== 2;
console.log(numberNotEqual); // this will be false
console.log(typeof numberNotEqual);

// <, >, <=, >=
// Do the table exercise
console.log(4 <= 4);
console.log("Hello" < "World"); // DONT DO THIS

// arithmetic operators
console.log(5 - 2);
console.log("Hello" + "World");

// modulo
// 55 apples, and 7 kids
// all apples are distributed between the kids
// without any kid being prioritized
// then every kid gets 7 apples with 6
// apples not being given to anyone
// 6 is the remainder or modulo
console.log(55 % 7);
