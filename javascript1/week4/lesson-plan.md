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
- Recap of js basics
  - Variables
  - Types
  - Conditionals
  - Functions
  - For loop
  - scope
  - Arrays
  - Objects
  - Ask the students what they need to get repeated. Or figure it out by doing some code example. 
- Solving problems
  - https://dev.to/aprietof/5-steps-to-solving-programming-problems--502d
- [Code inspiration](#fibonacci-sequence)
- [Exercises](#exercises)

This class is about getting the basics hammered down. We have had a lot of students who think the js module is too difficult. That is why this class is here, too ease the steepness of the js learning curve. 

Focus on 
- Recapping what the students struggle with
- Letting the students learn a framework for solving problems
- Lots and lost of exercises 💪

## Typical misconceptions

- Difference between return and console.log
- What console.log does and what it is made for

## Code inspiration

### Fibonacci Sequence
Given a specific number in the fibonacci sequence return the fibonachi number. 

```js
// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34

fib(5) // 3
fib(10) // 34
```

Try not to just solve the problem, but explain what you are doing and thinking! 

Try using this as a framework for solving the problem: https://dev.to/aprietof/5-steps-to-solving-programming-problems--502d

## Exercises

### Fizz buzz

This is a classic programming task. 

Create a function that prints the numbers from 1 to 100. But for multiples of three print `Fizz` instead of the number and for the multiples of five print `Buzz`. For numbers which are multiples of both three and five print `FizzBuzz`.

When that works. Make the two number for multiples into parameters. So it can be called like this:

`fizzBuzz(4, 12);`

### Build a sentiment analyzer

A sentiment analyzer is some functionality that figures out how positive/negative a sentence is. 

Fx the sentence `I am mega super awesome happy" Should have a high score
The sentence "I hate doing boring stuff" should have a low score.

Create a function that takes a string as a parameter. calling the function will return an object with `score`, `positiveWords` and `negativeWords`. You decide how the score should be implemented and what words are negative and positive.

Here is an example of using the function:

```js
const sentimentScoreObject = getSentimentScore('I am mega super awesome happy');

console.log(sentimentScoreObject); 
/*
{
  score: 3,
  positiveWords: ['happy', 'awesome', 'super'],
  negativeWords: [],
}
*/
```

### Credit card number formatter

This is a very real world example of a problem i got at my previous work. I was tasked to implement one of the smart credit card input fields, where the credit card numbers are seperated with a space. Fx inputting 123456789 would show 1234 5678 9.

![Credit card formatter](assets/credit-card-formatter.gif)

Create a function that takes a number as parameter. The function should return the following object:

```js
const formattedCreditCardObject = formatCreditCardNumber(123456789);
console.log(formattedCreditCardObject);
/*
{
  original: 123456789,
  formatted: "1234 5678 9",
}
*/
```

Thins to consider:
- What should happen if the function is called with an argument that is not a number?

### Character frequencies

Write a function that counts the frequency of characters in a string:

```js
console.log(getCharacterFrequencies('happy'));
/*
{
  characters: [
    {
      character: 'a',
      count: 1
    },
    {
      character: 'h',
      count: 1
    },
    {
      character: 'p',
      count: 2
    },
    {
      character: 'y',
      count: 1
    }
  ], length: 5
}
*/
```

### Palindromic substring
Write a function that finds the longest palindromic substring of a given string. 


### Credit card info

Similar to the format credit card number, now we need to identify the credit card type. 

```js
console.log(getCardInfo(4781321334789876)); // 'visa'
```

How can we find out what rules there are for credit cards? Programmers best friend is always available :) 

### Tic Tac Toe

Draw a tic tac toe game.

Write a function called `getRenderedGame(position)` that takes `position` as parameter. `position` is a two dimensional array that shows the position of a game.

Here is an example:

With the following two dimensional array 
```js
const position = [
  ['x', 'o', ' '],
  [' ', 'o', ' '],
  [' ', 'o', 'x']
];

const renderedGame = getRenderedGame(position);
console.log(renderedGame);

/*
*******
*x*o* *
* *o* *
* *o*x*
*******
*/
```

Create a new function called `getGameinfo(position)`. Calling the function should return an object with `winner` key, `loser` key, `hasEnded` and `nextPlayer`.

EXAMPLES!!!!


```js
const position = [
  ['x', 'o', ' '],
  [' ', 'o', ' '],
  [' ', 'o', 'x']
];

const gameInfo = getGameinfo(position);
console.log(gameInfo);

/*
{
  winner: 'o',
  loser: 'x',
  hasEnded: true
}
*/
```


```js
const position = [
  ['x', 'o', ' '],
  [' ', ' ', ' '],
  [' ', 'o', 'x']
];

const gameInfo = getGameinfo(position);
console.log(gameInfo);

/*
{
  winner: undefined,
  loser: undefined,
  hasEnded: false
}
*/
```

Try and make the game playable! *optional*


### Conway's game of life *optional*

https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life
