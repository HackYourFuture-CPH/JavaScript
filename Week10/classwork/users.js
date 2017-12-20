// a template user, which we'll duplicate to map actual users
const user = {
	// declaring default values for properties
	id: null,
	name: "",
	todos: [],
	url: function(){
		return `https://jsonplaceholder.typicode.com/users/${ this.id }`;
	},
	fetch: function(){
		return fetch(this.url())
		.then(response => response.json())
		.then(data => {
			this.name = data.name;
			return Promise.resolve(this);
		})
		;
	},
	todosUrl: function(){
		return `${ this.url() }/todos`;
	},
	loadTodos: function(){
		return fetch(this.todosUrl())
		.then(response => response.json())
		.then(data => {
			this.todos = data;
			return Promise.resolve(this);
		})
		;
	}
};

/*
Used to duplicate an object, and perhaps modify some keys
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign
*/
const leanne = Object.assign({}, user, {id: 1})

// or
// const leanne = Object.assign({}, user);
// ervin.id = 2;

console.log("Leanne:", leanne);
console.log(leanne.url());

leanne
.fetch() // load the data
.then(() => leanne.loadTodos()) // load the todos
.then("Leanne with todos:", console.log);

const ervin = Object.assign({}, user, {id: 2});
// or
// const ervin = Object.assign({}, leanne, {id: 2});
console.log("Ervin:", ervin);
console.log(ervin.url());

ervin
.fetch() // load the data
.then("Ervin fetched:", console.log)
.catch(console.log);

/*
This part wasn't covered in class, but it's mostly an extension leading onto the homework.

For constructors, look here: https://css-tricks.com/understanding-javascript-constructors/
*/

// this is a constructor function
// i.e it creates an object using the new keyword
function Todo (user, obj){
	// properties, with default values
	this.user = user;
	this.id = obj.id || null;
	this.title = obj.title || "";
	this.completed = obj.completed || false;

	// method
	this.isCompleted = function(){
		if(this.completed)
			return `Todo id ${this.id} of user ${this.user.id} is completed.`;
		else
			return `Todo id ${this.id} of user ${this.user.id} is incomplete.`;
	}
}
// we'll rewrite erwin's loadData to make them instance of Todo
ervin.loadTodos = function(){
	return fetch(this.todosUrl())
	.then(response => response.json())
	.then(data => {
		// this here referes to ervin
		this.todos = data.map(t => new Todo(this, t));
		return Promise.resolve(this);
	})
	;
}

ervin
.loadTodos()
.then(() => {
	console.log("Ervin with Todo Models:", ervin);
	console.log(ervin.todos[0].isCompleted());
}) // notice how the todos are all instance of Todo object, compare with leanne's todos
.catch(console.log);
