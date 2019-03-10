var age = 14

// if-else statement, `age > 18` is called an expression
// `age > 18` is called a boolean expression
if (age > 18) {
  console.log('Allowed')
} else {
  console.log('Denied')
}

if (age < 18) console.log("You're not old enough")

// Boolean operators
// && is called AND
// || is called OR
// ! is called NOT

// Chained if statement
if (age > 0 && age < 13) {
  console.log('You are a child')
} else if (age >= 13 && age < 20) {
  console.log('You are a teenager')
} else if (age <= 0) {
  console.log('You are an infant')
} else {
  console.log('You are an adult')
}

if (age < 18 || age === 18) { // same as saying `age <= 18`
  console.log('You are almost there')
}

// New example
var userRole = 'guest'
var isAdmin = userRole === 'admin'
var isLoggedIn = userRole !== 'guest'

if (isAdmin) {
  console.log('You are in charge')
} else if (isLoggedIn) {
  console.log('Welcome user')
} else {
  console.log('Welcome guest')
}

function isAuthenticated (userRole) { // userRole here is different from `var userRole`
  var isAdmin = userRole === 'admin'
  var isLoggedIn = userRole !== 'guest'

  if (isAdmin) {
    return true // if this is run, all other code after is ignored inside the function
  } else if (isLoggedIn) {
    return true
  }

  return false
}

console.log(userRole)
console.log(isAuthenticated(userRole))
console.log(isAuthenticated('admin'))
