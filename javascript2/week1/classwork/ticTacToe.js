// const position = [
//   ['o', ' ', ' '],
//   ['o', ' ', ' '],
//   ['o', ' ', ' ']
// ];

// const position = [
//   [' ', ' ', 'o'],
//   [' ', ' ', 'o'],
//   [' ', ' ', 'o']
// ];

// const position = [
//   ['o', 'o', 'o'],
//   [' ', ' ', ' '],
//   [' ', ' ', ' ']
// ];

// const position = [
//   [' ', ' ', ' '],
//   ['o', 'o', 'o'],
//   [' ', ' ', ' ']
// ];

// const position = [
//   [' ', ' ', ' '],
//   [' ', ' ', ' '],
//   ['o', 'o', 'o']
// ];

// const position = [
//   ['o', ' ', ' '],
//   [' ', 'o', ' '],
//   [' ', ' ', 'o']
// ];

// const position = [
//   [' ', ' ', 'o'],
//   [' ', 'o', ' '],
//   ['o', ' ', ' ']
// ];

// const position = [
//   [' ', 'o', ' '],
//   [' ', 'o', ' '],
//   [' ', 'o', ' ']
// ];

const position = [
  [' ', 'x', ' '],
  [' ', 'x', ' '],
  [' ', 'x', ' ']
];

// console.log(position[0][1])
// console.log(position[1][1])
// console.log(position[2][1])

function hasWon(position, player){
	if( position[0][1] === player && position[1][1] === player  && position[2][1] === player ){
		return true
	}else if( position[0][2] === player && position[1][1] === player  && position[2][0] === player ){
		return true
	}
	// add more else if conditions here
	return false
}

console.log(hasWon(position, 'x'))
console.log(hasWon(position, 'o'))