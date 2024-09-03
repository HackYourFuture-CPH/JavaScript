![](https://media.giphy.com/media/LdOyjZ7io5Msw/giphy.gif)

# CURRENCY CONVERTER

You started working in a new cool fintech startup, and your first task is to build a simple currency converter app.
It is expected that your app will have at least these features and functionality:

- Insert a new currency rate
- List currencies and rates
- Search currencies
- Set a rate to be alerted when a currency reaches that rate
- The ‘most moving’ currency rate
- Timeout for the market open/close
- Call the currency API to receive the rates dynamically

<br/>

## Weekly specs:

### `JS2 week1` - Browser environment, DOM manipulation, DOM event listeners

- [ ] Create a form to insert a brand new currency rate from `a` to `b`.
- [ ] Create a form to covert an amount of money from `x` currency to `y` based on the rates provided.
- [ ] optional bonus: create a form to update existing currency conversion with a new rate.
      <br/>

Your currency rate object format could be something like this:

```js
{
    "timestamp": 1519296206,
    "base": "EUR",
    "date": "2021-03-17",
    "rates": {
        "USD": 1.23396,
    [...]
    }
}
```

The above would be how a brand new currency rate could look like (the first task).
Then, after an update (the bonus task) it could look something like this:

```js
{
    "timestamp": 1519296206,
    "base": "EUR",
    "date": "2021-03-17",
    "rates": {
        "USD": 1.23396,
        "GBP": 0.882047,
    [...]
    }
}
```

---

### `JS2 week2` - Array functions, Arrow function

Start with creating an array of currency rate objects. Even a small one is perfectly enough, but go as big as you want!
Continue with the format of the object you used last week or improve it and refactor!

- [ ] List: Traverse through your array of the currency rate objects, and display them in a grid of items containing all the relevant details.
- [ ] Implement a function to find a specific currency rate, searching by the currency `from` or `to`. <br/>
      Basically, it is just a search function! With a twist, though, because you have both the `from` and the `to` fields.
      As a user, I want to find a specific rate, but I am too lazy to scan through all the rates with my eyes, I want to be able to type in and search!

---

### `JS2 week3` - Callback function, Asynchronicity, Scope

- [ ] Implement a timeout to show an announcement when the market open or/and close. The market opens at 9AM and closes at 5PM local time.

- [ ] optional bonus:
      a. Implement a watcher to periodically check a specific currency conversion and alert the user when the value reaches a speicfic point. Let's say the user is interested in converting USD to Danish kroner but the rate today is very bad, 1 USD is 5 DKK. We wan to alert the user when 1 USD is 7 DKK so the user can convert with maximum gain
      b. Watch currency updates and show a banner with the hotest currency exchange rate. I.e., currency conversion reaching the double value.

---

### `JS3 week1` - Json, Apis, Fetch

- [ ] Follow the [API creation guide](/guides/making-your-API-guide.md) to make your own API that you will use from now on.
- [ ] Refactor your code so that you use the currency rates dynamically from your API instead of the static array of objects.
- [ ] Implement functionality to search for a specific currency.
- [ ] Ensure all the functionality is working smoothly after refactoring.

---

### `JS3 week2` - Promises, Async/Await

- [ ] You used promise chaining last week - now rewrite the fetch in the "async await" approach.
- [ ] Testing. Implement a test to ensure that the application will work as expected after the refactoring.

---

### `JS3 week3` - Classes, Revision and Presentation of projects

- [ ] Rest, revise JS fundamentals, finish, and brush up your project, prepare to present and explain it.
- [ ] Make improvements to the style or functionality or add additional functionality.
- [ ] Prepare to showcase your project to external people, talk through your code and explain what you have implemented.

---

<br/>
<br/>

## Project completion checklist ✅

- [ ] I can insert a new currency rate
- [ ] I can see a list of all currencies and rates
- [ ] I can use the coverter to convert a currency and see the result
- [ ] I can search currencies to find a specific one
- [ ] I can set a rate to be alerted when a currency reaches that rate
- [ ] I can see an indicator for the market open/close
- [ ] I am using the currency API to receive the rates dynamically
