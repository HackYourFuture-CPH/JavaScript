## Learning goals
- [ ] Array functions
  - [ ] ForEach
  - [ ] [Map](#map)
  - [ ] [Filter](#filter)
- [ ] [Arrow function](#Arrow-functions)
- [ ] Code flow, using the [call stack](../../JavaScript1/Week3/readme.md#call-stack)

## Relevant links
* [Preparation](preparation.md)
* [Homework](homework.md)


## Array methods map, filter and sort

### Map
The map function works on arrays. It maps (think transform) the elements of an array. Or from MDN: "The map() method creates a new array with the results of calling a provided function on every element in the calling array."


```js
// lets first create an array of three cars

const cars = [
    {
        make: 'Volvo',
        speed: 45,
        color: 'lightYellow',
    },
    {
        make: 'BMW',
        speed: 87,
        color: 'lightBlue',
    },
    {
        make: 'Fiat',
        speed: 78,
        color: 'lightCyan',
    }
];

// lets use the same cars array

// Lets transfrom it from an array of car objects to an array of car colors
const carColors = cars.map(function(car) {
    return car.color;
});

console.log(carColors); // ['lightYellow', 'lightBlue', 'lightCyan']

const carSpeeds = cars.map(function(car) {
    return car.speed;
});

console.log(carSpeeds); // [45, 87, 78]
```


### Filter

The filter function works on arrays and it filters out elements in our array. 
It takes a function as input. This function is called on every element in the array. Just like forEach. If this function we create returns true the element is saved in the, if we return false the element is filtered out.

```js

// Lets get only cars with a speed larger than 60
const fastCars = cars.filter(function(car) {
    // This function is called for every car in the cars array
    if (car.speed > 60) {
        // save the car
        return true;
    } else if (car.speed <= 60) {
        // filter out the cars that are slower than 60
        return false;
    }
});

console.log(fastCars); // logs the BMW and the Fiat
```


### Sort

The sort function works on arrays. It sorts the elements of the array.
To see details see here: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort

```js
// lets use the same cars array

// Lets sort the cars after speed ascending
const sortedCars = cars.sort(function(a, b) {
    return a.speed - b.speed;
});

console.log(sortedCars); // it will return an array with the BMW object first, then the fiat and then the volvo
```

### Arrow functions
Functions can be written as arrow functions, it looks like this:

```js
// This function
function getTimesTen(a) {
    return a * 10;
}

// Can be written like this:
const getTimesTenArrowFunction = (a) => {
    return a * 10;
}

// If there is only one parameter, we can remove the paranthesis:
const getTimesTenArrowFunction = a => {
    return a * 10;
}

// If the function is returning a single line of code, you can shorten it even further:
const getTimesTenArrowFunction = a => a * 10;
```

Here is how you **convert a function into an arrow function:**
1. Remove the keyword function
2. Add an arrow after the parameter
3. If there is only one parameter, we can remove the paranthesis around the parameter
4. If the function is returning a single line of code, we can remove the return keyword and the curly braces.


### Chaining
We can chain array methods after each other. 

So if we wanted an array of fast cars brands we could do this:
```js
// Broken down
const fastCars = cars
    .filter(car => car.speed > 60);

const fastCarBrands = fastCars
    .map(car => car.brand);

// But we can do those two operations in one go
const fastCarBrands = cars
    .filter(car => car.speed > 60)
    .map(car => car.brand);
```

```js
const fastCars = cars
    .filter(car => car.speed > 60);

// fastCars is an array! Arrays we can call .map on, so why not do it in one go!?
```
Calling the `filter` function, returns an array (in our case an array of objects, that represent fast cars). We know that we can call `.map` on an array, doing that we get the chaining of methods. 

The principal behind is exactly the same as in this example:

```js
const doesBenjaminEndWithN = "BENJAMIN".toLowerCase().endsWith('n');

// We can also write that as:
doesBenjaminEndWithNFormatted = "BENJAMIN"
    .toLowerCase() // <-- toLowerCase returns a string!
    .endsWith('n'); // <-- That we can call .endsWith on!
```

We are chaining methods on the return of the previous function's return value!

