const oldArray = [{name:'Sam', sex:'male'},
				  {name:'Andreas', sex:'male'},
				  {name:'Eva', sex:'female'},
				  {name:'Chris', sex:'male'},
				  {name:'Sara', sex:'female'}];

function addressPerson(person){
	if(person.sex === 'male'){
		return `Mr ${person.name}`
	}else{
		return `Mrs ${person.name}`
	}
}

// const newArray = []
// for(let i = 0; i < oldArray.length; i++){
// 	// get current item
// 	const currentItem = oldArray[i];
// 	// apply function
// 	const newItem = addressPerson(currentItem);
// 	// new array
// 	newArray.push(newItem);
// }

const newArray = oldArray.map(addressPerson);

console.log("Before: ")
console.log(oldArray);

console.log("After: ")
console.log(newArray);