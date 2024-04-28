const dogYearOfBirth = 2017;
const dogYearFuture = 2027;
const shouldShowResultInDogYears = false;

let dogYear = dogYearFuture - dogYearOfBirth;
let yearsPrefix = "human";

if (shouldShowResultInDogYears) {
  dogYear *= 7;
  yearsPrefix = "dog";
}
const ouput = `Your dog will be ${dogYear} ${yearsPrefix} years old in ${dogYearFuture}.`;

console.log(ouput);
