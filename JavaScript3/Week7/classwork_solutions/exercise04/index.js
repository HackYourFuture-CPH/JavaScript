// Solutions to exercise 4 nr.1,2

// Solution 1 - using setInterval: 

setInterval(function () {

    fetch('https://dog.ceo/api/breeds/image/random')
        .then(response => response.json())
        .then((dogObject) => {
            document.querySelector('#img0').src = dogObject.message;
        });

}, 2000);

// Solution 2 - using recursion: 

(function getDog() {
    fetch('https://dog.ceo/api/breeds/image/random')
        .then(response => response.json())
        .then((dogObject) => {
            document.querySelector('#img1').src = dogObject.message;
            setTimeout(() => {
                getDog();
            }, 2000)
        });
})();


// Solutions to exercise 4 nr.3,4,5
// fetch a list of breeds
fetch('https://dog.ceo/api/breeds/list/all')
    .then(response => response.json())
    .then(response => {
        // Response.message is an object with key value pairs and the values are arrays.
        // We want to get the names of the keys in the object.
        // Object.keys() returns an array of keys.
        var keyArray = Object.keys(response.message);
        var firstBreed = keyArray[0];

        fetch('https://dog.ceo/api/breed/' + firstBreed + '/images/random')
            .then(response => response.json())
            .then(response => {
                // Here response.message is a string that points to a URL
                document.querySelector('#img2').src = response.message
                document.querySelector('figcaption').innerHTML = firstBreed;
            });
    });