const oldArray = ['Sam', 'Andreas', 'Eva', 'Chris', 'Sara']

function firstLetterVowel(str){
	const firstLetter = str[0].toLowerCase()
	const vowels = ['a','e','i','u','o']
	return !(vowels.indexOf(firstLetter) >= 0)
}

// const newArray = []
// for(let i = 0; i < oldArray.length; i++){
// 	// get current item
// 	const currentItem = oldArray[i];
// 	// ask question
// 	const question = firstLetterVowel(currentItem);
// 	// new array
// 	if(question){
// 		newArray.push(currentItem);
// 	}
// }

const newArray = oldArray.filter(firstLetterVowel);

console.log("Before: ")
console.log(oldArray);

console.log("After: ")
console.log(newArray);