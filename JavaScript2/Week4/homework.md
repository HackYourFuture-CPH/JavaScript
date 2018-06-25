# Homework Week 4

>[Here](/Week4/reading.md) you find the readings you have to complete before the fifth lecture.

## Step 1: Lets get real comfortable with map, filter and sort.

Use the carGenerator function to generate 10 cars. The file with the function is here: 
[https://github.com/HackYourFuture-CPH/JavaScript/blob/organizedJSModules/JavaScript2/Week4/code/carGenerator.js](https://github.com/HackYourFuture-CPH/JavaScript/blob/organizedJSModules/JavaScript2/Week4/code/carGenerator.js)

You call it like this: 
generateCars(10);


Create the following arrays:

- 1.1: Cars with speeds between 30 and 60

- 1.2: The makes of the cars that are not lightyellow, so the array is going to look like this: ['BMW', 'Fiat'] etc

- 1.3: Lets change the cars array so it can be read by a danish person. Return an array of objects where the key in the object called speed is called fart (danish for speed), the make is called maerke and the color is called farve. The output will look kind of like this:

```js
[
    {
        maerke: 'Volvo',
        fart: 45,
        farve: 'lightYellow',
    }
];
```


## Step 2: 
Give yourself (or your neighbour) a little tap on the shoulder, you've made it to JS2! :muscle:


## Step 3: Some Challenges
Let's practice working with Objects and Arrays. Go to FreeCodeCamp and complete all challenges under "Object Oriented and Functional Programming" and the _first four challenges_ under "Basic Algorithm Scripting", up until 'Find the longest word in a string.'
https://www.freecodecamp.org/challenges/store-multiple-values-in-one-variable-using-javascript-arrays

## Step 4: Custom challenge 
1. Go to https://api.github.com/orgs/HackYourFuture/repos, you will see a list of the repositories our HYF organization has (yes it's a lot of JSON).
2. You can copy the JSON and put it in a string at the top of your `.js` file use this tool for that: https://jsonformatter.org/. Print the name of the 3rd repository in the array to the console.
3. Make a `<ul>` with a `<li>` for each repository name (just like you did with the books in the previous assignment).
4. It should only display the modules that are actually being used in the curriculum at the moment, you of course know which those are, but if you need a reminder you can find them in our [curriculum overview](https://github.com/HackYourFuture/curriculum).
5. Use CSS to divide the page in two columns. The left column will have a list of the names for repository. The right column should have the following information about each repository: the number of `stargazers`, the number of `watchers`, the number of `forks`, the `language` of the repository.
6. place the `avatar_url` (logo) of our organization somewhere on a nice place in your page.

## Handing in

```
How to hand in your homework:
• Create a new repository "hyf-javascript2". Also create a new folder "week1" inside this repository. 
• Upload your homework files inside the week4 folder and write a description for this “commit”.
• Your hyf-javascript2/week4 should now contain the files of your homework.
• Post the link on the slack channel and in the Google Form
```

