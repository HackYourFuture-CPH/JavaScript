// Solutions to exercise 4 nr.3,4,5
// fetch a list of breeds
fetch('https://dog.ceo/api/breeds/list/all')
    .then(response => response.json())
    .then(response => {
        // Response.message is an object with key value pairs and the values are arrays.
        // We want to get the names of the keys in the object.
        // Object.keys() return an array of keys.
        var keyArray = Object.keys(response.message);
        var firstBreed = keyArray[0];
        
        fetch('https://dog.ceo/api/breed/'+ firstBreed + '/images/random')
            .then(response => response.json())
            .then(response => {
                // Here response.message is a string that points to a URL
                document.querySelector('img').src = response.message
                document.querySelector('h1').innerHTML = firstBreed;
        });
});