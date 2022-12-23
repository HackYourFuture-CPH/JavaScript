# Homework

## Start the homework

Need to brush up on the homework setup process? Check [this](https://github.com/HackYourFuture-CPH/Git/blob/main/homework_hand_in.md) out before you get into some git confusion!

## Why should i even do this homework?

Promises creates a **pleasant way of working with asynchronous code**. It will make your asynchronous code nearly look synchronous. It is possible to compose promises further developing the function part of javascript.

Since promises is becoming standard in javascript, new browser api's use promises for interacting with them. `getUserMedia` for accessing webcam, `Navigator.getBattery()` for getting battery level, `Bluetooth.requestDevice()`, `serviceWorker` or `USB.requestDevice()`

If you struggle to do this weeks homework there are a couple of things to do:

- Try watch these two videos: https://www.youtube.com/watch?v=XO77Fib9tSI, https://www.youtube.com/watch?v=QO4NXhWo_NM
- Watch the class recording. If it for some reason is missing. Then watch these: [part 1](https://www.youtube.com/watch?v=SDr1FCqqjAs), [part 2](https://www.youtube.com/watch?v=V82nhqIYWP0), [part 3](https://www.youtube.com/watch?v=iQgYX5tB7gs) [part 4](https://www.youtube.com/watch?v=RYdLBdHZMCU) [part 5](https://www.youtube.com/watch?v=A41NxevmHwI)
- Read up on [promises](https://javascript.info/promise-basics), [async await](https://javascript.info/async-await)

### Movies exercise

This exercise is repetition of array functions. you dont have to use chaining or anything fancy. Just fetch the movies and use the correct array function to get the following movies:

Fetch movies from [this api](https://gist.githubusercontent.com/pankaj28843/08f397fcea7c760a99206bcb0ae8d0a4/raw/02d8bc9ec9a73e463b13c44df77a87255def5ab9/movies.json):

1. Create an array of bad movies
2. Creat an array of bad movies since year 2000

## Promise that resolves after set time

Create a function that has one parameter: `resolveAfter`. **Calling this function** will **return a promise** that resolves after the `resolveAfter` seconds has passed.

Here is an example of how to use the promise

```js
makeUpYourOwnFunctionName(8).then(() => {
  console.log("I am called asynchronously"); // logged out after 8 seconds
});
```

When you have written the promise, use it with async/await

## Rewrite time

Rewrite [setTimeout](https://developer.mozilla.org/ro/docs/Web/API/window.setTimeout) and [navigator.geolocation.getCurrentPosition](https://developer.mozilla.org/en-US/docs/Web/API/Geolocation_API#JavaScript_Content) to promises. The `getCurrentPosition` function is probably going to throw an error, but that is fine. As long as you can use it as a promise.

Example of usage

```js
setTimeoutPromise(3000).then(() => {
  console.log("Called after 3 seconds");
});

getCurrentLocation()
  .then((position) => {
    // called when the users position is found
    console.log(position);
  })
  .catch((error) => {
    // called if there was an error getting the users location
    console.log(error);
  });
```

## Fetching and waiting

1. Do the 3 steps below using promises and `.then`.
2. Do the 3 steps below using async/await

The 3 steps:

1. Wait 3 seconds
1. After 3 seconds fetch some data from any api you like
1. Log out the data from the api

Which way do you prefer, the promise way or the async/await way?

## Visual promise

This task is about visually understanding the difference between Promise.all and calling a promise one at a time.

If you go into the [promise-visual homework folder](homework/promise-visual) there is some html, css and some js. If you clone down the javascript repo, then you can simply copy the files into your hyf-homework js3 week 2 folder. Dont modify move-element.js, only work in main.js!

There is a function available to you called `moveElement`. Calling that function moves an element to a new position and returns a `Promise`. `moveElement` takes a `DOM element` and an `object` with `x` and `y` properties specifying how much to move the element in the x/y directions. _Note that because the elements start with a random position, it is up to you to calculate how much each element needs to be moved in x/y directions._
It then returns a `Promise` that resolves after the `DOM element` has been moved.

```js
// This code will move the li to the position 100, 100. Calling moveElement will return a promise that resolves after the li element has been moved.
moveElement(document.querySelector("li"), { x: 100, y: 100 }).then(() => {
  console.log("Element has been moved");
});
```

Your task is to create two functions.

- `translateOneByOne` - Should translate the circles one at a time from their **random start position** to their **target** see the target positions below. Log something out **after each element has been moved**
- `translateAllAtOnce` - Should translate all the circles at the same time from their **random start position** to their **target**. Log out something **after all elements have been moved**

Test that the functions works as intended before submitting homework. You decide if you want to do it the promise way or the async/await way

### Target positions:

```
Red circle target: x: 20px, y: 300px;
Blue circle target: x: 400px, y: 300px;
Green circle target: x: 400px, y: 20px;
```

**One by one**

<img alt="One by one" src="assets/one-by-one.gif" width="300" />

**All at one**

<img alt="All at one" src="assets/all-at-once.gif" width="300" />

<br/>

## Hand in homework

Need to brush up on the homework hand-in process?<br/>
Check [this resource](https://github.com/HackYourFuture-CPH/Git/blob/main/homework_hand_in.md) to remember how to hand in the homework correctly!
