#Map function
- [ ] The map() method creates a **New Array** with the **Results** of calling a provided **function** on every element in this array.
- [ ] Takes an array and a function
- [ ] Applies the function to every element in the array
- [ ] Applies the function to every element in the array
- [ ] Keeps track of the results of each successive function call
- [ ] Returns a new array containing these results

const iceCreams = [
  { flavor: 'pineapple', color: 'white' },
  { flavor: 'strawberry', color: 'red' },
  { flavor: 'watermelon', color: 'red' },
  { flavor: 'kiwi', color: 'green' },
  { flavor: 'mango', color: 'yellow' },
  { flavor: 'pear', color: 'green' }
];

const flavors = iceCreams.map(icecream => icecream.flavor)
console.log(flavors)
Remove odd values from [1,2,3,4,5]
Remove even indexes from [1,2,3,4,5]

function map(array, transform) {
  let mapped = [];
  for (let element of array) {
    mapped.push(transform(element));
  }
  return mapped;
}