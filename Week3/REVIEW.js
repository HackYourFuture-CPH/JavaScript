```
This review covers:
• Array Manipulations 
• Basic DOM manipulations
```


/* Arrays */




const firstArray = ['milk', 'sugar', 'butter', 'flour', 'eggs'];

console.log(firstArray);

console.log(firstArray.indexOf('sugar'));

console.log(firstArray.slice(0,3));

console.log(firstArray.reverse());




/**
 * Get random integer between two numbers, found here: https://stackoverflow.com/a/7228322
 * @param {integer} min - The min number
 * @param {integer} max - The max number
 * @returns {Number} Random number between min and max
 */
function randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}


/**
 * Get an array with car objects with random color and speed
 * @param {integer} numberOfCars - The number of cars 
 * @returns {array} Array containing the car objects
 */
function generateCars(numberOfCars) {
    const cars = [];

    const carMakes = ['Honda', 'BMW','Fiat','Skoda','Volvo'];
    const carColors = ['lightgrey', 'lightcyan','lightyellow','lightgreen','lightcoral','lightpink'];
    
    for (let i = 0; i < numberOfCars; i++) {
        const car = {};
        const randomMakeIndex = randomIntFromInterval(0, carMakes.length - 1);
        const randomColorIndex = randomIntFromInterval(0, carColors.length - 1);

        car.make = carMakes[randomMakeIndex];
        car.color = carColors[randomColorIndex];
        car.speed = randomIntFromInterval(0, 100);

        cars.push(car);
    }

    return cars;
}

/* Arrays: map */

const cars = generateCars(7);


console.log(cars);

const bmws = cars.filter(function(car) {
    console.log(car.make);
    console.log(car.make === 'BMW');

    return car.make === 'BMW';
});

console.log(bmws);


console.log('fast Cars:');


const fastCarsFunction = function(car) {
    console.log(car.speed);
    console.log(car.speed > 70);

    return car.speed >= 70;
}

const fastCars = cars.filter(fastCarsFunction);
console.log(fastCars);




const slowCarsFunction = function(car) {
    return car.speed < 70;
}

const slowCars = cars.filter(slowCarsFunction);

console.log(slowCars);

/* Or you can do it like this */

const slowCars2 = cars.filter(function(car) {
    return car.speed < 70;
});

console.log(slowCars2);



console.log('map:');

const getCarMake = function(car) {
    console.log(car.make);
    return {
        brand: car.make, 
        velocity: car.speed
    };
}

const carMakes = cars.map(getCarMake);



console.log(cars);
console.log(carMakes);



const sortAscending = function(a, b) {
    return a.speed - b.speed;
}

const sortedCars = cars.sort(sortAscending);
console.log(sortedCars);



/* HTML interaction */

const testIdElement = document.querySelector('#test-id');
console.log(testIdElement);

testIdElement.innerHTML = 'test';
testIdElement.style.backgroundColor = 'blue';


const div = document.createElement('div');
div.innerHTML = 'We created this div!!!';

const div2 = document.createElement('div');
div2.innerHTML = 'New div';


const queueDiv = document.querySelector('.queue');
queueDiv.appendChild(div);
queueDiv.appendChild(div2);
console.log(div);

console.log(document.querySelector('h1'));
document.getElementById('queue');

