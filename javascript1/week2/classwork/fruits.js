const fruits = ['bananas','oranges','apples','cherries'];

let sentence = ''
for(let i=0; i < fruits.length; i++){
	// console.log(i, sentence)
	sentence += fruits[i]
	if( i === fruits.lenght-1 ){
		sentence += '.';
	}else if( i === fruits.lenght-2){
		sentence += ' and ';
	}else{
		sentence += ', ';
	}
}

// const sentence = fruits[0] + ", " + fruits[1] + ", " + fruits[2] + " and " + fruits[3] + "."
console.log("bananas, oranges, apples and cherries.")
console.log(sentence)
// console.log(fruits[0])
// console.log(fruits[1])
// console.log(fruits[2])

// console.log(fruits[2])
// console.log(fruits[1])
// console.log(fruits[0])

// 1. The above for loop as while loop
//
// 2. The above for loop in reverse order as for loop
//
// 3. Change the above for loop to output the string:
//    "oranges, apples and cherries."