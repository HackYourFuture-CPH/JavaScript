# REVIEW JavaScript week 3

```
This review covers:
• Array Manipulations 
• Basic DOM manipulations
• Code commenting
```

## Arrays

Lets create a new array and print it out

```js
const firstArray = ['milk', 'sugar', 'butter', 'flour', 'eggs'];

console.log(firstArray);

// get the last element of the array using array index
// Remember the index starts at 0.
const lastElementHardCoded = firstArray[4];

// This is smarter as we can add elements to the firstArray 
// and still get the right last element
const lastElement = firstArray[firstArray.length - 1];
```


## Adding and removing elements from array

We can add and remove elements from an array in 4 ways:

Push: Adds a new element to the back of the array
Pop: Removes an element from the back of the array
Unshift: Adds a new element to the front of the array
Shift: Removes a new element from the front of the array

Remember the rule: Shifting changes the first element of the array (it works in the front of the array). pop and push works in the back of the array. And the word push is longer than pop, so it makes the array longer. The same with shift and unshift. 

```js
// lets keep using firstArray:

firstArray.push('pizza');
console.log(firstArray) // logs: ['milk', 'sugar', 'butter', 'flour', 'eggs', 'pizza']

firstArray.pop();
console.log(firstArray) // logs: ['milk', 'sugar', 'butter', 'flour', 'eggs']

firstArray.unshift('bagel');
console.log(firstArray) // logs: ['bagel', 'milk', 'sugar', 'butter', 'flour', 'eggs']

firstArray.shift();
console.log(firstArray) // logs: ['milk', 'sugar', 'butter', 'flour', 'eggs']

```



## Array methods filter, map and sort

### Filter

The filter function works on arrays and it filters out elements in our array. 
It takes a function as input. This function is called on every element in the array. Just like forEach. If this function we create returns true the element is saved in the, if we return false the element is filtered out.


```js
// lets first create an array of three cars

const cars = [
    {
        make: 'Volvo',
        speed: 45,
        color: 'lightYellow',
    },
    {
        make: 'BMW',
        speed: 87,
        color: 'lightBlue',
    },
    {
        make: 'Fiat',
        speed: 78,
        color: 'lightCyan',
    }
];

// Lets get only cars with a speed larger than 60
const fastCars = cars.filter(function(car) {
    // This function is called for every car in the cars array
    if (car.speed > 60) {
        // save the car
        return true;
    } else if (car.speed <= 60) {
        // filter out the cars that are slower than 60
        return false;
    }
});

console.log(fastCars); // logs the BMW and the Fiat
```



### Map

The map function works on arrays. It maps (think transform) the elements of an array. Or from MDN: "The map() method creates a new array with the results of calling a provided function on every element in the calling array."


```js
// lets use the same cars array

// Lets transfrom it from an array of car objects to an array of car colors
const carColors = cars.map(function(car) {
    return car.color;
});

console.log(carColors); // ['lightYellow', 'lightBlue', 'lightCyan']

const carSpeeds = cars.map(function(car) {
    return car.speed;
});

console.log(carSpeeds); // [45, 87, 78]
```


### Sort

The sort function works on arrays. It sorts the elements of the array.
To see details see here: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort

```js
// lets use the same cars array

// Lets sort the cars after speed ascending
const sortedCars = cars.sort(function(a, b) {
    return a.speed - b.speed;
});

console.log(sortedCars); // it will return an array with the BMW object first, then the fiat and then the volvo
```


## Further useful array functions

IndexOf finds the index of an element in the array
Slice creates a subset of an array
Reverse reverses an array

```js
const firstArray = ['milk', 'sugar', 'butter', 'flour', 'eggs'];

console.log(firstArray.indexOf('sugar')); // 1

console.log(firstArray.slice(0, 2)); // ['milk', 'sugar']

console.log(firstArray.reverse()); // [, 'eggs', 'flour', 'butter' ,'sugar', 'milk']
```


## HTML interaction

Interacting with the HTML DOM is done through the document object in the browser. With the document object we can get html elements and change them.


For the next js part we use this html.

```html
<html>
    <body>
        <h1>
            Javascript week 3
        </h1>
        <div class="queue"></div>
        <div id="test-id"></div>
        <script src="js/review.js"></script>
    </body>
</html>
```


```js
// use the querySelector to select elements just like in css
const testIdElement = document.querySelector('#test-id');
console.log(testIdElement); // logs the html element with id "test-id"

// Change the inner html of the test-id element
testIdElement.innerHTML = 'test';
// Change the background-color of the test-id element. Inline css changes is done via the style attribute on the element
testIdElement.style.backgroundColor = 'blue';


// It is also possible to create html elements
// Create a div element
const div = document.createElement('div');
// Change its inner html
div.innerHTML = 'We created this div!!!';

// Lest append it to the div with the class queue
const queueDiv = document.querySelector('.queue');
queueDiv.appendChild(div);
```



## Code Commenting
First the straightforward part: how do we place comments in our code?

### JavaScript
Single line comments
```js
// Change heading:
document.getElementById("myH").innerHTML = "My First Page";
```

Single line comments at end of the line:
```js
const x = 5;      // Declare x, give it the value of 5
```

Coding **well** in JavaScript: [JSDoc](http://usejsdoc.org/)

### HTML
[W3Schools](https://www.w3schools.com/html/html_comments.asp)
Comments
```html
<!-- Write 
your comments here -->

<!-- Write your comments here -->
```


### CSS
[MDN on CSS comments](https://developer.mozilla.org/en-US/docs/Web/CSS/Comments)
```css
/* Comment */

/*
A comment
which stretches
over several
lines
*/
```

### When to comment?
Now for the hard part: when to comment? When you work for different companies, you will see different styles. Embrace something you like, and then learn to let go. Google on "when to comment code?" and you'll find a big bunch of different opinions. 

The general concept is, however, that it is there to help make the code more easy to understand. Note, however, that comments can also make code more difficult to understand when not applied properly. 









