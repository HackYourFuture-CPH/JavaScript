# Homework Week 8

## Step 1: Closure

>Revise before attempting: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures

We have an array with the numbers from 1 to 1000. Now we are interested in all numbers in that array which are divisible by 3. And then divisible by 10. And then by 21. We have implemented that using for loops:

```js
  let arr = [];
   for( let i=1; i<=1000;i++){
       arr.push(i);
   }
   console.log(arr);

   // here the solution using loops starts
   const x = 3;
   let divisbleBy3 = [];
   for(let i=0;i<arr.length;i++){
       if(arr[i]%x===0){
           divisbleBy3.push(arr[i]);
       }
   }
   console.log("Numbers divisible by 3: ",divisbleBy3);
   console.log("Amount of numbers divisible by 3: ",divisbleBy3.length);

   const y = 10;
   let divisbleBy10 = [];
   for(let i=0;i<arr.length;i++){
       if(arr[i]%y===0){
           divisbleBy10.push(arr[i]);
       }
   }
   console.log("Numbers divisible by 10: ",divisbleBy10);
   console.log("Amount of numbers divisible by 10: ",divisbleBy10.length);

   const z = 21;
   let divisbleBy21 = [];
   for(let i=0;i<arr.length;i++){
       if(arr[i]%z===0){
           divisbleBy21.push(arr[i]);
       }
   }
   console.log("Numbers divisible by 21: ",divisbleBy21);
   console.log("Amount of numbers divisible by 21: ",divisbleBy21.length);
```

## Part 1
Your task is now, to implement a closure (a function factory), that generates functions which allow us to determine if a number is divisible by some other number. The return of the inner function will be a boolean.

So just like with our adder function we want to use it like this:
```js
const divisibilityCheckerFive = divisibilityChecker(3);
console.log(divisibilityCheckerFive(2)) // logs out false
```

## Part 2
Create an array where the first element in that array is equal to the number of numbers (in ```arr```) that are divisible 1. The second element should be equal to the number of numbers that are divisible by 2. And so on. Use the divisibilityChecker function you created in part 1.
This is how the resulting array should look:
```js
[1000, 500, 333, 250, 200, 166, 142, 125, 111, 100, 90, 83, 76, 71, 66, 62, 58, 55, 52, 50, 47, 45, 43, 41, 40, 38, 37, 35, 34, 33, 32]

// 1000 items are divisible by 1, 500 by 2 and son on...
```

> Hint: Use `map`, `filter` and `reduce`. Think about the sizes of your arrays and then choose whether you need `map`, `filter` or `reduce`. A good old `forEach` would also be fine. 


![](https://media.giphy.com/media/jz0oM9Els8bHa/giphy.gif)

## Step 2: Continuing with data loading, processing and rendering

>Revise before attempting: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise

Using [the movies json file from the previous exercise](https://gist.githubusercontent.com/pankaj28843/08f397fcea7c760a99206bcb0ae8d0a4/raw/02d8bc9ec9a73e463b13c44df77a87255def5ab9/movies.json) as the source, extend your appliation to do the following:

1. Give each movie a `tag`: Good (>= 7), Average (>= 4 and < 7), Bad (< 4) based on the ratings.
1. Render all the movies as a list (similar to how you were presenting Github repositories in the homework before).
1. Add a input field, and a button to perform search. Use `.filter` method on arrays to filter on the titles.
1. Add 4 radio buttons for each tag + All tag (All, Good, Average, Bad) and filter the movies based on the tag selected.
1. Display only the movies in the list which match the two filter criterion above.
1. Display the average rating of the movies being filtered and displayed.
1. **Extra task:** For every movie you render add a button somewhere that says "Get poster". 
When clicking this button it gets the poster for the movie using this api: http://www.omdbapi.com/. You first need to get an api key! See if you can figure out how it works by yourself. If not you are always welcome to ask :)

You could also add the actors from the movie. And if you wanna go really crazy add their portrait from this api: https://www.themoviedb.org

Remember to use the promises, map, filter and reduce!

## Step 3: Hand in Homework:
Go over your homework one last time:

- Does every file run without errors and with the correct results?
- Have you used `const` and `let` and avoided `var`?
- Do the variable, function and argument names you created follow the [Naming Conventions](https://github.com/HackYourFuture/fundamentals/blob/master/fundamentals/naming_conventions.md)?
- Is your code well-formatted (see [Code Formatting](https://github.com/HackYourFuture/fundamentals/blob/master/fundamentals/naming_conventions.md))?

If you can answer yes to the above questions then you are ready to hand in the homework:
* Find the hyf-homework git repo (that you have forked from [here](https://github.com/HackYourFuture-CPH/hyf-homework)) the link will be https://github.com/YOUR-ACCOUNT/hyf-homework
* Add your homework files in the Javascript/javascript3/week8 folder
* To finish the homework post the link for your repo and the rendered index.html on your classes slack channel