# Homework Week 7

## Step 1: Map, filter, reduce, and =>

1. Say you would like to write a program that doubles the odd numbers in an array and throws away the even number.

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

    rewrite the above program using `map` and `filter` don't forget to use `=>`

2. Using [this json file](https://gist.githubusercontent.com/pankaj28843/08f397fcea7c760a99206bcb0ae8d0a4/raw/02d8bc9ec9a73e463b13c44df77a87255def5ab9/movies.json) as the source, build a function which does the following:

    1. Give each movie a `tag`: Good (>= 7), Average (>= 4 and < 7), Bad (< 4) based on the ratings.
    1. Calculate the average rating of all the movies.
    1. Count the total number of Good, Average and Bad movies.
    1. Count he number of movies containing the following keywords: `["The", "dog", "who", "is", "not", "a", "man"]`. Can you make sure the search is case insensitive?
    1. Count the number of movies made between 1980-1989 (including both the years).

## Step 2: Continuing with the previous exercise

- Add map, filter, reduce to  your existing app to build an application that loads data from github, filters out based on certain value, map->reduces to a data object and render that object to the dom (using map again).
- For example you can try to use map, filter and reduce to show the most and the least forked repositories, watched repositories. And the total number of forks for all repo's. Also you can work with the data provided about the amount of commits or contributers.
- Add a readme to your repo explaining  what your app does and how to use your app. Here's a [template](https://gist.github.com/jxson/1784669) and here you can see how to make [your readme awesome](https://gist.github.com/rrgayhart/91bba7bb39ea60136e5c).

## Step 3: **Some freeCodeCamp challenges:**

1. [Comparisons with the Logical And Operator](https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/basic-javascript/comparisons-with-the-logical-and-operator/)

2. [Record Collection](https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/basic-javascript/record-collection/)

3. [Iterate over Arrays with map](https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/functional-programming/use-the-map-method-to-extract-data-from-an-array)

## Step 4: Hand in Homework:
Go over your homework one last time:

- Does every file run without errors and with the correct results?
- Have you used `const` and `let` and avoided `var`?
- Do the variable, function and argument names you created follow the [Naming Conventions](https://github.com/HackYourFuture/fundamentals/blob/master/fundamentals/naming_conventions.md)?
- Is your code well-formatted (see [Code Formatting](https://github.com/HackYourFuture/fundamentals/blob/master/fundamentals/naming_conventions.md))?  
![](https://media.giphy.com/media/l4EpblDY4msVtKAOk/giphy.gif)  
If you can answer yes to the above questions then you are ready to hand in the homework:<br/>
- Find the hyf-homework git repo (that you have forked from [here](https://github.com/HackYourFuture-CPH/hyf-homework)) the link will be https://github.com/YOUR-ACCOUNT/hyf-homework
- Add your homework files in the Javascript/javascript3/week7 folder
- To finish the homework post the link for your repo and the rendered index.html on your classes slack channel
---

🎉
