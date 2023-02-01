## Learning goals

Functions advanced
- [ ] Function as a variable
  - [ ] Calling a function with a function
- [ ] Callback function and asynchronicity
  - [ ] setTimeout, addEventListener
- [ ] Anonymous function vs named function


## Relevant links
* [Preparation](preparation.md)
* [Homework](homework.md)
* [Lesson plan](lesson-plan.md)


## Callbacks
A callback is simply a function passed to another function that gets executed (run) after a potentially long running operation has completed.

Now let's learn about callbacks!
Well, actually, you have already made callbacks!
When you give a function to an event listener or a timer, or when fetching data you are using a callback function.

Let's create a callback function that is executed when someone writes in a input element
```javascript
const callback = function() {
    console.log("Someone is writing!!");
}

document.querySelector('input').addEventListener('input', callback);
```

- JavaScript callback functions tutorial: https://www.youtube.com/watch?v=pTbSfCT42_M&index=17&list=WL


## Async vs sync

In this article you can find a really good analogy and description of the differences between async (asynchronous) and sync (synchronous) https://www.hongkiat.com/blog/synchronous-asynchronous-javascript/

Here is the analogy in a quick writeup:

There is a a man called mr. X. You can call him with any problem and he will answer your right away. He picks up the phone and answers RIGHT away. This is like synchronous js code. It runs right away, no waiting. 

Now mr. X gets lots of calls. Therefore he hires a person to take his calls. This guy passes on a message to mr x once he is completely free. So now when you call mr. X you leave his assistant a message and then wait for his assistant to call back. Once Mr x is done with all his other calls his assistant calls you back with mr x's answer. This is like asynchronous js code. We now have to wait for our answer. You ask for some task to get done with a callback function, fx log "hello" after one second. Once one second has elapsed javascript runs your callback function.


### Synchronous

This code runs from top to bottom, one line at a time. When it is done with a task it just starts with the next one right away.

```js
console.log('Before');

for (let i = 0; i < 10; i++) {
    console.log(i);
}

console.log('After');
```


### Asynchronous

This code is NOT run from top to bottom. It will first log "First log", then it will setup a timer for 5 seconds (but not wait for anything), and then it will log "Second log". And then, after 5000 ms (5 seconds), it will call the callback function that will log "In timeout".

```js
console.log('First log');

setTimeout(function() {
    console.log("In timeout");
}, 5000);

console.log('Second log');
```


### Asynchronous code in javascript

So how does javascript handle asynchronous code? Here is an example with setTimeout:

First setTimeout is added to the call stack. The call stack hands it over to the browser with the callback function given in the setTimeout function. The browser handles the timing of the setTimeout via Web APIs and then it is popped from the call stack.

When the timer is expired it sends the callback of our setTimeout function to the eventloop. The eventloop then works like this: if the call stack is empty it will take the first thing in the event loop and add it to the call stack. When it is added to the call stack it is javascript call stack business as usual. Call the function and pop it from the call stack.  

This is perfectly visualised here: http://latentflip.com/loupe


### So why do we have async code in js?

While javascript is performing a task (has functions on its call stack) it cannot do anything else. That means that a user cannot click a button, write anything in an input element, close a modal, etc.

Imagine requesting data if JavaScript was not async: While the we are fetching our data, the user can do nothing. It could take everything from less that a second to minutes. This is a problem!

The solution to this is async code. When we request some data from a server, the waiting for the response happens in the same way as the waiting for the timeout from our example. Therefore javascript does not have anything on its call stack which means that the user can interact with the UI like clicking buttons, opening and closing modals, etc. while waiting for a request. Yay :)
