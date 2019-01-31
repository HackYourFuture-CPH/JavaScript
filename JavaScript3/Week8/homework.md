# Homework Week 8

## Why should i even do this homework?
Promises creates a **pleasant way of working with asynchronous code**. It will make your asynchronous code nearly look synchronous. It is possible to compose promises further developing the function part of javascript. 

Since promises is becoming standard in javascript, new browser api's use promises for interacting with them. `getUserMedia` for accessing webcam, `Navigator.getBattery()` for getting battery level, `Bluetooth.requestDevice()`, `serviceWorker` or `USB.requestDevice()`

So lets learn some promises :)

## Warmup exercises
We will start with some **abstract tasks** first and then get into a concrete task in the end. 

## Promise that resolves after set time
Create a function that has one parameter: `millisecondsToResolve`. **Calling this function** will **return a promise** that resolves after the millisecondsToResolve has passed. 

Here is an example: `notThisFunctionName(3000)` will return a promise that resolves after 3000 milliseconds.

Use the `notThisFunctionName` to log out the string `I am called asynchronously` after 6000 milliseconds.

## Exercise 2
Fetch movies from this api: `https://gist.githubusercontent.com/pankaj28843/08f397fcea7c760a99206bcb0ae8d0a4/raw/02d8bc9ec9a73e463b13c44df77a87255def5ab9/movies.json`

1. Create an array called long movies that contain an array of long movies. A long movie has a running time of larger than 7000
1. Create an array called longMovieTitles. That contain only the titles of the long movies. 
1. Log out an array of bad movies
1. Log out an array of bad movies since year 2000
1. only log the titles of the bad movies since year 2000

## Fetching and waiting
Only using promises
1. Fetch some data from an api.
1. After that data has been fetched, wait 3 seconds
1. Log out the data from the api
1. Now do all of these things using chaining

## Rewrite time
Rewrite [setTimeout](https://developer.mozilla.org/ro/docs/Web/API/window.setTimeout) and [navigator.geolocation.getCurrentPosition](https://developer.mozilla.org/en-US/docs/Web/API/Geolocation_API#JavaScript_Content) to promises. So instead of using [setTimeout](https://developer.mozilla.org/ro/docs/Web/API/window.setTimeout) and [navigator.geolocation.getCurrentPosition](https://developer.mozilla.org/en-US/docs/Web/API/Geolocation_API#JavaScript_Content) with callbacks, use it as a promise.

Example of usage

```js
setTimeoutPromise(3000)
    .then(() => {
        console.log('Called after 3 seconds');
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

## Thumbs up or thumbs down
Lets build a website where people can say thumbs up or thumbs down to diffeent things.

![Demo](homework/demo.gif)

If you go into the [homework folder](homework) there is some html, css and some js. If you clone down the javascript repo, then you can simply copy the files into your hyf-homework js3 week 2 folder.

You will be working in the main.js file.

### Manually create functionality
What we want to happen when a button is clicked is the following:
1. The `li` in the top of the `ul` should get a `transform:translateX(1000px)`. That will translate the `li` to the right out of the window. This indicates that the user has given a thumbs up to what the `li` element contains. When the `li` has been translated out we dont see any `li`. Thats because the next `li` has `opacity: 0;`. Lets fix that in the next step.
1. Lets show the next `li`: The next `li` (the second `li` in the `ul`) should become visible. Do that by giving it the following css attributes: `opacity: 1; transform: scale(1);` This will animate the next `li` element into view.

Do these steps two **manually using the inspector** simply setting the style of the relevant elements. **Nothing to hand in here**, its just simply to give you a feeling for the application.

### Getting to js
Now we have a feeling for what should happen when the thumbs up button is clicked: **Animate `li` out, then animate next `li` into view**

The very detail oriented students probably saw the keyword **then** in the previous sentence! Hmm that sound just like a promise: 
- Do something (animate `li` out) 
- **then** do something else (animate next `li` into view) 

Lets create a function called `animateLiOut`. This function should animate the `li` out and **return a promise** that resolves after the animation of the first `li` is done. (how long time does it take for the `li` to animate out?) What function can we use to wait for some given time in js?

Pseudo code of the function
```js
animateLiOut()
    .then(() => {
        // this callback function is first called when the li is out of view!

        // Now lets animate the next li into view
        animateNextLiIntoView();
    });
```

### Improving the application
Now when we press the thumbs up button: the first `li` is animated out and the next one comes into view. But what about when we **press the button again**? Lets create the functionality that keeps animating the next `li` out, we now need some kind of index to keep track of which `li` has been animated out. And what if we **press the thumbs down button**, then the `li` should be animated out of view but **to the left not to the right**. Lets also create that functionality.

### Personalise the application
Right now the `li` elements just have the text Thing 1, Thing 2 which is super boring! Now you have to give it a **personal touch**!

You decide what we are giving thumbs up or down to. Maybe its music tracks, food dishes, movies or danish traditions, **you decide!** 

Create an `array` of `objects` in js that represents what we are interacting with. Using that `array` of `objects`, build the `li's` and insert them into the `ul`. The `li's` could contain a h1, a span, maybe an image, you decide here, as long as it is built from the `array` of `objects`.

### Improve improve imporve *optional*
- What if we instead of creating our own `array` of `objects` fetch some data from an [api](https://github.com/toddmotto/public-apis) and use that data to render our `li's`
- Interaction with the keyboard arrows
- Super duper hard mode: swipe the card


## Feedback giving time!
Find a student to give feedback using this site: https://hyf-peer-review.herokuapp.com/
The feedback should be given after the homework has been handed in preferably latest two days after.
 
To help you get started we have created some ressources about giving feedback. Find them here: https://github.com/HackYourFuture-CPH/curriculum/tree/master/review

## Hand in Homework:
Go over your homework one last time:

- Does every file run without errors and with the correct results?
- Have you used `const` and `let` and avoided `var`?
- Do the variable, function and argument names you created follow the [Naming Conventions](https://github.com/HackYourFuture/fundamentals/blob/master/fundamentals/naming_conventions.md)?
- Is your code well-formatted (see [Code Formatting](https://github.com/HackYourFuture/fundamentals/blob/master/fundamentals/naming_conventions.md))?  
![](https://media.giphy.com/media/l4EpblDY4msVtKAOk/giphy.gif)  
If you can answer yes to the above questions then you are ready to hand in the homework:<br/>
- Find the hyf-homework git repo (that you have forked from [here](https://github.com/HackYourFuture-CPH/hyf-homework)) the link will be https://github.com/YOUR-ACCOUNT/hyf-homework
- Add your homework files in the Javascript/javascript3/week7 folder
- To finish the homework post the link for your repo and the rendered index.html on your classes slack channel
---

🎉