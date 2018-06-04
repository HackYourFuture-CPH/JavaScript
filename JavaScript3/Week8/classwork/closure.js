// classic implementation of closure
function adderFactory(y){
	function yAdder(a){
		return y+a;
	}

	return yAdder;
}

// const yAdder = a => a+y;
// function adderFactory(y){
// 	return a => a+y;
// }
// sarrow shorthand implementation of factory above
// const adderFactory = y => (a => a+y);

// const x = 5, y = 10;
// console.log(x+y);

const arr = [1, 7, 9];
console.log(arr);
// 1+y, 7+y, 9+y
const adder10 = adderFactory(10);
const added10 = arr.map(a => adder10(a));
// one step implementation
const added7 = arr.map(adderFactory(7));
// console.log(added10, added7);

const z = 20;
// how do i add 11 to z above through a function? 
// const adder11 = adderFactory(11);
// console.log(adder11(z));
// console.log(adderFactory(11)(z));

const adderArgs = [10, 7, 11];
// const adderFuncs = adderArgs.map(adderFactory);
// console.log(adderFuncs);

// const multiMap = adderFuncs.map(f => arr.map(f));
const multiMap = adderArgs
	.map(adderFactory)
	.map(f => arr.map(f));
console.log(multiMap);
