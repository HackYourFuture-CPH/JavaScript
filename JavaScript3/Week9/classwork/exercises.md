# In-class exercises

## Exercise 1
### Create a user class

The class should have 2 fields: firstName and lastName. Hint: Use `this` and `constructor`.

## Exercise 2
### Create an instance of the class

Use the `new` keyword and save the instance in a variable.

* Try to log out the variable to the console.
* Try to log out the `firstName` by accessing it on the user object.

## Exercise 3
### Create a class method

The method should be called `getFullName`, and should return the combined first name and last name of the user. Use string concatenation (`"myString1 + " " + myString2"`). Remember to use the `this` keyword to access the values on the class, e.g., `this.valueInConstructor`.

Call the `getFullName` method and log the result to the console.

## Exercise 4 - Creating a CV class

The CV that we will be making uses three classes: `Job`, `Education` and
`CV`. The `CV` class we have made for you (with some missing functionality). The `Job` and `Education` classes you need to create.

### Part 1:

- `Job` has five properties: `id`, `title`, `description`, `startDate` and `endDate` (the dates can be strings or actual `Date` objects).
- `Education` has six properties: `id`, `title`, `school`, `address`, `startDate` and `endDate`.

Create those classes.

### Part 2:

Now add the functionality for the methods in the `CV` class.

*Remember*: jobs and educations are just arrays of objects. So use your array manipulation knowledge for the add and remove methods.

```js
class CV {
  constructor(jobs, educations, email) {
    // write code here
  }

  addJob(job) {
    // add functionality here
  }

  removeJob(job) {
    // add functionality here
  }

  addEducation(education) {
    // add functionality here
  }

  removeEducation(education) {
    // add functionality here
  }
}
```

### Part 3:

Create a new `CV` object using the `new` keyword, and save it in a variable called `myCV`.

Apply the methods you have created on the `myCV` object. Create a few `job` and `education` objects and add them to your CV.

Log `myCV` to the console.

Remove a job and an education from `myCV`.

Log `myCV` to the console, again, and check that the objects were removed correctly.

### Part 4:

Add a method to the `CV` class called `renderCV()`. This method should render out the CV using HTML. Use `document.getElementById("<id>")` and `document.createElement("<element>")`, as well as `element.appendChild(<element>)` to build your HTML using JavaScript.