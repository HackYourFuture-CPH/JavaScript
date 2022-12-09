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


- Async/await and promise syntax- simple introduction focused on usage
  - Quickly recap asynchronicity
    - Ask the students what it means that some code is asynchronous
  - Practical example 
    - Show both async/await and .then with http://api.open-notify.org/astros.json [Astronauts in space] API
  - [Exercises 1]
    - Make a call to https://v2.jokeapi.dev/joke/Any?safe-mode [Jokes API] with both async/await and .then syntax
- More advanced async code
  - Practical example
    - Show how user input, POST requests and API keys work with Yoda translator API https://rapidapi.com/orthosie/api/yoda-translator/
    - Refactor code to use try/catch and show how to trigger a error
  - Practical example
    - Show how we can do something while waiting for the call to finish like showing some loading with setTimeout
  - [Exercise 2]
    - Make a request to https://api.agify.io?name=bella where the name comes from user input, using try/catch and showing loading when making the request.

At this point good coding practices is starting to get very important! Check our [coding best practices](https://github.com/HackYourFuture-CPH/curriculum/blob/master/review/review-checklist.md#javascript) and use these both when live coding but also in reviews.


