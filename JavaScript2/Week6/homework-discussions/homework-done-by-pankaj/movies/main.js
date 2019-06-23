const ALL_MOVIES = getAllMovies();

/**
 * 1. Create an array of movies containing the movies with
 * a short title (you define what short means)
 */
const moviesWithShortTitles = ALL_MOVIES.filter(movie => movie.title.length <= 2);
console.log(`1. moviesWithShortTitles = `, moviesWithShortTitles);

/**
 * 2. Create an array of movie titles with long movie titles
 */
const moviesWithLongTitles = ALL_MOVIES.filter(movie => movie.title.length >= 60);
console.log(`2. moviesWithLongTitles = `, moviesWithLongTitles);

/**
 * 3. Count the number of movies made between 1980-1989 (including both the years)
 */
const moviesFrom80s = ALL_MOVIES.filter(movie => movie.year >= 1980 && movie.year <= 1989);
console.log('3. Count of movies from 80s = ', moviesFrom80s.length);

/**
 * 4. Create a new array that has an extra key called tag. The tag is based on the
 * rating: Good (>= 7), Average (>= 4 and < 7), Bad (< 4)
 */
const taggedMovies = ALL_MOVIES.map(originalMovie => {
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign
  const newMovie = Object.assign({}, originalMovie);

  if (newMovie.rating < 4) {
    newMovie.tag = 'bad';
  } else if (newMovie.rating >= 4 && newMovie.rating < 7) {
    newMovie.tag = 'average';
  } else {
    newMovie.tag = 'good';
  }

  return newMovie;
});
console.log(`4. taggedMovies = `, taggedMovies);

/**
 * 5. Using chaining, first filter the movies array to only contain the movies rated
 * higher than 6. Now map the movies array to only the rating of the movies.
 */
const ratingOfMoviesWithRatingHigerThan6 = ALL_MOVIES.filter(movie => movie.rating > 6).map(
  movie => movie.rating
);
console.log(`5. ratingOfMoviesWithRatingHigerThan6 = `, ratingOfMoviesWithRatingHigerThan6);

/**
 * 6. Count the total number of movies containing any of following keywords: Surfer,
 * Alien or Benjamin. So if there were 3 movies that contained Surfer, 1 with Alien
 * and 2 with Benjamin, you would return 6. Can you make sure the search is case insensitive?
 */
const searchKeywords = ['Surfer', 'Alien', 'Benjamin'];
const moviesContainingSearchKeywords = ALL_MOVIES.filter(movie =>
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/some
  searchKeywords.some(keyword =>
    movie.title.toLocaleLowerCase().includes(keyword.toLocaleLowerCase())
  )
);
console.log(
  `6. Count of movies containing ${searchKeywords} = `,
  moviesContainingSearchKeywords.length
);

/**
 * Splits a String into Array of words.
 * @param {String} str A String
 * @param {Boolean} IGNORE_CASE Should be set to true if case is ignored
 * @returns {Array<String>} Array of words
 */
function splitIntoWords(str, IGNORE_CASE = false) {
  // Convert to lowercase if casing is to be ingored.
  if (IGNORE_CASE) {
    str = str.toLocaleLowerCase();
  }

  // Split the string by at groups of non-alphanumeric characters and filter non-empty words
  return str.split(/[^a-z0-9]+/gi).filter(word => word.length);
}

"Hello? world@ kjfdskjfsd "
/**
 * Return an Array of duplicate words in a String
 * @param {String} str A String value
 * @param {Boolean} IGNORE_CASE Should be set to true if character casing is to be ignored
 * @returns {Array<String>|undefined} Array of duplicate words
 */
function findDuplicateWords(str, IGNORE_CASE = false) {
  // convert given string to list of words
  const wordsArray = splitIntoWords(str, IGNORE_CASE);

  // Will us this object to keep a count of each word
  const countsDict = {};

  for (const word of wordsArray) {
    if (!countsDict[word]) {
      // When word is seen for the first time
      countsDict[word] = 1;
    } else {
      // When word gets repeated
      countsDict[word] += 1;
    }
  }

  // console.log(countsDict);

  // An array containing duplicate words and their count
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/entries
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment
  // Shorthand property names - https://stackoverflow.com/a/34414803/353550
  const duplicateWords = Object.entries(countsDict)
    .map(([word, count]) => ({ word, count }))
    .filter(obj => obj.count > 1);
  duplicateWords.sort((a, b) => b.count - a.count);

  // Return an Array only when duplicates were found
  if (duplicateWords.length) {
    return duplicateWords;
  }
}

/**
 * 7. Create an array of movies where a word in the title is duplicated. Fx
 * "Star Wars: The Clone Wars" the word Wars is duplicated.
 */
const moviesWithDuplicateWordsInTitles = ALL_MOVIES.filter(movie =>
  findDuplicateWords(movie.title, true)
);
console.log(`7. moviesWithDuplicateWordsInTiles = `, moviesWithDuplicateWordsInTitles);

/**
 * 8. Find the word that is mostly duplicated using sort Optional
 */
const mostDuplicated = moviesWithDuplicateWordsInTitles.reduce(
  (result, movie) => {
    const duplicateWords = findDuplicateWords(movie.title, true);

    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment
    const { word, count } = duplicateWords[0];

    if (count > result.count) {
      // Shorthand property names - https://stackoverflow.com/a/34414803/353550
      result = {
        word,
        count,
        movie
      };
    }
    return result;
  },
  { word: null, count: -1, movie: null }
);

console.log(`8. most duplicated word in title = ${mostDuplicated.word} (${mostDuplicated.count});
  movie= ${mostDuplicated.movie.title} (${mostDuplicated.movie.year})`);

/**
 * 9. Calculate the average rating of all the movies using reduce. Optional
 */
const averageRating =
  ALL_MOVIES.reduce((ratingsSum, movie) => ratingsSum + movie.rating, 0) / ALL_MOVIES.length;
console.log(`9. averageRating = `, averageRating);

/**
 * 10. Count the total number of Good, Average and Bad movies using reduce. Optional
 */
const movieTagCount = taggedMovies.reduce(
  (countsObject, movie) => {
    countsObject[movie.tag] += 1;
    return countsObject;
  },
  { bad: 0, average: 0, good: 0 }
);
console.log(movieTagCount);
