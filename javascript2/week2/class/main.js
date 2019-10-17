const arr = ['Burger', 'Pizza', 'Kebab'];


arr.forEach((value) => console.log(value));

/*
const goodFood = [];
for(let i = 0; i <arr.length; i++) {
    const food = arr[i];
    if(food.length === 5) {
        goodFood.push(food);
    }
}

console.log(goodFood);

*/



const goodFood = arr.filter((value) => value.length !== 5);

console.log(goodFood);

const luckyNumbers = [1, 2, 3, 4, 5];

/*const squaredLuckyNumbers = [];
for(let i = 0; i < luckyNumbers.length; i++) {
    const number = luckyNumbers[i];
    const newNumber = number*number;
    squaredLuckyNumbers.push(newNumber);
}*/

const squaredLuckyNumbers = luckyNumbers
    .map(value => value * value)
    .filter(value => value % 2 === 1)
    .map(value => value / 2)
    .forEach(value => console.log(value));

for(let i = 0; i < squaredLuckyNumbers.length; i++) {
    console.log(squaredLuckyNumbers[i]);
}

// console.log(squaredLuckyNumbers);
