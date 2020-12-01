const oldArray = ['Sam', 'Andreas', 'Eva', 'Chris', 'Sara']

const startsWithoutVowel = name => {
	const firstLetter = name[0].toLowerCase()
	const vowels = ['a','e','i','u','o']
	return vowels.indexOf(firstLetter) === -1
}

// const newArray = []
// for(let i = 0; i < oldArray.length; i++){
// 	// get current item
// 	const currentItem = oldArray[i]; // Sam
// 	// ask question
// 	//                  s
// 	const firstLetter = currentItem[0].toLowerCase()
// 	const vowels = ['a','e','i','u','o']
// 	const question = vowels.indexOf(firstLetter) === -1
// 	// new array
// 	if(question){
// 		newArray.push(currentItem);
// 	}
// }

const newArray = oldArray.filter(startsWithoutVowel)

console.log("Before: ")
console.log(oldArray);

console.log("After: ")
console.log(newArray);