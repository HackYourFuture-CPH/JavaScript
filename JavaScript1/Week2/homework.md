# Homework

## Step 1: Recap/Read

- Have a look at [The Secret Life of JavaScript Primitives](https://javascriptweblog.wordpress.com/2010/09/27/the-secret-life-of-javascript-primitives/)
- Go through the review of [last week](../Week1/review.md) (Work in progress, update this week :wrench:)
- Go through the review of [this week](../Week2/review.md) (work in progress, update this week :nut_and_bolt:)


## Step 2: Javascript warmup part one
Just like last time, lets warmup our brain!
Go back to FreeCodeCamp, start where you left of and finish the rest of the Basic JavaScript challenges. We know this seems like a lot, but the tasks are not so big, so hang in there! 

Please make sure you REALLY understand the exercises below:

- https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/basic-javascript/store-multiple-values-in-one-variable-using-javascript-arrays/
- https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/basic-javascript/build-javascript-objects/
- https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/basic-javascript/add-new-properties-to-a-javascript-object/


## Step 3: Javascript warmup part two

1. Create a function that returns an empty object. 
2. Create a new variable called timeObject and assign it to the result of calling the previous function
3. Inside the function, add a key to the object called time with the value of the number 12
4. Log out timeObject. It should look like this:
```js
{
    time: 12,
}
```

---

1. Create a function that returns an array with with 3 empty objects.
2. Call the function and assign the return of the function to a variable called colorObjects (like we did in the previous exercise)
3. Change the array so that all the objects have one key called color. Make every object have a different color
4. Log out colorObjects
5. Give the function 3 parameters called color1, color2 and color3. The parameters should control the color of the 3 objects. color1 sets the color of the first object and so on. 
6. Call the function with 3 colors and log out colorObjects. colorObjects should look like this:
```js
[{
    color: 'red',
},{
    color: 'blue',
},{
    color: 'yellow',
}]
```
If the colors you called the function with were red, blue and yellow.

7. For every object in the array log out the color of the object. Hint use a for loop and read [Here](https://github.com/HackYourFuture/fundamentals/blob/master/fundamentals/objects.md) to check how to get the value of an object.

---

8. Today is Sunday and you ask your friend in how many days you are meeting. If the friend says
I will see you in 9 days. The output should be Tuesday. You should get the today's day from the system.
So typical console output is:

``Today is: Sunday``    
``How many days to meet : 9``  
``We are meeting on : Tuesday``  

Hint: use remainder operator

## Step 3: Smart-ease - Goes Global!
Following the massive success of Smart-ease's first couple of products things have been quite hectic at Smart-ease's shared office space. The phone is constantly ringing from journalists wanting to interview the genius behind the success and the greatest developers want to work for you. Wired wrote an article with the headline "Smart-ease as good as Smarties"

BUT people are asking: What will be the next product that truly defines Smart-ease as the startup of the century?

As always Smart-ease starts by helping people fix their problems. So lets venture out into the real world and see what we find:

### NOnoN0nOYes (Note taking app)
> You are sitting at a meeting. A person is presenting some interesting thought that you want to write down. You check your bag, but realise that you forgot to bring your notepad. Hmm you check the internet for an online solution. But you need to signup for them all, too bad... Maybe this could be a worthwhile problem so solve. Lets create a simple and easy to use notepad 📝

#### Save a note
The first thing we will create is the functionality to save a note:
Create a variable called notes and assign it to an empty array.
Create a function called addNote. The addNote has two parameters: note and noteId. The note parameter is a string. and the noteId is a number.
The addNote function shall push an object to the notes array. This object has two keys: note and noteId, that corresponds to the parameters. The value of the keys should be the value of the corresponding parameters. 

#### Get a note
Now a user can add a note, but what if a user wants to see a specific note, but only remembers the id? Lets create that functionality for him:
Create a function called getNoteFromId. The function has one parameter called id. When calling this function with an id it should return the relevant note object that corresponds to the id. If no id is specified or if the id is not a number, log out an error string. 
Hint: Use a for loop.

#### Read all notes
Now a user can both add and get a note. What if the user just wants to read all his notes? Lets also create that functionality:
Create a function showAllNotes. When calling it the function should log this string out for every note:
"The note with id: 1, has the following note text: "some example note"."

#### Unique feature
Suddenly you get this great idea for making the note app even better! 

Come up with a unique feature you think would make this app better. Write down the idea and see if you can implement it. If it is too hard to implement try and ask in the slack channel :)

### CactusIO-interactive (Smart phone usage app)
> After a long day you come home to relax. The first thing you do is find your phone and start watching some youtube. Then check facebook, and then reading some news. Suddently a hour has passed. What happened to all that time you think to yourself. Maybe we can create some program to help with this problem! What if we could help users manage their smart phone usage?

Its going to work like this: A user can add smartphone activities. Then he can see a status on how his smartphone usage is going. 


#### Adding an activity
Lets create the first part of the functionality that is adding activities.

Create a variable called activities that stores all activities of the day. What type of variable would you think would make sense?
Create a function called addActivity. It should have three parameters: date, activity and duration. The date should be a string, the activity a string and the duration a number. To save the activity push an object that contains the date, the activity and the duration to the activities variable. 

Now a user can add an activity by writing:
```
addActivity('23/7-18', 'Youtube', 30);

/*
activities should now look like this
[{
    date: '23/7-18',
    activity: 'Youtube',
    duration: 30,
}]
*/
```

Just adding activities wont help the user very much, we need to add some functionality to show the user how his smart phone usage is going.


#### Show my status
Create a function called ShowStatus. This function should use the activities variable and return a string saying the following:
"You have added 3 activities. They amount to 78 min. of usage"
```
ShowStatus(activities); // will log out this "You have added 3 activities. They amount to 78 min. of usage"
```
Now what happens if we call get status and activities is empty? We need to take that into consideration: If activities is empty log out a string that says: "Add some activities before calling ShowStatus"  

#### Usage limit
A user asks us if it is possible to set a limit for his smartphone usage. "Off course it is" we promptly reply! 
We need to store that limit somewhere, but where and what type should this be?
So how should it work? When ShowStatus is called and the users usage is above the limit he set. Log out the following string: "You have reached your limit, no more smartphoning for you!"

Come up with one feature you think would be helpful for this program.

Optional
* Lets improve the addActivity, so that we dont need to specify the date, but the function automatically figures out what the date is. Check out this link: https://stackoverflow.com/a/34015511
* Improve the ShowStatus function by only showing the number of actitivies for that specific day.
* Create a function for calculating the activity a user has spent the most time on.
---


## Step 4: Rover the Robot (Optional)
Go and try out this cool game: [roverjs.com](http://roverjs.com), written by one of the HYF teachers from Amsterdam, Joost Lubach. There are different levels. Solve the chapter up until and with the variables chapter. There might be a small price for completing that!

## Step 5: Hand in Homework:
Steps:
* Use the hyf-homework repo and add your homework files in the javascript/javascript1/week2 folder
* If you dont have the repo, fork it from here: https://github.com/HackYourFuture-CPH/hyf-homework
* Make your commits for the homework. Remember to seperate the code into meaningful commits!
* Push the changes to github
* To finish the homework:
  * Fill in the form for the relevant week. The link to the form can be found at the top of your classes slack channel. 
  * Share the github link to your classes slack channel. 
---

And thats it your are done 🎉