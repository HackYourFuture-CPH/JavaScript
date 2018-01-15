console.log("script loaded");

function cakeLogger(numberOfCakes) {
    let cakeString = "";
    for (let i = 0; i < numberOfCakes; i++) {
        cakeString += "cake ";
    }

    return cakeString;
}

const cakeStringResult = cakeLogger(20);



const cakeLoggerConst = function(numberOfCakes) {
    console.log(numberOfCakes);
    let cakeString = "";
    for (let i = 0; i < numberOfCakes; i++) {
        cakeString += "cake ";
    }

    return cakeString;
}

//console.log(cakeLoggerConst(10));



function testFunctionA(functionToCall, numberOfCakes) {
    //console.log(functionToCall);
    const cakeString = functionToCall(numberOfCakes);
    testFunctionB(functionToCall, numberOfCakes);

    return cakeString;
}


function testFunctionB(functionToCall2, numberOfCakes2) {
    functionToCall2(numberOfCakes2);
}

// testFunctionA(cakeLoggerConst, 2);

const test = function() {
    return "test";
}

//console.log(test);
//console.log(test());

/*context execution */



function a() {
    // add to call stack
    b();

    return 'a';
    // remove from call stack
}


function b() {
    //throw 'hello';
    return 'b';
}

a();


// http://latentflip.com/loupe

function pickUpKids() {
   
}

function buyCarrots() {
    
}

function buyVegetables() {
    buyCarrots();
}

function getGroceries() {
    buyVegetables();
}

function doWork() {
    
}

pickUpKids();
getGroceries();
doWork();



/* HTML interaction */

const cakesElement = document.querySelector('.cakes');
cakesElement.innerHTML = "So many cakes";
cakesElement.style.backgroundColor = 'blue';
console.log(cakesElement);

const div = document.createElement('div');
div.innerHTML = "new div";

document.querySelector('body').appendChild(div);

