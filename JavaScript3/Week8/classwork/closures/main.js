console.log('script initiated');


/*
Closures:
A closure is the combination of a function and the lexical 
environment within which that function was declared. MDN explanation. But 
what does this actually mean? Lets find out:
*/

// Here we create a function that returns another function. 
function adderFunction(n) {
    // Returning a function
    return function(x) {
        return x + n;
    }
}

// Here we have called adderFunction which returns a function we can assign 
// In a variable called fiveAdder
const fiveAdder = adderFunction(5);
/*
Now the function has been called and has been removed from the call stack
It is "closed". BUT even though the adderFunction has been called the 
function that it returned (that we assigned to fiveAdder) still has access
to the variable n. THIS is what closures is about. It has the scope of its
parent function. So this:
A closure is the combination of a function and the lexical 
environment within which that function was declared.
Can be rewritten like this:
A closure is a feature in JavaScript where an inner function 
has access to the outer (enclosing) function’s variables — a scope chain. 
^^^ THIS IS CLOSURES!!!!
*/

console.log(fiveAdder(1)); // Logs out 6 because fiveAdder has access to n. 



// Here we are using the exact same concept of closures. But now we are
// returning an object that has some functions set on it. 
function createCounter(initialValue) {
    // counter is private. It cannot be accessed outside of this function.
    let counter = initialValue;
    
    return {
        add: function(n) {
            counter += n;
        }, 
        get: function() {
            return counter;
        },
        changeInitialValue: function(newIntialValue) {
            // Here we are actively giving access to the counter variable.
            counter = newIntialValue;
        }
    };
}

const counter = createCounter(5);
console.log(counter);

console.log(counter.get());
counter.add(3);
console.log(counter.get());

counter.changeInitialValue(10)
console.log(counter.get());

