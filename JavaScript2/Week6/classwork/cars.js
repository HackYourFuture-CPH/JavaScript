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

// MAP
// 1. Create an array of all car colors
// const carColors = cars.map(car => car.color)
const carColors = cars.map((car, index) => {
    return car.color;
})
console.log(carColors);

// FILTER
// 2. List the cars that can go above 50
const isFasterThan50 = car => car.speed > 50
// const fastCars = cars.filter(isFasterThan50)
// const fastSpeeds = fastCars.map(car => car.speed)

const fastSpeeds = cars
.filter(isFasterThan50)
.map(car => car.speed)

console.log(fastSpeeds);

// SORT
// 3. Create a new array where the cars are sorted by speed
cars.sort((carA, carB) => carB.speed - carA.speed)
console.log(cars)


// FOREACH
// 4. Add a new field called `gears` within each array, where gears are randomly between 2-5 (i.e. edit the original array)
cars
.forEach(car => car.gears = Math.floor(Math.random() * 3) + 2)

const threeGears = cars.filter(car => car.gears === 3)
console.log(threeGears)

// reduce
const totalSpeed = cars.reduce((total, car) =>{
    total = total + car.speed
    return total
},
0)

console.log(totalSpeed);
