// variables
// number of pizzas
const numPizzas = 4
// family size or not
const familySize = false
// name of pizza
const pizzaName = 'pepperoni'
// pizza price
const pizzaPrice = 30

let totalPrice = numPizzas * pizzaPrice
let sizeOutput = 'small'

// family size means price is doubled
if(familySize) {
    totalPrice = totalPrice * 2
    sizeOutput = 'family'
}

// output
// New pizza order: <amount of pizzas> <family or not?> <name of pizza>.
console.log('New pizza order: ', numPizzas, sizeOutput, pizzaName)
// Total cost for the order is: <total price>
console.log('Total cost for the order is: ', totalPrice)
