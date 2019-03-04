# Homework

## Why should i even do this homework?
Functions and conditions are some of the basic building blocks of javascript. Functions ensure that we dont repeat ourselves when writing code. Conditions ensures that we can handle different cases when programming.

## Javascript warmup
Just like last homework, lets **warmup our brain**!

Do these freecodecamp challenges. We know this seems like a lot, but the tasks are not so big, so hang in there! If you get stuck on one of the tasks, just go to the next and then return to the difficult task later on.

- [ ] https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/basic-javascript/passing-values-to-functions-with-arguments/
- [ ] https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/basic-javascript/return-a-value-from-a-function-with-return/
- [ ] https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/basic-javascript/assignment-with-a-returned-value/
- [ ] https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/basic-javascript/local-scope-and-functions/
- [ ] https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/basic-javascript/global-vs--local-scope-in-functions/
- [ ] https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/basic-javascript/introducing-else-if-statements/
- [ ] https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/basic-javascript/logical-order-in-if-else-statements/
- [ ] https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/basic-javascript/iterate-with-javascript-for-loops/
- [ ] https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/basic-javascript/iterate-through-an-array-with-a-for-loop/

Please add your freecodecamp username as answer for this exercise!

---

## Step 3: Smart-ease - Goes Global!
Following the massive success of Smart-ease's first couple of products things have been quite hectic at Smart-ease's shared office space. The phone is constantly ringing from journalists wanting to interview the genius behind the success and the greatest developers want to work for you. [Wired](www.wired.com) wrote an article with the headline "Smart-ease as good as Smarties"

BUT people are asking: What will be the next product that truly defines Smart-ease as the startup of the century?

### Flight booking fullname function
Even for a startup as successful as Smart-ease there needs to be money in the bank. A customer from a flight booking website has asked for our help creating a specific part of their application:
When a user books a flight they **write their firstname and surname**, but when the ticket is printed a **fullname should be displayed**. It is our responsibility to create that.

Create a function called `getFullname` that returns a fullname. 
It should have two parameters: `firstname` and `surname`. 

```js
getFullname('Benjamin', 'Hughes'); // returns "Benjamin Hughes"
```

Now try to create two variables `fullname1` and `fullname2` these two variables should be assigned to the return of calling the `getFullname` function. 

Log out the two fullnames.

#### Formal fullname
On the flight website the user has the possibility to **check a checkbox** that **indicates** if the user wants to be **adressed formally**. Lets also change `getFullname` to include support for formal name. 

Create an extra parameter `useFormalName` that is a boolean. If it is true the function should add a `Lord` in front of the name. 

```js
getFullname('Benjamin', 'Hughes', true); // returns "Lord Benjamin Hughes"`
getFullname('Benjamin', 'Hughes', false); // returns "Benjamin Hughes"
```

What do we do if `useFormalName` is not given as an argument?

Remember to consider someone calling the function with an empty string as firstname and lastname.

Try out your code by pasting your getFullname function in the javascript part of this codepen: https://codepen.io/hackyourfuture-cph/pen/jJWwbN

### Event application
Another customer has contacted us. He works for a secret company that rimes with foogle. The customer works on their calendar application. They need some functionality to help with writing what weekday an event is held. 

You specify how many days from today an event is being held. The function then figures out what weekday the event is being held. Here is an example:

Today is Sunday and the event is in 5 days. Therefore the event will be held on a friday.

```js
// With todays weekday a tuesday
console.log(getEventWeekday(9)); // Logs out "Thursday"

