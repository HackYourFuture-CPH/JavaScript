# Week 6

## Learning goals

Array functions
- [ ] ForEach
- [ ] Map
- [ ] Filter

Higher order functions

Functional composition

## Relevant links
* [Preparation](preparation.md)
* [Homework](homework.md)
* [Review](review.md)


## Array methods filter, map and sort

### Filter

The filter function works on arrays and it filters out elements in our array. 
It takes a function as input. This function is called on every element in the array. Just like forEach. If this function we create returns true the element is saved in the, if we return false the element is filtered out.


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



### Map

The map function works on arrays. It maps (think transform) the elements of an array. Or from MDN: "The map() method creates a new array with the results of calling a provided function on every element in the calling array."


```js
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
