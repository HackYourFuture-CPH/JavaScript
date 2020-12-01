const oldArray = [1, 2, 3, 4, 5];

const logMultBy5 = n => {
	console.log(5 * n)
}

// forEach
// const newArray = []
// for(let i = 0; i < oldArray.length; i++){
// 	// get current item
// 	const currentItem = oldArray[i];
// 	// apply function
// 	logMultBy5(currentItem);
// }

oldArray.forEach(logMultBy5)

console.log("Before: ")
console.log(oldArray);

console.log("After: ")
console.log(newArray);