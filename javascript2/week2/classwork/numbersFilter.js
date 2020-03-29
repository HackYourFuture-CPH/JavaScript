const oldArray = [1, 2, 3, 4, 5];

function smallerThan3(n){
	return n < 3
}

// const newArray = []
// for(let i = 0; i < oldArray.length; i++){
// 	// get current item
// 	const currentItem = oldArray[i];
// 	// ask question
// 	const question = smallerThan3(currentItem);
// 	// new array
// 	if(question){
// 		newArray.push(currentItem);
// 	}
// }

const newArray = oldArray.filter(function(n){
	return n > 3;
});

console.log("Before: ")
console.log(oldArray);

console.log("After: ")
console.log(newArray);