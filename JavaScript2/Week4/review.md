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


