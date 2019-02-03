// cars

// car

// title

// getTitle

// addTitle

// isTitle

// hasTitle

// hasItem

// users

// year

// yearIndex

// user

// review. 

console.log(1);

/*
setTimeout(function() {
    console.log('setTimeout done');
}, 5000);
*/


// cars.map(function(car){})


// function creation
function test() {
    
}


// function usage
console.log(test());

/*
// Promise creation
const oneSecondTimeoutPromise = new Promise((resolve) => {
    console.log(typeof resolve);
    setTimeout(() => {
        const resolveObject = {
            name: 'benjamin'
        };

        resolve(resolveObject);
    }, 1000);
});

// Promise usage
oneSecondTimeoutPromise
    .then((benjaminString) => {
        console.log('one second timeout done');
        console.log(oneSecondTimeoutPromise);

        console.log(benjaminString);
        
        
    });

    */
/*
fetch('asduasd')
    .then((response) => response.json())
    .then((data) => {

    });
    */
/*
setTimeout(() => {
    console.log(2);

    setTimeout(() => {
        console.log(2);

        setTimeout(() => {
            console.log(3);
            
        }, 7000);
    }, 3440);
}, 2000);

*/

/*
navigator.getBattery()
    .then(function(battery) {
        console.log(battery.level);
        
    });
*/

console.log(2);


const promise = new Promise((resolve) => {
    setTimeout(() => {
        const tea = {
            color: 'green',
            taste: 'Bitter',
        };

        resolve(tea);
    }, 3000);
});

const isThereMoreTea = false;

function makeTea() {
    console.log('Start making tea');

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const tea = {
                color: 'green',
                taste: 'Bitter',
            };
            
            if (isThereMoreTea) {
                resolve(tea);
            } else {
                reject('We dont have more TEA!!');
            }
        }, 3000);
    });
}

console.log(makeTea());

makeTea()
    .then((returnedTeaObject) => {
        console.log(returnedTeaObject);
    })
    .catch((error) => {
        console.log(error);
    })



