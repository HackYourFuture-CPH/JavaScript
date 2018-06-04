/*
Exercise 1

Create a index.html file with two buttons. 
One with the text "Count up" and one with the text "Log in 5 seconds".
When the button with the text "Count up" is clicked it should first log out 0, then next time it is clicked it should log out 1, etc.
When the button with the text "Log in 5 seconds" is clicked it should wait 3 seconds and then console log the text
"Log in 3 seconds"
*/


/*
Exercise 2

Now we are going to fix what i could not last time. Run the javascript first when the DOM has loaded. 
First create a callback function as a variable that logs this out: "DOM fully loaded and parsed"
This callback function should be called when the DOM is fully loaded
To find what this function is called go to google! What should we search for???
*/


const url = 'https://api.github.com/users/benna100';
// Create new ajax call with the js function called XMLHttpRequest
const req = new XMLHttpRequest();
req.addEventListener('load', function (data) {
    // This in here is our callback function
    // Check our server responsecode, 200 means ok, success: https://en.wikipedia.org/wiki/List_of_HTTP_status_codes 
    if (this.status === 200) {
        const responseText = req.responseText;
    } else {
        console.log('Something is probably wrong with the url');
    }
});

req.addEventListener('error', function () {
    console.log('Server error like timeout');
});

// initializes a request with an http method
req.open("GET", url);
// Sends the request 
req.send();


/*
Exercise 3

Lets use an api to show how many people are in space right now. This is the api: http://api.open-notify.org/astros.json
3.1 First take a look at the json and explain the structure of the json. (like we did with planets)
3.2 Then create an ajax request that fetches the json and parses it into an object. 
3.3 Using the parsed object, log out the number of people in space. 
3.4 Now instead of just loggin it out, we will set the text of a div to the number of people in space. 
    Now using an index.html page, create a div for showing the number of people in space. 
    In your js select this div and set its innerhtml to that number
    CONGRATS! you have just made a webapp!
3.5 Extra: Print out the names of the astronauts aswell. 
*/


/*
Exercise 4

Find an api that interests you, either through googling or you can get inspiration from here: https://github.com/toddmotto/public-apis
Now write down how the api works. 
Try and call the api using ajax. 

*/
