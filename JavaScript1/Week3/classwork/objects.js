// one way to have multiple data about a student is with an array
// for each piece of data
var studentNames = [
  'Fowad',
  'Emil',
  'Zoey'
]

var studentAges = [
  32,
  25,
  28
]

console.log(studentNames)
console.log(studentAges)

// Another, more ergonomic way is with objects
var students = [
  { name: 'Fowad', age: 32 },
  { name: 'Emil', age: 25, teacher: true },
  { name: 'Zoey', age: 28 }
]

console.log(students)
// We can access properties with `.`
console.log(students[0].name)

// One object that we have seen before
var Math = {
  random: function () {
    return 42
  },
  round: function (x) {
  }
}


var person = {
  name: 'Emil',
  age: 25,
  role: 'Teacher',
  classes: ['Javascript 1', 'Javascript 2'],
  hobbies: {
    favourite: 'computers',
    sports: 'running to class'
  }
}

console.log(person)

// Add new property
person.lastname = 'Bay'

console.log(person)

delete person.lastname

console.log(person)

console.log(person.hobbies.favourite)
console.log({ favourite: 'computers', sports: 'running to class' }.favourite)

'Hello world'.replace('Hello', 'Hej').replace('world', 'verden')

function graduatedClass (student, className) {
  if (student.classes.includes(className)) return 'Error'

  student.classes.push(className)
}

console.log(person)
graduatedClass(person, 'HTML')
console.log(person)
graduatedClass(person, 'HTML')

var newPerson = {
  name: '',
  age: ''
}

function addStudent(student) {
  if (student.name == null && typeof student.name === 'string') return 'Error'
  if (student.age == null) return 'Error'

  students.push(student)
}

addStudent({ name: 'Rahim' })
console.log(students)

// ways to access properties

person.name
person['name']

var prop = 'name'
person[prop]

person['name'] = 'Maria'
person[0] = 'Hello world'

console.log(person)

function pick (obj, prop, defaultValue) {
  if (obj[prop]) return obj[prop]

  return defaultValue
}

pick(person, 'age', 'Unknown')
