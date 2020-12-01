const oldArray = [1, 2, 3, 4, 5]; // [O O O O O]

const multBy5 = n => 5 * n

// const newArray = []
// for(let i = 0; i < oldArray.length; i++){
// 	// get current item, a single red dot
// 	const currentItem = oldArray[i];
// 	// apply function --->
// 	const newItem = multBy5(oldArray[i])
// 	// new array
// 	newArray.push(newItem); // a single red dot
// }

newArray = oldArray.map(multBy5);

console.log("Before: ")
console.log(oldArray);

console.log("After: ")
console.log(newArray);