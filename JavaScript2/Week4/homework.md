# Homework

## So why this homework?
**Interacting with the DOM is a crucial part** of building a website. If we cannot interact with the DOM and the javascript we write cannot be used in a browser. **Connecting javascript to the browser opens up a new world of possibilities** where only the imagination is the limiting factor. 

## Problem solving cardio
Lets exercise our problem solving abilities!

![mind exercise](https://media.giphy.com/media/l41m04gr7tRet7Uas/giphy.gif)

### Find the shortest word
Write a function that finds the shortest word of an array of words

```js
const danishWords = ['bil', 'plante', 'kaffe', 'bog', 'ø', 'planetarium'];
notThisFunctionName(danishWords); // returns 'ø'
```

### Difference between median and average
Understand the **difference between average and median** by:
- Make a function that takes an array as parameter and returns the average of that parameter
- Make a function that takes an array as parameter and returns the median of that parameter

Now create a function that calculates the median and the average and returns these two value in an object. 

```js
// use the functions on this array
const housePrices = [3000000, 3500000, 1300000, 40000000, 100000000, 8000000, 2100000];
```

Now render the prices and the average and median in a web page. 

## Book site
Everybody loves books, so **lets create a favorite book site 📚 :)**

![books](https://media.giphy.com/media/PkQeAkvhRrWoM/giphy.gif)

Create `index.html` and `main.js`. Reference the javascript in html inside of a script tag. To make sure you have imported the javascript file properly, log out `script loaded`. 

### Display book titles
Declare an array that contains 10 strings. These strings should be **book titles you have read or made up** (Example: Harry Potter's - The Chamber of Secrets). 

Make a function (or functions) that generates a `ul` with `li` elements **for each book title** in the array using a for loop. And inserts this ul to the dom. You should now be able to see the **book titles rendered on your html page!**

### Display books
Now instead of representing a book only by its title, lets **add some additional information usign objects!** For every book title make an object that represents a book. Each book (object) in this array should at least have the following fields: id, title, language and author. Id is the title that is lowercase and without spaces or special characters fx: `harry_potter_chamber_secrets`  You should now have an array of 10 objects. 

Now change the function you used to display the book titles in a list to **take the actual information about the book** from the object and **display that**. Make sure you choose the right html elements for each piece of info, for instance, a heading for the title.

Beautify your html page with css, add sources and alts to each of the images.

### Show the book covers
Download book covers for each book, construct a new Object which has as keys the book titles, and as value the path to the image source (e.g. `{"harry_potter_chamber_secrets": "./img/harry_potter_blabla.jpg", ...}`). Now loop over these entries (_hint: `Object.keys(objectName)` gives you an array containing the keys_). Then write a function which places an image at the corresponding `li` element. Remember that Objects are not ordered, so you cannot guarantee that the first key is the first `li` element. (_Hint: you could give each `li` item an `id` tag by modifying the function you made before_)


## Spirit animal name generator
Let's create a page where **a user writes his name** in an input element. The user then clicks a button. The user will now **receive a spirit animal name**, fx Benjamin - The fullmoon wolf.

### Markup time!
Create an input element, a button and a tag to display the spirit animal into.

### Setting up the events
When the user clicks the button, get the name the user wrote in the input field. 

### Spirit animal part
Now we can get the users name, next step is to **add the spirit animal string** and display that the users name, a dash and then the spirit animal. Fx Name: Peter: Peter - The crying butterfly 
For creating the spirit animal create an array with 10 string representing spirit animals. Now get a random item in the array that will represent the spirit animal.

### New spirit animal
Now a user tells us that he wants a new spirit animal. No problem we say. Let's create functionality where a user can press a button and then get a new spirit animal.

### No input
What if the user clicks the generate new spirit animal and there is no text in the input?

### Event types - *Optional and a little tricky*
Give the user the possibility to select **when the spirit animal should be created**. Should it be when the user clicks the button or when the user hovers the input field or when text is written in the input field? 

How can we give a user multiple options to select from in html? Maybe time for google!

An example is: A user select that she only wants to generate a spirit animal when the input is hovered. That means that if the user writes her name in the input and clicks the button nothing happens. BUT when she hovers the input, NOW a new spirit animal is generated.

![Spiritanimal](https://media.giphy.com/media/IMSq59ySKydYQ/giphy.gif)

## Feedback giving time!
Find a student to give feedback using this site: https://hyf-peer-review.herokuapp.com/
The feedback should be given after the homework has been handed in, preferably the latest two days after. 

To help you get started we have created some resources about giving feedback. Find them here: https://github.com/HackYourFuture-CPH/curriculum/tree/master/review


## Hand in Homework:
Go over your homework one last time:

- Does every file run without errors and with the correct results?
- Have you used `const` and `let` and avoided `var`?
- Do the variable, function and argument names you created follow the [Naming Conventions](https://github.com/HackYourFuture/fundamentals/blob/master/fundamentals/naming_conventions.md)?
- Is your code well-formatted (see [Code Formatting](https://github.com/HackYourFuture/fundamentals/blob/master/fundamentals/naming_conventions.md))?

If you can answer yes to the above questions then you are ready to hand if the homework:
* Find the hyf-homework git repo (forked from [here](https://github.com/HackYourFuture-CPH/hyf-homework))
* Add your homework files in the Javascript/javascript2/week1 folder
* To finish the homework, use the link in the top of your classes slack channel. 
---

🎉
