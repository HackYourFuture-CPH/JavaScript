const user = {
	firstName: "Rasmus",
	lastName: "Jones"
}

const isFriend = true;
let adressing;
let key;
if(isFriend){
	adressing = "Hello, "
	key = 'firstName'
}else{
	adressing = "Good Morning Mr " 
	key = 'lastName'
}

console.log( adressing + user[key])