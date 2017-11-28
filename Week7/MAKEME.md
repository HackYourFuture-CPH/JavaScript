# Homework Week 7

>[Here](/Week7/README.md) you find the readings you have to complete before the eighth lecture.

## Step 1: map, filter, reduce
- Most of you have not completed the homework from last week, so this task will be difficult
- Add map, filter, reduce to  your existing app to build an application that loads data from github, filters out based on certain value, map->reduces to a data object and render that object to the dom (using map again).
- For example you can try to use map, filter and reduce to show the most and the least forked repositories, watched repositories. And the total number of forks for all repo's. Also you can work with the data provided about the amount of commits or contributers.
- Add a readme to your repo explaining  what your app does and how to use your app. Here's a [template](https://gist.github.com/jxson/1784669) and here you can see how to make [your readme awesome](https://gist.github.com/rrgayhart/91bba7bb39ea60136e5c).

## Step 2: **Some freeCodeCamp challenges:**

1. [Comparisons with the Logical And Operator](https://www.freecodecamp.com/challenges/comparisons-with-the-logical-and-operator)

2. [Record Collection](https://www.freecodecamp.com/challenges/record-collection)

3. [Iterate over Arrays with map](https://www.freecodecamp.com/challenges/iterate-over-arrays-with-map)

## Step 3: More map, filter, reduce, and =>

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

2. Use the array of the previous assignment, write a program that add the even numbers to the resulting array twice, but the odd numbers only once. Don't forget to use `=>`.

Your output should be:
```js
console.log("The final numbers are", newNumbers);// [1, 2, 2, 3, 4, 4]
```

Underneath you see a very interesting small insight in Maartje's work:
```js
let monday = [
        {
            name     : 'Write a summary HTML/CSS',
            duration : 180
        },
        {
            name     : 'Some web development',
            duration : 120
        },
        {
            name     : 'Try to convince teachers to fix homework class10',
            duration : 30
        },
        {
            name     : 'Fix homework for class10 myself',
            duration : 20
        },
        {
            name     : 'Talk to a lot of people',
            duration : 200
        }
    ];
 
let tuesday = [
        {
            name     : 'Keep writing summery',
            duration : 240
        },
        {
            name     : 'Some more web development',
            duration : 180
        },
        {
            name     : 'Staring out the window',
            duration  : 10
        },
        {
            name     : 'Talk to a lot of people',
            duration : 200
        },
        {
            name     : 'Look at application assignments new students',
            duration : 40
        }
    ];
     
let tasks = [monday, tuesday];
```

3. Write a program that does the following:

- Collect two days' worth of tasks.
- Convert the task durations to hours, instead of minutes.
- Filter out everything that took two hours or more.
- Sum it all up.
- Multiply the result by a per-hour rate for billing (you can decide yourself what Maartje should make per hour).
- Output a formatted Euro amount.
- Don't forget to use `=>`

## Step 4: Coming soon ...

## To watch before the next lecture:

(watch in this order)

1. [Stacks/Queues](https://www.youtube.com/watch?v=wjI1WNcIntg) (5 mins)
2. [JS Event Loops](https://www.youtube.com/watch?v=8aGhZQkoFbQ) (26 mins, watch this one twice or until you understand it)

>Create a new repository "hyf-javascript3". Also create a new folder "week1" inside this repository. 
Upload your homework files inside the week1 folder and write a description for this “commit”.
Your hyf-javascript3/week1 should now contain the files of your homework.
Place the link to your repository folder in Trello.
