## Listeners/SetTimeout

Let's say we have two buttons in our DOM:
```html
<button id="btn1">1</button>
<button id="btn2">2</button>
```

And we have the following code to listen for click on any of the buttons:
```javascript
const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");

function listenForClick(e) {
	// e refers to the click event, and e.target to the elment clicked
	console.log(e.target.id);
}

btn1.addEventListener("click", listenForClick);
btn2.addEventListener("click", listenForClick);
```

Suppose we want to figure out a way in which we can detect if both the buttons are clicked within a given period of time, say 1 sec:
```javascript
// Track if the buttons have been clicked in the last sec
let btn1Clicked = false;
let btn2Clicked = false;

function listenForClick (e) {
  console.log(e.target.id);
  // Check which button was clicked, and track it
  if(e.target.id === 'btn1')
  	btn1Clicked = true;
  else
  	btn2Clicked = true;
    
  // reset both to false after a second
	setTimeout(() => {
  	btn1Clicked = false;
    btn2Clicked = false;
  }, 1000)
  
  // If both have been tracked as true in the past 1 sec
  if(btn1Clicked && btn2Clicked)
  	console.log("--success--");
}
```

Working example: https://jsfiddle.net/q7o8e4hz/

## Callbacks

Let's say we have a list in our DOM:
```html
<ul id="list">
  <li>One</li>
  <li>Two</li>
  <li>Three</li>
</ul>
```

Let's imagine that we want to animate the background color of the list items. Initially we might start by iterating over the items:
```javascript
const listItems = document.getElementById("list").children;
for(let i=0; i<listItems.length; i++)
 listItems[i].style.backgroundColor = "red";
```

Which will color all the items with a red background color. Now to add a time delay between each item being colored, we might use `setInterval` over the list:
```javascript
const listItems = document.getElementById("list").children;
let i=0;
const id = setInterval(() => {
  listItems[i].style.backgroundColor = "red";
  i++;
  
  // once we've gone through all the items
  if(i == listItems.length)
    clearInterval(id);
}, 500);
```

That works well. But what if we want to apply this sort of animation again, for different colors? It would make sense to turn it into a function which we can call again:

```javascript
function applyForEach(color, delay){
 const listItems = document.getElementById("list").children;
 let i=0;
 const id = setInterval(() => {
  listItems[i].style.backgroundColor = color;
  i++;
  
  // once we've gone through all the items
  if(i == listItems.length)
    clearInterval(id);
  }, delay);
}

// applyForEach("red", 500);
applyForEach("blue", 300);
```

Our function now lets us switch between which color we want to apply for all the list items. However, it is not flexible enough to let us do other operations on the list items. What if we want to change the `text-decoration` or `font-size`? Or even delete the list items? What if we could run an arbitary operation i.e. `function` on all of the list items:

```javascript
function applyForEach(action, delay){
 const listItems = document.getElementById("list").children;
 let i=0;
 const id = setInterval(() => {
  action(listItems[i]);
  i++;
  
  // once we've gone through all the items
  if(i == listItems.length)
    clearInterval(id);
  }, delay);
}

function makeBlueBackground(item){
  item.style.backgroundColor = "blue";
}

function makeTextBold(item){
  item.style.fontWeight = "bold";
}

// applyForEach(makeBlueBackground, 300);
applyForEach(makeTextBold, 1000);
```

In the above, `applyForEach` now takes an argument `action` which is a `function` that is applied to each of the list items. `action` is therefore a **callback function**. As you can see, callback functions can be both *synchronous* like the one here, or *asynchronous* as the one discussed in class.

Working example: https://jsfiddle.net/hkwf5txr/
