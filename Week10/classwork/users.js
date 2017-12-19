const leanne = {
	id: 1,
	name: "",
	todos: [],
	url: '',
	url: function(){
		return `https://jsonplaceholder.typicode.com/users/${ this.id }`;
	},
	daysRemaining: function(todo){
		return now() - todo.date
	},
	fetch: function(){
		return fetch(this.url())
		.then(response => response.json())
		.then(data => {
			this.name = data.name;
			return Promise.resolve(this);
		})
		.catch(console.log)
		;
	},
	todosUrl: function(){
		return `${ this.url() }/todos`;
	},
	loadTodos: function(){
		return fetch(this.todosUrl())
		.then(response => response.json())
		.then(data => {
			this.todos = data
			.map(makeTodo);
			return Promise.resolve(this);
		})
		.catch(console.log)
		;
	}
};
// console.log(user);
// console.log(user.url());

/*
Used to duplicate an object, and perhaps modify some keys
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign
*/
const ervin = Object.assign(leanne, {id: 2});
// ervin.id = 2;

ervin
.fetch()
.then(() => ervin.loadTodos())
.then(console.log);
