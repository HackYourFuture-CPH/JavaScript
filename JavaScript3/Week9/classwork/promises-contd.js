// revising promise creation
const p1 = new Promise((resolve, reject) => {
	setTimeout(() => {
		console.log("a");
		resolve("1");
	}, 500);

	setTimeout(() => {
		console.log("a Err");
		reject("1 Err");
	}, 900);
});

// example of promise chaining in .then() functions
p1
// .then(console.log)
.then((val) => {
	console.log(val);
	// example of creating inline promise
	return Promise.resolve(5);
})
.then(console.log)
// this .catch() will handle any exceptions in any of the .then() functions above
.catch(console.log)
;

const p2 = new Promise((resolve, reject) => {
	setTimeout(() => {
		console.log("b");
		resolve("2");
	}, 300);
});

// comparision of callback functions doing the same as promises above
function f1(callback){
	setTimeout(() => {
		// return "1";
		callback("1");
	}, 300);
}

function f2(callback){
	setTimeout(() => {
		// return "2";
		callback("2");
	}, 500);
}

// callback chaining, i.e callback hell https://callbackhell.com
f1((val) => {
	f2((val2) => {
		console.log(val+val2);
		// f3
			// f4
				// f5
	});
})

const x = 91;

// example of combining promises through Promise.all()
Promise.all([p1, p2, x])
.then(console.log)
.catch(console.log);
