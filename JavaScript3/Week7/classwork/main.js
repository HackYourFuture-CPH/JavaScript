console.log('Script loaded');

const helloAdder = function(string) {
    /* replacemnet*/
    /*
    console.log(string);
    console.log('hello' + string);
    */
    return 'hello' + string;
};

const badrHello = helloAdder('badr');
//const badrHello = helloAdder('benjamin');
console.log(badrHello);

const helloAdderArrow = string => {
    console.log(string);
    
    'hello' + string
};



const badrHelloArrow = helloAdderArrow('badr');
console.log(badrHelloArrow);


fetch('https://reddit.com/r/ProgrammerHumor.json')
    .then(function(response) {
        console.log(response);
    });


fetch('https://gist.githubusercontent.com/pankaj28843/08f397fcea7c760a99206bcb0ae8d0a4/raw/02d8bc9ec9a73e463b13c44df77a87255def5ab9/movies.json')
    .then(response => response.json())
    .then((movies) => {
        console.log(movies);
        
        const getNewMovies = movie => movie.year > 2006;
        const getMovieTitles = movie => movie.title;

        const newerMovies = movies
            .filter(getNewMovies);

        const newerMovieTitles = newerMovies
            .map(getMovieTitles);


        const newerMovieTitlesChain = movies
            .filter(getNewMovies)
            .map(getMovieTitles);

        
        console.log(newerMovies);
        
        console.log(newerMovieTitlesChain);
        console.log(newerMovieTitles);
        
        
        
        
    })
    