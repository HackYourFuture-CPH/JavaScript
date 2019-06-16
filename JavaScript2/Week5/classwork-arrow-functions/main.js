function squareMeOld(n) {
  return n * n;
}

const squareMe = n => n ** 2;

function foo(n) {
  return n + 2;
}

const foo1 = n => n + 2;

const numbers = [1, 2, 3, 4, 5];

const result = numbers
  .map(n => n + 2)
  .map(x => x * 4)
  .map(z => Math.sqrt(z));

console.log(result);

const interimResult1 = numbers.map(n => n + 2);
console.log(interimResult1);

const interimResult2 = interimResult1.map(x => x * 4);
console.log(interimResult2);

const finalResult = interimResult2.map(z => Math.sqrt(z));
console.log(finalResult);


// =>
// ->
// this

console.log(squareMe(10));
console.log(squareMe(15));
console.log(squareMe(5));


const mentors = [
  { name: 'Abed Sujan', subjects: ['JS', 'HTML', 'CSS', 'NODEJS'], yearOfExperience: 4 },
  { name: 'Ahmed Magdy', subjects: ['JS', 'Database', 'CSS'], yearOfExperience: 1 },
  { name: 'Alicia Gonzales', subjects: ['DB', 'HTML', 'NODEJS'], yearOfExperience: 8 },
  { name: 'allan Thraen', subjects: ['REACT', 'HTML', 'CSS'], yearOfExperience: 3 },
  { name: 'Anders Ravn', subjects: ['JS', 'HTML', 'NODEJS'], yearOfExperience: 2 },
  { name: 'Daniel Fernandes', subjects: ['Database', 'HTML', 'CSS'], yearOfExperience: 9 }
];

// Map mentors array to a new array containing number of subjects each mentor can teach
// Use
// 1. Arrow functions
// 2. Array.map


const subjectCountsArray = mentors.map(m => m.subjects.length);
console.log(subjectCountsArray);
