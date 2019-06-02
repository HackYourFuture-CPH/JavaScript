const variableWithNameThatMakesSense = 1;

function a(){
	const variableWithNameThatMakesSense = 10;
	debugger;
	// 1
	console.log(1);
	d();
}

function b(){
	// 2
	console.log(2);
	d();
}

function c(){
	// 3
	console.log(3);
	b();
}

function d(){
	const variableWithNameThatMakesSense = 5;
	debugger;
	// 4
	console.log(4);
}
// start 
debugger;
c();
a();