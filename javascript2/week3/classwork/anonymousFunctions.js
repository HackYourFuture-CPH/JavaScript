function multBy2(x){
	return 2 * x
}

const multBy2Var = function(x){
	return 2 * x
}

// anonymous function!
const arrayOfNumbers = [1, 2, 3, 4]
const mappedValues = arrayOfNumbers.map(multBy2Var)
console.log(mappedValues)

const arrayOtherNumbers = [6, 7, 8, 9]
const otherMappedValues = arrayOtherNumbers.map(multBy2Var)
console.log(otherMappedValues)