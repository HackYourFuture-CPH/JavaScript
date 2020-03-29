const oldArray = ['Sam', 'Andreas', 'Eva', 'Chris', 'Sara']

function getStrLength(str){
	return str.length
}

// const newArray = []
// for(let i = 0; i < oldArray.length; i++){
// 	// get current item
// 	const currentItem = oldArray[i];
// 	// apply function
// 	const newItem = getStrLength(currentItem);
// 	// new array
// 	newArray.push(newItem);
// }

const newArray = oldArray.map(getStrLength);

console.log("Before: ")
console.log(oldArray);

console.log("After: ")
console.log(newArray);