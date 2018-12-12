let student = {
	name: 'Alicia Gonzalez',
	class: 8,
	lastName: 'Gonzalez',
	firstName: 'Alicia'
};

/*

...
...
...console.log(student[key])

*/

let areFriends = true;
let key = 'name';
if (areFriends){
	key = 'firstName';
}

console.log(student[key])
console.log(student.name)