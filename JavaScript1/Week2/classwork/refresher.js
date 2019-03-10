var n = 10

// Assignment operators
n = n + 1 // exactly the same as the next line
n += 1
n += 2

n *= 2
n /= 2

n -= 20

// Increment
n = 1
console.log(n)
var oldValue = n++ // gives back the old value
console.log(n)
console.log(oldValue)
var newValue = ++n // gives back the new value
console.log(n)
console.log(newValue)

// can also do decrementing
n-- // gives old value
--n // gives new value

console.log(n)

// Comparison
var oneIsLessTwo = 1 < 2

[3, 1] > [2, 5] // Doesn't make much sense

'Emil' < 'Emma' // Compares lexicographic comparison
'10' < '1Hello' // Not human sorting, but computer sorting
