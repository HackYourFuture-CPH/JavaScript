# Homework

### Get git ready to work on homework

Using the `hyf-homework` repo. In the terminal run `git status`

If there are changes that have not been committed, figure out what to do with those changes
- Should they be committed to another branch?
- Should they be committed to `master`?
- Should they be discarded?

When you have figured out what to do with the changes and fixed those. Write `git status` again. If it says `nothing to commit, working tree clean`. Then you are ready to create the branch for this weeks homework.

#### Creating the branch
Using the `hyf-homework` repo write this command

`git checkout master` - You are now on the `master` branch

`git checkout -b javascript/javascript1/week4`

This will create and checkout the branch so you are ready make commits to it

[This video](https://www.youtube.com/watch?v=feyBVDhFQuk) can help. On slack use the #git-support channel to ask questions about git

## Why should i even do this homework?
Understanding the basics of Javascript is SUPER important. Therefore this homework focuses on repeating the basics to really have a solid understanding of this. 

If you struggle to do this weeks homework there are a couple of things to do:
- Watch the class recording. If it for some reason is missing. Then watch these: [part 1](https://www.youtube.com/watch?v=Mo54btMPN7Q), [part 2](https://www.youtube.com/watch?v=mSUAoual5sE), [part 3](https://www.youtube.com/watch?v=uq3NnTtXqsU)
- Go through the last 3 weeks readme files. [Week 1](../week1/readme.md#variables), [week 2](../week2/readme.md#recap-logical-operators), [week 3](../week3/readme.md#objects)

## Finishing class exercises
Finish the exercises from the class

## Voice assistant
You will be building a voice assistant 🤖! Is that even possible in javascript, YES! EVERYTHING is possible in javascript 💪 (nearly)

Create a function called `getReply(command)`. The function should return a response that corresponds to the command!

These are the commands you should be able to give the voice assistant:
- `Hello my name is Benjamin` - Should save the name benjamin. and respond with "nice to meet you Benjamin". What if someone writes this twice?
- `What is my name` - should respond with the name of the person. What if the name has not yet been mentioned?
- `Add fishing to my todo` - Should respond with "fishing added to your todo". Should add fishing to a list of todos
- `Add singing in the shower to my todo` - Should add singing in the shower to a list of todos
- `Remove fishing from my todo` - Should respond with "Removed fishing from your todo"
- `What is on my todo?` - should respond with the todos. Fx you have 2 todos - fishing and singing in the shower
- `What day is it today?` - Should respond with the date in a human readable format. E.g. if today is 30/8/2019 then it should respond with 30. of August 2019
- Should be able to do simple math. fx `what is 3 + 3` should respond with 6. Or `what is 4 * 12` should respond with 48
- `Set a timer for 4 minutes` - Should respond with "Timer set for 4 minutes". When 4 minutes is up: "Timer done". How do we set a timer in js? Google is your friend here!
- Add one or more command to your voice assistant

Here is an example of usage:

```js
console.log(getReply('Hello my name is Benjamin')); // "Nice to meet you benjamin"
console.log(getReply('What is my name?')); // "Your name is Benjamin"
console.log(getReply('Add fishing to my todo')); // "fishing added to your todo"
```

When you are done, add your `getReply` function and global variables to this CodeSandbox and try the voice command out with both commands and speech! 

---> https://codesandbox.io/s/beautiful-worker-gnhbw <---


## Hand in Homework:

Watch [this video](https://www.youtube.com/watch?v=feyBVDhFQuk) for a more detailed go-through of how to hand in homework!

- Use the branch called `javascript/javascript1/week4` 
- Add all your changes to this branch in the `javascript/javascript1/week4` folder. 
- Go through the [Homework checklist](#homework-checklist)
- Create a pull request using the `javascript/javascript1/week4` branch
- Wait for mentor feedback
- Implement feedback, `add`, `commit` and `push` the changes
- Now you can merge the changes into `master`
- When merged you can **share the github link** to your classes slack channel if you are **proud of what you did** 💪
- Now celebrate 🎉🎉🎉

## Homework checklist
Go over your homework one last time:

- [ ] Does every file run without errors and with the correct results?
- [ ] Have you used `const` and `let` and avoided `var`?
- [ ] Do the variable, function and argument names you created follow the [Naming Conventions](https://github.com/HackYourFuture/fundamentals/blob/master/fundamentals/naming_conventions.md)?
- [ ] Is your code well-formatted (see [Code Formatting](https://github.com/HackYourFuture/fundamentals/blob/master/fundamentals/naming_conventions.md))?
