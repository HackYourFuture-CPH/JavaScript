// object literal, written in the classic style
const car = {
	doors: 5,
	color: "White",
	topSpeed: 140,
	manufacturer: {
		name: "Toyota"
	},
	start: () => "Car has started",
	currentSpeed: 0,
	increaseSpeed: function(increase) {
		// this.currentSpeed += increase;
		this.currentSpeed += increase;
	},
	description: function(){
		// return "This is a " + this.color + " "
		// + this.manufacturer.name + ".";
		// new string literals
		return `This is a ${this.color} \
${this.manufacturer.name}.`;
	}
};

// const a = 10;
// a += 5;

// argument destructuring
// const [a, b, , d] = [1, 2, , 4];

car.increaseSpeed(10);
car.increaseSpeed(12);
// car.currentSpeed += 5;
// console.log(car.currentSpeed);
console.log(car.description());
// console.log(JSON.stringify(car));
// console.log(JSON.parse(JSON.stringify(car)))
