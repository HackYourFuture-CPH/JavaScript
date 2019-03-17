var list = ['a', 'b', 'c']

// stack
var stack = []
stack.push('a')
stack.push('b')
stack.push('c')
stack.push('d')
stack.pop()
stack.pop()
stack.pop()
stack.pop()
stack.pop()

// queue
var queue = []
queue.unshift('a')
queue.unshift('b')
queue.unshift('c')
queue.unshift('d')
queue.shift()
queue.shift()
queue.shift()
queue.shift()

// utils
list.includes('a')
list.indexOf('f')
'Hello ' + 'World'
'Hello '.concat('World')

var list1 = ['c', 'b', 'a']
var list2 = ['d', 'e', 'f']

console.log(list1)
console.log(list2)

// Put together two lists and sort them lexicographically
var list3 = list1.concat(list2).sort()
console.log(list3)

// like concat, but put into list1
for (var i = 0; i < list2.length; i++) {
  list1.push(list2[i])
}

var listStudents = [
  {name: 'Zoey'},
  {name: 'Emil'}
]

console.log(listStudents.sort())
