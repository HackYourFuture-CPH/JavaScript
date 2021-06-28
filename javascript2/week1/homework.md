# Homework

### Get git ready to work on homework

Using the `hyf-homework` repo. In the terminal run `git status`

If there are changes that have not been committed, figure out what to do with those changes

- Should they be committed to another branch?
- Should they be committed to `master`?
- Should they be discarded?

When you have figured out what to do with the changes and fixed those. Write `git status` again. If it says `nothing to commit, working tree clean`. Then you are ready to create the branch for this weeks homework.

#### Creating the branch

Using the `hyf-homework` repo write this command

`git checkout master` - You are now on the `master` branch

`git checkout -b javascript-javascript2-week1`

This will create and checkout the branch so you are ready make commits to it

[This video](https://www.youtube.com/watch?v=XYlgh9hSWtw) can help. On slack use the #git-support channel to ask questions about git

## So why this homework?

**Interacting with the DOM is a crucial part** of building a website. If we cannot interact with the DOM and the javascript we write cannot be used in a browser. **Connecting javascript to the browser opens up a new world of possibilities** where only the imagination is the limiting factor.

## Problem solving cardio

Lets exercise our problem solving abilities!

![mind exercise](https://media.giphy.com/media/l41m04gr7tRet7Uas/giphy.gif)

### Find the shortest word

Write a function that finds the shortest word of an array of words

```js
const danishWords = ["bil", "plante", "kaffe", "bog", "ø", "planetarium"];
notThisFunctionName(danishWords); // returns 'ø'
```

### Find and count the Danish letters

Find the individual number and the total number of Danish letters in a string.

```js
const danishString = "Jeg har en blå bil";
notThisFunctionName(danishString); // returns {total: 1, å: 1}

const danishString2 = "Blå grød med røde bær";
notThisFunctionName(danishString2); // returns {total: 4, æ: 1, ø: 2, å: 1}
```

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

### Event types - _Optional and a little tricky_

Give the user the possibility to select **when the spirit animal should be created**. Should it be when the user clicks the button or when the user hovers the input field or when text is written in the input field?

How can we give a user multiple options to select from in html? Maybe time for google!

An example is: A user select that she only wants to generate a spirit animal when the input is hovered. That means that if the user writes her name in the input and clicks the button nothing happens. BUT when she hovers the input, NOW a new spirit animal is generated.

![Spiritanimal](https://media.giphy.com/media/IMSq59ySKydYQ/giphy.gif)

## hyfBay - get the okay'est products here

We have been **hired for a company** to do a SPA - Single Page App for them. It is a website where a user can search for products. The products can also be **filtered and sorted** based on what products the user wants to see.

We are going to be building this website step by step, so have patience :)

### Lets get started!

In the [homework/hyf-bay folder](homework/hyf-bay) there is a project template you should continue working on. So copy all the files into your `hyf-homework/javascript/javascript2/week1` folder.

The `index.html` is very basic. It simply loads two javascript files and include some css. The two javascript files are `hyfBayHelpers.js` and the `main.js`. `hyfBayHelpers.js` contains a function (`getAvailableProducts`) that we can use to get an array of products. In the `main.js` we will be writing all our code!

#### Requirements

- Using the `getAvailableProducts` array we will render an html list of products
- The list should contain `title`, `price` and `rating`
- The list of products should be generated through calling a function called `renderProducts(products)`

#### Example

```js
const products = getAvailableProducts();

function renderProducts(products) {
  // your code here
}

renderProducts(products); // This should create the ul and the li's with the individual products details
```

So after calling the `renderProducts` function, the output should be like the output you can see here: https://codesandbox.io/s/hyf-bay-first-week-oml13

#### So how can i do that?

Here is a possible way to render the products

1. In the html create a `ul` that will contain all the products. Select that `ul` using `document.querySelector`
2. For each `product` in the `products` array:
   1. [create an `li`](https://developer.mozilla.org/en-US/docs/Web/API/Document/createElement)
   2. Set the innerHTML of that `li` to the contain the title, price and rating
   3. [Append the `li`](https://developer.mozilla.org/en-US/docs/Web/API/Node/appendChild) to the `ul`

## Hand in Homework:

Watch [this video](https://www.youtube.com/watch?v=XYlgh9hSWtw) for a more detailed go-through of how to hand in homework!

- Use the branch called `javascript-javascript2-week1`
- Add all your changes to this branch in the `javascript-javascript2-week1` folder.
- Go through the [Homework checklist](#homework-checklist)
- Create a pull request using the `javascript-javascript2-week1` branch
- Wait for mentor feedback
- Implement feedback, `add`, `commit` and `push` the changes
- Now you can merge the changes into `master`
- When merged you can **share the github link** to your classes slack channel if you are **proud of what you did** 💪
- Now celebrate 🎉🎉🎉

## Homework checklist

Go over your homework one last time:

- [ ] Does every file run without errors and with the correct results?
- [ ] Have you used `const` and `let` and avoided `var`?
- [ ] Do the variable, function and argument names you created follow the [Naming Conventions](https://github.com/HackYourFuture/fundamentals/blob/master/fundamentals/naming_conventions.md)?
- [ ] Is your code well-formatted (see [Code Formatting](https://github.com/HackYourFuture/fundamentals/blob/master/fundamentals/code_formatting.md))?

## Feedback giving time!

Find a student to give feedback using this site: https://hyf-peer-review.herokuapp.com/. The feedback should be given after the homework has been handed in, preferably two days after.

Give the review on the PR exactly how the mentors do it! To find the link for the PR ask the person you are reviewing :) You can see how to give feedback on a PR using github [here](https://docs.github.com/en/github/collaborating-with-issues-and-pull-requests/commenting-on-a-pull-request)

To help you get started with reviewing we have created [some ressources](https://github.com/HackYourFuture-CPH/curriculum/tree/master/review) about giving feedback. Find them

Why is it important to give feedback? Because it will make you a [better](https://www.brightspot.com/blog/developer-life-5-reasons-why-the-code-review-process-is-critical-for-developers) [developer](https://www.sitepoint.com/the-importance-of-code-reviews/)
