const people = [{name:'Sam', sex:'male'},
				  {name:'Andreas', sex:'male'},
				  {name:'Eva', sex:'female'},
				  {name:'Chris', sex:'male'},
				  {name:'Sara', sex:'female'}];

function filterFemale(person){
	return person.sex === 'female'
}

// const newArray = []
// for(let i = 0; i < oldArray.length; i++){
// 	// get current item
// 	const currentItem = oldArray[i];
// 	// ask question
// 	const question = filterFemale(oldArray[i]);
// 	// new array
// 	if(question){
// 		newArray.push(currentItem);
// 	}
// }

const females = people.filter(filterFemale);

console.log("Before: ")
console.log(oldArray);

console.log("After: ")
console.log(newArray);