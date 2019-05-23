# Lesson plan
```
> Focus on having lots of in class exercises.

> DONT teach everything, let the students investigate topics on their own aswell!

> Focus on how to read documentation, google answers and google errors!!

> Teach towards the students being able to solve the homework
```

Remember to add the code you wrote in the class to the relevant class branch's class work folder. If the branch has not been created just create and push it :) If you dont have access, write to one from the core team. You can see an example below!

To find examples of what teachers have taught before go to the class branches in the classwork folder, Fx [class 07](https://github.com/HackYourFuture-CPH/JavaScript/tree/class07/JavaScript1/Week1/classwork)

If you find anything that could be improved then please create a pull request! We welcome changes, so please get involved if you have any ideas!!!

---
- Objects
    - Access properties two ways: .keyname and [keyname]
    - Key - value
    - Array of objects
    - Let the students explain iterating an array of objects
    - Use real world examples (users, products, houselistings)
    - [Code inspiration](#objects)
- Arrays continued
    - `Pop`, `push`, `shift`, `unshift`
      - Let students investigate `shift` and `unshift`
      - The longest of the word pairs unshift, push makes the array longer!
    - `includes` - Let the students investigate this
    - Looping through an array
    - No `forEach`, `map`, `filter` or `reduce`
    - [Code inspiration](#arrays)
- [Codewar exercises](#codewar-exercises)
- Call stack
  - Used for figuring code flow in js! Where does my function go when it is done here.
  - http://latentflip.com/loupe
  - [Code inspiration](#call-stack)
  - [Exercise](#call-stack-1)

## Code inspiration

### Objects
```js
const user = {
  name: 'Emil',
  age: 25,
  role: 'Teacher',
  classes: ['Javascript 1', 'Javascript 2'],
  hobbies: {
    favourite: 'computers',
    sports: 'running to class'
  }
}

console.log(user)

// Add new property
user.lastname = 'Bay'

console.log(user)

delete user.lastname

console.log(user)

console.log(user.hobbies.favourite)
console.log({ favourite: 'computers', sports: 'running to class' }.favourite)

function graduatedClass (student, className) {
  if (student.classes.includes(className)) return 'Error'

  student.classes.push(className)
}

console.log(user)
graduatedClass(user, 'HTML')
console.log(user)
graduatedClass(user, 'HTML')

const newUser = {
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

user.name
user['name']

const prop = 'name'
user[prop]

user['name'] = 'Maria'
user[0] = 'Hello world'

console.log(user)

```

### Arrays

```js
// one way to have multiple data about a student is with an array
// for each piece of data
const studentNames = [
  'Fowad',
  'Emil',
  'Zoey'
]

const studentAges = [
  32,
  25,
  28
]

console.log(studentNames)
console.log(studentAges)

// Another, more ergonomic way is with objects
const students = [
  { name: 'Fowad', age: 32 },
  { name: 'Emil', age: 25, teacher: true },
  { name: 'Zoey', age: 28 }
]

console.log(students)
// We can access properties with `.`
console.log(students[0].name)

for(let i = 0; i < students.length; i++) {
  const currentStudent = students[i];
  console.log(typeof currentStudent);
  console.log(currentStudent.name);
}

students.push({ name: 'Ahmad', age: 27 });

// One object that we have seen before
const Math = {
  random: function () {
    return 42
  },
  round: function (x) {
  }
}

```


### Call stack
```js
function a() {
    // add to call stack
    b();

    return 'a';
    // remove from call stack
}


function b() {
    //throw 'hello';
    return 'b';
}

a();

```


## Exercises

## Call stack

Draw the call stack array at every draw point
```js
function bookPlaneTickets() {
    // draw
    console.log('Plane tickets booked');
    requestVacationDays();
    // draw
}

 function bookHotel() {
    console.log('Hotel booked');
    // draw
    planItinerary();
    // draw
}

function requestVacationDays() {
    // draw
    console.log('Vacation days requested');
    // draw
}

function planItinerary() {
    console.log('Itinerary done');
    // draw
}

function planTrip() {
    bookPlaneTickets();
    // draw
    bookHotel();
    // draw
    console.log('Trip planned');
}
// draw
planTrip();
// draw
```

### Codewar exercises
- [CodeWars - Add property to every object](https://www.codewars.com/kata/add-property-to-every-object-in-array/train/javascript)
- [CodeWars - Job Matching 1](https://www.codewars.com/kata/job-matching-number-1/train/javascript)
- [CodeWars - Who's Online](https://www.codewars.com/kata/whos-online/train/javascript)
- [CodeWars - Ironman Triathlon](https://www.codewars.com/kata/ironman-triathlon/train/javascript)
- [CodeWars - Job Matching 2](https://www.codewars.com/kata/job-matching-number-2/train/javascript)
- [CodeWars - Color Association](https://www.codewars.com/kata/colour-association/train/javascript)
- [CodeWars - Unfinished loop](https://www.codewars.com/kata/unfinished-loop-bug-fixing-number-1/train/javascript)
- [CodeWars - Is this my tail](https://www.codewars.com/kata/is-this-my-tail/train/javascript)
- [CodeWars - Longest word](https://www.codewars.com/kata/squash-the-bugs/train/javascript)
- BONUS [CodeWars - Super Duper Easy](https://www.codewars.com/kata/super-duper-easy/train/javascript)