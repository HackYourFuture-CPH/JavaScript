# Homework

## Why should i even do this homework?
Working with json and api's is the way modern **javascript application's communicate with servers**. That can be either getting some data but also updating or creating new data. 

It is how autocomplete can receive suggestions for a search query and how infinite scroll can keep loading new posts. 

## Create your own json file
Create your own json file with something that **interests you**. Maybe that could be computers, pets, music etc.

Remember to validate the json using a tool like fx this: https://jsonlint.com/

## Find a cool api
Find a cool api and **explain how it works** and what kind of **json data** the api responds with. Is it an array, an object, a string. How is the data structure. Is it fx an array of objects or how is it structured. 

There are a few examples of apis here:
https://github.com/toddmotto/public-apis

## Weather app
Lets create a **weather app** that based on a **users location** can find the relevant weather for that user.

### Sign up for api key
Go to https://openweathermap.org/appid and **sign up for an api key**. This key we will use for getting access to the weather api. 

### First call to the weather api
We are going to be using the current weather api: https://openweathermap.org/current

To get some data from the api go to https://api.openweathermap.org/data/2.5/weather?q=copenhagen&appid=YOUR_APP_ID, where `YOUR_APP_ID` is substituted with the key you signed up for in the first step.

If you go to the [above url](https://api.openweathermap.org/data/2.5/weather?q=copenhagen&appid=YOUR_APP_ID) and see some weather json data then congrats 🎉. 

If not, try and **read the error 💻** and see if you can figure out what went wrong. Or ask in the slack group :)

### Fetch weather data from a city
Create a javascript file and an html file and import the javascript file in the html file.

**Fetch weather json data** from the api using a city a user has specified: Add an **input element** and **a button** to the html. When the button is clicked, get the text from the input (which should be a city name) and fetch the relevant weather data from that city.

Remember to show some **loading text**. What if a user **writes nothing in the input?**

### Display the data
This data should be showed in your app:
- The chosen city
- Temperature
- Icon for the weather type
- Wind speed
- How clowdy it is
- When sunrise and sunset is
- *Optional* a map showing where the city is located

You decide how the data should be displayed. You could maybe be inspired by googling for "weather app ui".

### Your feature here
Now its your time to **come up with a feature**. No matter how big or small. 

### Use my current position *optional*
Investigate the [geo location api](https://developer.mozilla.org/en-US/docs/Web/API/Geolocation_API). Add a button to your page, clicking this button will **get the users current position**. Use that position to fetch weather data from that position. 

Hint: We have to change the weather api url, so we are not using city but position. Look into the documentation!

### Save my location *optional*
Imagine if a user did not have to either write a city or click the get my position button, but could just save the location. Lets do that!

When a user has gotten a location through either the input element or the geo location api, save that location using [localstorage](https://developer.mozilla.org/en-US/docs/Web/API/Geolocation_API). Localstorage is a **way to save data** even when you close the browser. 

Now when loading the page and there is a city in the localstorage, use that to get the current weather. 

![Weather man](https://media.giphy.com/media/3ohzdJlyD2InWwbJle/giphy.gif)

## Giphy api
Create a site where a **user can search for any word**. When searching a word the application will **find a gif** using the **searched word** using the giphy api: https://developers.giphy.com/docs/
Here is how it is going to work: The user can write some text indicating the gif he is looking for, click a button and then a gif will be found (using the searched word) and the gif will be displayed to the user. 

Add an input element, where the user can specify how many gif results the user wants.

Try break this problem into **smaller problems** and write down how you are going to solve the problem **BEFORE you start coding.** 

![giphy search](assets/giphy-search.gif)

## Feedback giving time!
Find a student to give feedback using this site: https://hyf-peer-review.herokuapp.com/
The feedback should be given after the homework has been handed in preferably latest two days after.
 
To help you get started we have created some ressources about giving feedback. Find them here: https://github.com/HackYourFuture-CPH/curriculum/tree/master/review

## Hand in Homework:
Go over your homework one last time:

- Does every file run without errors and with the correct results?
- Have you used `const` and `let` and avoided `var`?
- Do the variable, function and argument names you created follow the [Naming Conventions](https://github.com/HackYourFuture/fundamentals/blob/master/fundamentals/naming_conventions.md)?
- Is your code well-formatted (see [Code Formatting](https://github.com/HackYourFuture/fundamentals/blob/master/fundamentals/naming_conventions.md))?  
- 
![check](https://media.giphy.com/media/l4EpblDY4msVtKAOk/giphy.gif) 

If you can answer yes to the above questions then you are ready to hand in the homework:<br/>
- Find the hyf-homework git repo (that you have forked from [here](https://github.com/HackYourFuture-CPH/hyf-homework)) the link will be https://github.com/YOUR-ACCOUNT/hyf-homework
- Add your homework files in the Javascript/javascript3/week7 folder
- To finish the homework post the link for your repo and the rendered index.html on your classes slack channel
---

🎉
