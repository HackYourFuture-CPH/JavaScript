console.log('Script loaded');

// creating an html element in javascript. Also called a node. 
const createdDiv = document.createElement('div');
// Two ways of getting the body node
console.log(document.body);
console.log(document.querySelector('body'));
// Append the created div to the body element
document.body.appendChild(createdDiv);


/* ARROW FUNCTIONS */
function printFullname(firstname, lastname) {
    console.log(firstname + ' ' + lastname);
}

// Exactly the same as the function above. We are just assigning it to a variable
const printFullnameConst = function(firstname, lastname) {
    console.log(firstname + ' ' + lastname);
}
//printFullname('Benjamin', 'Hughes');

// The function made with the arrow function
// 1. Remove the function keyword. 
// 2.Add the arrow
const printFullnameConstArrowfunction = (firstname, lastname) => {
    console.log(firstname + ' ' + lastname);
}
//printFullnameConstArrowfunction('Benjamin', 'Hughes');


const printFullnameConstArrowfunctionShorter = (firstname, lastname) => {
    return firstname + ' ' + lastname;
}
// What comes after the arrow is being returned. 
const printFullnameConstArrowfunctionShorter2 = (firstname, lastname) => firstname + ' ' + lastname;
const fullname = printFullnameConstArrowfunctionShorter('Benjamin', 'Hughes');
//console.log(fullname);

document.querySelector('.secondClick').addEventListener('click', function() {
    console.log('clicked');
});
document.querySelector('.secondClick').addEventListener('click', () => console.log('clicked'));

document.querySelector('ul').addEventListener('click', () => {
    console.log('clicked');
}, false);
