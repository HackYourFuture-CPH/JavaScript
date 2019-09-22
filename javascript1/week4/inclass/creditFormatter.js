const creditCardNumber = 12345678912364736;
const creditCardNumberStr = creditCardNumber.toString()
// 1111 1111 1111 1111
// console.log(creditCardNumberStr.slice(0,4))
// console.log(creditCardNumberStr.slice(4,8))
// console.log(creditCardNumberStr.slice(8,12))


const chunksOf = 4
const creditCardChunks = []
const loopLength = Math.ceil(creditCardNumberStr.length/chunksOf);
for(let i = 0; i < loopLength; i++){
	const s = chunksOf * i;
	const e = s + chunksOf;
	creditCardChunks.push(creditCardNumberStr.slice(s,e));
}

console.log(creditCardChunks.join(' '))
