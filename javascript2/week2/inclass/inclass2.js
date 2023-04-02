apples = [
    {weight: 175, color: 'red', isPeeled: false, price: 0.5},
    {weight: 180, color: 'yellow', isPeeled: false, price: 0.6},
    {weight: 155, color: 'green', isPeeled: false, price: 0.4},
    {weight: 230, color: 'pink', isPeeled: false, price: 0.8},
    {weight: 140, color: 'red', isPeeled: false, price: 0.3},
    {weight: 200, color: 'yellow', isPeeled: false, price: 0.7},
    {weight: 165, color: 'green', isPeeled: false, price: 0.5},
    {weight: 250, color: 'pink', isPeeled: false, price: 0.9}
]

// console.log weight
apples.forEach((apple, i) => {
    console.log(apple.weight)
});
apples.forEach(console.log)

// Peel the apples, peeling an apple reduces it's weight by 5g
const peeledApples = apples.map(apple => {
    apple.weight -= 5
    apple.isPeeled = true
    return apple
})
console.log("peeledApples:")
console.log(peeledApples)

// Whats the total price of each apple? weight * price
const totalPrices = apples.map(apple => {
    return apple.weight * apple.price
})
console.log("totalPrices:")
console.log(totalPrices)

// Only select green apples
const greenApples = apples.filter(apple => apple.color === 'green')
console.log("greenApples:")
console.log(greenApples)

// Whats the price of all peeled green apples?
const peeledGreenApples = apples.filter(apple => apple.color === 'green')
                                .map(apple => {
                                    apple.weight -= 5
                                    apple.isPeeled = true
                                    return apple
                                })
console.log("peeledGreenApples:")
console.log(peeledGreenApples)

// sort intro, other array function
const numbers = [5,2,3,4,5,20,6,7]
const sortedNumbers = numbers.sort()
console.log(numbers)
console.log(sortedNumbers)