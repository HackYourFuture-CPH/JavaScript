function multBy2(x){
	// body of the function
	// scope of the function
	return 2 * x
}

console.log(typeof multBy2)
console.log(typeof multBy2(4)) // HERE WE CALL/EVALUATE THE FUNCTION
console.log(multBy2)
console.log(multBy2(4))


const multBy2AsVariable = x => 2 * x
console.log(typeof multBy2AsVariable)


// anonymous function!
const arrayOfNumbers = [1, 2, 3, 4]
const mappedValues = arrayOfNumbers.map(x => 4 * x) // anonymous function
console.log(mappedValues)

const arrayOtherNumbers = [6, 7, 8, 9]
const otherMappedValues = arrayOtherNumbers.map(multBy2) // named function`
console.log(otherMappedValues)