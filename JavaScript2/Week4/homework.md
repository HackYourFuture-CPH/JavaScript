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


## hyfBay - get the okay'est products here
We have been **hired for a company** to do a SPA - Single Page App for them. It is a website where a user can search for products. The products can also be **filtered and sorted** based on what products the user wants to see. 

We are going to be building this website step by step, so have patience :)

### Lets get started!
In the [homework/hyf-bay folder](homework/hyf-bay) there is a project you should continue working on. So copy all the files into your hyf-homework/Javascript/javascript2/week4 folder.

Open the `index.html` file in a browser and take a look at the site and the html by inspecting the website. 

I have done some rudimentary styling for the project but you are super welcome to make it even nicer!

So the site looks like a typical product site, but is **missing some products!** Lets fix that!

#### Render test product names
Create an array called `testProductNames` that contains test product names. Lets start of with taking this array of test product names and render them!

To render these test products, we need to do the following:
1. Select the `ul` that is a child to the `section` called `products` in javascript
2. For each `productName` in the `testProductNames`:
   1.  [create an `li`](https://developer.mozilla.org/en-US/docs/Web/API/Document/createElement)
   2.  Set the innerHTML of that `li` to the `productName`
   3.  [Append the `li`](https://developer.mozilla.org/en-US/docs/Web/API/Node/appendChild) to the `ul`

#### Render products function
When test products can be rendered, lets create a function that does the this!

So lets create a function called `renderProducts`. It has one parameter: `products` - which is an array. 

It should work like this:
```js
const testProductNames = ['Flat screen', 'Mobile phone', 'Wallet'];
renderProducts(testProductNames); // Should add 3 li's to the ul under the products section with Flat screen, Mobile phone, Wallet text
```

We have now made a **code abstraction**, awesome! When we want to render new products, we dont need to think about all the details of innerHtml, appendChild etc, we simply need to call the `renderProducts` function with an array we would like to render.

#### Improving the `renderProducts` function
Now representing a product by **ONLY its name is a bit too simple.** A product usually has a price, a rating, a specific id, a name and countries it ships to. If we have to represent a product with that kind of data in Javascript we use an `object` with the following keys: `id`, `name`, `price`, `rating`, `shipsTo`. In the `main.js` file there is a function available to you called `getAvailableProducts`. **Calling this function** will return an **array of products.** There can be from 0 - 30 products in the array.

```js
const products = getAvailableProducts();
console.log(products) // logs out
/*
[{
    id: 23771823,
    name: 'Flat screen',
    price: 4000,
    rating: 4.2,
    shipsTo: [ 'denmark', 'germany'],
},
...]
*/
```

Lets improve the `renderProducts` so that it still shows only product names, but using the `products` from calling `getAvailableProducts`!

#### Showing more details to the user
So now we have come a long way. We can get  `products` calling `getAvailableProducts`. Those `product` names we can render by calling `renderProducts(products)`. But now the **user also wants to see the price, the rating and where the product ships to.** Lets first implement it in a simple way: 

Lets seperate the different product details with a `|`. So calling `renderProducts(products)` will now add an `li` with the `innerHTML` that looks like this: `Flat screen | 4000 | 4.2 | [ 'denmark', 'germany']`

That is all fine and dandy and it kind of works, BUT we would of course like to improve it.

#### Showing more details to the user in a nice way!
We could see all the product details as a **list of product details!** How do we represent lists in html?? 

Yes, thats right with a `ul` and `li` tag. So each product detail is an `li` inside a `ul`. 

Now we have two sets of `ul` and `li` tags. We have the individual products and then for every product we have the individual product details. 

#### *Optional* ships to rendering.
A product can be **shipped to multiple countries**, that means that it can be seen as a list of countries. How do we represent lists in html?? 

I think you know the answer! Try and implement ships to so it is represented as a list in html. 

A product li should now look like this:

```html
<li>
    <ul>
        <li class="name">Drone</li>
        <li class="price">1234</li>
        <li class="rating">5</li>
        <li class="ships-to">
            <ul>
                <li>Denmark</li>
                <li>Sweden</li>
            </ul>
        </li>
    </ul>
</li>
```

We have now made a fully functioning website that can render products. For the next homework we are **going to improve the site further.**

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
