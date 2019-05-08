## Learning goals
Browser environment
- [ ] HTML vs CSS vs JS
- [ ] Client vs server
- [ ] Where is the script tag being loaded

DOM manipulation
- [ ] Get elements
- [ ] Insert elements
- [ ] Element manipulation (style, innerHTML, text)
- [ ] Window object
- [ ] Document object

Event listeners
- [ ] Document onload
- [ ] Click, submit, change, input - Focus on usage

## Relevant links
* [Preparation](preparation.md)
* [Homework](homework.md)


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

Writing js documentation: [JSDoc](http://usejsdoc.org/)



### When to comment?
Now for the hard part: when to comment? When you work for different companies, you will see different styles. Embrace something you like, and then learn to let go. Google on "when to comment code?" and you'll find a big bunch of different opinions. 

The general concept is, however, that it is there to help make the code more easy to understand. Note, however, that comments can also make code more difficult to understand when not applied properly. 



## Events

Events in JavaScript are things like:
A timer has just finished, a user clicked a button, our page has loaded,
someone types into an input element or we have just gotten some data from a server. 
When these events happen, we usually want to add some functionality. 
Fx when a user clicks the like button (event), we want to increment the like counter and color the like button blue.
Or when someone clicks "Close cookies" (event) we want to remove the cookie div.

Lets first try to create some js that waits for 2 seconds and the console.logs out "2 seconds has elapsed!"

In JavaScript we use the word eventlistener to listen  

```javascript
setTimeout(function() {
    console.log("2 seconds has elapsed!");
}, 2000);


// Cool, now lets make a function as a variable:
const fourSecondLog = function() {
    console.log("4 seconds has elapsed!");
}

setTimeout(fourSecondLog, 4000);
```

Now lets try and log out "button clicked!" when a button is clicked.

To check if a button gets clicked we use a what is called an eventlistener.

Imagine a person listening to the click of a button and everytime he hears a click he yells out "CLICKED".

```javascript
const buttonElement = document.querySelector('button');
buttonElement.addEventListener('click', function() {
    console.log("Button clicked!");
});


const buttonClicked = function(){
    console.log("Button clicked as a variable!");
}
// Cool man! Lets try and add that function as a variable.
buttonElement.addEventListener('click', buttonClicked);
```
