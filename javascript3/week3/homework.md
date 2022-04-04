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

`git checkout -b javascript-javascript3-week3`

This will create and checkout the branch so you are ready make commits to it

[This video](https://www.youtube.com/watch?v=JcT4wmK1VcA) can help. On slack use the #git-support channel to ask questions about git

## So why should i do this homework?

Using classes help with structuring code. It is one of many **design patterns**. Second it **connects everything** you have learned in js: functions, properties, methods, keys, arrays.

If you struggle to do this weeks homework there are a couple of things to do:

- Try watch this: https://www.youtube.com/watch?v=T-HGdc8L-7w&t=565s
- Watch the class recording. If it for some reason is missing. Then watch these: [part 1](https://www.youtube.com/watch?v=KfEeUcT0PWY), [part 2](https://www.youtube.com/watch?v=jbnKWe92uv4), [part 3](https://www.youtube.com/watch?v=-lqbVK12lWM) [part 4](https://www.youtube.com/watch?v=E3Stsveg4rg)
- Read up on [classes](https://javascript.info/class)

## Lets make some art using classes

Lets create lots of circles in different sizes and colors on a webpage!

In HTML5 there is an elements called canvas. It **works just like a real canvas.** You can paint elements like lines, circles and much more to the canvas.

### Paint a circle to a canvas element

First add the `canvas` element to your html. Now draw a circle on the `canvas` using js. Google is your friend here :)

When you have added a normal circle, try filling it out so it has a color. Again google time!

### Class creation time!

Lets create a class called `Circle`. The circle should be used like this:

```js
const c1 = new Circle(50, 50, 20, 0, 2 * Math.PI, "#000000");
c1.draw();
```

Where the constructor should look like this: `constructor(x, y, r, startAngle, endAngle, fillColor)`

The circle should have one method: `draw` that **draws the circle to the canvas**. That means that creating an instance of the circle class will not draw the circle. **Drawing the circle** first happens when we **call the draw method.**

Test if the new class works by creating a circle and drawing it to the canvas. Try some different radiuses, positions and fill colors.

### Now lets make art!

Every 100ms create a new circle instance and draw that to the canvas.

The circle should have random `x`, `y`, `radius` and `color`. For giving the `circle` a random color what should we do?? We should google off course!

What if we wanted the canvas to have the same width and height of the screen?

### Follow the mouse - optional

Instead of the circles just randomly appearing on the screen, make them appear around the cursor.

## Getting into promises

Lets use the github api to see **what repositories different users have**. You can use this url to get repositories for a specific github username, in this case the username `benna100`: `https://api.github.com/search/repositories?q=user:benna100`. Select 3 classmates github username that you want to show repositories for.

Fetch all the 3 classmates repositories **at the same time using Promise.all.** Remember the **all at once** exercise [here?](../week2/homework.md#visual-promise)

When you have the data for the different repositories, **render the fullname** of the repo, **url** of the repo, and **the owner** of the repo. See [github-repos](homework/github-repos.html) as an example of how the renderered repos should look. You are more than welcome to style it a bit nicer!

## Shopping cart using Classes

Let's get a bit more into creating classes!

```js
class Product {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }
}

class ShoppingCart {
  constructor() {
    this.products = [];
  }

  addProduct(product) {
    // Implement functionality here
  }

  removeProduct(product) {
    // Implement functionality here
  }

  searchProduct(productName) {
    // Implement functionality here
  }

  getTotal() {
    // Implement functionality here
  }

  renderProducts() {
    // Implement functionality here
  }

  getUser(user) {
    // Implement functionality here
  }
}

const shoppingCart = new ShoppingCart();
const flatscreen = new Product("flat-screen", 5000);
shoppingCart.addProduct(flatscreen);
```

So we have two classes. `Product` represents products. `ShoppingCart` represents a shopping cart.

### Part 1

Create the functionality for the `ShoppingCart` class.

- `addProduct` should add a product to the products array.
- `removeProduct` should remove a product from the products array.
- `getTotal` should get the total price of the products in the `shoppingcart`.
- `renderProducts` should render the products to html. You decide what to show and how.
- `searchProduct` should return an array of product that match the `productName` parameter
- `getUser` should return a promise with the data from this api: https://jsonplaceholder.typicode.com/users/1 (replace '1' with correct user). 

### Part 2

Try and create some products and call the `addProduct` and the `removeProduct` functions to see if they work.

Call the `getUser` function to get a user. When the user has been fetched. Render the products using the `renderProducts` method. Also render the username and the total price of the products in the `shoppingcart`.

_Optional and a little tricky!_ Create a **searchbar where a user can search for a product.** Matching product are shown as an autocomplete. **Clicking a product** in the autocomplete **opens a modal** with product information.

### Part 3

The `Product` class should get a method called `convertToCurrency`. The function should have `currency` as a parameter. Depending on the **provided currency return the correct price** for the product. Add 3 or more curriencies. Or use an api for getting the price dependent on a currency that `convertToCurrency` uses.

```js
// Assuming dkr as default currency
const plant = new Product("plant", 50);
console.log(plant.convertToCurrency("dollars")); // 7.5
```

### Part 4, optional

Be creative! Create some cool/weird/quirky functionality of either the `Product` class or the `ShoppingCart` class.

## Hand in Homework:

Watch [this video](https://www.youtube.com/watch?v=JcT4wmK1VcA) for a more detailed go-through of how to hand in homework!

- Use the branch called `javascript-javascript3-week3`
- Add all your changes to this branch in the `javascript-javascript3-week3` folder.
- Go through the [Homework checklist](#homework-checklist)
- Create a pull request using the `javascript-javascript3-week3` branch and give your PR the same name `javascript-javascript3-week3`.
- Wait for mentor feedback
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

To help you get started with reviewing we have created [some resources](https://github.com/HackYourFuture-CPH/curriculum/tree/master/review) about giving feedback. Find them

Why is it important to give feedback? Because it will make you a [better](https://www.brightspot.com/blog/developer-life-5-reasons-why-the-code-review-process-is-critical-for-developers) [developer](https://www.sitepoint.com/the-importance-of-code-reviews/)

We hope that you enjoyed the last module of Javascript. Please fill out the survey [here](https://forms.gle/YhbmqeC1EHaCDV5e7) to give feedback to the mentors and the staff.
