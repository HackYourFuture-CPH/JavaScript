const user = {
  name: 'Rasmus',
  age: 29,
  role: 'Teacher',
  classes: ['Javascript 1', 'Javascript 3'],
  hobbies: {
    favourite: 'computers',
    sports: 'basketball'
  }
}

// output name
console.log(user.name)
console.log(user['name'])

// add lastname
user.lastname = "Jones"
user['lastname'] = "Jones"

// remove age property
delete user.role
console.log(user)

// output your favourite hobby
console.log(user.hobbies.favourite)
console.log({name:'Peter',lastname:'Pan'}.lastname)

// output your 2nd class
console.log(user.classes[1])

const user2 = {
  name: 'Herman',
  age: 31,
  role: 'Teacher',
  classes: ['Javascript 1', 'Cryptology'],
  hobbies: {
    favourite: 'sailing',
    sports: 'baseball'
  }
}

const user3 = {
  name: 'Hatem',
  age: 33,
  role: 'Teacher',
  classes: ['Javascript 1', 'LabView'],
  hobbies: {
    favourite: 'chess',
    sports: 'cycling'
  }
}

const users = [user, user2, user3]
// For loop through all the users
let sumAge = 0;
for(let i = 0; i<users.length; i++){
	// add all their ages together
	console.log(users[i].age)
	debugger; // will stop here if run in browser with index.html
	sumAge += users[i].age;
}
const avgAge = sumAge / users.length
console.log(avgAge)

// console.log("Cool stuff: ")
// console.log(users.reduce(function (sum,user){
// 	return sum += user.age
// }, 0 ) / users.length)
// calculate the average


// For loop through all the users
// and collect all the classes from all users 
// but skip duplicates
// Hint: use a function from Array that is called includes()
let allClasses = []
for(let i=0; i < users.length; i++){
	console.log(users[i].name)
	// console.log(users[i].classes)
	for(let j=0; j < users[i].classes.length; j++){
		console.log(users[i].classes[j])
		debugger; // will stop here if run in browser with index.html
		if( !allClasses.includes(users[i].classes[j]) ){
			allClasses.push(users[i].classes[j])
		}
	}
}
console.log(allClasses)