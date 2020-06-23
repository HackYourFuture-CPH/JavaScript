// console.log("hello2");

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
JSON keys require double quotes.
No trailing commas
In JSON, values must be one of the following data types:
a string
a number
an object (JSON object)
an array
a boolean
null
*/

const jsonString = `{"name": "benjamin", "age": 23, "hobbies": ["fishing", "swimming", {"hello": 34}]}`;
// console.log(jsonString);

const jsObject = JSON.parse(jsonString);
// console.log(jsObject);

const fishingString = jsObject.hobbies[2].hello;

// console.log(fishingString);

const user = {
  name: "benjamin",
  hairColor: "black",
};

const userJsonString = JSON.stringify(user);
// console.log(userJsonString);

fetch("https://yesno.wtf/api/")
  .then((response) => response.json())
  .then((yesNoData) => {
    console.log(yesNoData);

    // 1. Create an h1 in js
    const h1 = document.createElement("h1");
    // 2. innerHTML of the h1 to the answer from the server
    h1.innerHTML = yesNoData.answer;
    // 3. Append the h1 to the document
    document.body.appendChild(h1);
  });

fetch(
  "http://api.giphy.com/v1/gifs/search?q=funny&limit=10&api_key=nsSDZwIUEeGm9tmsr1HS5Xgd21B2jSX2"
)
  .then((response) => response.json())
  .then((gifData) => {
    console.log(gifData);
    // 1. Create an h1 in js
    const span = document.createElement("span");
    // 2. innerHTML of the span to the answer from the server
    const firtGifUrl = gifData.data[1].url;
    console.log(firtGifUrl);

    span.innerHTML = firtGifUrl;
    // 3. Append the span to the document
    document.body.appendChild(span);
  });
