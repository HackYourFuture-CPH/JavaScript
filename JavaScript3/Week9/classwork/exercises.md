# Part 1

## Create an object literal with a method
Come up with some example using an object literal

## Creating a Cv class

The Cv that we will be making uses three classes: `Job`, `Education` and
`Sv`. The `Sv` class we have made for you (with some missing functionality). The `Job` and `Education` classes you need to create.

### Part 1:
- `Job` has three properties: `title`, `descriptions`, `startDate` and `endDate`
- `Education` has three properties: `title`, `school`, `address`, `startDate` and `endDate`

Create those classes.

### Part 2: 
Now add the functionality for the methods in the `Calendar` class.

```js
class Cv {
    constructor(jobs, educations, email) {
        // write code here
    }

    addJob(job) {
        // Adds an event to the events array
        // add functionality here
    }

    removeJob(job) {
        // Removes an event to the events array
        // add functionality here
    }

    addEducation(education) {
        // Adds an event to the events array
        // add functionality here
    }

    removeEducation(education) {
        // Adds an event to the events array
        // add functionality here
    }

    getCvOwner() {
        // should return a promise with the user object found from this url: https://jsonplaceholder.typicode.com/users/1
    }

    renderCv() {

    }
    
}

```

### Part 3:
Apply the methods you have created on the calendar class. 

### part 4: 
To the education class add a method called getPosition. Calling this function should return the lat and lng of the address of the school.
