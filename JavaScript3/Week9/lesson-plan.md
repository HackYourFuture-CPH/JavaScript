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

Start VERY simple. Just a class that has few fields, no methods. Explain the diff from object to class. Explain instance etc. When they get that move on to class methods. **Only teach extends if they really are on top of things** otherwise just get them comfortable with classes :) if you can repeat a bit of promise, maybe when working with class that would be great.

- Classes
  - Constructor
    - [Code inspiration](#constructor)
    - [Exercise](#create-a-user-class)
  - Instance
    - [Code inspiration](#instance)
    - [Exercise](#create-an-instance-of-the-class)
  - Methods
    - [Code inspiration](#methods)
    - [Exercise](#create-a-class-method)
  - `this`
    - Refers to the instance of the class. Do go into too much detail and edge cases. Avoid mentioning `bind`, `apply`, etc unless you find it super important, the students will just forget it anyway!
  - [Exercise](#creating-a-cv-class)
  - Extend (Only if time!)

At this point good coding practices is starting to get very important! Check our [coding best practices](https://github.com/HackYourFuture-CPH/curriculum/blob/master/review/review-checklist.md#javascript) and use these both when live coding but also in reviews.

## Code inspiration

### Constructor

```js
class Comment {
    constructor(username, content, time) {
        this.username = username;
        this.content = content;
        this.time = time;
    }
}
```

### Instance
```js
const comment1 = new Comment('test', 'post', new Date());
```


### Methods
```js
class Comment {
    constructor(username, content, time) {
        this.username = username;
        this.content = content;
        this.time = time;
    }

    // Get help from students to write this method!
    getTimeSincePost() {
        return new Date().getTime() - this.time.getTime();
    }

    // Get help from students to write this method!
    hasSwearWord() {
        const swearWords = ['crap', 'damn'];
        const postWords = this.content.split(' ');
        const hasSwearWord = swearWords.find(swearWord => postWords.includes(swearWord));
  
        return Boolean(hasSwearWord);
    }
}

const comment1 = new Comment('test', 'post', new Date());

console.log(comment1.hasSwearWord())
comment1.content = 'shit crap'
console.log(comment1.hasSwearWord())
setTimeout(() => {
  console.log(comment1.getTimeSincePost())
}, 1000);

// data
// username, content, time

// functionality
// getTimeSincePost, hasSwearWord


```


### Class post
```js
class Post {
    // setup
    constructor(username, content, postTime, likes, comments, shares) {
        this.username = username;
        this.content = content;
        this.postTime = postTime;
        this.likes = likes;
        this.comments = comments;
        this.shares = shares;
    }

    addLike(username, time) {
        const like = {
            username: username,
            time: time
        };

        this.likes.push(like);
    }

    addComment(username, content, time) {
        this.comments.push(new Comment(username, content, time));
    }

    doShare() {

    }

    save() {

    }

    logThis() {
        console.log(this.username);
    }
}

const post1 = new Post('benna100', 'asd', '10/02/1019', [], [], []);
const post2 = new Post('habsdhjd', 'asdajhdb', '10/02/1019', [], [], []);

post1.addLike('bennaasdasd', '14:07');
console.log(post1.likes);

post1.addComment('ugg', 'Great post', '14:16');
console.log(post1.comments);

post1.logThis();
post2.logThis();

```


## Exercises

### Create a user class
The class should have 2 properties: firstName and lastName. Hint: Use `this` and `constructor`.


### Create an instance of the class
Use the `new` keyword and assign the instance in a variable.

* Try to log out the instance of the `User` to the console.
* Try to log out the users `firstName`


### Create a class method
The method should be called `getFullName`, and should return the combined first name and last name of the user. Use string concatenation or template literals. Remember to use the `this` keyword to access the attributes on the class instance.

Call the `getFullName` method and log the result to the console.

### Creating a CV class
The CV that we will be making uses three classes: `Job`, `Education` and
`CV`. The `CV` class we have made for you (with some missing functionality). The `Job` and `Education` classes you need to create.

#### Part 1:
Create the classes `Job` and `Education`.

- `Job` has five properties: `id`, `title`, `description`, `startDate` and `endDate` (the dates can be strings or actual `Date` objects).
- `Education` has six properties: `id`, `title`, `school`, `address`, `startDate` and `endDate`.

#### Part 2:
Now add the functionality for the methods in the `CV` class.

*Remember*: jobs and educations are just arrays of class instances. So use your array manipulation knowledge for the add and remove methods.

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

#### Part 3:
1. Create a new `CV` instance using the `new` keyword, and save it in a variable called `myCV`.

2. Apply the methods you have created on the `myCV` object. Create a few `Job` and `Education` objects and add them to your CV.

3. Remove a job and an education from `myCV`.

4. Log `myCV` to the console, again, and check that the objects were removed correctly.

#### Part 4:
Add a method to the `CV` class called `renderCV()`. This method should render out the CV using HTML. Use `document.getElementById("<id>")` and `document.createElement("<element>")`, as well as `element.appendChild(<element>)` to build your HTML using JavaScript.