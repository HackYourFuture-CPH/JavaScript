console.log('it works!');
const arr = [2, 3, 5,]
function add(el){
  return el+2;
}
const result = arr.map(add);
console.log(result);
console.log(arr);

const iceCreams = [
  { flavor: 'pineapple', color: 'white' },
  { flavor: 'strawberry', color: 'red' },
  { flavor: 'watermelon', color: 'red' },
  { flavor: 'kiwi', color: 'green' },
  { flavor: 'mango', color: 'yellow' },
  { flavor: 'pear', color: 'green' }
];

const resultFlavors = iceCreams.map(function(ic){
  return "My favorite flavors" + ic.flavor;
})

console.log(resultFlavors)
