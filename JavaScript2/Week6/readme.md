## Learning goals

Functions advanced
- [ ] Callback function
  - [ ] Calling a function with a function
  - [ ] Function as variable
  - [ ] Anonomyous function vs named function
- [ ] Asyncronicity
  - [ ] setTimeout, addEventListener
- [ ] Scope


## Relevant links
* [Preparation](preparation.md)
* [Homework](homework.md)


## Callbacks
A callback is simply a function passed to another function that gets executed (run) after a potentially long running operation has completed.

Now lets learn about callbacks!
Well actually you have already made callbacks!
When you give a function to an event listener or a timer or when fetching data you are using a callback function

Lets create a callback function when someone writes in a input element
```javascript
const callback = function() {
    console.log("Someone is writing!!");
}

document.querySelector('input').addEventListener('input', callback);
```

- JavaScript callback functions tutorial: https://www.youtube.com/watch?v=pTbSfCT42_M&index=17&list=WL


## Async vs sync

In this article there is a really good analogy and description of the differences between async and sync https://www.hongkiat.com/blog/synchronous-asynchronous-javascript/

Here is the analogy in a quick writeup:

There is a a man called mr. X. You can call him with any problem and he will answer your right away. He picks up the phone and answers RIGHT away. This is like synchronous js code. It gets run right away, no waiting. 

Now mr. X gets lots of calls. Therefore he hires a person to take his calls. This guy passes on a message to mr x once he is completely free. So now when you call mr. X you leave his assistant a message and then wait for his assistant to call back. Once Mr x is done with all his other calls his assistant call you back with mr x's answer. This is like asynchronous js code. We now have to wait for our answer. You ask for some task to get done with a callback function, fx log "hello" after one second. Once one second has elapsed javascript runs your callback function.


### Synchrounus

This code runs from top to bottom, one line at a time. When it is done with a task it just starts with the next one right away.

```js
console.log('Before');

for (let i = 0; i < 10; i++) {
    console.log(i);
}

console.log('After');
```


### Asynchrounus

This code is NOT run from top to bottom. It will first log "First log" then it will setup a timer for 5 seconde, then it will log out Second log. And then after 5000 seconds it will call the callback function that will log out "In timeout".

```js
console.log('First log');

setTimeout(function() {
    console.log("In timeout");
}, 5000);

console.log('Second log');
```


### Asynchrounus code in javascript

So how does javascript handle asynchronous code? Here is an example with setTimeout:

First setTimeout is added to the call stack. The call stack hands it over to the browser with the callback function given in the setTimeout function. Now the browser via web apis handle the timing. The setTimeout is popped from the call stack. 
When the web api is done with the timer it sends the callback to the eventloop. The eventloop then works like this: if the call stack is empty take the first thing in the event loop and add it to the call stack. When it is added to the call stack it is javascript call stack business as usual. Call the function and pop it from the call stack.  

This is perfectly visualised here: http://latentflip.com/loupe


### So why do we have async code in js?

While javascript is performing a task (has functions on its call stack) it cannot do anything else. That means that a user cannot click a button, write anything in an input element, close a modal etc. 

Imagine requesting data with javascript if js was not async: While the we are fetching our data, the user can do nothing. It could take everything from less that a second to minutes. This is a problem!

The solution to this is async code. So when we request some data via ajax, the waiting for a response part is actually handled in the browser (just like setTimeout was). Therefore javascript has got nothing on its call stack and the user can click button and close modals etc while waiting for a request. Yay :)
