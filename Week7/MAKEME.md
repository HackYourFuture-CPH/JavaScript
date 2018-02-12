# Homework Week 7

>[Here](/Week7/README.md) you find the readings you have to complete before the eighth lecture.

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

    1. Give each movie a `tag`: Good (>=7), Average (4-6), Bad (0-3) based on the ratings.
    1. Calculate the average rating of all the movies.
    1. Count the total number of Good, Average and Bad movies.
    1. Count he number of movies containing the following keywords: `["The", "dog", "who", "is", "not", "a", "man"]`. Can you make sure the search is case insensitive?
    1. Count the number of movies made between 1980-1989 (including both the years).

## Step 2: Continuing with the previous exercise
Note: Most of you have not completed the homework from last week, so this task will be difficult

- Add map, filter, reduce to  your existing app to build an application that loads data from github, filters out based on certain value, map->reduces to a data object and render that object to the dom (using map again).
- For example you can try to use map, filter and reduce to show the most and the least forked repositories, watched repositories. And the total number of forks for all repo's. Also you can work with the data provided about the amount of commits or contributers.
- Add a readme to your repo explaining  what your app does and how to use your app. Here's a [template](https://gist.github.com/jxson/1784669) and here you can see how to make [your readme awesome](https://gist.github.com/rrgayhart/91bba7bb39ea60136e5c).

## Step 2: **Some freeCodeCamp challenges:**

1. [Comparisons with the Logical And Operator](https://www.freecodecamp.com/challenges/comparisons-with-the-logical-and-operator)

2. [Record Collection](https://www.freecodecamp.com/challenges/record-collection)

3. [Iterate over Arrays with map](https://www.freecodecamp.com/challenges/iterate-over-arrays-with-map)

## To watch before the next lecture:

(watch in this order)

1. [Stacks/Queues](https://www.youtube.com/watch?v=wjI1WNcIntg) (5 mins)
2. [JS Event Loops](https://www.youtube.com/watch?v=8aGhZQkoFbQ) (26 mins, watch this one twice or until you understand it)

>Create a new repository "hyf-javascript3". Also create a new folder "week1" inside this repository. 
Upload your homework files inside the week1 folder and write a description for this “commit”.
Your hyf-javascript3/week1 should now contain the files of your homework.
Place the link to your repository folder in Trello.
