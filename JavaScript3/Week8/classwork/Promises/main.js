console.log('*** PROMISES ***')


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
    // Do something after 1 seconds has passed (1000ms)
}, 1000);




// Exmaple of Badr getting coffee to Oliver
const coffeeEmpty = false;

//Creating the promise
const coffeePromise = new Promise((resolve, reject) => {
    console.log('Badr is getting coffee')
    setTimeout(() => {
        if (coffeeEmpty) {
            reject('No more coffee')
        } else {
            resolve('Here is your coffee Oliver')
        }
    }, 1000)
})

// Using the promise
coffeePromise
    .then((data) => console.log(data))
    .catch((error) => console.log(error))




// Real website example - Creating and Using a Promise!!!
const square = $('div')

function rotate() {
    square.addClass('rotate');
    return new Promise((resolve) => {
        setTimeout(resolve, 1000)
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
const movieUrl = 'https://gist.githubusercontent.com/pankaj28843/08f397fcea7c760a99206bcb0ae8d0a4/raw/02d8bc9ec9a73e463b13c44df77a87255def5ab9/movies.json';
fetch(movieUrl)
    .then((res) => res.json())
    .then((movies) => console.log(movies))
    .catch((error) => console.log(error))
