const arr = [2, 6, 1, 8, 7];
let doubled = []; // map
let sum = 0; // reduce
let evens = []; // filter


// doing map, reduce, filter using forEach
arr.forEach(function(a){
	doubled.push(a*2);
	sum += a;
	if(a%2 === 0)
		evens.push(a);
});

console.log("Doubled (mapped): ", doubled);
console.log("Sum (reduced): ", sum);
console.log("Evens (filtered): ", evens);

for (let i = 0; i<arr.length; i++){
	sum += arr[i];
	doubled[i] = arr[i]*2;
	if(arr[i]%2 === 0){
		// console.log("before insert"+evens.length);
		evens[evens.length] = arr[i];
		// console.log("after insert"+evens.length);
	}
}

// doing the same using array API and arrow functions
const doubled_arrow = arr.map(a => a*2);
const evens_arrow = arr.filter(a => a%2 === 0);
const sum_arrow = arr.reduce(
	(runningSum, a) => runningSum + a,
0);

// const isAnyOdd = arr.some(a => a%2 === 1)
// const areAllOdd = arr.every(a => a%2 === 1)

// Storing arrow function as a variable for re-use
const oddTest = (a => a%2 === 1);
const isAnyOdd = arr.some(oddTest);
const areAllOdd = arr.every(oddTest);
const odds_arrow = arr.filter(oddTest);

console.log("Doubled (mapped): ", doubled_arrow);
console.log("Sum (reduced): ", sum_arrow);
console.log("Evens (filtered): ", evens_arrow);
console.log("Odds (filtered): ", odds_arrow);
console.log("Any Odd?: ", isAnyOdd);
console.log("All Odd?: ", areAllOdd);


// Accessing complex objects
let complexArray = [[1,2,3], [4,5,6]];
console.log(complexArray[1][2]);

let complexObject = {a: {b: ["x", 46464, "z"]}};
console.log(complexObject.a.b[1]);
