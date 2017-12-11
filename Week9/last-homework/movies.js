const url = "https://gist.githubusercontent.com/evanc/17f1ade674aa0d8066e0a33be923fe17/raw/b3b6cd9c96e5ca59bf7610c4c17da420bcaea0ae/movies.json";

// you can read about the new fetch function at https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/fetch or you can use method described in class https://github.com/HackYourFuture-CPH/JavaScript/blob/master/Week8/classwork/new-ajax.js

// global variable to store data
let movies = [];

// load data
fetch(url)
// mock error
// Promise.reject(401)
// fetch returns a promise object straight away
.then(response => {
	// returns a promise for the response body parsed as json, read more https://developer.mozilla.org/en-US/docs/Web/API/Response
	return response.json();
	// you can also get reponse.text() promise, and then stringify it yourself
})
.then(data => {
	// console.log(data);
	// name, rating, rank, year
	movies = data
	.map(movie => {
		// convert rating from string to float
		movie.rating = parseFloat(movie.rating);

		if(movie.rating >= 8.5){
			movie.tag = "excellent"
		}else if(movie.rating >= 8){
			movie.tag = "very good"
		}else{
			movie.tag = "good"
		}
		return movie
    });
	renderMovies();
})
.catch(err => {
	console.log(`Something went wrong loading data: ${err}`);
})
;

// select all relevant dom elements
const searchBtn = document.querySelector("#search-btn");
const searchText = document.querySelector("[name=search-text]");
const searchTag = document.querySelector("[name=search-tag]");
const avgRating = document.querySelector("#avg-rating");
const movieList = document.querySelector("#movie-list");
// could you improve the assignments above through destructuring?
// reference: https://hacks.mozilla.org/2015/05/es6-in-depth-destructuring/

// re-render the colleciton when search button is clicked
searchBtn.addEventListener("click", renderMovies)

function renderMovies(){
	// handle search functionality
	let filterText = searchText.value.toLowerCase();
	let filterTag = searchTag.value;
	console.log("Filter conditions: ", filterText, filterTag)

	// clear any presently rendered movies
	movieList.innerHTML = "";

	const selectedMovies = movies
	// filter by name
	.filter(movie => movie.name.toLowerCase().includes(filterText))
	// filter by tag
	.filter(movie => movie.tag === filterTag || filterTag === "all")
	;


	// render each element as li inside movieList
	selectedMovies.forEach(movie => {
		const movieEl = document.createElement("li");
		movieEl.innerHTML = `${movie.name} (${movie.rating}) - ${movie.year}`;
		movieList.appendChild(movieEl);
	});

	// calculate average rating
	const rating = selectedMovies
	.reduce((sum, movie) => movie.rating + sum, 0)/selectedMovies.length
	;

	// round to 2 digits, unfortunate hack
	avgRating.innerHTML = Math.round(rating*100)/100;
};