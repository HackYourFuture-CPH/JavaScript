# REVIEW JavaScript week 6

## Reiteration of the call stack

Lets first reiterate the call stack: So every time we call a function we push that function to the call stack. When we have finished the function we pop it from the call stack. To see the call stack in action we can do this little trick:

If we force a javascript error after the foo has been pushed to the call stack, we can actually see the current javascript call stack. This helps us developers figure out where things went wrong in order for us to fix a problem. 

```js
// This is the call stack
function foo() {
    // function foo pushed to call stack
    throw new Error('Error error!');
    // function foo poped from the call stack
}

function bar() {
    // function bar pushed to call stack
    foo();
    // function bar poped from the call stack
}

function baz() {
    // function baz pushed to call stack
    bar();
    // function baz poped from the call stack
}

baz();
```

## Async vs sync

In this article there is a really good analogy and description of the differences between async and sync https://www.hongkiat.com/blog/synchronous-asynchronous-javascript/

Here is the analogy in a quick writeup:

There is a a man called mr. X. You can call him with any problem and he will answer your right away. He picks up the phone and answers RIGHT away. This is like synchronous js code. It gets run right away, no waiting. 

Now mr. X gets lots of calls. Therefore he hires a person to take his calls. This guy passes on a message to mr x once he is completely free. So now when you call mr. X you leave his assistant a message and then wait for his assistant to call back. Once Mr x is done with all his other calls his assistant call you back with mr x's answer. This is like asynchronous js code. We now have to wait for our answer. You ask for some task to get done with a callback function, fx log "hello" after one second. Once one second has elapsed javascript runs your callback function.


### Synchrounus

This code runs from top to bottom, one line at a time. When it is done with a task it just starts with the next one right away.

```js
console.log('Before');

for (let i = 0; i < 10; i++) {
    console.log(i);
}

console.log('After');
```




### Asynchrounus

This code is NOT run from top to bottom. It will first log "First log" then it will setup a timer for 5 seconde, then it will log out Second log. And then after 5000 seconds it will call the callback function that will log out "In timeout".

```js
console.log('First log');

setTimeout(function() {
    console.log("In timeout");
}, 5000);

console.log('Second log');
```


### Asynchrounus code in javascript

So how does javascript handle asynchronous code? Here is an example with setTimeout:

First setTimeout is added to the call stack. The call stack hands it over to the browser with the callback function given in the setTimeout function. Now the browser via web apis handle the timing. The setTimeout is popped from the call stack. 
When the web api is done with the timer it sends the callback to the eventloop. The eventloop then works like this: if the call stack is empty take the first thing in the event loop and add it to the call stack. When it is added to the call stack it is javascript call stack business as usual. Call the function and pop it from the call stack.  

This is perfectly visualised here: http://latentflip.com/loupe


### So why do we have async code in js?

While javascript is performing a task (has functions on its call stack) it cannot do anything else. That means that a user cannot click a button, write anything in an input element, close a modal etc. 

Imagine requesting data with javascript if js was not async: While the we are fetching our data, the user can do nothing. It could take everything from less that a second to minutes. This is a problem!

The solution to this is async code. So when we request some data via ajax, the waiting for a response part is actually handled in the browser (just like setTimeout was). Therefore javascript has got nothing on its call stack and the user can click button and close modals etc while waiting for a request. Yay :)


Try visualise how this function works in js try maybe use http://latentflip.com/loupe to help you.

```js
function getAjaxData(url, callback) {
    // Create new ajax call with the js function called XMLHttpRequest
    const request = new XMLHttpRequest();
    request.addEventListener('load', function () {
        // This in here is our callback function
        // Check our server responsecode, 200 means ok, success: https://en.wikipedia.org/wiki/List_of_HTTP_status_codes 
        if (this.status === 200) {
            callback(JSON.parse(request.responseText));
        } else {
            console.log('Something is probably wrong with the url');
        }
    });

    request.addEventListener('error', function () {
        console.log('Server error like timeout');
    });

    // initializes a request with an http method
    request.open("GET", url);
    // Sends the request 
    request.send();
}

getAjaxData('http://api.open-notify.org/astros.json', function(astronautsInSpace) {
    console.log(astronautsInSpace);
});
```



## APIs 2 

Lets first take a look at a url structure: Lets use this fake url i have created: www.something.dk/guide/article-1?section=social-media

"www.something.dk" is called the host. "/guide/article-1" is called the path. "?section=social" this is called the query string. It is possible to pass multiple query strings like: section=social&author=james

So what are query strings used for? Query strings are used to give additional information to the site you are accessing.  
It is a way to pass data to the server. In web apis Query strings are typically used for controlling/specifying the data you want.

Lets look at some examples: 
```
• https://youtu.be/OvNC7Rs47-U?t=54m42s Using query strings for controlling start time of a video 
• https://www.momondo.dk/flightsearch/?Search=true&TripType=2&SegNo=2&NA=false&currency=DKK Query string used for triptype, currency and some other things
```



Now lets try and use query strings to create get gifs from the giphy api that limits the number of gifs:

```js
function getGifs(gifSearchQuery) {
    const api_key = '2FuF3E9nyFeXWt3aHIfkxtKTUGn73v0w';
    const query = gifSearchQuery;
    const giphyUrl = 'http://api.giphy.com/v1/gifs/search?api_key=' + api_key + '&limit=5&q=' + query;

    const getGifs = function(gifs) {
        console.log(gifs);
    }

    getAjaxData(giphyUrl, getGifs);  
}

getGifs('smile');
```
