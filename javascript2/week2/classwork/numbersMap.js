const oldArray = [1, 2, 3, 4, 5];

function multBy5(n){
	return 5 * n
}

// const newArray = []
// for(let i = 0; i < oldArray.length; i++){
// 	// get current item
// 	const currentItem = oldArray[i];
// 	// apply function
// 	const newItem = multBy5(currentItem);
// 	// new array
// 	newArray.push(newItem);
// }

const newArray = oldArray.map(multBy5)

const newArray2 = oldArray.map(function(n){ // anonymous function
	return 10 * n
});

console.log("Before: ")
console.log(oldArray);

console.log("After: ")
console.log(newArray);

console.log("After2: ")
console.log(newArray2);