/* Async vs sync */

/* Lets first reiterate the call stack */

// This is the call stack
function foo() {
    throw new Error('Error error!');
}

function bar() {
    foo();
}

function baz() {
    bar();
}

baz();



/*
Mr. X Answers your call immideately with a task. He picks up the phone 
and answers RIGHT away. This is synchronous. 

Now he gets lots of calls. Therefore he hires a person to take his calls.
This guy pass on a message to mr x once he is completely free. 
So now when you call him you leave him a message and then wait for him
to call back. Once Mr x is done he call you back.

*/


/* Now lets create an example of soemthing sync */


// Synchrounus

console.log('Before');

for (let i = 0; i < 10; i++) {
    console.log(i);
}

console.log('After');



// Asynchrounus

console.log('First log');

setTimeout(function() {
    console.log("In timeout");
}, 5000);

console.log('Second log');




/*

Add setTimeout to call stack. The call stack hands it over to the browser with a callback and the browser (webapis) that handles the timing
pop the setTimeout from the call stack. 
Now when the webapi is done it gives the callback to the eventloop. 
The eventloop is very simple: if the call stack is empty take the first thing in the task queue and add it to the call stack. 
Now it adds the callback on the stack. 

*/


/*

var test = function () { 
    console.log("hello");
};

$.on("button", "click", test);
*/



/*


Why do we have async.

Imagine waiting for all the requests. That would take a lot of time. 
But this is how python works.
Sync would be sending one request at a time and waiting for them to respond.
Not good in browsers cause if we had to block the call stack people could not 
do anything while waiting.
Solution: ASYNC.

Event loop:
Async we send all at once and then we wait for their response

Javascript can only do one thing at a time, therefore we use the web apis.


*/

// Explain this function

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



getAjaxData('http://api.open-notify.org/astros.json', function(data) {
    console.log(data);
});

// Do exercise 1



/* APIs 2 */


/*

Lets first take a look at a url structure:

www.something.dk is called the host

/guide/article-1 is called the path

?section=social-media this is called the query string

So together: www.something.dk/guide/article-1?section=social-media

It is possible to pass multiple query strings like: section=social-media&author=james

so what is is used for? Query strings are used to give additional information to the site you are looking. 
It is a way to pass data to the server. In web apis Query strings are typically used for controlling/specifying the data you want.  

Lets take some examples: 

https://youtu.be/OvNC7Rs47-U?t=54m42s

https://www.momondo.dk/flightsearch/?Search=true&TripType=2&SegNo=2&SO0=CPH&SD0=LHR&SDP0=15-12-2017&SO1=LHR&SD1=CPH&SDP1=17-12-2017&AD=1&TK=ECO&DO=false&NA=false&currency=DKK

https://www.airbnb.dk/s/Copenhagen/homes?place_id=ChIJIz2AXDxTUkYRuGeU5t1-3QQ&refinement_path=%2Ffor_you&allow_override%5B%5D=&s_tag=e5PWL3gW

Creating a query string that limits

Lets try and use query strings to create get gifs from the giphy api that limits the number of gifs:

*/


function getGifs(gifSearchQuery) {
    const api_key = '2FuF3E9nyFeXWt3aHIfkxtKTUGn73v0w';
    const query = gifSearchQuery;
    const giphyUrl = 'http://api.giphy.com/v1/gifs/search?api_key=' + api_key + '&q=' + query;

    const getGifs = function(gifs) {
        console.log(gifs);


        // how would we now get astronauts?
        getAjaxData(giphyUrl, getGifs);  
    }

    getAjaxData(giphyUrl, getGifs);  
}

getGifs('smile');


/* Do exercise 2 */

/* Getting input value */

//Show them the difference between type=email, number, text, password

// Lets just first attach an eventlistener that gets the current written value of the input 

const inputElement = document.querySelector('input');
inputElement.addEventListener('input', function() {
    console.log(inputElement.value);
});


const buttonElement = document.querySelector('button');
buttonElement.addEventListener('click', function() {
    console.log(inputElement.value);

    getGifs(inputElement.value);
});


// Now lets create a button!



// Do exercise 3


