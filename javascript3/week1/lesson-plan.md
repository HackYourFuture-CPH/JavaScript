# Lesson plan
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

- Json
  - Start of with letting the students investigate what JSON is. Pick a group and let them explain to class what JSON is. 
  - Types (string, number, object, array, boolean, null)
  - Validation https://jsonlint.com/
  - Rules: JSON names require double quotes, no trailing commas
  - `.parse` and  `.stringify` - Let students investigate what these functions do
  - Difference between js object and json file
  - [Code inspiration](#json)
  - [Exercise](#meal-ordering-website)
- Apis
  - The focus should be on consuming api's with `get` method. 
  - Give an example of an api (preferably one with an accesstoken, showing that part aswell)
  - Explain conceptually what an api is (interface that hides abstraction). Explain how paths and query parameters work. Do not show how an api is implemented. We show that in the node class. Good analogies [here](https://sidewaysdictionary.com/#/term/api) and [here](https://www.reddit.com/r/webdev/comments/en04ct/i_created_a_word_suggestions_api_to_use_on_a/fdtmj60/)
  - [Code inspiration](#apis)
- Fetch (No promise explanation! Focus on usage)
  - Focus on usage let the students copy the fetch script and use it from there. Next week promises will be explained!
  - [Code inspiration](#fetch)
  - [Exercise 1](#astronauts-in-space), [exercise 2](#dog-fan-website)

At this point good coding practices is starting to get very important! Check our [coding best practices](https://github.com/HackYourFuture-CPH/curriculum/blob/master/review/review-checklist.md#javascript) and use these both when live coding but also in reviews.

## Code inspiration

### JSON
```js

/*
JSON
JSON stands for JavaScript Object Notation
JSON is a lightweight format for storing and transporting data
JSON is often used when data is sent from a server to a web page
Typical example of json: 
https://jsonplaceholder.typicode.com/users
For validating your JSON
https://jsonlint.com/
The most important rules:
JSON names require double quotes.
No trailing commas
In JSON, values must be one of the following data types:
a string
a number
an object (JSON object)
an array
a boolean
null
*/

// A string formatted like a JSON file
const jsonExample = '{"name": "Benjamin", "age": 23}';
// This is just a string!
console.log(jsonExample);
// Cannot access a the key name of a string
console.log(jsonExample.name);
 
// Now we parse (convert) the string (that we know is valid JSON) into a workable javascript object
const parsedJavascriptObject = JSON.parse(jsonExample);
// yeah we now have a js object
console.log(parsedJavascriptObject);
// where we can access the name key
console.log(parsedJavascriptObject.name);

// We can also go the other way! Here we have an object
const javascriptObject = {
    'name': 'TwentyThree',
    'age': 23
};
console.log(javascriptObject);

// Now we convert the object back into a string
console.log(JSON.stringify(javascriptObject));

// JSON does not have to be an object, it can also be an array
console.log(JSON.parse('[1,2,3]'));
 

// create json using JSON.stringify
```

### Apis

API - Application Programming Interface
What is an interface? 

Programmers can use an api to access complex functionality in a simple way. 
Electricity socket. You just plug your appliance into the wall and it works. 
We dont have to worry about the wiring or anything. The complex functionality has been abstracted away.
Web API's are like that, but just for getting data from a server.

There are some funny apis to play with: 
- http://deckofcardsapi.com/
- https://github.com/toddmotto/public-apis

This incredibly unique service generates true random numbers by measuring quantum fluctuations of a vacuum in real-time!
https://qrng.anu.edu.au/API/jsonI.php?length=1&type=uint8&#8217
https://yesno.wtf/api/

### Fetch
```js
fetch('https://yesno.wtf/api/')
    .then(response => response.json())
    .then(yesOrNoData => {
        console.log(yesOrNoData);
        // HERE IS WHERE YOU WRITE YOUR CODE!!!!!!!!
    });
```
## Exercises

## Meal ordering website

Imagine your are running a meal ordering website.
Orders come in from the web and we need to store them in a json file.
Create a json file with two orders that contain at least these things:

- Order name
- Order id
- Price
- List of drinks
- Order extras (fx cheese, lettuce etc.)

Think about what what type the data should be saved as!

## Astronauts in space
Use [this api](http://api.open-notify.org/astros.json) to fetch how many astronauts are currently in spaces. 

Add the following text to the DOM, using the data about astronauts:

```
There are NUMBER_OF_ASTRONAUTS astronauts in space, they are:
ASTRONAUT_NAME1
ASTRONAUT_NAME2
ASTRONAUT_NAME3
ASTRONAUT_NAME4
ASTRONAUT_NAME5
```

An example with 2 astronauts could be:

```
There are 2 astronauts in space, they are:
Benjamin Hughes
Jørgen Pedersen
```

## Dog fan website
Lets create a site for dog lovers using this API: https://dog.ceo/api/breeds/image/random

1. Get a random dog image and display it in the browser
2. Get a new image every 2 sec.
3. Get the list of all breeds from https://dog.ceo/api/breeds/list/all
4. Display a random image of a breed from the list https://dog.ceo/api/breed/[BREEDNAME]/images/random
5. Display the name of the breed under the image
