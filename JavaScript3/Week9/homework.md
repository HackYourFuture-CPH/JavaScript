# Homework Week 9

## So why should i do this homework?
Using constructor functions help with structuring code. It is one of many **design patterns**. The reason we use the constructr function design pattern is because it is a **solid desing pattern** first of. Second it **connects everything** you have learned in js: objects, function, properties, methods, keys, arrays. If you get how a constructor function work then you get how javascript work!


## Step 2: Getting into promises
Rewrite the following code (using promise and other control flow tools/features):

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


## Step 3: Shopping cart using factory functions
Let's get a bit more into factory functions!
```js

function createProduct(name, price) {
    return {
        name: name,
        price: price,
    }
}

function createShoppingCart(products) {
    return {
        addProduct: function(product) {
            // Implement functionality here
        },
        removeProduct: function(product) {
            // Implement functionality here
        },
        getTotal: function() {
            // Implement functionality here
        },
        renderProducts: function() {
            // Implement functionality here
        },
        getUser: function() {
            // Implement functionality here
        }
    }
}

const flatscreen = createProduct('flat-screen', 5000);
const shoppingCart = createShoppingCart([flatscreen]);
```

So we have two factory functions/ constructor function. `createProduct` creates products represented by objects. `createShoppingCart` creates a shopping cart also represented as an object. 

### Part 1
Create the functionality for the `createShoppingCart` factory functions. 
- `addProduct` should add a product to the products array.
- `removeProduct` should remove a product from the products array. 
- `getTotal` should get the total price of the products.
- `renderProducts` should render the products to html. You decide what to show and how.
- `getUser` should return a promise with the data from this api: https://jsonplaceholder.typicode.com/users/1

### Part 2
Use the `addProduct` and the `removeProduct` functions. Use the `getUser` function to get a user. When the user has been fetched. Show the total price and the username in html and render the products for the user. This should be in html, but you have to choose what to show!

### Part 3
The `createProduct` factory function should get a method that can change the name of the product using the `this` keyword. 

### Part 4, optional
Be creative! Create some cool/weird/quirky functionality of either the `createProduct` or the `createShoppingCart` factory function.

## Feedback giving time!
Find a student to give feedback using this site: https://hyf-peer-review.herokuapp.com/
The feedback should be given after the homework has been handed in preferably latest two days after.
 
To help you get started we have created some ressources about giving feedback. Find them here: https://github.com/HackYourFuture-CPH/curriculum/tree/master/review

## Hand in Homework:
Go over your homework one last time:

- Does every file run without errors and with the correct results?
- Have you used `const` and `let` and avoided `var`?
- Do the variable, function and argument names you created follow the [Naming Conventions](https://github.com/HackYourFuture/fundamentals/blob/master/fundamentals/naming_conventions.md)?
- Is your code well-formatted (see [Code Formatting](https://github.com/HackYourFuture/fundamentals/blob/master/fundamentals/naming_conventions.md))?  
![](https://media.giphy.com/media/l4EpblDY4msVtKAOk/giphy.gif)  
If you can answer yes to the above questions then you are ready to hand in the homework:<br/>
- Find the hyf-homework git repo (that you have forked from [here](https://github.com/HackYourFuture-CPH/hyf-homework)) the link will be https://github.com/YOUR-ACCOUNT/hyf-homework
- Add your homework files in the Javascript/javascript3/week7 folder
- To finish the homework post the link for your repo and the rendered index.html on your classes slack channel
---

🎉