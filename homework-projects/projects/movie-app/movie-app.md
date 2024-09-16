![](https://media.giphy.com/media/KZe02gpoAj4yVjxKQt/giphy.gif)

# MOVIE APP

You joined a startup that has the ambition to build the best new movie streaming platform! <br/>
Your taks will be to build a simple prototype to showcase the look of the platform and some simple functionality. <br/>
Your way to impress is to not only build a nice-looking main movie list page, but to also include some interesting features that the competitors do not have!

> [!NOTE]
> Take some time to research online for similar apps and how they look and work to gain inspiration. This is an important skill to practice as a developer because you won't always know (or be told) how to approach the design.

## Weekly specs:

### `JS2 week1` - Browser environment, DOM manipulation, DOM event listeners

Use a movie object with details such as id, title, description, year, main actors, etc.

It could be something like this:

```js
 {
      id: 1,
      title: 'Interstellar',
      description:
        'The adventures of a group of explorers who make use of a newly discovered wormhole to surpass the limitations on human space travel and conquer the vast distances involved in an interstellar voyage.',
      movie_year: 2014,
      director: "Christopher Nolan",
      actors: ["Matthew McConaughey", "Anne Hathaway", "Jessica Chastain", "Michael Caine", "Casey Affleck", "Mackenzie Foy", "John Lithgow", "Ellen Burstyn", "Matt Damon"],
      poster_url:
        'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg',
      price: '120.00',
    },
```

Add whatever properties you think are relevant and that you want to display as the information on your future movie website!

- [ ] design and implement the layout of the movie card via DOM manipulation.

- [ ] via DOM manipulation, implement one of the two (or both!):<br/>
      a. submitting and displaying a comment about the movie. Implement an imput under the movie and a functionality to display the submitted comment.<br/>
      b. rating the movie in a star-rating format and displaying the submitted rating.
      <br/>

<img src="../assets/movie-app-star-rating.gif" width="250px"/>

---

### `JS2 week2` - Array functions, Arrow function

Start with creating an array of movie objects. Even a small one is perfectly enough, but go as big as you want!
Continue with the format of the movie object you used last week or improve it and refactor!

- [ ] traverse the movie array and display all the movies on the page in a grid via DOM manipulation.
- [ ] manipulate the movie array, implementing these functions:
- a function for searching for a provided keyword in the movie title;
- a function for sorting the movie array by one or a few selected properties.
- [ ] optional: as you might guess, you will later use these functions to implement searching and sorting functionality, so feel free to add any other array-manipulation functions of your choice!

---

### `JS2 week3` - Callback function, Asynchronicity, Scope

Here you will develop some features that will differentiate your movie platform from the competition!

- [ ] implement a timer where you can set a time for how much time you give yourself to pick a movie to watch, the timer alerts or rings when then time is over.
- [ ] implement a timer to show how long you have spent on the page.

---

### `JS3 week1` - Json, Apis, Fetch

- [ ] follow the [API creation guide](/guides/making-your-API-guide.md) to make your own API that you will use from now on.
- [ ] refactor your code so that you ditch the static array of objects and instead fetch the movies data from your API.
- [ ] ensure all the functionality is working smoothly after refactoring.

---

### `JS3 week2` - Promises, Async/Await

- [ ] you used promise chaining last week - now rewrite the fetch in the "async await" approach
- [ ] fit and apply one (or all) of your functions from JS2 week2 to manipulate the displayed movies:

- a function to search a movie by title that a user submits via an input, displaying only the matching movies.
- a function to sort the movies by a property selected via a dropdown.
- a function to filter the movies by a specific constraint submitted by the user via an input (or hardcoded), only displaying the relevant movies.

---

### `JS3 week3` - Classes, Promises advanced

- [ ] rest, revise JS fundamentals, finish, and brush up your project, prepare to present and explain it.
- [ ] make improvements to the style or functionality or add additional functionality.

---

<br/>
<br/>

## Project completion checklist ✅

- [ ] I can see a page with a list of movies displayed in a grid;
- [ ] I can see the most important details about a movie displayed in a nice and readable way;
- [ ] I can either submit a comment to a movie or a star rating or both;
- [ ] I can search for movies by titling, typing in a search keyword;
- [ ] I can sort the movies by at least one specific property;
- [ ] I can filter the movies by at least one user-submitted or hardcoded constraint (f.x. movies older than year X).
