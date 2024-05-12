// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34

function fibArray(n) {
  const fiboNumbers = [0, 1];
  for (let i = 2; i < n; i++) {
    fiboNumbers.push(fiboNumbers[i - 1] + fiboNumbers[i - 2]);
  }

  return fiboNumbers[n - 1];
}

function fibRec(n) {
  if (n === 1) {
    return 0;
  }
  if (n === 2) {
    return 1;
  }
  return fibRec(n - 1) + fibRec(n - 2);
}

function fibCorrect(n) {
  const fiboNumbers = [0, 1];
  let newNumber;
  for (let i = 2; i < n; i++) {
    newNumber = fiboNumbers[0] + fiboNumbers[1];
    fiboNumbers[0] = fiboNumbers[1];
    fiboNumbers[1] = newNumber;
  }

  return newNumber;
}

// console.log(fibCorrect(5));
// console.log(fibCorrect(10));

console.log(fibCorrect(1000));
