const oldArray = ['Sam', 'Andreas', 'Eva', 'Chris', 'Sara']

const getLength = name => name.length

// const newArray = []
// for(let i = 0; i < oldArray.length; i++){
// 	// get current item
// 	const currentItem = oldArray[i];
// 	// apply function
// 	const newItem = getLength(currentItem)
// 	// new array
// 	newArray.push(newItem);
// }

const newArray = oldArray.map(getLength)

console.log("Before: ")
console.log(oldArray);

console.log("After: ")
console.log(newArray);