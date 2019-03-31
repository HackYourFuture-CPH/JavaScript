function shortesWord (words) {
  var startWord = words[0]

  for (var i = 0; i < words.length; i++) {
    if (words[i].length < startWord.length) {
      startWord = words[i]
    }
  }

  return startWord
}

function sum (numbers) {
  var sum = 0

  for (var i = 0; i < numbers.length; i++) {
    sum += numbers[i]
  }

  return sum
}

var words = ['Hej', 'Ø', 'København', 'Hack Your Future']

function forEach (arr, func) {
  for (var i = 0; i < arr.length; i++) {
    func(arr[i])
  }
}

var shortestWord = words[0]
forEach(words, function (word) {
  if (word.length < shortestWord.length) {
    shortestWord = word
  }
})




function reduce (arr, func, startValue) {
  var currentValue = startValue

  for (var i = 0; i < arr.length; i++) {
    currentValue = func(currentValue, arr[i])
  }

  return currentValue
}





var result = reduce(words, function (shortestWord, word) {
  if (shortestWord.length < word.length) {
    return word
  }

  return shortestWord
}, words[0])
console.log(result)

function sumFunc (sum, current) {
  return sum + current
}

// Equal to the above
// var sumFunc = function (sum, current) {
//   return sum + current
// }

var ages = [18, 25, 29, 31, 26, 15]
var sumAges = reduce(ages, sumFunc, 0)

console.log(sumAges)


for (var i = 0; i < array.length; i++) {
  if(array[i] === 0) continue
  if(array[i] === 1) break
}

array.forEach(function (elm) {

})

for (var word in words) {
  console.log(word)
}
