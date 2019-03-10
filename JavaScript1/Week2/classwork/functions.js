// Math.random is a function, () means "calling" or "invoking" the function
Math.random()

// Math.round takes an argument, which is 10.4
var rounded = Math.round(10.4)
console.log(rounded)
// Javascript functions take infinte arguments, but may not use all
Math.round(10.4, 20, 10, 10, 10)

// Tells the number of arguments at least
Math.round.length

Math.round.call.length // Returns 1, but actually takes infinite

function ageCalcMessage (yearFuture, yearOfBirth) { // Parameters are yearFuture and yearOfBirth
  var age = yearFuture - yearOfBirth
  var futureAge = 'You will be ' + age + ' years old in 2027'
  return futureAge
}

function ageCalc (yearFuture, yearOfBirth) {
  return yearFuture - yearOfBirth
}

var myAge = ageCalc(2017, 1981) // Arguments are 2017 and 1981
console.log(myAge)
ageCalc(2017, 1980)
