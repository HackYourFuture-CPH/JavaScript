# Homework Week 8
This week you will work on finishing your application so it's actually useful!!

>[Here](/Week8/README.md) you find the readings you have to complete before the ninth lecture.

## Step 1: Closure

>Revise before attempting: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures

`Rasmus, your challenge here.`

## Step 2: Continuing with data loading, processing and rendering

>Revise before attempting: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise

Using [the movies json file from the previous exercise](https://gist.github.com/evanc/17f1ade674aa0d8066e0a33be923fe17/raw/b3b6cd9c96e5ca59bf7610c4c17da420bcaea0ae/movies.json) as the source, extend your appliation to do the following:

1. Give each movie a `tag`: Excellent (>=8.5), Very Good (>=8), Good (<8) based on the ratings.
1. Render all the movies as a list (similar to how you were presenting Github repositories in the homework before).
1. Add a input field, and a button to perform search. Use `.filter` method on arrays to filter on the titles.
1. Add 4 radio buttons for each tag + All tag (All, Excellent, Very Good, Good) and filter the movies based on the tag selected.
1. Display only the movies in the list which match the two filter criterion above.
1. Display the average rating of the movies being filtered and displayed.

Remember to use the following to help with your code:

1. Promises to simplify data loading, [covered in this lecture](./classwork/new-ajax.js).
1. Filter, map, reduce functions + Arrow functions, [covered in last lecture](../Week7/classwork/demonstration.js).
