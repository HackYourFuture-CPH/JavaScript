function multBy2(x){
	// body of the function
	// scope of the function
	return 2 * x
}

console.log(typeof multBy2)
console.log(typeof multBy2(4)) // HERE WE CALL/EVALUATE THE FUNCTION

const multBy2AsVariable = x => 2 * x

console.log(multBy2AsVariable)

// anonymous function!
const arrayOfNumbers = [1, 2, 3, 4]
const mappedValues = arrayOfNumbers.map(x => 4 * x) // anonymous function
console.log(mappedValues)

// HERE I CANNOT ACCESS THE ANONYMOUS FUNCTION FROM LINE 15

const arrayOtherNumbers = [6, 7, 8, 9]
const otherMappedValues = arrayOtherNumbers.map(multBy2(10))
// SOMEWHERE INSIDE THE FUNCTIONALITY OF THE MAP
//			multBy2(6), multBy2(7), multBy2(8), multBy2(9)
//
//
console.log(otherMappedValues)

// HERE I CAN STILL ACCESS THE FUNCTION multBy2AsVariable FROM LINE 21