# Learning Goals
- [ ] Promises
- [ ] Scoping

# Relevant links
* [Preparation](preparation.md)
* [Homework](homework.md)

## Promise chaining
Just like we can chain array functions like this:

```js
const fastCarBrands = cars
    .filter(car => car.speed > 60)
    .map(car => car.brand);
```

We can chain promise function aswell, and it works exactly like with chaining array methods or chaining anything in js. We use the return of calling the previous function:

```js
doesBenjaminEndWithN = "BENJAMIN"
    .toLowerCase() // <-- toLowerCase returns a string!
    .endsWith('n'); // <-- That string we can call .endsWith on!
```

When we deal with promises the chaining part comes because calling the `.then` function [returns a promises](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/then)!

We know that when we have a promise, we can call `.then` on that promise

```js
fetch('http://api.open-notify.org/astros.json')
    .then(function(response) { // <-- .then returns a promise! 
        // The returned promise (from calling .then) resolves when response.json() resolves!
        return response.json(); 
    })
    .then(function(astronautData) { // because the previous .then function returns a promise, we can call .then on that!

    });
```
