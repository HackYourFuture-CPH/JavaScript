const students = ['Elias', 'Deepti', 'Ahmad', 'Florin', 'Nuha'];
const ages = [33, 21, 25, 30, 21];
console.log(students);
console.log(ages);
let students_obj = [
    {name: "Elias", age: 33, country: "Eritrea"},
    {name: "Deepti", age: 21, country : "India"},
    {name: "Ahmad", age: 25, country : "Syria"},
    {name: "Florin", age: 30, country : "Romania"},
    {name: "Nuha", age: 21, country : "Iraq"},
]
// Access age of Ahmad
//console.log(students_obj[2]['age']);

console.log(students_obj[2][1]);

students_obj[2][1] = "bizarre";

console.log(students_obj[2][1]);

console.log(students_obj);

// Syntactial difference
// Array = []
// Objects = {}
//           0   1      2
//let arr = [1, true, "hello"]
//let obj = {num : 1, isTrue : true, greeting: "hello"};
//obj[greeting]

