const user = {
	name: "Nynne",
	nickname: "nice",
	age: 33,
	nationality: "DK",
	gender: "woman",
	languages: ["DK", "EN", "DE", "JavaScript", "Ruby"],
	education: "university",
	isMarried: false,
	friends: {
		bestFriends: ["gizem", "Rasmus"],
		acquaintences: [ "christopher", "birte"]
	}
}

const user2 = {
	name: "Rasmus",
	nickname: "Rassi",
	age: 29,
	nationality: "DK/EN",
	gender: "man",
	languages: ["DK", "EN", "DE", "JavaScript", "Ruby", "Python", "MATLAB", "C/C++", "Julia", "PHP", "Java"],
	education: "PhD",
	isMarried: false,
	friends: {
		bestFriends: ["Mark", "Nynne"],
		acquaintences: ["Christopher", "Marie"]
	}
}

const user3 = {
	name: "Marie",
	nickname: "M",
	age: 31,
	nationality: "DK",
	gender: "woman",
	languages: ["DK", "EN", "ES"],
	education: "university",
	isMarried: false,
	friends: {
		bestFriends: ["Thomas", "Rasmus"],
		acquaintences: ["Christopher", "Nynne"]
	}
}

// const isGreetedFormally = false

// let key;
// if(isGreetedFormally){
// 	key = 'name'
// 	// console.log(`Hello, ${user.name}`)
// }else{
// 	key = 'nickname'
// 	// console.log(`Hello, ${user.nickname}`)
// }

// console.log(`Hello, ${user[key]}`)
// // console.log(`Hello, ${user.nickname}`) // ERROR

// console.log(`Hello, ${user[key]}`)

// console.log(user)
// delete user.age
// console.log(user)

// console.log(user['friends']['acquaintences'])
// console.log(user.friends.acquaintences)

// console.log(user['friends'].acquaintences)
// console.log(user.friends['acquaintences'])

// console.log({name:'Rasmus',age:29}.name)

// console.log(user.languages[user.languages.length-1])
// console.log(user["languages"][user.languages.length-1])

const users = [user, user2, user3]

let sum = 0;
for(let i=0; i < users.length; i++){
	console.log(`Name: ${users[i].name}`)
	console.log(`Age: ${users[i].age}`)
	sum += users[i].age
}
const avg = sum / users.length
console.log( avg )

// Cool stuff:
const otherAvg = users.reduce(function(sum, user){
	return sum += user.age
},0)/users.length;
console.log( otherAvg )

// For loop through all the users
// and collect all the languages from all users
// but skip duplicates
// Hint: google "javascript array includes"
// const allLanguages = []
// for(let i = 0; i < users.length; i++){
// 	// users[i]
// 	// console.log(users[i].name)
// 	for(let j = 0; j < users[i].languages.length; j++){
// 		// console.log(users[i].languages[j])
// 		if(!allLanguages.includes(users[i].languages[j])){
// 			allLanguages.push(users[i].languages[j])
// 		}
// 	}
// }
// console.log(allLanguages)

let allLanguages = []
for(let i = 0; i < users.length; i++){
	allLanguages = allLanguages.concat(users[i].languages);
}
const mySet = new Set(allLanguages);
console.log(Array.from(mySet))