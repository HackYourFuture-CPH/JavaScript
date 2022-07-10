function sayHello(name) {
  console.log("sayHello called");
  return `Hello ${name}`;
}

function addNumbers(a, b) {
  console.log("addNumbers called");
  return a + b;
}

function callMeLater() {
  console.log("callMeLater called");
}

function callMeLaterMaybe() {
  return () => {
    console.log("callMeLaterMaybe called");
  };
}

console.log(1, typeof 1); // 1
console.log(2, typeof "Hack Your Future"); // 2
console.log(3, typeof "1"); // 3
console.log(4, typeof [1, 2, 3, 4]); // 4
console.log(5, typeof sayHello("Rasmus")); // 5
console.log(6, typeof addNumbers(2, 5)); // 6
console.log(7, typeof sayHello); // 7
console.log(8, typeof addNumbers); // 8

setTimeout(callMeLater, 5000); // 9
setTimeout(callMeLaterMaybe, 5000); // 10
setTimeout(callMeLaterMaybe(), 5000); // 11

//
// anonymous
const notAnonymous = () => {
  console.log("notAnonymous called");
};
