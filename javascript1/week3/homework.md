# Homework

## Why should i even do this homework?

Array's has lots of helper functions, that is used all the time when developing js applications. It is super helpful to be able to **manipulate an array** like **removing elements** or **adding elements** at specific indexes. Another helpful function of arrays is to know **where a specific item is** in the array.

Objects can be used for **representing data** and it can **help structure your code**. An object can fx represent a user that has a firstname, surname, profile picture and a list of friends. It is constantly used in javascript and **essential to learning the language**.

If you struggle to do this weeks homework there are a couple of things to do:

- Watch the class recording. If it for some reason is missing. Then watch these: [part 1](https://www.youtube.com/watch?v=idfGCqAItGI), [part 2](https://www.youtube.com/watch?v=cNRFY0RW5L8)
- Read up on objects and arrays [here](readme.md#objects)

## Javascript warmup

Its warmup time!

![Warm up](https://media.giphy.com/media/Cfw4WE617UgUw/giphy.gif)

---

### Item array removal

Remove the item in `names` that is equal to `nameToRemove`

Copy the code below to your homework

```js
const names = [
  "Peter",
  "Ahmad",
  "Yana",
  "kristina",
  "Rasmus",
  "Samuel",
  "katrine",
  "Tala",
];
const nameToRemove = "Ahmad";

// Write some code here

// Code done

console.log(names); // ['Peter', 'Yana', 'kristina', 'Rasmus', 'Samuel', 'katrine', 'Tala']
```

---

### When will we be there??

Write a function where you speficy your speed in `km/h` and how far you have to go in `km`. The function has to return the time it will take to arrive at your destination. The time should be formatted like this: `3 hours and 34 minutes`.

_Hint:_ For formatting your best friend is Google!

```js
const travelInformation = {
  speed: 50,
  destinationDistance: 432,
};

const travelTime = notThisFunctionName(travelInformation);
console.log(travelTime); // 8 hours and 38 minutes
```

---

### Series duration of my life

```js
const seriesDurations = [
  {
    title: "Game of thrones",
    days: 3,
    hours: 1,
    minutes: 0,
  },
  {
    title: "Sopranos",
    days: 3,
    hours: 14,
    minutes: 0,
  },
  {
    title: "The Wire",
    days: 2,
    hours: 12,
    minutes: 0,
  },
];
```

How much time of my life have i been watching series on tv? Lets find out! Calculate **how much time a tv series** have taken as a **percentage of an average lifespan** of 80 years.

Firstly change the `seriesDurations` array found above to include your favorite series. Find the duration of a series here: http://tiii.me/

Create a function that logs out the following text using the `seriesDurations` array:

```
Game of thrones took 0.01% of my life
Sopranos took 0.012% of my life
The Wire took 0.007% of my life

In total that is 0.2% of my life
```

Here is an example:

```js
const seriesDurations = [
  {
    title: "Game of thrones",
    days: 3,
    hours: 1,
    minutes: 0,
  },
];

function logOutSeriesText() {
  // write code here
}

logOutSeriesText(); // logs out the text found above
```

## Smart-ease - Back to the basics!

Smart-ease is going back to the basics. As always Smart-ease starts by helping people fix their problems. So lets venture out into the real world and see what we find:

### NOnoN0nOYes (Note taking app)

> You are sitting at a meeting. A person is presenting some interesting thought that you want to write down. You check your bag, but realise that you forgot to bring your notepad. Hmm you check the internet for an online solution. But you need to signup for them all, too bad... Maybe this could be a worthwhile problem so solve. Lets create a simple and easy to use notepad 📝

#### Save a note

The first thing we will create is the functionality to **save a note**:
Create a variable called `notes` and assign it to an empty array.
Create a function called `saveNote`. The `saveNote` has two parameters:

- `content` parameter is a string.
- `id` is a number.

The `saveNote` function should push an object to the `notes` array with the keys `content` and `id`. Here is an example

```js
const notes = [];

function saveNote(content, id) {
  // write some code here
}

saveNote("Pick up groceries", 1);
saveNote("Do laundry", 2);

console.log(notes); // [{content: 'Pick up groceries', id: 1}, {content: 'Do laundry', id: 2}]
```

#### Get a note

**Now a user can save a note**, but what if a user wants to **see a specific note**, but only remembers the id? Lets create that functionality for him:
Create a function called `getNote`. The function has one parameter called `id`. When calling this function with an id it should return the relevant note object that corresponds to the id. If no id is specified or if the id is not a number, log out an error string.
Hint: Use a for loop.

```js
function getNote(id) {
  // your code here
}

const firstNote = getNote(1);
console.log(firstNote); // {content: 'Pick up groceries', id: 1}
```

#### Log out notes

Now a user can both save and get a note. What if the user just wants to **read all his notes?** Lets also create that functionality:
Create a function `logOutNotesFormatted`. When calling the function it should log this string out for every note:
"The note with id: 1, has the following note text: "some example note"."

```js
function logOutNotesFormatted() {
  // your code here
}

logOutNotesFormatted(); // should log out the text below

// The note with id: 1, has the following note text: Pick up groceries
// The note with id: 2, has the following note text: Do laundry
```

#### Unique feature

Suddenly you get this great idea for making the note app even better!

Come up with a unique feature **you think would make this app better.** Write down the idea and see if you can implement it. If not dont worry :) If it is too hard to implement try and ask in the slack channel :)

Try an **interactive version 💻 of your code** [here](https://codepen.io/dalsHughes/pen/poJGejX). Remember to insert your code in the top of the codepen :)

### CactusIO-interactive (Smart phone usage app) _optional_

> After a long day you come home to relax. The first thing you do is find your phone and start watching some youtube. Then check facebook, and then reading some news. Suddently a hour has passed. What happened to all that time you think to yourself. Maybe we can create some program to help with this problem! What if we could help users manage their smart phone usage?

Its going to work like this: A user can add smartphone activities. Then he can see a status on how his smartphone usage is going.

#### Adding an activity

Lets create the first part of the functionality that is **adding activities.**

Create a variable called `activities` that stores all activities of the day. What type of variable would you think would make sense?
Create a function called `addActivity`. It should have three parameters: `date`, `activity` and `duration`. The `date` should be a string, the `activity` a string and the `duration` a number. To save the activity push an object that contains the date, the activity and the duration to the activities variable.

Now a user can add an activity by writing:

```js
addActivity("23/7-18", "Youtube", 30);

/*
activities should now look like this
[{
    date: '23/7-18',
    activity: 'Youtube',
    duration: 30,
}]
*/
```

Just adding activities wont help the user very much, we need to **add some functionality** to show the user how **his smart phone usage is going.**

#### Show my status

Create a function called `showStatus`. This function should use the activities variable and return a string saying the following:
"You have added 3 activities. They amount to 78 min. of usage"

```js
showStatus(activities); // will log out this "You have added 3 activities. They amount to 78 min. of usage"
```

Now what happens if we call `showStatus` and `activities` is empty? We need to take that into consideration: If `activities` is empty log out a string that says: "Add some activities before calling showStatus"

#### Usage limit

A user asks us if it is possible to **set a limit for his smartphone usage.** "Off course it is" we promptly reply!
We need to store that limit somewhere, but where and what type should this be?
So how should it work? When `showStatus` is called and the users usage is above the limit he set. Log out the following string: "You have reached your limit, no more smartphoning for you!"

Try and add some activities and call `showStatus`

#### Extra feature

Come up with one feature you think would be helpful for this program.

Optional

- Lets improve the `addActivity`, so that we dont need to specify the date, but the function automatically figures out what the date is. Check out this link: https://stackoverflow.com/a/34015511
- Improve the `showStatus` function by only showing the number of actitivies for that specific day.
- Create a function for calculating the activity a user has spent the most time on.

---

## Bonus homework

The bonus homework for this week (for those of you want an extra challenge) do the following:

https://www.codewars.com/kata/job-matching-number-1/train/javascript <br/>
https://www.codewars.com/kata/job-matching-number-2/train/javascript <br/>
https://www.codewars.com/kata/unfinished-loop-bug-fixing-number-1/train/javascript <br/>

