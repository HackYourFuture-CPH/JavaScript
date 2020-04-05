# Homework

## Why should i even do this homework?
Working with arrays is an essential part of being a javascript developer. A lot of the time js developers have an array of some objects. That could be **users, products, posts, jobs** etc. Working with these arrays, js developers so often need to filter the arrays, change the structure of the array, sort them or loop through them. 

On top of that combining these array function with each other will show the functional side to javascript in a nice way. 

The warmup exercises will be a bit abstract. But the in the **hyfBay exercise** the task will be a lot closer to a **real world task**. 

## Warmup array exercises

If you struggle to do this weeks homework there are a couple of things to do:
- Try watch this video: https://www.youtube.com/watch?v=Urwzk6ILvPQ
- Watch the class recording. If it for some reason is missing. Then watch these: [part 1](https://www.youtube.com/watch?v=AJt_O0EFDC8), [part 2](https://www.youtube.com/watch?v=4tj7CvD7ka8), [part 3](https://www.youtube.com/watch?v=CO40FG6pK2k) [part 4](https://www.youtube.com/watch?v=eA2tCs0AaaM)
- Read up on array functions [here](https://github.com/HackYourFuture-CPH/JavaScript/blob/master/javascript2/week2/readme.md#array-methods-map-filter-and-sort)

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
![cinema](https://media.giphy.com/media/l6mBchxYZc7Sw/giphy.gif)

Copy the movies array in the [movies](homework/movies.js) file. Use this array to do the following tasks:
1. Create an array of movies containing the **movies with a short title** (you define what short means)
2. Create an array of movie titles with **long movie titles**
3. Count the **number of movies** made between 1980-1989 (including both the years)
4. Create a new array that has an **extra key called tag**. The tag is based on the rating: Good (>= 7), Average (>= 4 and < 7), Bad (< 4)
5. **Using [chaining](readme.md#Chaining)**, first filter the movies array to only contain the movies rated higher than 6. Now map the movies array to only the rating of the movies.
6. **Count the total number of movies** containing any of following keywords: `Surfer`, `Alien` or `Benjamin`. So if there were 3 movies that contained `Surfer`, 1 with `Alien` and 2 with `Benjamin`, you would return 6. Can you make sure the search is case insensitive? 
7. Create an array of movies where a **word in the title is duplicated**. Fx "Star **Wars**: The Clone **Wars**" the word **Wars** is duplicated. Here are some madeup examples of movies with duplicated words in the title: "**The** three men and **the** pistol", "**Chase** three - The final **chase**"
8. Calculate the **average rating** of all the movies using [reduce](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce). *Optional*
9. **Count the total number** of Good, Average and Bad movies using [reduce](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce). A return could fx be `{goodMovies: 33, averageMovies: 45, goodMovies: 123}` *Optional*


## hyfBay - get the okay'est products here - continued
**Continue work on your homework regarding the Hyfbay** from previous week. Please copy the files from last week into this weeks hyf-homework folder and continue working there. If you have not made last weeks homework the solution for it is included in [this weeks homework folder](homework/hyf-bay) in the main.js file. 

### Filter products
A very normal usecase for a product site it that a **user wants to search for some product** or get products that only ships to his country. Lets implement that functionality for a user!

BUT first lets figure out what happens on a conceptual level:
1. Some kind of **event happens**, fx a user searches for a product, we need to listen for that event
2. When that event happens we need to **filter the products** the user wants
3. Then we should **render those products**

Lets get a little closer to javacript:
1. `.addEventListener` on an element
2. `.filter` on the products array
3. `renderProducts` with the filtered array

#### Searching for products
When the user writes something in the search input field. The products should be updated to only include the products that match the name. Use the overview shown above and the `renderProducts` function.

#### Showing products that ships to country - *optional*
Lets help a user to avoid spending too much time looking for products that can not be shipped to the user's country: When the **user selects a country** in the ships to select tag, the products should be updated with the **products that ship to that country**. 

Hint 1: Break this task into smaller tasks!

Hint 2: How can you get a value from a select list? Its a little tricky, but google and slack is your friend!

Hint 3: To figure out if a product does ship to a country, use [includes](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/includes)

### Create some extra feature
No matter how small or how big. Create some feature that would be **cool/helpful/quirky/funny**. 

### Sort the products - *optional*
Choosing one of the sorting metods should update the shown order of the products. There is an array method called `sort`. Find documentation about it and see if you can get it to work. Use the `renderProducts` function.

## Feedback giving time!
Find a student to give feedback using this site: https://hyf-peer-review.herokuapp.com/
The feedback should be given after the homework has been handed in preferably latest two days after.
 
To help you get started we have created some ressources about giving feedback. Find them here: https://github.com/HackYourFuture-CPH/curriculum/tree/master/review

## Hand in Homework:

Watch [this video](https://www.youtube.com/watch?v=feyBVDhFQuk) for a more detailed go-through of how to hand in homework!

- Create a new branch called `javascript/javascript2/week2` 
- Add all your changes to this branch in the `javascript/javascript2/week2` folder. 
- Go through the [Homework checklist](#homework-checklist)
- Create a pull request using the `javascript/javascript2/week2` branch
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
- [ ] Is your code well-formatted (see [Code Formatting](https://github.com/HackYourFuture/fundamentals/blob/master/fundamentals/naming_conventions.md))?