// With todays weekday a Friday
console.log(getEventWeekday(2)); // Logs out "Sunday"
```

You should get the today's day from the system.  

Hint: use remainder operator, array indexes and investigate new Date in js. 

### Weather wear
Create a function (that you have to name) that has temperature as parameter. Based on the temperature it should return a string with what the user should wear. You decide what the user should wear based on the temperature.

An example is:

```js
const clothesToWear = youCreateThisFunctionName(18);
console.log(clothesToWear); // Logs out: "shorts and a t-shirt"
```

![Wearing jackets](https://media.giphy.com/media/26u6dryuZH98z5KuY/giphy.gif)

### Student manager
A coding school have contacted us to make some functionality for managing their classes. We will create functionality for adding students to a class.

For this exercise you need to figure out how `Array.push` works. Learn about the concept by researching about it. 

Copy the following code into your homework js file
```js
const class07Students = [];
function addStudentToClass(studentName) {
    // You write code here
}

function getNumberOfStudents() {
    // You write code here
}
```

#### addStudentToClass function
The `addStudentToClass` should add the `studentName` to the `class07Students` array.

But there are some other requirements:
- There can be only 6 students in a class. If more students are tried to be added, log out the following: "Cannot add more students to class 07".
- The same person cannot be added to the class. If the same person is added to the class, log out the following: 'Student Benjamin is already in the class' where Benjamin is substituted for the `studentName`.
- We are very fond of our Queen in Denmark, so if the Queen is added to the class she should always get a space. Even if the class has been filled out.
- You cannot add an empty string to a class

#### getNumberOfStudents function
`getNumberOfStudents` should simply return the number of students in the class.

#### Now lets try and use the functions!
Try out all the cases:
- Add some students to the class.
- Add more students than there is space for
- Add a student that is already in the class
- Add the Queen to a full class
- Call the `getNumberOfStudents` to log out the number of students.  

To see your code applied on a webapp, go here: https://codepen.io/hackyourfuture-cph/pen/PLPmOB and paste your javascript code. 

### Candy helper
> We are at the candystore. We have taken some shovels of the **caramel-strawberry-cola-lemon-gravy winegums**, a few of the **banana chocolate diesel-motors** and a handful of the **salmon-potato covered toffee encrusted pizzas**. But what is all this worth? And can you even afford it? 

Let's solve this problem with some functions. 

#### addCandy function
Create a function called `addCandy`. It has two parameters:
- `candyType` - specifies the candy type. Could be 'sweet, chocolate, toffee or chewing-gum'
- `weight` - specifies the weigth of the candy in grams

The function should **add the price of the candy** to an array called `boughtCandyPrices` using [push](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push) 

Here is an example of the usage:

```js
addCandy('sweet', 20); // Adds the price of 20 grams of sweets to the array boughtCandyPrices
```

Candy table prices

| Candy type | Price per gram |
|-------------|----------------|
| Sweet | 0.5 |
| Chocolate | 0.7 |
| Toffee | 1.1 |
| Chewing-gum | 0.03 |


#### Can i buy more?
Now create a variable called `amountToSpend` and assign it to `Math.random() * 100`. You can read about `Math.random` [here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random)

Create a new function called `canBuyMoreCandy`. This function returns a boolean indicating if the user can buy more candy using the `boughtCandy` array. 

Try use the function by adding some pieces of candy and checking if you can buy more. If the user can buy more candy the `console.log` the following: "You can buy more, so please do!". If the user cant buy more `console.log` the following: "Enough candy for you!"

Hint: Use a for loop to calculate the total price of the candy pieces. 

*Optional* Use a [while loop](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/while) instead of a for loop.


## Step 4: Rover the Robot *Optional*
Go and try out this cool game: [roverjs.com](http://roverjs.com), written by one of the HYF teachers from Amsterdam, [Joost Lubach](https://github.com/joost). There are different levels. Solve the chapter up until and including the variables chapter. 

## Step 5: Hand in Homework:
Steps:
* Use the ```hyf-homework``` repo and add your homework files in the ```javascript/javascript1/week2``` folder
* Make your commits for the homework. Remember to seperate the code into meaningful commits!
* Push the changes to github
* Share the github link to your classes slack channel. 
---

And thats it your are done 🎉