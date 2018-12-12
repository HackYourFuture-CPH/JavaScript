let employees = [];
employees.push({ name: 'John', forename: 'L', city: 'Copenhagen'});
employees.push({ name: 'John', forename: 'M', city: 'Malmo'});
employees.push({ name: 'John', forename: 'X', city: 'Oslo'});
// console.log(employees);

for (let i =0; i < employees.length; i++) {
	console.log(employees[i].city)
}

function getPerson(firstname, lastname) {
	const person = {
		firstname: firstname,
		lastname: lastname
	};

	return person;
}

console.log(getPerson('Alicia', 'Gonzalez'))

// Empty object
let emptyObject = {};
// function returning empty object
function stupidFunction(){
	return {};
}

emptyObject = stupidFunction();

// not so stupid anymore:
emptyObject.name = 'Alicia'

let arrayOfArray = [['Copenhagen','John'],['Malmo','Peter']];

let outTwoDimArray = [[],[]];
console.log( outTwoDimArray[1] );