## Homework Week 3

## Step 1: Custom DOM manipulation challenge :mortar_board:

1. Open a new js file and start by declaring an array that contains 10 strings. These strings should be of book titles you have read (or made up) and be lowercase without spaces or special characters so that you can use these later as Id's. (Example: Harry Potter's - The Chamber of Secrets -> `harry_potter_chamber_secrets`). 

2. Create a basic html file called index.html and use it to load the js file, confirm the console.log show the array. (This is for debugging and making sure everything is in order. Delete it later when you're done :))

3. Make a function (or functions) that generate a `ul` with `li` elements for each book ID in the array using a for loop. 

4. Make an object containing information for each book. Each item (object) in this object should have the book ID you thought up in point 1 as a key, and it should have at least the following fields: title, language and author. 

5. Now change the function you used to display the book ID's in a list to take the actual information about the book from the object and display that. Make sure you choose the right html elements for each piece of info, for instance, a heading for the title.

6. Beautify your html page with css, add sources and alts to each of the images.
 
7. Download book covers for each book, construct a new Object which has as keys the bookId's again, and as value the path to the image source (e.g. `{"harry_potter_blabla": "./img/harry_potter_blabla.jpg", ...}`). Now loop over these entries (_hint: `Object.keys(objectName)` gives you an array containing the keys_). Then write a function which places an image at the corresponding `li` element. Remember that Objects are not ordered, so you cannot guarantee that the first key is the first `li` element. (_Hint: you could give each `li` item an `id` tag by modifying the function you made before_)

```
How to hand in your homework:
• Upload your homework in your "hyf-javascript1" Github repository. Make sure to create a new folder "week3" first. 
• Upload your homework files inside the week3 folder and write a description for this “commit”.
• Your hyf-javascript1/week3 should now contain an index.html, main.css and a script.js file (and the images folder)
• Send the link on the slack channel
```

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

- https://www.freecodecamp.com/challenges/declare-javascript-objects-as-variables
- https://www.freecodecamp.com/challenges/make-instances-of-objects-with-a-constructor-function
- https://www.freecodecamp.com/challenges/make-unique-objects-by-passing-parameters-to-our-constructor
- https://www.freecodecamp.com/challenges/make-object-properties-private


And just for fun ... https://www.freecodecamp.com/challenges/sum-all-numbers-in-a-range

## Step 4: **Git-It Exercises**
Download the Git-It application from this link: https://github.com/jlord/git-it-electron/releases

Find the latest version for your operating system, download and start it like a normal application.

Git-It is a tutorial application that will walk you through setting up Git and Github and performing the most basic steps needed for contributing to a Git repository.

The homework for next time is to complete exercise 1-7. You have probably already performed the first few steps during class but I recommend doing all of the exercises from the beginning. Make sure to keep a close eye on the instructions as they explain very well what to do and how the basics of Git works.

Our expectations from the next class is that you know how to do the following:
- Create a repository on github.
- Create a local repository on your computer.
- Link your local and remote repository.
- Add file changes to the git staging area.
- Commit staged changes.
- Push from the local repository to the remote.

Additionally, the exercises above should teach you how to create branches. We will cover that in class as well, so don't worry if the purpose of doing so is not completely clear, but please try to complete the exercises anyway as we will be using these tools over and over during the course.


### :boom: Bonus homework :boom:
the Bonus homework for this week (for those of you want an extra challenge) do the following:

- Sign up on codewars.com
- In you account setting under “clan” write “Hack Your Future” 
- Go do the challenges in the following playlist: https://www.codewars.com/collections/fun-fun-fundamentals

Codewars is really a lot of fun, and you can compete against each other who has the most points :trollface:
it’s a great way to really practice JavaScript a lot in various problems.

Please note, there are various challenges all sorted on difficultly called KIU. Kiu 8 is the easiest, Kiu 1 is the hardest, we expect you to do challenges around level 8, 7 maybe.

enjoy!
