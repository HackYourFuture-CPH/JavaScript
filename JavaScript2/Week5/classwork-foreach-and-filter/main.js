const allMovies = getAllMovies();
// {
//   title: "'71",
//   year: 2014,
//   rating: 7.2,
//   votes: 41702,
//   running_times: 5940
// }

console.log(allMovies);

const moviesFrom2017 = allMovies
  .filter(movie => movie.year === 2017)
  .filter(movie => movie.rating >= 8)
  .map(movie => movie.title);

console.log(moviesFrom2017);


const moviesWithLongTitles = allMovies
  .filter(movie => movie.title.length > 50)
  .map(movie => movie.title);

console.log(moviesWithLongTitles);


const moviesFrom2016 = allMovies
  .filter(movie => movie.year === 2016);

let totalVotesIn2016 = 0;
let sum = 0;

moviesFrom2016.forEach((movie) => {
  sum += movie.rating * movie.votes;
  totalVotesIn2016 += movie.votes;
});

const averageRating = sum / totalVotesIn2016;
console.log('averageRating = ', averageRating);



const betterThanAverage2016 = moviesFrom2016
  .filter(movie => movie.rating > averageRating)
  .map(movie => movie.title);

console.log(betterThanAverage2016);

function calculateSum(previousValue, currentValue) {
  console.log('previousValue=', previousValue, 'currentValue=', currentValue);
  return previousValue + currentValue;
}

const numbers = [1,2,3,4,5];
const sum1 = numbers.reduce(calculateSum, 0);
console.log(sum1);
const sum2 = numbers.reduceRight(calculateSum);
console.log(sum2);


// const reducedObject = moviesFrom2016.reduce(
//   (accumulatedValue, movie) => {
//     return {
//       sum: accumulatedValue.sum + movie.rating * movie.votes,
//       totalVotes: accumulatedValue.totalVotes + movie.votes
//     };
//   },
//   { sum: 0, totalVotes: 0 }
// );

// console.log(reducedObject.sum / reducedObject.totalVotes);