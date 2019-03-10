var arr = [1, 2, 3, 4, 5]

function sum (arrOfNumbers) {
  var sumSoFar = 0
  var limit = arrOfNumbers.length

  for (var i = 0; i < limit; i++) {
    sumSoFar = sumSoFar + arrOfNumbers[i]
  }

  return sumSoFar
}

function sum2 (arrOfNumbers) {
  var sumSoFar = 0

  // This is equivalent to above
  var i = 0
  while (i < arrOfNumbers.length) {
    sumSoFar = sumSoFar + arrOfNumbers[i]
    i++ // remember to increment to not have an infinite loop
  }

  return sumSoFar
}

function sumOfMax10 (arrOfNumbers) {
  var sumSoFar = 0
  var limit = Math.min(arrOfNumbers.length, 10)

  for (var i = 0; i < limit; i++) {
    sumSoFar = sumSoFar + arrOfNumbers[i]
  }

  return sumSoFar
}
