# Exercises week 8

## Exercise 1

Lets use some promises:

1. `fetch` yes or no from this api: `https://yesno.wtf/api`. log out the answer
1. Get your battery level and if it is chargin ot not using `navigator.getBattery()`

## Exercise 2

1. Create a promise that resolves with a message after 4 seconds. Use this promise by logging out 'hello' after 4 seconds
1. Create a promise that resolves with a message after 2 seconds.
1. Use the promise: When the promise is resolved alert the message
1. Now make the promise fail by rejecting it with an error message instead of resolving it, and log the error message to the console

## Exercise 3

Create a new function that returns a promise. This function should have one parameter: `successMessage`.
The promise should resolve after 1 second. When you resolve the promise, it should be resolved with the `successMessage` parameter.

Call the function with an argument, assign the return of the function to a variable (what type will that have?). Use the variable to log out the `successMessage`.

Now add the possibility for the promise to also reject. Give the function a new parameter: `errorMessage`. When the promise is rejected it should be rejected with the `errorMessage` parameter.
Now reject the promise after 1 second instead of resolving it.

give the function a third parameter: `shouldReject`. If `shouldReject` is true the promise being returned from the function should reject (with the `errorMessage` parameter) the promise. Otherwise the promise should resolve (with the `successMessage` parameter)

## Exercise 4

Try to "cook" something with promises. Just like with the "boiling pasta" example where step 2 is dependent on step 1, you should use promises to make step 2 wait for step 1.

You can use the example of soup:

1. Boil water.
2. Add broth/stock.

Create the functions `boilWater()`, `addStock()` and `cookSoup()`. The `boilWater()` and `addStock()` should return a promise after some time. `cookSoup()` should call the two other functions and handle the promises in the correct order. Again, look at the "boiling pasta" example for inspiration.

## Exercise 5

Try to add a `chopVegetables()` function that returns a promise. In the `cookSoup()` function, use `Promise.all` to `console.log("Add vegetables")`, once both `boilWater()` and `chopVegetables()` have resolved their promises (you wouldn't add your vegetables to the water before it is boiling or before the vegetables have been chopped).

If you finish the exercises in class, feel free to look over the homework.
