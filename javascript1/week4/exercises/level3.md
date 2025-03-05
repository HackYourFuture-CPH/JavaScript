
# Level 3 - Very Hard Difficulty
> [!IMPORTANT]
> Welcome to the ultimate challenge! If you've made it this far, you're either very determined or looking for the toughest tasks. These exercises are not for the faint-hearted. There will be minimal guidance compared to the other levels, and you'll be working with more advanced topics. Choose an exercise that interests you, and don't hesitate to ask a mentor if you get stuck or revisit level 2 for a refresher.


## 🎓🧱 3.1 Implement a Guess-the-Number Game

Let's create a small game where you have to guess a secret number between 1-100.

1. We want to add some interactivity to our application. Investigate how our program can ask/prompt a user for an input and explain it to a classmate and a mentor:
    * How can we get a simple input such as the name from the user?
    * Is it the same way whether we run our JavaScript using an HTML page or Node.js?

2. Write a program that prompts the user for their name and responds with: `Hello, <name>!`

3. Now create a simple number guessing game where:
     * The program randomly selects a number between 1 and 100.
     * The user must guess the number.
     * The program provides feedback:
          * "Too high!" if the guess is too high.
          * "Too low!" if the guess is too low.
          * "Congratulations! You guessed it!" if correct.
     * The game continues until the user guesses correctly.

4. Limit the number of guesses (e.g., 10 tries before revealing the answer).
5. Track the number of attempts and display it at the end.



## 🎓🧱 3.2 Implement a Guess-the-Word Game (Wordle)
You need to create a simple [Wordle-like game](https://www.nytimes.com/games/wordle/index.html) using Node.js where:

* The player has to guess a 5-letter word.
* They have 6 attempts to guess the correct word.
* After each guess, the game provides feedback in the form of colored text:
    * Green for correct letters in the correct position.
    * Yellow for correct letters in the wrong position.
    * standard color for incorrect letters.
* If the player guesses the word correctly within 6 attempts, they win!
* If they run out of attempts, they lose and the correct word is revealed.

1. make some code which selects a random secret word from these:
   ```js
   ["apple", "giant", "horse", "hacky", "steep"]
   ``` 
2. Write a function that takes a `secret word` and a `guess` and returns the colored response. For instance if the secret word is `apple` and you guess `alone` then the response should be <code style="color : yellowGreen">A</code> <code style="color : gold">L</code> `O` `N` <code style="color : yellowGreen">E</code>. 
You can use the below code to write in color:
    ```js
    function green(text) {
        return "\x1b[32m" + text + "\x1b[0m";
    }

    function yellow(text) {
        return "\x1b[33m" + text + "\x1b[0m";
    }

    console.log(green('A'), yellow('L'), 'O', 'N', green('E'));
    ```
3. We want to add some interactivity to our application. Investigate how our program can ask/prompt a user for an input and explain it to a class mate and a mentor
   * How can we get a simple input such as the name from the user?
   * Is it the same way whether we run our Javascript using an html page or node?
4. Modify the code to prompt the user for input after each guess and log the colored response.
5. Implement the win/lose logic:
    * If the player guesses the correct word within 6 attempts, log: `Congratulations, you guessed the right word in X tries.` (where X is the number of attempts).
    * If the player uses all 6 guesses without success, log: `Sorry, you lose. The secret word was "APPLE".`

