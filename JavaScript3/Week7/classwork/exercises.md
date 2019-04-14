# Exercises

## Exercise 1

Imagine your are running a meal ordering website.
Orders come in from the web and we need to store them in a json file.
Create a json file with two orders that contain at least these things:

- Order name
- Order id
- Price
- List of drinks
- Order extras (fx cheese, lettuce etc.)


## Exercise 2
Use [this api](http://api.open-notify.org/astros.json) to fetch how many astronauts are currently in spaces. 

```
fetch('http://api.open-notify.org/astros.json')
    .then(response => response.json())
    .then((planets) => {
        console.log(planets);

        // WRITE CODE HERE
    });
```

`console.log` the following using the data you get from the api:

```
There are NUMBER_OF_ASTRONAUTS astronauts in space, they are:
ASTRONAUT_NAME1
ASTRONAUT_NAME2
ASTRONAUT_NAME3
ASTRONAUT_NAME4
ASTRONAUT_NAME5
```

An example with 2 astronauts of this could be:

```
There are 2 astronauts in space, they are:
Benjamin Hughes
Jørgen Pedersen
```

## Exercise 3
Using this api: https://thecatapi.com/
https://api.thecatapi.com/v1/images/search?breed_ids=beng&api_key=YOUR_API_KEY
1. Find some information about cats that have the breed siberian.
2. Display 3 siberian cats.
https://api.thecatapi.com/v1/images/search?breed_ids=beng

DONT DO THIS API AGAIN! Do one with no authentication.

## Exercise 4
Using this API: https://dog.ceo/api/breeds/image/random

1. Get a random dog image and display it in the browser
2. Get a new image every 2 sec.
3. Get the list aogf all breeds from https://dog.ceo/api/breeds/list/all
4. Display a random image of a breed from the list https://dog.ceo/api/breed/[BREEDNAME]/images/random
5. Display the name of the breed under the image