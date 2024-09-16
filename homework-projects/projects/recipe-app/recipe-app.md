![](https://media.giphy.com/media/N23cG6apipMmQ/giphy.gif)

# RECIPE APP

You are a foood lover, a cooking enthusiast and you want to share your passion with the web. You aspire to build a cool recipe website as a hobby project and eventually earn a little bit on the side from it.

> [!NOTE]
> Take some time to research online for similar apps and how they look and work to gain inspiration. This is an important skill to practice as a developer because you won't always know (or be told) how to approach the design.

## Weekly specs:

### `JS2 week1` - Browser environment, DOM manipulation, DOM event listeners

Create a recipe object that has at least the id, name, description, a list of ingredients and a picture url.
Or just use the below!

```js
const recipeObject = {
  id: 1,
  title: "Gløgg",
  picture_url:
    "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Gl%C3%B6gg_kastrull.JPG/800px-Gl%C3%B6gg_kastrull.JPG",
  ingredients: [
    { NAME: "Orange zest", AMOUNT: "0.5" },
    { NAME: "Water", AMOUNT: "200 ml" },
    { NAME: "Sugar", AMOUNT: "275 g" },
    { NAME: "Whole cloves", AMOUNT: "5" },
    { NAME: "Cinnamon sticks", AMOUNT: "2" },
    { NAME: "Spice", AMOUNT: undefined },
    { NAME: "Bottle of red wine", AMOUNT: "1" },
    { NAME: "Raisins", AMOUNT: "100 g" },
    { NAME: "Slipped Almonds", AMOUNT: "50 g" },
  ],
  description: "Mix everything, heat it, and you are good to go!",
};
```

- [ ] Display a single recipe on the page using DOM manipulation.
- [ ] Implement a form to add a new recipe with a minimum of 5 ingredients.
- [ ] Optional: implement functionality to add a new ingredient to a recipe.

---

### `JS2 week2` - Array functions, Arrow function

Start with creating an array of recipe objects. Even a small one is perfectly enough, but go as big as you want!
Continue with the format of the recipe object you used last week or improve it and refactor!

- [ ] Traverse through the array of recipe objects and display all the recipe cards in a grid.
- [ ] Implement functions to manipulate the array:
- find a recipe by a provided search word to check in the recipe title.
- sort the recipe array by the amount of ingredients needed.

---

### `JS2 week3` - Callback function, Asynchronicity, Scope

- [ ] Implement a cooking timer where the time is user-picked via an input or hard-coded. The timer should alert and/or ring once the time is up.
- [ ] Implement a timer for how much time you have spent on the page.

---

### `JS3 week1` - Json, Apis, Fetch

- [ ] Follow the [API creation guide](/guides/making-your-API-guide.md) to make your own API that you will use from now on.
- [ ] Refactor your code so that you ditch the static array of objects and instead fetch the recipes data from your API.
- [ ] Implement functionality to search for an ingredient, fetch and display the relevant ingredient prices for a recipe
- [ ] Ensure all the functionality is working smoothly after refactoring.

---

### `JS3 week2` - Promises, Async/Await

- [ ] You used promise chaining last week - now rewrite the fetch in the "async await" approach.
- [ ] Use the fuunctions created in preivous week and build functionality to:
- [ ] Find a recipe by a provided search word to check in the recipe title.
- [ ] Sort the recipe array by the amount of ingredients needed.

---

### `JS3 week3` - Classes, Revision and Presentation of projects

- [ ] Rest, revise JS fundamentals, finish, and brush up your project, prepare to present and explain it.
- [ ] Make improvements to the style or functionality or add additional functionality.
- [ ] Prepare to showcase your project to external people, talk through your code and explain what you have implemented.


---

<br/>
<br/>

## Project completion checklist ✅

- [ ] I can see a page with a list of recipes displayed in a grid;
- [ ] I can see the most important details about a recipe displayed in a nice and readable way;
- [ ] I can search for recipes by title, typing in a search keyword;
- [ ] I can sort the recipe array by the amount of ingredients needed;
- [ ] I can search for an ingredient, fetch and display the relevant ingredient prices for a recipe;
- [ ] I can use a cooking timer that alerts and/or rings once the time is up;
- [ ] I can see a timer for how much time I have spent on the page.
