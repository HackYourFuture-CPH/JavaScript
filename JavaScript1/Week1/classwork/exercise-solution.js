const pizzaName = 'Peperoni';
const pizzaPrice = 59;
const pizzaAmount = 7;
const pizzaIsfamilySize = true;

let totalPrice = pizzaPrice * pizzaAmount;
let pizzaType;

if (pizzaIsfamilySize) {
    totalPrice = totalPrice * 2;
    pizzaType = " family "
} else {
    pizzaType = " normal "
}

console.log('New pizza order: ' +pizzaAmount+ pizzaType + pizzaName + '. Total price: ' + totalPrice + ' kr');

