const aNumber = 0;
console.log(aNumber);
function a(){
	const aNumber = 10;
	console.log(`aNumber: ${aNumber}`);
	debugger; // 1
	console.log("Scope a");
	d(aNumber);
}
function b(){
	const aNumber = 20;
	console.log(`aNumber: ${aNumber}`);
	debugger; // 2
	console.log("Scope b");
	d(aNumber);
}
function c(){
	const aNumber = 30;
	// 3
	debugger;
	console.log("Scope c");
	b();
	console.log(`aNumber: ${aNumber}`);
}
function d(aNumber){
	console.log(`aNumber: ${aNumber}`);
	// 4
	debugger;
	console.log("Scope d");
}
// start
c();
a();