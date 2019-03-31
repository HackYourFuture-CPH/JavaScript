// Set a timer that will call `fn` in the future, after at least `milliseconds`
// var timer = setTimeout(fn, milliseconds)
//
// var interval = setInterval(fn, milliseconds)

var timer = setTimeout(function () {
  console.log('Wake up')
}, 1000)

clearTimeout(timer)


var counter = 0
var interval = setInterval(function () {
  if (counter > 7) return clearInterval(interval)

  counter++
  console.log('Wake up')
}, 5000)



console.log('Before')

setTimeout(function () {
  console.log('Inside')
}, 0)

console.log('After')
