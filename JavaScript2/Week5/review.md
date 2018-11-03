# REVIEW week 5

```
this review covers:
• Events
• Callbacks
• XHTTP Requests
• API calls
```

## Callbacks

- JavaScript callback functions tutorial: https://www.youtube.com/watch?v=pTbSfCT42_M&index=17&list=WL

## Review by Benjamin


Lets quickly reiterate the call stack

```javascript
let hasBoughtGroceries = false;
let hasWatchedMovie = false;

function buyGroceries() {
    hasBoughtGroceries = true;
}

function watchmovie() {
    hasBoughtGroceries = true;
}

buyGroceries();
watchmovie();
```

Lets start today off with a function that takes a function as input.
The function is just a variable.

```javascript
const nameLogger = function (number) {
    console.log('Names names and lots and lots of NAMES!!!');
}

const cityLogger = function (number) {
    console.log('Copenhagen, Silkeborg, Ry');
}


function logger(logFunction) {
    logFunction();
}

logger(cityLogger);
```

**Events**

Events in JavaScript are things like:
A timer has just finished, a user clicked a button, our page has loaded,
someone types into an input element or we have just gotten some data from a server. 
When these events happen, we usually want to add some functionality. 
Fx when a user clicks the like button (event), we want to increment the like counter and color the like button blue.
Or when someone clicks "Close cookies" (event) we want to remove the cookie div.

Lets first try to create some js that waits for 2 seconds and the console.logs out "2 seconds has elapsed!"

In JavaScript we use the word eventlistener to listen  

```javascript
setTimeout(function() {
    console.log("2 seconds has elapsed!");
}, 2000);


// Cool, now lets make a function as a variable:
const fourSecondLog = function() {
    console.log("4 seconds has elapsed!");
}

setTimeout(fourSecondLog, 4000);
```

Now lets try and log out "button clicked!" when a button is clicked.

To check if a button gets clicked we use a what is called an eventlistener.

Imagine a person listening to the click of a button and everytime he hears a click he yells out "CLICKED".

```javascript
const buttonElement = document.querySelector('button');
buttonElement.addEventListener('click', function() {
    console.log("Button clicked!");
});


const buttonClicked = function(){
    console.log("Button clicked as a variable!");
}
// Cool man! Lets try and add that function as a variable.
buttonElement.addEventListener('click', buttonClicked);
```



**Callbacks** 

Now lets learn about callbacks!
Well actually you have already made callbacks!
When you give a function to an event listener or a timer or when fetching data you are using a callback function

Lets create a callback function when someone writes in a input element
```javascript
const callback = function() {
    console.log("Someone is writing!!");
}

document.querySelector('input').addEventListener('input', callback);
```

**Ajax Requests** 

When us frontend developers want to get information about a logged in user,
get search results from a search, check if someones passwors is correct
we have to ask a server form these things. This communication between a client and 
a server happens with using ajax requests.  

```javascript
const url = 'https://api.github.com/users/benna100';
// Create new ajax call with the js function called XMLHttpRequest
const req = new XMLHttpRequest();
req.addEventListener('load', function () {
    // This in here is our callback function
    // Check our server responsecode, 200 means ok, success: https://en.wikipedia.org/wiki/List_of_HTTP_status_codes 
    if (this.status === 200) {
        const user = JSON.parse(req.responseText);
        console.log(user);
    } else {
        console.log('Something is probably wrong with the url');
    }
});

req.addEventListener('error', function () {
    console.log('Server error like timeout');
});
```
Initializes a request with an http method
```
req.open("GET", url);
```
Sends the request 
```
req.send();
```

Show the network tab in chrome and filtering for xhr


**API - Application Programming Interface**

What is an interface?
Programmers can use an api to access complex functionality in a simple way. 
Electricity socket. You just plug your appliance into the wall and it works.
We dont have to worry about the wiring or anything. The complex functionality has been abstracted away.

Examples of API's: 
- DOM document.queryselector, 
- Geolocation:navigator.geolocation.getCurrentPosition
- accelerometer, 
- facebook 
- twitter

**Web API**'s are like that, but just for getting data from a server. 
There are some funny apis to play with:
http://deckofcardsapi.com/
http://api.giphy.com/v1/gifs/search?api_key=2FuF3E9nyFeXWt3aHIfkxtKTUGn73v0w&q=smile
https://github.com/toddmotto/public-apis
This incredibly unique service generates true random numbers by measuring quantum fluctuations of a vacuum in real-time!
https://qrng.anu.edu.au/API/jsonI.php?length=1&type=uint8&#8217
https://yesno.wtf/api/

```javascript
const api_key = '2FuF3E9nyFeXWt3aHIfkxtKTUGn73v0w';
const query = 'smile'

const giphyUrl = 'http://api.giphy.com/v1/gifs/search?api_key=' + api_key + '&q=' + query;

// Create new ajax call with the js function called XMLHttpRequest

const giphyReq = new XMLHttpRequest();
giphyReq.addEventListener('load', function () {
    // This in here is our callback function
    // Check our server responsecode, 200 means ok, success: https://en.wikipedia.org/wiki/List_of_HTTP_status_codes 
    if (this.status === 200) {
        const gifs = JSON.parse(giphyReq.responseText);
        console.log(gifs);
    } else {
        console.log('Something is probably wrong with the url');
    }
});

giphyReq.addEventListener('error', function () {
    console.log('Server error like timeout');
});

// initializes a request with an http method
giphyReq.open("GET", giphyUrl);
// Sends the request 
giphyReq.send();
```
