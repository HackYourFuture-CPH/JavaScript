const oldArray = [1, 2, 3, 4, 5];

function multBy5(n){
	return 5 * n
}

function logMultBy5(n){
	console.log(5 * n)
}

// map
// const newArray = []
// for(let i = 0; i < oldArray.length; i++){
// 	// get current item
// 	const currentItem = oldArray[i];
// 	// apply function
// 	const newItem = multBy5(currentItem);
// 	// new array
// 	newArray.push(newItem);
// }

// forEach
// const newArray = []
// for(let i = 0; i < oldArray.length; i++){
// 	// get current item
// 	const currentItem = oldArray[i];
// 	// apply function
// 	multBy5(currentItem);
// }

const newArray = oldArray.map(multBy5)

oldArray.forEach(logMultBy5)

console.log("Before: ")
console.log(oldArray);

console.log("After: ")
console.log(newArray);