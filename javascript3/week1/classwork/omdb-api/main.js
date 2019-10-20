const BASE_URL = 'https://www.omdbapi.com/?apikey=144e3aa4';

function fetchJSON(url) {
  return fetch(url).then(response => response.json());
}

function renderSearchResults(moviesList) {
  console.log('moviesList', moviesList);

  const outputDiv = document.querySelector('#searchResults');
  outputDiv.innerHTML = '';

  for (const movie of moviesList) {
    const movieDiv = document.createElement('div');
    movieDiv.classList.add('search-result-movie');
    movieDiv.innerHTML = `<h4>${movie.Title} (${movie.Year})</h4>`;
    outputDiv.appendChild(movieDiv);

    movieDiv.addEventListener('click', () => showMovieDetail(movie));
  }
}

function showMovieDetail(movie) {
  const movieDetailUrl = BASE_URL + '&plot=full&i=' + movie.imdbID;

  fetchJSON(movieDetailUrl).then(data => {
    renderMovieDetail(data);
  });
}

function resetView() {
  const resultsDiv = document.querySelector('#searchResults');
  resultsDiv.innerHTML = '';

  const detailDiv = document.querySelector('#detailView');
  detailDiv.innerHTML = '';
}

function renderMovieDetail(movie) {
  console.log('movie', movie);

  const outputDiv = document.querySelector('#detailView');
  outputDiv.innerHTML = '';

  outputDiv.innerHTML = `
  <h1>${movie.Title}</h1>
  <div><img src="${movie.Poster}"></div>
  <p>${movie.Plot}</p>
  `;
}

const searchForm = document.querySelector('#searchForm');
searchForm.addEventListener('submit', e => {
  e.preventDefault();

  // console.log(new FormData(searchForm));

  // const searchQuery = 'harry potter';
  const searchQuery = document.querySelector('#searchInput').value.trim();

  // if (!searchQuery) {
  //   return;
  // }
  console.log(searchQuery);

  const searchUrl = BASE_URL + '&s=' + searchQuery;

  resetView();

  fetchJSON(searchUrl).then(data => {
    renderSearchResults(data.Search);
  });
});
