# The fantastical, funny, weird, superduper and awesome HYF quiz

Today we are going to be creating an interactive quiz tool! So what is an interactive quiz tool? Well its an interactive webapp where users can answer questions and see how well they did. 

You will in pairs you will create the quiz tool using all the cool skills you have learned in all of the javascript classes. Now is your time to shine :D

## The task

### The html file
You will use the html file i have already written. It has some styles, a js file, a confetti library and a main.js where you will be writing your javascript. 
The html contains a some different tags. The ones you will be working with are the following:
* The p tag will the class loading
* The ul tag with the class questions
* The button inside the form
* The canvas tag with the class confetti

### The main.js file
The quiz data you will get from this url: https://gist.githubusercontent.com/benna100/c9c38faebea1526fb4e6b6b896a1dc94/raw/9468c385bfb422620676b3669509b0a59b326c42/quiz-questions.json

Lets create a class for a `Quiz`:

The `Quiz` class should in its constructor function have one paramter: `name`. 

Now actually create a `Quiz` instance. 

This quiz class should have some different methods. You have to give the methods names i just write the requirements here:
Remember! When you have added a method, test if it actually works. Do this for every method you add. Test it, test it and test it.


#### Fetch the questions (method 1)
This method returns a promise that resolves with the questions array gotten from the above [url](https://gist.githubusercontent.com/benna100/c9c38faebea1526fb4e6b6b896a1dc94/raw/9468c385bfb422620676b3669509b0a59b326c42/quiz-questions.json).


#### Render the questions (method 2)
This method should have an array of question objects as a parameter. A question object contains the following properties: `title`, `content`, `options` and `difficulty`. The `title` and `content` properties should be displayed inside a `li`. That `li` element should be appended to the `ul` with the classname questions. 

Okay, so far so good. The user can now see the title and the content of the questions. But how should the user choose an answer? For the user to actually answer the individual questions we use the options array inside the question object. For the user to choose an option for a question use a `select` tag. See how the `select` tag works here: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/select

So now we have the questions rendered in a list and the user can select an option for each question that he thinks is the right answer, AWESOME!

#### Show the score (method 3)
The last thing a user needs to be able to do is get his score. So when a user clicks the button we should show how many questions he got right out of the total number of questions like this: "Congratulations you got 5/7 question right, well done". 
To figure out how many questions were correctly answered we need to do the following: Find the selected options in the select tag that is also the correct answer. Finding the selected options can be done through a selector (google that!). For indicating that an option is the correct answer, add a data attribute to the element, so the rendered element will look like this: `<option data-is-answer="false"></option>`

Now we can string a selector togther that selects the options that have the `data-is-answer` html attribute. 

To really show the user how well he did lets add in some confetti.
To see how the confetti library (i already loaded) works look here: https://github.com/Agezao/confetti-js

### Requirements
* When data fetched remove the loading p tag
* Render the questions in a list with the options rendered in a select tag
* When the user clicks the button, calculate the score. Render this score to the user and show some confetti 🎉

## Recomended order of implementation
You can off course write the code in the order you want to, but here is a suggestion:
1. Create the `Quiz` class. 
2. Create the fetching questions method.
3. Create the render questions method. Render the questions with the title and the content in a li element and append these questions to the ul.
4. Update the render questions method. Inside of the individual li elements add the select tag with the given options for the question.
5. Add a click listener to the button. When a user clicks it just log out 'user clicked button'.
6. Create the get score method. When a user clicks the button calculate the score using the method. 
7. Render the score to the user. 

If you have any questions please ask and if you have more time try adding extra features like. 
* Let the user choose what difficulty the rendered questions should be. 
* Dependening on the score a user gets, show specific text to that user. 
* Create your own quiz here: https://gist.github.com/ Adding a json file in the same format. Create a new quiz using the factory function!
* And be creative!!!11!!

![Stay creative](https://media.giphy.com/media/3oEduXdm2gjnrsJBOo/giphy.gif)

That should be it :)
