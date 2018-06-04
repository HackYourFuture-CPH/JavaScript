# Homework Week 9

>Read:
- JavaScript : [Closures](http://conceptf1.blogspot.nl/2013/11/javascript-closures.html)
- Everything you wanted to know about [JavaScript scope](https://toddmotto.com/everything-you-wanted-to-know-about-javascript-scope/)
- JavaScript [Scoping and Hoisting](http://www.adequatelygood.com/JavaScript-Scoping-and-Hoisting.html)
- 5 JavaScript [“Bad” Parts That Are Fixed In ES6](https://medium.freecodecamp.com/5-javascript-bad-parts-that-are-fixed-in-es6-c7c45d44fd81)

- More about [closures](https://www.reddit.com/r/learnjavascript/comments/1v6n8p/closure_explain_likei_am_in_high_school/?st=ixsp0mbe&sh=5526d150)
- A VERY popular [StackOverflow article](http://stackoverflow.com/questions/111102/how-do-javascript-closures-work)



> Make:

## Step 1: Continuing on previous weeks' homework

The solutions to last week's homework are available in [this folder](./last-homework/).

1. Review the closure solution and try and complete it on your own.
1. Review the movies solution, complete your own implementation, and then add the following features on top:
    1. Create a way to select movies by decade (hint: you can use something similar to how movies are filtered by the rating tag).
    1. Similarly, allow the user to sort the movies by: Name, Rating or Year (hint: you can create a new `select` element as well, listen for user interaction and then apply `array.sort()` at the end).

## Small exercises on Closure and Promise

1. Write a function that would allow you to do this:

    ```js
    var addSix = createBase(6);
    addSix(10); // returns 16
    addSix(21); // returns 27
    ```

1. Rewrite the following code (using promise and other control flow tools/features):

    ```js
    function getAjaxData(url, callback) {
        const request = new XMLHttpRequest();
        request.addEventListener('load', function () {
            if (this.status === 200) {
                callback(JSON.parse(request.responseText));
            } else {
                console.log('Something is probably wrong with the url');
                callback(null, true);
            }
        });
        request.addEventListener('error', function () {
            callback(null, true);
        });
        request.open("GET", url);
        request.send();
    }

    const usersURL = "https://jsonplaceholder.typicode.com/users";

    getAjaxData(usersURL, function(data, err){
        if(err)
            console.log('Error loading users: ', err);
        else {
            let users = data;
            for (var i = 0; i < users.length; i++) {
                // load the todos for this user
                const todosURL = `https://jsonplaceholder.typicode.com/users/${users[i].id}/todos`;

                // why is this line needed below?
                let index = i;

                getAjaxData(todosURL, function(data, err){
                    if(err)
                        console.log('Error loading todos for user ', i, ' :', err);
                    else{
                        users[index].todos = data;
                    }

                    // console.log(index, i);

                    // if this is the last user, console.log all data
                    if(index == users.length - 1)
                        console.log(users);
                });
            }
        }
    });
    ```

1. You will need to create an HTML document out of the below snippet to run the below code. A hint - the code is syntactically correct but doesn't do what you would expect. Can you see why and fix it?

    Don't cheat - but if you get stuck ... http://stackoverflow.com/questions/750486/javascript-closure-inside-loops-simple-practical-example

    ```html
    <button id="btn-0">Button 1!</button>
    <button id="btn-1">Button 2!</button>
    <button id="btn-2">Button 3!</button>

    <script type="text/javascript">

        var prizes = ['A Unicorn!', 'A Hug!', 'Fresh Laundry!'];
        for (var btnNum = 0; btnNum < prizes.length; btnNum++) {
            // for each of our buttons, when the user clicks it...
            document.getElementById('btn-' + btnNum).onclick = function() {
                // tell her what she's won!
                alert(prizes[btnNum]);
            };
        }
    </script>
    ```