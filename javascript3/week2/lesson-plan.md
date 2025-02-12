# Lesson plan

## Lesson materials
These are some examples of previously created materials by mentors that you can use yourself, or for inspiration.
- [Notion Page Handout](https://dandy-birth-1b2.notion.site/HYF-Aarhus-JS-2-Week-2-cd0c1163d0264215824dc17580c97825?pvs=4) (by [Thomas](https://github.com/te-online))

---

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

This class is a little poor on real world examples. Make a PR if you have any good ideas!

- Async/await - simple introduction focused on usage
  - Quickly recap asynchronicity
    - Ask the students what it means that some code is asynchronous
  - Practical example of async/await
  - [Exercises 1](#exercise-1)
- Promise
  - Why do we use promises?
    - So important to explain this, the students always ask this!
    - https://stackoverflow.com/questions/39004567/why-do-we-need-promise-in-js
  - Consumption
    - [Code inspiration](#promise-comsumption)
    - Example, call some function that returns a promise (like fetch)
    - [Exercises 2](#exercise-2)
  - Creation
    - [Code inspiration](#promise-creation)
    - [Exercises 3](#exercise-3) and then [Exercises 4](#exercise-4)
  - Async await
    - [Exercises 5](#exercise-5)
  - `Promise.all` - Let students investigate
  - Optional - Chaining. Calling `.then` returns a promise. Only get to here when they understand async/await and promise consumption and creation.
    - [Code inspiration](#reason-for-promise)
    - Reason for promise: https://mobile.twitter.com/addyosmani/status/1097035418657144832?s=19
  - [Exercises 5](#exercise-5) and [Exercises 6](#exercise-6)

At this point good coding practices is starting to get very important! Check our [coding best practices](https://github.com/HackYourFuture-CPH/curriculum/blob/main/review/review-checklist.md#javascript) and use these both when live coding but also in reviews.

## Flipped classroom videos

[Flipped classroom videos](https://github.com/HackYourFuture-CPH/JavaScript/blob/main/javascript3/week2/preparation.md#flipped-classroom-videos)

## Code inspiration

### Async/await - simple usage

```js
// Warm up exercise. The students has to say everything they can about a variable, ONLY from the variable name. Fx the type, what it returns, what object we could expect etc.
// cars, car, title, getTitle, addTitle, isTitle, hasTitle, hasItem, users, year, yearIndex, user, review.
```

```js
// DONT EXPLAIN WHAT ASYNC OR AWAIT DOES YET! Explain on a higher level:
// You have to write async before a function for await to work. No details for now
// await waits until we have fetched the data from the api. Or said in another way await waits until fetch has resolved with the data from the api

// write async before a function for await to work. What does it mean that something is asynchronous?
async function getAstronauts() {
  // await waits until we have data from fetch before it runs the next line. No need for callbacks 🤯
  console.log("Before we fetch data");
  const astronautsResponse = await fetch(
    "http://api.open-notify.org/astros.json"
  );
  console.log(
    "This is logged out after some time, even though the code looks synchronous! 🤯"
  );
  const astronauts = await astronautsResponse.json();
  console.log("This is logged out after some time! 🤯");
  console.log(astronauts);
  return astronauts;
}

getAstronauts();
```

### Promise comsumption

So how did the async/await example above actually work? Lets get into promises!

If you have a promise, you can call two functions on that promise. '.then' and '.catch'. When are these functions called? What does it mean that a promise is resolved or rejected?

The students should be able to answer these questions:
// Question 1: What does it mean that a promise is resolved? Which method on a promise get called?
// Question 2: What does it mean that a promise is rejected? Which method on a promise get called?
// How would you explain your mom what resolved and rejected means?

```js
fetch("http://api.open-notify.org/astros.json")
  .then((astronautsResponse) => astronautsResponse.json())
  .then((astronauts) => {
    console.log(astronauts);
  })
  .catch((error) => console.log(error));

// https://codesandbox.io/s/scrollto-promise-example-0gjp6
// If not working try chrome
scrollTo("section.features")
  .then(() => console.log("scrolling done"))
  .catch((error) => console.log(error));

// HAMMER in this point:
// When you have a promise you can call two functions on that promise (.then and .catch). '.then' is called when the promise is resolved. '.catch' is called when the promise is rejected.
```

### Promise creation - A recepy for creating your own promise

When you create a new promise you give it a function that has two functions as parameters (resolve and reject). Resolve is called when everything in a promise goes well. Reject is called when something goes wrong.

```js
// Start as simple as possible, no reject, just resolve!
const oneSecondTimeoutPromise = new Promise((resolve) => {
  setTimeout(() => {
    resolve();
  }, 1000);
});

// You can pass data in the resolve
const oneSecondTimeoutPromise = new Promise((resolve) => {
  setTimeout(() => {
    resolve("1 second has passed");
  }, 1000);
});

oneSecondTimeoutPromise.then((timeoutData) => {
  console.log(timeoutData); // '1 second has passed'
});

const orderPizzaPromise = new Promise((resolve, reject) => {
  const pizzaMakingTime = 10000;
  const didPizzaBakingSucceed = true;
  const pizza = "Macaroni pizza";
  setTimeout(() => {
    if (didPizzaBakingSucceed) {
      resolve(pizza);
    } else {
      reject("The pizza was a mess");
    }
  }, pizzaMakingTime);
});

orderPizzaPromise
  .then((pizza) => {
    console.log(`Lets eat the ${pizza}`);
  })
  .catch((error) => {
    console.log(`Lets eat the nothing`);
  });

// HAMMER in this point:
// When you create a new promise you give it a function that has two functions as parameters (resolve and reject). Resolve is called when everything in a promise goes well. Reject is called when something goes wrong.

// Compare function creation and consumption to promise creation and consumption
// function creation
function test() {}

// function usage
console.log(test());
```

### Back to async/await

So writing `async` in front of a function makes it return a promise! The keyword `await` makes JavaScript wait until that promise resolved and returns its result.

```js
async function getAstronauts() {
  try {
    const astronautsResponse = await fetch(
      "http://api.open-notify.org/astros.json"
    );
    const astronauts = await astronautsResponse.json();
    return astronauts;
  } catch (err) {
    throw "Fetchin the astronauts went wrong";
  }
}

const astronauts = getAstronauts();
```

### Function that returns a promise

```js
// This example could definitely be more real world! Any ideas, make a pull request!
const promise = new Promise((resolve) => {
  setTimeout(() => {
    const tea = {
      color: "green",
      taste: "Bitter",
    };

    resolve(tea);
  }, 3000);
});

const isThereMoreTea = false;

// This example could definitely be more real world! Any ideas, make a pull request!
function makeTea() {
  console.log("Start making tea");

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const tea = {
        color: "green",
        taste: "Bitter",
      };

      if (isThereMoreTea) {
        resolve(tea);
      } else {
        reject("We dont have more TEA!!");
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
  });
```

## Exercises

## Exercise 1

Using async await

1. `fetch` yes or no from this api: `https://yesno.wtf/api`. log out the answer

## Exercise 2

Using promises

1. `fetch` yes or no from this api: `https://yesno.wtf/api`. log out the answer
2. Try fetching a url that rejects fx `https://knajskdskj.jasdk`. Log out the error message

## Exercise 3

1. Create a promise that resolves after 4 seconds. Use this promise to log out the text 'hello' after 4 seconds.
2. Now make the promise fail by rejecting it with an error message instead of resolving it, and log the error message to the console.

## Exercise 4

Create a function that returns a promise, that you can use like this:

```js
// YesNoFail4Seconds should wait 4 seconds before it does one of the following 3 things:
// resolves with a yes
// resolves with a no
// or rejects
// Look into Math.random()
YesNoFail4Seconds()
  .then((data) => {
    console.log(`The answer is ${data}`);
  })
  .catch((error) => {
    console.log(error);
  });
```

The above example show how to consume the promise using promises. Now try consume the `YesNoFail4Seconds` using async/await

## Exercise 5

Using async await

1. Fetch the astronauts
2. After the astronauts has been fetched, fetch movies using [this api](https://gist.githubusercontent.com/pankaj28843/08f397fcea7c760a99206bcb0ae8d0a4/raw/02d8bc9ec9a73e463b13c44df77a87255def5ab9/movies.json)
3. Log out the movies

# Exercise 6

Get the astronauts and the movies at the same time. Log out the movies and the battery status when both promises has been resolved.
