const action = (x, y, callback) => {	
	const result = callback(x, y);
	return result;
}

const add = (x, y) => x + y;
const sub = (x, y) => x - y;

console.log(add)
console.log(add(4, 4))
console.log(sub)
console.log(sub(8, 4))
console.log(action)

// named function into action
console.log( action(8, 8, add) )
console.log( action(16, 2, sub) )

// // anonymous function into action
console.log( action(8, 8, (x, y) => x * y) )