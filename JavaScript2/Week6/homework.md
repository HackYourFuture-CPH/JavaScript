# Homework

## So why this homework?
Working with functions in javascript is such an essential part of working with javascript. 

We want you to realise that **functions are just variables** in javascript. It is exactly the same as string or a number. This homework forces you into using functions in weird ways that forces you to think differently about functions. 

## Warmup
The warmup is a **little abstract**, it will get more concrete later on!

1. Log out the text `Called after 2.5 seconds` 2.5 seconds after the script is loaded. 
2. Create a function that takes 2 parameters: `delay` and `stringToLog`. Calling this function should log out the `stringToLog` after `delay` seconds. Call the function you have created with some different arguments. 
3. Create a button in html. When clicking this button, use the function you created in the previous task to log out the text: `3.5 seconds after button is clicked` 3.5 seconds after the button is clicked.
4. Create two functions and assign them to two different variables. One function logs out `Earth`, the other function logs out `Saturn`. Now create a new third function that has one parameter: `planetLogFunction`. The only thing the third function should do is call the provided parameter function. Try call the third function once with the `Earth` function and once with the `Saturn` function.
5. Create a button with the text called "Log location". When this button is clicked the location (latitude, longitude) of the user should be logged out using this [browser api](https://developer.mozilla.org/en-US/docs/Web/API/Geolocation_API) 
6. *Optional* Now show that location on a map using fx the [Google maps api]( https://developers.google.com/maps/documentation/javascript/tutorial)
7. Create a function called `runAfterDelay`. It has two parameters: `delay` and `callback`. When called the function should wait `delay` seconds and then call the provided callback function. Try and call this function with different delays and different callback functions
8. Check if we have double clicked on the page. A double click is defined by two clicks within 0.5 seconds. If a double click has been detected, log out the text: "double click!"
9. Create a function called `jokeCreator` that has three parameters: `shouldTellFunnyJoke` - boolean, `logFunnyJoke` - function and `logBadJoke` - function. If you set `tellFunnyJoke` to `true` it should call the `logFunnyJoke` function that should log out a funny joke. And vice versa.

### Function as a variable
Create funtions that are used in these different ways:
- Create an array with 3 items. All items should be functions. Iterate through the array and call all the functions.
- Create a function as a const and try creating a function normally. Call both functions.
- Create an object that has a key whose value is a function. Try calling this function.

Yes i know that was a little tough, now on to the fun part 🎉

![phew](https://media.giphy.com/media/EDt1m8p5hqXG8/giphy.gif)

## hyfBay - get the okay'est products here - continued
**Continue work on your homework regarding the Hyfbay** from previous week. Please copy the files from last week into this weeks hyf-homework folder and continue working there. If you have not made last weeks homework it does not matter, this part can be made without the solution from last weekse homework.

### Price analytics
**Read the following closely**, to ensure you call the function correctly!

In order to analyse the product prices we need to **send the prices of the products to a server**. A function is available to you called `sendPricesToServer`. You need to call this function with two arguments: 
1. An **array of the prices** of the products. What array method can we use here?
2. A **callback function** with a parameter. The parameter will be the confirmation text sent from the server. The callback function will be called when the data has been sent to the server. 
`Console.log` out the response from the server.

---


## The fastest presser in this realm
Lets create a fun simple game :)

Here is the setup of the game: **Two users compete** about who can **press a key the most times** within a set time!

 A user specifies how long time the game should be, and presses **"start game!"**. When the button is pressed it is about pressing either `l` or `s` on the keyboard. The user that has the highest number of keypresses after the time is up, wins 🎉

Here is a gif of how the site should work:

<img alt="homework folder" src="homework/fastest-clicker.gif" width="400" />

You can implement it exactly like you want to, but here is my recommended order:

1. **Create an input and a button in html**. When the button is clicked, get the value of the input. This value will be the amount of time the game should run.
2. **Set a timeout for the time specified by the user.** After that time has run out just log out a simple string.
3. **Create an event listener** so you can call a function **when any key is pressed**. Now grap the actual key that was pressed. Fx was it a `j` or an `i`. We are interested in `s` and `l`. Here google is your friend!
4. **Keep a counter** for how many times `l` and `s` was pressed. 
5. **Now put it all together!** After the timeout is done figure out which of the counters is largest. Give some kind of feedback to the users indicating who won.

### Extra features
1. **Start a new game** functionality. Create some functionality so that the users can restart a game. 
4. Try and give the site some **styling so it looks nice** :)
3. **Custom feature**. Add something unique to the game! If you dont know how to implement it, just describe what it should do!
2. **Countdown to end of game** - *optional*. Have a countdown that simply counts down until the game is done.

Here are some general things to consider:
- What if a user starts pressing a key before the game is started, what should happen?
- What if the game is a draw? Are both winners? None winners? Maybe indicate to the user that is was a draw.
- What if no time was specified for the game?
- What if there were no key presses before the game ends?

### Confetti
If you wanna give the game some confetti like in the gif, check out [this library](https://www.npmjs.com/package/confetti-js)

Use the library in your page by adding this line before you load your main.js:

`<script src="https://cdn.jsdelivr.net/npm/confetti-js@0.0.13/dist/index.min.js"></script>`

## Feedback giving time!
Find a student to give feedback using this site: https://hyf-peer-review.herokuapp.com/
The feedback should be given after the homework has been handed in preferably latest two days after. 

To help you get started we have created some ressources about giving feedback. Find them here: https://github.com/HackYourFuture-CPH/curriculum/tree/master/review

### Hand in Homework:
Go over your homework one last time:
- Does every file run without errors and with the correct results?
- Have you used `const` and `let` and avoided `var`?
- Do the variable, function and argument names you created follow the [Naming Conventions](https://github.com/HackYourFuture/fundamentals/blob/master/fundamentals/naming_conventions.md)?
- Is your code well-formatted (see [Code Formatting](https://github.com/HackYourFuture/fundamentals/blob/master/fundamentals/naming_conventions.md))?

If you can answer yes to the above questions then you are ready to hand if the homework:
* Find the hyf-homework git repo (forked from [here](https://github.com/HackYourFuture-CPH/hyf-homework))
* Add your homework files in the Javascript/javascript2/week2 folder
* To submit the homework use the link in the top of your classes slack channel. 