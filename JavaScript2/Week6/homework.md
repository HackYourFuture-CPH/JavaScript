# Homework Week 6

## Why should i even do this homework?
Working with arrays is an essential part of being a javascript developer. A lot of the time js developers have an array of some objects. That could be **users, products, posts, jobs** etc. Working with these arrays, js developers so often need to filter the arrays, change the structure of the array, sort them or loop through them. 

On top of that combining these array function with each other will show the functional side to javascript in a nice way. 

The warmup exercises will be a bit abstract. But the in the hyfBay exercise the task will be a lot closer to a real world task. 

## Warmup array exercises

### Doubling of number
Say you would like to write a program that **doubles the odd numbers** in an array and **throws away the even number**.

Your solution could be something like this:
```js
let numbers = [1, 2, 3, 4];
let newNumbers = [];

for(let i = 0; i < numbers.length; i++) {
    if(numbers[i] % 2 !== 0) {
        newNumbers[i] = numbers[i] * 2;
    }
}

console.log("The doubled numbers are", newNumbers); // [2, 6]
```

Rewrite the above program using `map` and `filter` don't forget to use arrow functions.

### Working with movies
Copy the movies array in the [movies](homework/movies.js) file. Use this array to do the following tasks:
1. Count the number of movies made between 1980-1989 (including both the years).
1. Create a new array that has an extra key called tag. The tag is based on the rating: Good (>= 7), Average (>= 4 and < 7), Bad (< 4).
1. Using chaining, first filter the movies array to only contain the movies rated higher than 6. Now map the movies array to only the rating of the movies. Try do it where you define the functions as constants you provide to the filter and map functions. 
1. Count he number of movies containing the following keywords: `["The", "dog", "who", "is", "not", "a", "man"]`. Can you make sure the search is case insensitive? Hint: use indexOf
1. Calculate the average rating of all the movies using [reduce](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce). *Optional*
1. Count the total number of Good, Average and Bad movies using [reduce](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce). *Optional*


## hyfBay - get the okay'est products here
We have been **hired for a company** to do a SPA - Single Page App for them. It is a website where a user can **add products to the users shopping cart**. The products can be **filtered and sorted** based on what products the user wants to see. 

### Lets get started!
In the [homework/hyf-bay folder](homework/hyf-bay) there is a project you should continue working on. So copy all the files into your hyf-homework/Javascript/javascript2/week3 folder and start working in the main.js file. 

I have done some rudimentary styling for the project but you are super welcome to make it even nicer!

There is a function available to you called `getAvailableProducts`. Calling this function will return an array of products. There can be from 0 - 30 products in the array. The products are represented by objects that has the following keys: `id`, `name`, `price`, `rating`, `shipsTo`.

### Add them products
Call `getAvailableProducts` function to get the products array. Now add these products (as li elements) to the `ul` under the section with the classname `products`. Here is an example of how the individual li element should look:
```html
<li>
    <div class="name">Drone</div>
    <div class="price">1234</div>
    <div class="rating">5</div>
    <div class="ships-to">Denmark</div>
    <button data-id="Drone23787">Add to cart</button>
</li>;
```

### Price analytics
In order to analyse the product prices we need to send the prices of the products to a server. 
A function is available to you called `sendPricesToServer`. You need to call this function with two arguments: 
1. An array of the prices of the products. 
2. A callback function with a parameter. The parameter will be the confirmation text sent from the server. The callback function will be called when the data has been sent to the server. 
Console.log out the response from the server. 

### Filter using countries
A user can filter the search result in different ways. One way is by choosing to only **see products that ship from a certain country**. This can be helpful for the user, so the user does not spend to much time looking for products that can not be shipped to the user. We need to create that functionality: When the **user selects a country**, the products should be updated with the **products that ship to that country**. 

### Filter using search. 
When the user writes something in the search input field. The products should be updated to only include the products that match the name. 

### Create some extra feature
No matter how small or how big. Create some feature that would be **cool/helpful/quirky/funny**. 

### Sort the products - *optional*
Choosing one of the sorting metods should update the shown order of the products. There is an array method called `sort`. Find documentation about it and see if you can get it to work. 

### Shopping cart - *optional*
When clicking the `Add to cart` button for a product, that product should be added to the `ul` found under the section with the classname `cart`. The product should be added as a an `li` item. Like this:
```html
<li>
    <div class="name">Drone</div>
    <div class="price">1234</div>
</li>
```
Hint 1: Getting the object of the clicked product can be tricky! There are lots of ways but i will discuss two here:
1. Saving the id of the product in a data-id attribute on the button. When a user clicks the button you get the id of the product (from the data-id attribute). With the product id you can create a function that goes through all the products array and returns the product object with the corresponding id. Fx `getProductObjectFromId('Drone23576172')` would return the relevant object of the drone.
2. When adding the li tags to the ul. You can for every product in the products array create a new li element using `document.createElement('li')`. You then set the innerHTML as is specified above and then attach a clickListner: `createdLiElement.addEventListener('click', () => {});` The callback function has access to the product object because of something called [closures](https://www.youtube.com/watch?v=1JsJx1x35c0). This approach i would say is the best way.

Hint 2: Have an array with the products in the shopping cart. Render the shopping cart using this array. This will be super helpful if you do the next part.

### Total price of shopping cart - *optional*
Calculate the total price of all the elements in the shopping cart. Investigate the array function called [reduce](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce). It reduces an array down to one value. Which is exactly what we want. To reduce the products in the shopping cart array down to a single value that is the total price. 

![Shopping cart](https://media.giphy.com/media/8PA8Ew3nw97yg/giphy.gif)

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

If you can answer yes to the above questions then you are ready to hand if the homework:
* Find the hyf-homework git repo (forked from [here](https://github.com/HackYourFuture-CPH/hyf-homework))
* Add your homework files in the Javascript/javascript2/week3 folder
* To submit the homework use the link in the top of your classes slack channel. 