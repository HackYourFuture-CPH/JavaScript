// Lets create some paintings represented by objects:
const painting1 = {
    title: 'blue sky',
    painter: 'benjamin',
    year: 2012,
};

const painting2 = {
    title: 'green sky',
    painter: 'Yana',
    year: 2012,
};

const painting3 = {
    title: 'blue sky',
    painter: 'Omid',
    year: 2012,
};

/*
This takes a lot of code to write out. It is error prone, cause what if i 
misspelled one of the keys. The we will have problems! Therefore we introduce:
CONSTRUCTOR FUNCTIONS:
*/

/*
Here we create a constructor function for a painting. 
It is a function that returns an object. This function represents a template
for creating paintings. A painting has a title, painter and a year. 
*/

function paintingCreator(title, painter, year) {
    return {
        title: title,
        painter: painter,
        year: year,
    };
}

/*
Just like with the painting constructor function we here create a 
constructor function (template) for what a painter object contains. 
*/
function paintersCreator(firstname, lastname, age) {
    return {
        firstname: firstname,
        lastname: lastname,
        age: age,
    }
}

// Now we create a specific painter using the constructor function.
// This is just an object! 
const benjaminPaintor = paintersCreator('Benjamin', 'Hughes', 31);
console.log(benjaminPaintor);

// lets create two more objects represented by objects:
const painting1Constructed = paintingCreator('blue sky', benjaminPaintor, 2012);
const painting2Constructed = paintingCreator('GREEN sky', benjaminPaintor, 2000);
console.log(painting1Constructed);

/*
Now we create the last constructor function. This represents a portfolio. 
A portfolio is represented by an object just like the previous functions. 
The only difference is that the porftfolio object also has methods like getPaintings
and addPainting.
*/
function portfolioCreator(owner, paintings) {
    return {
        webPage: 'www.portfolio.com',
        getPaintings: function() {
            // This function returns the paintings that are attached to the portfolio
            // It does this using the paintings parameter (that is an array of paintings)
            return paintings;
        },
        addPainting: function(painting) {
            // Now we add a method that can add a painting to a portfolio. 
            // It has a painting as a parameter. 
            paintings.push(painting);
        },
        getWebpage: function() {
            // This keyword eveluates to the object it is being called on.
            return this.webPage;
        }
    }
}

/*
Lets create a portfolio:
It has a owner called Benjamin and it has one painting (painting1Constructed).
Again newPortfolio is just an object. With some keys. Most of those keys' values are methods but one is a string
the webPage key. 
*/
const newPortfolio = portfolioCreator('Benjamin', [painting1Constructed]);
// Here we add a painting (painting2Constructed) to the portfolio called newPortfolio.
newPortfolio.addPainting(painting2Constructed);
// The paintings array (reached through closure) should now have an extra painting,
// because we pushed a new painting to the paintings array on line 79. 
console.log(newPortfolio.getPaintings());
// YES, we see that the paintings array actually has two painting now!

// Okay. Lets add a new painting. Here we are creating the painter directly.
newPortfolio.addPainting(paintingCreator('yellow', paintersCreator('bad', 'asd', 12), 2011));
console.log(newPortfolio.getPaintings());
// Now we have three paintings, awesome!

// Here we get 'www.portfolio.com' because the this keyword evaluates to the object it was called on!
console.log(newPortfolio.getWebpage());

