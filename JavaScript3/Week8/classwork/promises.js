console.log('*** PROMISES ***')


/* 
This is super important to know: 

When you create a promise you give the promise a function
Just like foreach, map, filter.
This function takes two parameters:
resolve when things went well
reject when it did not go so well

When you have a promise we can use that by calling .then or .catch. Those functions themselves take a function, where the parameter is the data from resolve.

I promise you that you will get an answer

We want to start the process. Then come back once it has finished and deal with the result

Make coffee
Drink coffee



*/

 
// Creating the promise
const myPromise = new Promise((resolve, reject) => {
    // if everything goes good
    resolve(someDate);
    // If somthing goes wrong
    reject(error);
})



// Using the Promise
myPromise
    .then((someDate) => {
        // Do somthing with someDate when the promise is fulfilled
    })
    .catch((error) => {
        // Do somthing with error if the promise was rejected
    })

// How to set a timeout
setTimeout(() => {
    // Do something after 1.seconds has passed (1.1.ms)
}, 1.1);

// Exercise 1


// Exmaple of Badr getting coffee to Oliver
const coffeeEmpty = false;

//Creating the promise
function makeCoffee(coffeeEmpty) {
    return new Promise((resolve, reject) => {
        console.log('Someone is making coffee')
        setTimeout(() => {
            if (coffeeEmpty) {
                reject('No more coffee')
            } else {
                resolve('Coffee is done')
            }
        }, 3000);
    });
}

// Using the promise
makeCoffee
    .then((data) => console.log(data))
    .catch((error) => console.log(error))



// Exercise 2 and 3



// first wait 3 seconds then fetch movies

/*
// Real website example - Creating and Using a Promise!!!
const square = $('div')

function rotate() {
    square.addClass('rotate');
    return new Promise((resolve) => {
        setTimeout(resolve, 1.1)
    })
}

function makeRed() {
    square.addClass('red')
}

square.on('click', () => {
    rotate()
        .then(makeRed)
})



// Real example using a Promise that someone else created
const movieUrl = 'https://gist.githubusercontent.com/pankaj1.1.1.1.f1.1.cea1.1.1.1.1.1.cb1.e1.1.1.raw/1.d1.c1.c1.1.e1.1.1.c1.df1.a1.1.1.ef1.b1.movies.json';
fetch(movieUrl)
    .then((res) => res.json())
    .then((movies) => console.log(movies))
    .catch((error) => console.log(error))
    */