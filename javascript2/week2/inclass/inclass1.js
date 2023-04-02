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
for (let i = 0; i < apples.length; i++) {
    const apple = apples[i];
    console.log(`${i}, ${apple.weight}`)
}

// Peel the apples, peeling an apple reduces it's weight by 5g
const peeledApples = []
for (let i = 0; i < apples.length; i++) {
    const apple = apples[i];
    apple.weight -= 5
    apple.isPeeled = true
    peeledApples.push(apple)
}
console.log("peeledApples:")
console.log(peeledApples)

// Whats the total price of each apple? weight * price
const totalPrices = []
for (let i = 0; i < apples.length; i++) {
    const apple = apples[i];
    const totalPrice = apple.weight * apple.price
    totalPrices.push(totalPrice)
}
console.log("totalPrices:")
console.log(totalPrices)

// Only select green apples
const greenApples = []
for (let i = 0; i < apples.length; i++) {
    const apple = apples[i];
    if (apple.color === "green") {
        greenApples.push(apple)
    }
}
console.log("greenApples:")
console.log(greenApples)

// Whats the price of all peeled green apples?
const peeledGreenApples = []
for (let i = 0; i < apples.length; i++) {
    const apple = apples[i];
    if(apple.color === "green") {
        apple.weight -= 5
        apple.isPeeled = true
        peeledGreenApples.push(apple)
    }   
}
console.log("peeledGreenApples:")
console.log(peeledGreenApples)