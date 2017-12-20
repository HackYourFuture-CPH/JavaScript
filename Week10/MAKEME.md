# Homework Week 10

> Make:

## Building on the classwork

The classword is available in [this folder](./classwork/). I have extended it to show you the use of constructors to better achieve what we did in class. Take a look carefully so you can do the following:

1. Add a method to load `posts` for a user object. For example from: https://jsonplaceholder.typicode.com/users/1/posts.
1. Look at the constructor `Todo`. Can you also make the `user` object into a constructor `User` and use that instead in the example?
1. Create a constructor `Post` to handle the `posts` that you loaded.
1. Add a method in the `Post` constructor to load `comments` for a post. For example from: https://jsonplaceholder.typicode.com/posts/1/comments.
1. Create a constructor `Comment` to handle the `comments` that you loaded in the previous step.
1. Can you now wire it together so you:
    1. Create a `User`.
    1. Load `Post`(s) for this `User`.
    1. Load `Comment`(s) for the 1st `Post`.

## Holiday Homework :tada:

1. Platformer game

    - https://github.com/reaalkhalil/JSRobot
    - Download as .zip and run the Index.html file.
    - You will see a platformer game. Aim is to carry robot from start point to end point. But it is not playable because the the road is full of obstacles and the program parts are missing. You need to implement missing parts to move robot. There are 6 levels in total.
    - You will be working at the online console. Read the instructions at the beginning of levels carefully.
    - There are two main methods init() and loop(). Remember init() function works once at the beginning, loop() updates 3 times per second.
    - After implemented your code press apply button.  
    - Save your solutions for each level in a text file.     

1. Reach the flag game

    - http://hyf-robot.herokuapp.com/index.html
    - Another reach the flag exercise. Give the right instructions for robot to reach the right point on the given grid.
    - Keep track if you have done all parts from the chapters. UI is shown on the top of the page. Run your implementation by pressing play button.
    - You will find detailed instruction at the beginning of each mission.
    - Save your solutions into a text file.

1. Breakout Game:

    - https://developer.mozilla.org/en-US/docs/Games/Tutorials/2D_Breakout_game_pure_JavaScript
    - Follow along the tutorial to make your won breakout game. This will help you revise some concepts learnt during the last 2 modules, introduce JS Canvas API (see reading section below) and give you more experience with managing lifecycle for an application.
    - After you have followed the tutorial, use the code as a basis for your own improvisation. Some ways you can vary are the following:
        - Implmenting keyboard controls instead of mice.
        - Scoring, life and levels.
        - Adding More HTML elements outside the canvas area for displaying score, messages, levels, pausing/restarting, changing game speed etc. Feel free to style it as you like.
        - Tinker with game dynamics, for example, reverse gravity, slow down the ball when bouncing, adding random behaviour etc.
    - For inspiration you can check out the following link: http://www.pippinbarr.com/2015/10/01/breaksout/
    - Remember to use git commits as densely as possible to be able to go back to a safe point if you break your current implementation!


>Further Reading:

- [Object in JS](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)
- [JavaScript constructors, prototypes, and the `new` keyword](https://content.pivotal.io/blog/javascript-constructors-prototypes-and-the-new-keyword)
- [Classes in Javascript](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes).
- [JS Canvas](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API)