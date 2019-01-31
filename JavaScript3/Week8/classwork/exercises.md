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
1. Get battery level
1. After the battery level has been gotten, fetch the movies
1. Log out the movies
1. Use chaining

# Exercise 4
Get battery level and the movies at the same time. Log out the movies and the battery status when both promises has been resolved. 