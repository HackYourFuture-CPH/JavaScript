const action = function(callback, x, y){	
	const result = callback(x, y);
	return result;
}

// 
const add = function(x, y){
	return x + y;
}

const sub = function(x, y){
	return x - y;
}

console.log(add)
console.log(add(4, 4))

console.log(sub)
console.log(sub(8, 4))

console.log(action)
console.log(action(add, 8, 8))
console.log(action(sub, 16, 2))