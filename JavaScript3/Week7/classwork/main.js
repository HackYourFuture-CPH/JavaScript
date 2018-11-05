console.log('Script loaded');

const helloAdder = function(string) {
    // The parameter string works like a placeholder for the argument you call the function with
    /*
    console.log(string);
    console.log('hello' + string);
    */
    // If nothing is returned, the function returns undefined
    return 'hello' + string;
};

const badrHello = helloAdder('badr');
//const badrHello = helloAdder('benjamin');
console.log(badrHello);

const helloAdderArrow = string => {
    console.log(string);
    // this is an expression
    'hello' + string
    // No return
};

const badrHelloArrow = helloAdderArrow('badr');
console.log(badrHelloArrow);



fetch('https://gist.githubusercontent.com/pankaj28843/08f397fcea7c760a99206bcb0ae8d0a4/raw/02d8bc9ec9a73e463b13c44df77a87255def5ab9/movies.json')
    .then(response => response.json())
    .then((movies) => {
        console.log(movies);
        
        // these two variables are functions
        const getNewerMovies = movie => movie.year > 2006;
        const getTitles = movie => movie.title;
        
        const newerMovies = movies
            .filter(movie => movie.year > 2006);
        const newerMoviesTitles = newerMovies
            .map(movie => movie.title);

        // using chaining and function composition
        const newerMoviesTitlesChaining = movies
            .filter(getNewerMovies)
            .map(getTitles);

        console.log(newerMoviesTitles);
        console.log(newerMoviesTitlesChaining);
        
        const longerMovies = movies
            .filter((movie) => {
                const numberOfWords = movie.title.split(' ').length;
                // this statement is a boolean: numberOfWords > 6
                return numberOfWords > 6;
            });

            const reducer = function(acc, movie) {
                return acc + movie.rating;
            };

            totalRating = movies.reduce(reducer, 0);
    });
