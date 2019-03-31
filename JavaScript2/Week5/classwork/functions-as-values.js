var someElement = document.querySelector('#btn')
// var myFunctionAsVar
// function myFunction () { ... }
console.log(myFunctionAsVar)
console.log(myFunction())

// myFunction here is a reference
document.body.addEventListener('click', function (event) {
  event.target // <= Original source of the event
  event.currentTarget // <= The current node that the event is bubbling through

  console.log(event.target)
  console.log(event.currentTarget)
})

// Can only have one listener at a time, while addEventListener can have multiple
someElement.onclick = myFunction

// Can check if there is an exisiting event listener
if (someElement.onclick != null) {} // do something

// ***********

// Named function
function myFunction () {
  console.log('myFunction')
}

// Anonymous function, assigned to a variable
var myFunctionAsVar = function () {
  console.log('myFunctionAsVar')
}


document.body.addEventListener('click', myFunctionAsVar)
document.body.addEventListener('click', myFunction)


function findShortestWord (arr) {
  // function wordLength () { ... }
  return arr.reduce(wordLength, arr[0])

  function wordLength (currentShortest, nextWord) {
    // ...
  }
}
