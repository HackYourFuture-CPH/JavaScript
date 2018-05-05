/* Exercise 1

What does these two functions return:

*/

function returnString() {
    let hello = '';

    setTimeout(function() {
        hello = 'hello';
    }, 1000);

    return hello;
}

returnString();


function returnStringCallback(callback) {
    setTimeout(function() {
        callback('hello');
    }, 1000);
}


var returnString = returnStringCallback(
    function(helloString) {
        return helloString;
    }
);



console.log(returnString);




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




/* Exercise 2 

1. First get all spaceX launches. Using this api: https://api.spacexdata.com/v1/launches and the function i have created above.

2. Then filter the successes. 

3. Take the first launch and set the innerhtml of a span to the rocket_name.

4. Using the giphy api get a url of a gif with the query text of "success". It should have a rating above 4. 

const api_key = '2FuF3E9nyFeXWt3aHIfkxtKTUGn73v0w';
const query = 'smile';
const giphyUrl = 'https://api.giphy.com/v1/gifs/search?api_key=' + api_key + '&q=' + query;

5. set the src of a img to the gif url (look for the images key in the gifs object). 

*/



getAjaxData('https://api.spacexdata.com/v1/launches', function(launches) {
    const successfulLaunches = launches.filter(function(launch) {
        return launch.launch_success;
    });

    console.log(launches);
    //successfulLaunches[0]
    const api_key = '2FuF3E9nyFeXWt3aHIfkxtKTUGn73v0w';
    const query = 'success';
    const giphyUrl = 'https://api.giphy.com/v1/gifs/search?api_key=' + api_key + '&q=' + query;
    document.querySelector('.rocket-name').innerHTML = successfulLaunches[0].rocket.rocket_name;

    getAjaxData(giphyUrl, function(gifs) {
        console.log(gifs);
        document.querySelector('.gif').src = gifs.data[0].images['preview_gif'].url;
    });
});



/* Exercise 3


1. Create an input element that takes a number from 1-6.

2. Get the number from the input value.

3. Create a ul and add list elements that contains the names of the astronauts from this api: https://api.open-notify.org/astros.json

*/

