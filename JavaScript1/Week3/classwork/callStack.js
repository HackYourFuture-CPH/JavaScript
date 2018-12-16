function myFunction() {
   console.log('Console log #1');
   anotherFunction();
   console.log('Console log #2');
}

function anotherFunction() {
   console.log('Console log #3');
}

myFunction();
console.log('Console log #4');
