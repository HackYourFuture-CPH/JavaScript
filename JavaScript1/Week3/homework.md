# Homework

## Step 1: Custom DOM manipulation challenge :mortar_board:

1. Open a new js file and start by declaring an array that contains 10 strings. These strings should be of book titles you have read (or made up) and be lowercase without spaces or special characters so that you can use these later as Id's. (Example: Harry Potter's - The Chamber of Secrets -> `harry_potter_chamber_secrets`). 

2. Create a basic html file called index.html and use it to load the js file, confirm the console.log show the array. (This is for debugging and making sure everything is in order. Delete it later when you're done :))

3. Make a function (or functions) that generate a `ul` with `li` elements for each book ID in the array using a for loop. 

4. Make an object containing information for each book. Each item (object) in this object should have the book ID you thought up in point 1 as a key, and it should have at least the following fields: title, language and author. 

5. Now change the function you used to display the book ID's in a list to take the actual information about the book from the object and display that. Make sure you choose the right html elements for each piece of info, for instance, a heading for the title.

6. Beautify your html page with css, add sources and alts to each of the images.
 
7. Download book covers for each book, construct a new Object which has as keys the bookId's again, and as value the path to the image source (e.g. `{"harry_potter_blabla": "./img/harry_potter_blabla.jpg", ...}`). Now loop over these entries (_hint: `Object.keys(objectName)` gives you an array containing the keys_). Then write a function which places an image at the corresponding `li` element. Remember that Objects are not ordered, so you cannot guarantee that the first key is the first `li` element. (_Hint: you could give each `li` item an `id` tag by modifying the function you made before_)


## Step 2: Call stack and parameters

Write down the call stack at every point where i have made this comment: // draw call stack
Also write down what it logs out. Try and write it down BEFORE you run the code and see if you got it right!

```js
const watchFirstEpisode = function() {
  // draw call stack
  console.log('Watch first episode');
};

const watchBreakingBad = function() {
  console.log('Watching Breaking bad');
  // draw call stack
  watchFirstEpisode();
  console.log('No more for today');
};

const goForARun = function() {
  console.log('Im running! look at me!');
}

const helpStudentsWithHomework = function() {
  console.log('Help help help');
}

function finishMondayEvening(functionThatIsParameter) {
  functionThatIsParameter();
  // draw call stack
  goForARun();
  // draw call stack
  helpStudentsWithHomework();
  // draw call stack
  console.log('done for today')
}

// draw call stack
finishMondayEvening(watchBreakingBad);
// draw call stack
```


## Step 3: **FreeCodeCamp challenges:**

- https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/object-oriented-programming/use-a-constructor-to-create-objects
- https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/object-oriented-programming/extend-constructors-to-receive-arguments
- https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/object-oriented-programming/use-closure-to-protect-properties-within-an-object-from-being-modified-externally


And just for fun ... https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/sum-all-numbers-in-a-range

## Step 4 bonus homework
the Bonus homework for this week (for those of you want an extra challenge) do the following:

Go to http://roverjs.com/ and complete the functions and arrays chapters. 

## Step 5: Hand in Homework:
Go over your homework one last time:

- Does every file run without errors and with the correct results?
- Have you used `const` and `let` and avoided `var`?
- Do the variable, function and argument names you created follow the [Naming Conventions](https://github.com/HackYourFuture/fundamentals/blob/master/fundamentals/naming_conventions.md)?
- Is your code well-formatted (see [Code Formatting](https://github.com/HackYourFuture/fundamentals/blob/master/fundamentals/naming_conventions.md))?

If you can answer yes to the above questions then you are ready to hand if the homework: 

* Use the ```hyf-homework``` repo and add your homework files in the ```javascript/javascript1/week3``` folder
* Make your commits for the homework. Remember to seperate the code into meaningful commits!
* Push the changes to github
* Share the github link to your classes slack channel. 

---

🎉
