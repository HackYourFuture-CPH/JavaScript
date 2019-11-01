function myFunction(text) {
    return function() {
        console.log(text);
    }
}

const f = myFunction('hello');
console.log(f);
f();

const g = myFunction('goddag');
g();
f();

console.log(f === f);
console.log(g === g);
console.log(g === f);
