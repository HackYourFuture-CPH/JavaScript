# Lesson plan
```
> Focus on having lots of in class exercises.

> DONT teach everything, let the students investigate topics on their own aswell!

> Focus on how to read documentation, google answers and google errors!!

> Teach towards the students being able to solve the homework
```

Remember to add the code you wrote in the class to the relevant class branch's class work folder. If the branch has not been created just create and push it :) If you dont have access, write to one from the core team. You can see an example below!

To find examples of what teachers have taught before go to the class branches in the classwork folder, Fx [class 07](https://github.com/HackYourFuture-CPH/JavaScript/tree/class07/JavaScript1/Week1/classwork)

If you find anything that could be improved then please create a pull request! We welcome changes, so please get involved if you have any ideas!!!

---

Promises is notoriously difficult to teach! I teach **consumption and creation of promises totally separate!** And show them that its just like with functions. There is a creation part and a comsumption part. 

First when they fully understand one part of promises, i move on! Don't overcomplicate things. Only mention the resolve function to begin with. When they get that, say that there also is a reject function. **Take as many babysteps as is possible!** Dont mention that resolve and reject can take an argument to begin with, first later explain that.

This class is a little poor on real world examples. Make a PR if you ahve any good ideas!

- Promise
  - Why do we use promises?
    - So important, the students always ask this!
    - https://stackoverflow.com/questions/39004567/why-do-we-need-promise-in-js
  - Creation
    - [Code inspiration](#promise-creation)
  - Consumption
    - [Code inspiration](#promise-comsumption)  
    - Example, call some function that returns a promise (like fetch)
  - [Exercises 1](#exercise-1) and [Exercises 2](#exercise-2)
  - Creating a function that returns a promise
    - [Code inspiration](#function-that-returns-a-promise)  
    - At my previous work we called a function `swipeCard` that sent two promises with Promise.all. One that waited for the swipe animation to finish and one that fetched data for the next card. When both of these promises were resolved we could animate in the next card. 
  - [Exercises 3](#exercise-3)
  - Chaining. Calling `.then` returns a promise
    - [Code inspiration](#reason-for-promise)  
    - Reason for promise: https://mobile.twitter.com/addyosmani/status/1097035418657144832?s=19
  - `Promise.all` - Let students investigate
  - `Promise.race`
  - [Exercises 4](#exercise-4) and [Exercises 5](#exercise-5)

At this point good coding practices is starting to get very important! Check our [coding best practices](https://github.com/HackYourFuture-CPH/curriculum/blob/master/review/review-checklist.md#javascript) and use these both when live coding but also in reviews.

## Code inspiration

### Promise creation

```js
// Warm up exercise. Guess the type, improve the students variable naming skills
// cars, car, title, getTitle, addTitle, isTitle, hasTitle, hasItem, users, year, yearIndex, user, review.

// function creation
function test() {
    
}


// function usage
console.log(test());

// Start as simple as possible:
const oneSecondTimeoutPromise = new Promise(resolve => {
    setTimeout(() => {
        resolve();
    }, 1000);
});


// Promise creation
const oneSecondTimeoutPromise = new Promise((resolve) => {
    console.log(typeof resolve);
    setTimeout(() => {
        const resolveObject = {
            name: 'benjamin'
        };
        resolve(resolveObject);
    }, 1000);
});

// HAMMER in this point: 
// When you create a new promise you give it a function that has two functions as parameters (resolve and reject). Resolve is called when everything in a promise goes well. Reject is called when something goes wrong.
```

### Promise comsumption

```js

// Promise usage
oneSecondTimeoutPromise
    .then((benjaminString) => {
        console.log('one second timeout done');
        console.log(oneSecondTimeoutPromise);
        console.log(benjaminString);
    });
    
/*
fetch('asduasd')
    .then((response) => response.json())
    .then((data) => {
    });
    */

// HAMMER in this point: 
// When you have a promise you can call two functions on that promise (.then and .catch). .then is called when the promise is resolved .catch is called when the promise is rejected. 
```

### Reason for promise

```js
// Reason for promises, callback hell

setTimeout(() => {
    console.log(2);
    setTimeout(() => {
        console.log(2);
        setTimeout(() => {
            console.log(3);
            
        }, 7000);
    }, 3440);
}, 2000);

// Practical example or difference between callback hell and .then chaining
// Here is the callback method all methods take a callback function as second parameter
getUser(userId, user => {
    getPost(user, post => {
        getComment(post, comment => {
            renderComment(comment);
        });
    });
});

// Here is the promise version. All methods return a promise (we then can call .then on)
getUser(userId)
    .then(user => getPost(user))
    .then(post => getComment(post))
    .then(comment => renderComment(comment))
});

```

### Function that returns a promise
```js
// This example could definitely be more real world! Any ideas, make a pull request!
const promise = new Promise((resolve) => {
    setTimeout(() => {
        const tea = {
            color: 'green',
            taste: 'Bitter',
        };

        resolve(tea);
    }, 3000);
});

const isThereMoreTea = false;

// This example could definitely be more real world! Any ideas, make a pull request!
function makeTea() {
    console.log('Start making tea');

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const tea = {
                color: 'green',
                taste: 'Bitter',
            };
            
            if (isThereMoreTea) {
                resolve(tea);
            } else {
                reject('We dont have more TEA!!');
            }
        }, 3000);
    });
}

console.log(makeTea());

makeTea()
    .then((returnedTeaObject) => {
        console.log(returnedTeaObject);
    })
    .catch((error) => {
        console.log(error);
    })


```

## Exercises

## Exercise 1
Lets use some promises:

1. `fetch` yes or no from this api: `https://yesno.wtf/api`. log out the answer
2. Get your battery level and if it is charging or not using `navigator.getBattery()` - use chrome browser

## Exercise 2
1. Create a promise that resolves after 4 seconds. Use this promise to log out the text 'hello' after 4 seconds
2. Create a promise that resolves with a string (you decide what the string should say) after 2 seconds. 
3. Use the promise: When the promise is resolved console.log that string
4. Now make the promise fail by rejecting it with an error message instead of resolving it, and log the error message to the console

## Exercise 3
This exercise could also be a lot more real world. If you have any ideas, please make a PR!

Create a new function that returns a promise. This function should have one parameter: `successMessage`. 
The promise should resolve after 1 second. When you resolve the promise, it should be resolved with the `successMessage` parameter. 

Call the function with an argument, assign the return of the function to a variable (what type will that have?). Use the variable to log out the `successMessage`.

Now add the possibility for the promise to also reject. Give the function a new parameter: `errorMessage`. When the promise is rejected it should be rejected with the `errorMessage` parameter.
Now reject the promise after 1 second instead of resolving it. 

give the function a third parameter: `shouldReject`. If `shouldReject` is true the promise being returned from the function should reject (with the `errorMessage` parameter) the promise. Otherwise the promise should resolve (with the `successMessage` parameter)

## Exercise 4
1. Get battery level
1. After the battery level has been gotten, fetch the movies
1. Log out the movies from [this api](https://gist.githubusercontent.com/pankaj28843/08f397fcea7c760a99206bcb0ae8d0a4/raw/02d8bc9ec9a73e463b13c44df77a87255def5ab9/movies.json)
1. Use chaining

# Exercise 5
Get battery level and the movies at the same time. Log out the movies and the battery status when both promises has been resolved. 
