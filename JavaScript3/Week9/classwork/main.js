console.log('Script loaded');

// Object literal
// paintings portfolio

function createPainting(title, painter, year) {
    return {
        title: title,
        painter: painter,
        year: year,
    };
}

const happyDay = createPainting('Happy day', 'Benjamin Hughes', 2015);
const sadDay = createPainting('Sad day', 'Benjamin Hughes', 2015);
console.log(this);


function createPortfolio(paintings) {
    return {
        webPage: "www.benjamins-paintings.com",
        getPaintings: function () {
            return paintings;
        },
        addPainting: function (painting) {
            paintings.push(painting);
        },
        getWebpage: function () {
            console.log(this);

            return this.webPage;
        }
    }
}

const myPortfolio = createPortfolio([happyDay]);
console.log(myPortfolio.getPaintings());
myPortfolio.addPainting(sadDay);
console.log(myPortfolio.getPaintings());
console.log(myPortfolio.getWebpage());
console.log(myPortfolio.getWebpage);

const anotherFunction = myPortfolio.getWebpage;
console.log(anotherFunction());

const test = {
    webPage: 'asd',
    getWebpage: myPortfolio.getWebpage,
};

console.log(test.getWebpage());

/*
The this keyword evaluates to:
1. Global scope: window
2. Function scope: 
2.1 If called on an object this evaluates to the object
2.2 called thorugh special functions like bind, call, apply, see documentation
2.3 In other cases this evalueates to window
2.4 arrow function: this keyword is taken form the enclosing scope
*/
