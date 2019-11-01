



function myFunction(f) {
    if(typeof f !== 'function') {
        console.log(f, 'was not a function');
        return;
    }
    const result = f(5);

    console.log(result);
    // setTimeout(() => {}, 3000);
}

function helloFunction(numberOfHellos) {
    let hellos = '';
    for(let i = 0; i < numberOfHellos; i++) {
        hellos += 'hello ';
    }

    return hellos;
}

// helloFunction();

myFunction(helloFunction);

myFunction(2);

const myVariable = 2;
// const myVariable2 = helloFunction;
// myVariable2();


