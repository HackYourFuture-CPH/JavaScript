![](https://media.giphy.com/media/374pcIBVEGb6g/giphy.gif)

# MEMORY GAME

You joined an online game platform startup and your task is to build one of the small classic games. <br/>
You will build a Memory Game, where a user needs to flip all the cards in a game in pairs until they find all the matching pairs. You aspire to make the game smooth and pleasant, so the user is compelled to spend more time playing it.

> [!NOTE]
> Take some time to research online for similar apps and how they look and work to gain inspiration. This is an important skill to practice as a developer because you won't always know (or be told) how to approach the design.

## Weekly specs:

### `JS2 week1` - Browser environment, DOM manipulation, DOM event listeners

You are provided with a picture and a card backside pattern picture (or pick your own).

- [ ] display a single card on the page using DOM manipulation.
- [ ] implement the functionality of flipping the card: on click, the card flips from showing the backside pattern to the picture and vice versa. Visual animation is optional and the exact look of it is up to you!

<img src="../assets/memory-game-card-flip.gif" width="250px">

---

### `JS2 week2` - Array functions, Arrow function

Start with creating an array of picture objects. Even a small one is perfectly enough, but go as big as you want! A picture object should ideally have at least an id, a name and a picture url.
Continue with the format of the picture object you used last week or improve it and refactor!

- [ ] generate a new array where each card object is added to it twice, but in a random order. Think about _doubling_ and _shuffling_ an array when you research how to complete this task.
- [ ] traverse through the new array of picture objects and display all the cards in a grid.
- [ ] include the functionality from the previous week so that each card will flip from the picture to the backside pattern and back when it is clicked.

![](/assets/memory-game-grid.png)

---

### `JS2 week3` - Callback function, Asynchronicity, Scope

- [ ] implement a counter for how many times in total you have flipped a card (one counter for all the cards). Note that you are not supposed to count clicks! The purpose is to count how many times you have _revealed_ the card picture - in other words, you are couunting player moves.
- [ ] implement a timer for how much time has passed since you first clicked on a card.
- [ ] adjust the functionality so that once 2 cards are flipped, they stay flipped for X seconds, after which they flip back down automatically.

---

### `JS3 week1` - Json, Apis, Fetch

- [ ] follow the [API creation guide](/homework-projects/guides/making-your-API-guide.md) to make your own API that you will use from now on.
- [ ] refactor your code so that you ditch the static array of objects and instead fetch the cards data from your API.
- [ ] ensure all the functionality is working smoothly after refactoring.

---

### `JS3 week2` - Promises, Async/Await

- [ ] you used promise chaining last week - now rewrite the fetch in the "async await" approach.
- [ ] implement the functionality for it to work like and actual memory game:

At least:

- You can only flip 2 cards at a time.
- If the cards match, they are removed from the DOM.
- The game reloads once all cards are removed.

At most:

- Implement the tasks listed under "At least".
- Use the counter and timer that you implemented before and stop the game when a certain count or time is reached. The time or count can be hardcoded or user-submitted via an input.

---

### `JS3 week3` - Classes, Revision and Presentation of projects

- [ ] rest, revise JS fundamentals, finish, and brush up your project, prepare to present and explain it.
- [ ] make improvements to the style or functionality or add additional functionality.
- [ ] Prepare to showcase your project to external people, talk through your code and explain what you have implemented.

<br/>
<br/>

## Project completion checklist ✅

- [ ] at first, I can see a square grid of cards "flipped down" - seeing their backside pattern;
- [ ] I can click on a card, which makes the card "flip" and reveal the picture/gif;
- [ ] I can only reaveal 2 cards at a time;
- [ ] the 2 revealed cards stay flipped for X seconds, after which they flip down again;
- [ ] if I reveal 2 matching cards, they are removed from the page;
- [ ] I can see a timer that starts once I flip the very first card in a new game;
- [ ] I can see a counter that counts how many times I have flipped a card;
- [ ] once all cards are removed, the game reloads.
