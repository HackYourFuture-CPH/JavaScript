# Homework

## Start the homework

Need to brush up on the homework setup process? Check [this](https://github.com/HackYourFuture-CPH/Git/blob/main/homework-submission.md) out before you get into some git confusion!

## So why this homework?

**Interacting with the DOM is a crucial part** of building a website. If we cannot interact with the DOM then the javascript we write cannot change what we see in the browser. **Connecting javascript to the browser opens up a new world of possibilities** where only the imagination is the limiting factor.

## Overview of homework

# 1. Problem solving cardio

Lets exercise our problem solving abilities!

![mind exercise](https://media.giphy.com/media/l41m04gr7tRet7Uas/giphy.gif)

## 1.1. codewars!

Complete these Katas:
- [8kyu Remove First and Last Character](https://www.codewars.com/kata/56bc28ad5bdaeb48760009b0)
- [8kyu Counting sheep...](https://www.codewars.com/kata/54edbc7200b811e956000556)
- [7kyu String ends with?](https://www.codewars.com/kata/51f2d1cafc9c0f745c00037d)
- [7kyu Odd or Even?](https://www.codewars.com/kata/5949481f86420f59480000e7)

## 1.2. Find and count the Danish letters

Find the individual number and the total number of Danish letters in a string.

```js
const danishString = "Jeg har en blå bil";
notThisFunctionName(danishString); // returns {total: 1, å: 1}

const danishString2 = "Blå grød med røde bær";
notThisFunctionName(danishString2); // returns {total: 4, æ: 1, ø: 2, å: 1}
```

# 2. Spirit animal name generator

Let's create a page where **a user writes his name** in an input element. The user then clicks a button. The user will now **receive a spirit animal name**, fx Benjamin - The fullmoon wolf.

## 2.1. Markup time!

Create an input element, a button and a tag to display the spirit animal into.

## 2.2. Setting up the events

When the user clicks the button, get the name the user wrote in the input field.

## 2.3. Spirit animal part

Now we can get the users name, next step is to **add the spirit animal string** and display that the users name, a dash and then the spirit animal. Fx Name: Peter: Peter - The crying butterfly
For creating the spirit animal create an array with 10 string representing spirit animals. Now get a random item in the array that will represent the spirit animal.

## 2.4. New spirit animal

Now a user tells us that he wants a new spirit animal. No problem we say. Let's create functionality where a user can press a button and then get a new spirit animal.

## 2.5. No input

What if the user clicks the generate new spirit animal and there is no text in the input?

## 2.6. Event types - _Optional and a little tricky_

Give the user the possibility to select **when the spirit animal should be created**. Should it be when the user clicks the button or when the user hovers the input field or when text is written in the input field?

How can we give a user multiple options to select from in html? Maybe time for google!

An example is: A user select that she only wants to generate a spirit animal when the input is hovered. That means that if the user writes her name in the input and clicks the button nothing happens. BUT when she hovers the input, NOW a new spirit animal is generated.

![Spiritanimal](https://media.giphy.com/media/IMSq59ySKydYQ/giphy.gif)

# 3. hyfBay - get the okay'est products here <a id='hyfbay'></a>

We have been **hired for a company** to do a SPA - Single Page App for them. It is a website where a user can search for products. The products can also be **filtered and sorted** based on what products the user wants to see.

We are going to be building this website step by step, so have patience :)

## 3.1. Lets get started!

In the [homework/hyf-bay folder](homework/hyf-bay) there is a project template you should continue working on. So copy all the files into your `hyf-homework/javascript/javascript2/week1` folder.

The `index.html` is very basic. It simply loads two javascript files and include some css. The two javascript files are `hyfBayHelpers.js` and the `main.js`. `hyfBayHelpers.js` contains a function (`getAvailableProducts`) that we can use to get an array of products. In the `main.js` we will be writing all our code!

## 3.2. Requirements

- Using the `getAvailableProducts` array we will render an html list of products
- The list should contain `title`, `price` and `rating`
- The list of products should be generated through calling a function called `renderProducts(products)`

### Example

```js
const products = getAvailableProducts();

function renderProducts(products) {
  // your code here
}

renderProducts(products); // This should create the ul and the li's with the individual products details
```

So after calling the `renderProducts` function, the output should be like the output you can see here: https://codesandbox.io/s/hyf-bay-first-week-oml13

### So how can I do that?

Here is a possible way to render the products

1. In the html create a `ul` that will contain all the products. Select that `ul` using `document.querySelector`
2. For each `product` in the `products` array:
   1. [create an `li`](https://developer.mozilla.org/en-US/docs/Web/API/Document/createElement)
   2. Set the innerHTML of that `li` to the contain the title, price and rating
   3. [Append the `li`](https://developer.mozilla.org/en-US/docs/Web/API/Node/appendChild) to the `ul`

<br/>

## Hand in homework

Need to brush up on the homework hand-in process?<br/>
Check [this resource](https://github.com/HackYourFuture-CPH/Git/blob/main/homework-submission.md) to remember how to hand in the homework correctly!
