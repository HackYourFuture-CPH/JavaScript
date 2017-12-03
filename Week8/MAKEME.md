# Homework Week 8
This week you will work on finishing your application so it's actually useful!!

>[Here](/Week8/README.md) you find the readings you have to complete before the ninth lecture.

## Step 1: Closure

>Revise before attempting: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures

We have an array with the numbers from 1 to 1000. Now we are interested in all numbers in that array which are divisible by 3. And then divisible by 10. And then by 21. We have implemented that using a for loops:

```js
let arr = []
   for( let i=1; i<=1000;i++){
       arr.push(i);
   }
   console.log(arr);

   // here the solution using loops starts
   const x = 3;
   let divisbleBy3 = []
   for(let i=0;i<arr.length;i++){
       if(arr[i]%x===0){
           divisbleBy3.push(arr[i]);
       }
   }
   console.log("Numbers divisible by 3: ",divisbleBy3)
   console.log("Amount of numbers divisible by 3: ",divisbleBy3.length)

   const y = 10;
   let divisbleBy10 = []
   for(let i=0;i<arr.length;i++){
       if(arr[i]%y===0){
           divisbleBy10.push(arr[i]);
       }
   }
   console.log("Numbers divisible by 10: ",divisbleBy10)
   console.log("Amount of numbers divisible by 10: ",divisbleBy10.length)

   const z = 21;
   let divisbleBy21 = []
   for(let i=0;i<arr.length;i++){
       if(arr[i]%z===0){
           divisbleBy21.push(arr[i]);
       }
   }
   console.log("Numbers divisible by 21: ",divisbleBy21)
   console.log("Amount of numbers divisible by 21: ",divisbleBy21.length)
```

Your task is now, to implement a closure (a function factory), that generates functions which allow us to determine all numbers that are visible by "WHAT EVER NUMBER".

>Hint: Use `map`, `filter` and `reduce`. Think about the sizes of your arrays and then choose whether you need `map`, `filter` or `reduce`

```js
    let arr = []
    for( let i=1; i<=1000;i++){
        arr.push(i);
    }
    console.log(arr);

    // here please start your solution
    // using closures, functions and (map,filter,reduce)
    const divisibleFactory = function(z){

    }

    // apply your function
    // const divisbleByWHATEVERNUMBER = arr ... WHATEVERNUMBER ... ;
```

Once you have the factory function above working well for 3, 10 and 21, create an array which uses this factory above to calculate the number of item in `arr` above which are divisible by numbers between 1-30 i.e. your array will contain 30 items and looks something like this:

```js
[1000, 500, 333, 250, 200, 166, 142, 125, 111, 100, 90, 83, 76, 71, 66, 62, 58, 55, 52, 50, 47, 45, 43, 41, 40, 38, 37, 35, 34, 33, 32]

// 1000 items are divisible by 1, 500 by 2 and son on...
```

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
