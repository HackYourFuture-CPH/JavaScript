# Homework

## Why should i even do this homework?
Understanding the basics of Javascript is SUPER important. Therefore this homework focuses on repeating the basics to really have a solid understanding of this. 

## Finishing class exercises
Finish the exercises from the class

## Voice assistant
You will be building a voice assistant 🤖! Is that even possible in javascript, YES! EVERYTHING is possible in javascript 💪 (nearly)

Create a function called `getReply(command)`. The function should return a response that corresponds to the command!

These are the commands you should be able to give the voice assistant:
- `Hello my name is Benjamin` - Should save the name benjamin. and respond with "nice to meet you Benjamin" What if someone writes this twice?
- `What is my name` - should respond with the name of the person. What if the name has not yes been mentioned?
- `Add fishing to my todo` - Should respond with "fishing added to your todo". Should add fishing to a list of todos
- `Add singing in the shower to my todo` - Should add shinging in the shower to a list of todos
- `Remove fishing from my todo` - Should respond with "Removed finshin form your todo"
- `What is on my todo?` - should repond with the todos. Fx you have 2 todos - fishing and singing in the shower
- `What day is it today?` - Should respond with the date in a human readable format. Fx if today is 30/8-2019 then it should respond with 30. of august 2019
- Should be able to do simple math. fx `what is 3 + 3` should respond with 6. Or `what is 4 * 12` should respond with 48
- `My favorite dish is spaghetti` - should save the users favorite dish as lasagne.
- `What is my favorite dish` - should respond with the favorite dish
- `Set a timer for 4 minutes` - Should respond with "Timer set for 4 minutes". When 4 minutes is up: "Timer done". How do we set a timer in js? Google is your friend here!
- `Add Bike ride the 3/5-2019 to my calendar` - Should respond with "Bike ride added to your calendar". Should add an event represented by an object with keys `name` and `date` to an array of events.
- `What am i doing this week?` - should respond with the events for that week. Fx "This week you have 1 event: Bike ride the 3. of may 2019"
- Add one or more commands to your voice assistant

Here is an example of usage:

```js
console.log(getReply('Hello my name is Benjamin')); // "Nice to meet you benjamin"
console.log(getReply('What is my name?')); // "Your name is Benjamin"
console.log(getReply('Add Bike ride the 3/5-2019 to my calendar')); // "Bike ride added to your calendar"
```

When you are done, add your `getReply` function and global variables to this codeSandbox and try the voice command out with both commands and speech! 

---> https://codesandbox.io/s/beautiful-worker-gnhbw <---


## Hand in Homework:
Go over your homework one last time:

- Does every file run without errors and with the correct results?
- Have you used `const` and `let` and avoided `var`?
- Do the variable, function and argument names you created follow the [Naming Conventions](https://github.com/HackYourFuture/fundamentals/blob/master/fundamentals/naming_conventions.md)?
- Is your code well-formatted (see [Code Formatting](https://github.com/HackYourFuture/fundamentals/blob/master/fundamentals/naming_conventions.md))?

If you can answer yes to the above questions then you are ready to hand if the homework: 

* Use the `hyf-homework` repo and add your homework files in the `javascript/javascript1/week4` folder
* Make your commits for the homework. Remember to seperate the code into meaningful commits!
* Push the changes to github
* Share the github link to your classes slack channel. 

---

🎉
