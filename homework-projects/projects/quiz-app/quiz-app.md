![](https://media.giphy.com/media/y1JYvLe9fFfpK/giphy.gif)

# QUIZ APP

The most popular quiz app has become very expensive... so there came a startup that aspires to build a new one that will be better, cheaper to use and more fun!
You join the startup as a developer and your task is to build a nice prototype of the product while the rest of the product team works to define what the final version will be.

## Weekly specs:

### `JS2 week1` - Browser environment, DOM manipulation, DOM event listeners

- [ ] create a form to insert a quiz question. It should take a question and 4 options for answers. There should be a way to mark which answer is correct in the form, but you should only be able to select one correct answer.

- [ ] implement one of the two (or both!):

a. add a button that randomizes the order of the 4 option inputs once they have been filled in.

b. color the input for the "correct" answer option in green and the "wrong" ones in red. Make sure it's still readable.

- [ ] optional bonus: make sure the question is not longer than 140 characters.

The format of the object of the quiz question, for example, could be something like this:

```js
const quizQuestion = {
  id: 1,
  question: "What is the capital of Denmark?",
  options: [
    { text: "Berlin", isCorrect: false },
    { text: "Copenhagen", isCorrect: true },
    { text: "Madrid", isCorrect: false },
    { text: "Rome", isCorrect: false },
  ],
  explanation: "Copenhagen is the capital of Denmark.",
};
```

---

### `JS2 week2` - Array functions, Arrow function

Start with creating an array of quiz question objects. Even a small one is perfectly enough, but go as big as you want!
Continue with the format of the question object you used last week or improve it and refactor!

- [ ] save the quiz question into an array when the form is submitted.

- [ ] show a list of all quiz questions added to the array below the form. It should show the questions, the 4 options but not which one is correct. Add a button with the functionality to reveal which is the correct answer for each question.

- [ ] build a function to filter the questions by searching the content of the question.

---

### `JS2 week3` - Callback function, Asynchronicity, Scope

- [ ] add inputs for 2 player names and a button to start a quiz. When the quiz starts, player names are displayed with their collected points (0 to begin with).

- [ ] implement one of the two (or both!):

a. next to each player's name, add two buttons [correct] and [wrong]. When the "correct" button for a player is pressed, they score 1 point, when the wrong button is pressed, the _other_ player scores one point.

b. add number inputs for the player points and use the browser's arrow buttons on the input fields to increase/decrease the points.

- [ ] optional bonus: play a sound and end the quiz game when one of the players has reached 10 points.

---

### `JS3 week1` - Json, Apis, Fetch

- [ ] follow the [API creation guide](/guides/making-your-API-guide.md) to make your own API that you will use from now on.

- [ ] refactor your code so that you ditch the static array of objects and instead fetch the initial questions data from your API.

- [ ] ensure all the functionality is working smoothly after refactoring.

- [ ] add alphabetical sorting of the questions and random sorting of the questions and let the user choose.

---

### `JS3 week2` - Promises, Async/Await

- [ ] you used promise chaining last week - now rewrite the fetch in the "async await" approach.

- [ ] add a search input to filter the questions by searching the content of the question - use the function that you have build before. When you click the search button, display only the questions where the search input is included in the question text.

---

### `JS3 week3` - Classes, Revision and Presentation of projects

- [ ] rest, revise JS fundamentals, finish, and brush up your project, prepare to present and explain it.
- [ ] make improvements to the style or functionality or add additional functionality.
- [ ] Prepare to showcase your project to external people, talk through your code and explain what you have implemented.

---

<br/>
<br/>

## Project completion checklist ✅

- [ ] I can see a form to submit a question at the top of the page and a list of questions bellow it;
- [ ] when submitting a new question, I can see an indication where to submit the correct answer;
- [ ] the questions are displayed in a nice and readable way, and I can see a button to reveal the right answer for each question;
- [ ] I can sort the questions alphabetically;
- [ ] I can use search and get the questions wher my search keyword is included in the question text;
- [ ] there is a functionality to submit two player names;
- [ ] it is possible to interact with player scores.
