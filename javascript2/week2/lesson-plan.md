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

- Array functions - code with traditional function expression, no arrow keys yet!
  - Try write your own `forEach`, `map` and `filter` with the students. Shows very precisely how it works!
  - ForEach - Executes function for each item in the array, NO RETURN!
    - [Code inspiration](#foreach)
    - [Foreach homemade](#foreach-homemade)
    - [Exercises](#foreach-1)
  - Map - Changes/transforms the items in the array
    - [Code inspiration](#map)
    - [Foreach homemade](#map-homemade)
    - [Exercises](#map-1)
  - Filter - Changes the number of items in the array. Let the students investigate `filter`
    - [Code inspiration](#filter)
    - [Foreach homemade](#filter-homemade) - Get help from students to write this
    - [Exercises](#filter-1)
  - [Other example](#other-example)
- Arrow function
  - [Code inspiration](#arrow-function)
  - [Exercises](#arrow-functions)

<!---
- Code flow, using the [call stack](../../JavaScript1/Week3/readme.md#call-stack)
-->


[Listing project](#listing-project)



## Flipped classroom videos

[Flipped classroom videos](https://github.com/HackYourFuture-CPH/JavaScript/blob/master/javascript2/week2/preparation.md#flipped-classroom-videos)

## Code inspiration

### Mentors

```js
const mentors = [
    { "name": "Abed Sujan", "subjects": ['JS', 'HTML', 'CSS', 'NODEJS'], yearOfExperience: 4},
    { "name": "Ahmed Magdy", "subjects": ['JS', 'Database', 'CSS'], yearOfExperience: 1},
    { "name": "Alicia Gonzales", "subjects": ['DB', 'HTML', 'NODEJS'], yearOfExperience: 8},
    { "name": "allan Thraen", "subjects": ['REACT', 'HTML', 'CSS'], yearOfExperience: 3},
    { "name": "Anders Ravn", "subjects": ['JS', 'HTML', 'NODEJS'], yearOfExperience: 2},
    { "name": "Daniel Fernandes", "subjects": ['Database', 'HTML', 'CSS'], yearOfExperience: 9}
];

console.log(mentors);
```
### ForEach 

```js
mentors.forEach(function(mentor) {
    console.log(mentor);
    console.log(mentor.name);

    mentor.subjects.forEach(function(subject) {
        console.log(subject);
    });
});

```

### ForEach homemade

```js
function forEachHomemade(array, functionToExecute) {
    for (let i = 0; i < array.length; i++) {
        const currentItem = array[i];
        functionToExecute(currentItem, i);
    }
}

```

### Map

```js
// We are mapping/transforming the mentors array. Same size, different items.
const mentorNames = mentors.map(function(mentor) {
    return mentor.name;
});

const mentorNamesFormatted = mentors.map(function(mentor) {
    return 'Mentors name is: ' + mentor.name;
});

const mentorSummary = mentors.map(function(mentor) {
    return `Mentors name is: ${mentor.name}. He has ${mentor.yearsOfExperience} years of experience`;
});
```

### Map homemade

```js
function mapHomemade(array, functionToExecute) {
    const mappedArray = [];
    for (let i = 0; i < array.length; i++) {
        const currentItem = array[i];
        const newItem = functionToExecute(currentItem, i);
        // This is where the magic happens!!!
        mappedArray.push(newItem);
    }

    return mappedArray;
}
```


### Filter

```js
// We are mapping/transforming the mentors array. Same size, different items.
const experiencedMentors = mentors.filter(function(mentor) {
    if (mentor.yearsOfExperience > 7) {
        return true;
    } else {
        return false;
    }

    // can also be written as
    // reuturn mentor.yearsOfExperience > 7
    // Explain why!
});

// Get help from students to write this
const mentorsThatStartWithA = mentors.filter(function(mentor) {
    return mentor.name[0] == 'A'; // Missing Allan, why?? lowercase
});

```

### Filter homemade

```js
function FilterHomemade(array, functionToExecute) {
    const filteredArray = [];
    for (let i = 0; i < array.length; i++) {
        const currentItem = array[i];
        const shouldKeepItemInNewArray = functionToExecute(currentItem, i);
        // This is where the magic happens!!!
        if (shouldKeepItemInNewArray) {
            filteredArray.push(currentItem);
        }
    }

    return filteredArray;
}
```


### Arrow function

```js
function circleArea(radius) {
    return radius * 2 * Math.pi;
}

// Remove the function keyword add in arrow
const circleArea1 = (radius) => {
    return radius * 2 * Math.pi;
}

// If there is only one parameter, we can remove the paranthesis
const circleArea2 = radius => {
    return radius * 2 * Math.pi;
}

// If there is only one line in the function we can remove the curly braces and the return statement
// radius * 2 * Math.pi is AUTOMATICALLY being returned
const circleArea3 = radius => radius * 2 * Math.pi;

```


### Other example
```js
function filterMentorList(courseID) {
    const resultHtml = document.getElementById('result');

    let listHtml = '';
    listHtml += '<div> Fowad</div>';
    listHtml += '<div> Susane</div>';
    listHtml += '<div> Sara</div>';
    resultHtml.innerHTML = listHtml;
    
    console.log('courseID', courseID);
}

let modifiedMentors = mentors.map(function(mentor) {

    mentor.name = (mentor["name"].length >10)? "Mr "+ mentor.name: "Ms " + mentor.name;

    mentor.age = mentor["name"].length;
    // if(mentor["name"].length >10)
    // mentor.name = "Mr " + mentor.name;
    // else 
    // mentor.name = "Ms " + mentor.name;
    
    return mentor;

});

function filterMentorList(courseID) {
    const resultHtml = document.getElementById('result');
    let listHtml = '';

    let filteresListByCourseId = mentors.filter(function (mentor) {
        const sub = mentor.subject;
        return sub.indexOf(courseID) >= 0;
    });

    filteresListByCourseId.forEach(function (mentor) {
        listHtml += `<div>  ${mentor.name}  - ${mentor.age}  </div>`;
    });

    resultHtml.innerHTML = listHtml;
}



 function filterMentorListUsingFor(courseID){
    const resultHtml = document.getElementById('result');
    let listHtml = '';
    for(let i=0; i<mentors.length; i++){
    
        listHtml += `<div> ${mentors[i].name}</div>`;
    } 
    resultHtml.innerHTML = listHtml;
    console.log('courseID', courseID);
} 
```


## Exercises

Use this function to generate random listings

```js
/**
 * Get random integer between two numbers, found here: https://stackoverflow.com/a/7228322
 * @param {integer} min - The min number
 * @param {integer} max - The max number
 * @returns {Number} Random number between min and max
 */
function randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}


/**
 * Get an array with listing objects with random color and speed
 * @param {integer} numberOfListings - The number of listings 
 * @returns {array} Array containing the listing objects
 */
function generateListings(numberOfListings) {
    const listings = [];

    const listingType = ['House', 'Apartment', 'Shed', 'Dorm', 'Farm'];
    const listingFacilities = ['Parkering', 'Elevator', 'Altan', 'Have', 'Husdyr'];
    
    for (let i = 0; i < numberOfListings; i++) {
        const listing = {};
        const randomTypeIndex = randomIntFromInterval(0, listingType.length - 1);
        const numberOfFacilities = randomIntFromInterval(1, listingFacilities.length - 1);
        const facilities = [];
        for(let i = 0; i < numberOfFacilities; i++) {
            const randomIndexFacilities = randomIntFromInterval(0, listingFacilities.length - 1);
            const randomFacility = listingFacilities[randomIndexFacilities];
            
            if (!(facilities.includes(randomFacility))) {
                facilities.push(randomFacility);
            }
        }

        listing.type = listingType[randomTypeIndex];
        listing.facilities = facilities;
        listing.price = randomIntFromInterval(1, 10000);
        listing.hasGarden = Boolean(randomIntFromInterval(0, 1));
        listing.size = randomIntFromInterval(12, 1000);
        listing.img = `https://loremflickr.com/200/200/${listing.type}`

        listings.push(listing);
    }

    return listings;
}

generateListings(20);
```

### ForEach
- Create 37 listings and log out every listings size

### Map
- Create an array that contains all the 37 listing prices. 

### Filter 
Using the 37 listings from the previous tasks
- Create an array of cheap listings. You define what cheap means. Each item in this array should be of type object
- Create an array of expensize listings prices. Each item in this array should be of type number
- Create an array of listings that have parking. Each item in this array should be of type object


### Arrow functions
Rewrite the code above (`forEach`, `map` and `filter`) to arrow functions.


### Listing project
Imagine we have a website like https://danskebank.dk/bolig/sogning?sorter=hoejt-forbrug where a user can search for different parameters. Fx What type the listing should be, the price, size, location etc etc. 

#### Filter listings
If a user fx click on a button indicating that the user only wants listings that are of the type farm. Lets try and  imagine how we would use a function to create this functionality:

```js
const listings = generateListings(20);

const filter = {
    type: 'farm',
};

const farmListings = filterListings(listings, filter);
```

Okay, so the `filterListings` function takes a filter which is an `object`. Say the user wants farm listings that cost more than 1.500.000. 

```js
const filter2 = {
    type: 'farm',
    minPrize: 1500000,
};

const cheapFarmListings = filterListings(listings, filter2);

```

Your job is to create the `filterListings` function. The function should support these filters: type, facilities, price , hasGarden and size. Use arrow functions!


#### Render listings
Now create a function called `renderListings`. It should have one parameter: `listings`. When called the function should render the listings in an html list. How it should be rendered is up to you, but you could take inspiration from https://danskebank.dk/bolig/sogning?sorter=hoejt-forbrug
