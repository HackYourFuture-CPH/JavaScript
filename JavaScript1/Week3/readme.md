# Week 3

## Learning goals
- [ ] Arrays continued: pop, push, shift, unshift, length, indexOf. No map, filter or reduce
- [ ] [Objects](#Objects): Access properties two ways, key value. Array of objects. Use real world examples (users, products, houselistings)
- [ ] [Statements vs expression](#Statements--expressions)

## Relevant links
* [Preparation](preparation.md)
* [Homework](homework.md)


## Statements & expressions

Most programming languages that you'll encounter in real life are called "imperative" programming languages. JavaScript is such an imperative programming language. Imperative is another word for command-like. That is, you give the computer a bunch of commands after each other. First do this, then do that, etc.

These individual commands are called "statements" in imperative programming languages. You can compare them with sentences in the English language. They have a use by themselves, and do not need something else. "The man eats bread." is a full sentence, it conveys a meaning by itself. A sentence in English is always terminated by a period.

Similarly, a statement in JavaScript should provide a command by itself. JavaScript-statements are (almost always) terminated by a semicolon.

This is a complete statement:

```js
let s = "HackYourFuture";
```

It is a full command: declare a variable `s` and initialize it with `"HackYourFuture"`. JavaScript doesn't need any other information to know what we want. The statement is terminated with a semicolon.

However, this is not a complete statement:

```js
4 + 5
```

This equals `9`, but what is JavaScript to do with it? It doesn't provide a command. You'd need to do something with it, e.g. `var x = 4 + 5;` or `callFunction(4 + 5)`. We call these parts of statements "expressions". Expressions are not terminated by semicolons. Expressions always "evaluate into a value". In our example, the expression `4 + 5` "evaluates into `9`". If expressions cannot be evaluated into a value, they are invalid. For instance, `4 +` is not a valid expression, it is incomplete, because we need something else after the plus sign.

So, statements can *contain* expressions. Can expressions contain statements? No, they cannot. However, they can themselves contain expressions. Think about `4 + 5`: it contains the expressions `4` and `5`, as these both evaluate into a value: the expression `4` evaluates into the number `4`, it is a very simple expression. Similarly, `true`, `null`, `undefined` are all expressions.

### Examples of expressions

Here are some examples of expressions. Remember: expressions evaluate into a value, but do not provide a command:

* `sum(a, b)`
* `a`
* `a > 4 ? "yes" : "no"`
* `a + b`
* `a && b || c`
* `arr.length`
* `obj["name"]`
* `[1, 2, 3]`
* `arr[1]`
* `[1]` (this is an array with one element!)

### Examples of not-expressions

The following are not expressions:

* `const` -> this is a keyword, see below
* `const x;` -> this is a statement
* `+` -> this is only an operator
* `if (a > 4) { return "yes"; } else { return "no"; }`

`if` is also a statement. However, it is quite a complex statement. It is also referred to as a "construct", just like `for`, `while`, `try`, etc.

## Objects

Variables that are objects also contain a list of things, but instead of them being in some specific order, they can be assigned to words, called "keys". Instead of "elements" the things that are inside objects are called "properties".


```js
let obj = {name: 'John', age: 24};
```

This object has two properties: `name` and `age`. The "value" of the property `name` is the string `'John'`. The "value" of the property `age` is the number `24`.

When accessing object properties, you can use the dot-notation: `obj.name` or the bracket-notation: `obj["name"]`. Note that the latter looks a lot like the way to access array elements. However, here what's inside the bracket (called "key" for objects, instead of "index") must be a string.

```js
console.log(obj.name); // -> 'John'
console.log(obj['name']); // -> 'John'
```

Just like with arrays, you can also use a variable to access properties, as long as these variables are strings. In this case you cannot use the dot-notation!

```js
var ageKey = 'age';
console.log(obj[ageKey]); // -> 24
```

Remember that there is a very big difference between `obj[name]` and `obj["name"]`.

> Note:
>
> Thinking back of arrays, the length of an array can be retrieved by `arr.length`. So as mentioned before, arrays are just like other JavaScript objects. You could even write `arr['length']` to access the `length` property of the array. JavaScript will look: is what we put between brackets a number? Then it is an index and we'll look up the correct array element. If it's a string, it's a key and we will look up the corresponding property.
