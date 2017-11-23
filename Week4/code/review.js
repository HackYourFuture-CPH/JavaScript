/* JSON */


// Stands for Javascript object notation
// A format that can be used for
// transfering data from server to client.
// It can also be used for just storing data.

const cars = [
    {
        make: "BMW", 
        color: "lightgrey",
        speed: 96,
    },
    {
        "make": "Fiat", 
        "color": "lightcyan", 
        "speed": 33,
    },
    {
        "make": "BMW", 
        "color": "lightyellow", 
        "speed": 94,
    },
    {
        "make": "Skoda", 
        "color": "lightcoral", 
        "speed": 72,
    }
];

console.log(cars);


// cars object vs cars.json

// There is one big difference from javascript objects to JSON: 
// Keys are string encoded with double quotes and no trailing commas.
// Json is quite strict


const jsonStringCars = '{"cars":[{"make":"BMW","color":"lightgrey","speed":96},{"make":"Fiat","color":"lightcyan","speed":33},{"make":"BMW","color":"lightyellow","speed":94},{"make":"Skoda","color":"lightcoral","speed":72,"add ons":[{"name":"GPS","price":1000},{"name":"Assisteddrive","price":2000},{"name":"Bluetooth","price":500}]}]}'

const jsonCars = JSON.parse(jsonStringCars);


console.log(jsonCars);


console.log(jsonCars.cars[3]['add ons'][1].price);

/*
Possible values:
a string
a number
an (JSON) object
an array
true
false
null
*/

// To check if your Json is valid use: www.jsonformatter.com

// Get the second add ons price in the cars.json



/* Exercise 1 */

/* 
Imagine your are running a meal ordering website.
Orders come in from the web and we need to store them in a json file.
create a json file with two orders that contain at least these things:

Order name
Order id
Price
List of drinks with the order
Order extras (fx cheese, lettuce etc.)
*/

/* Solution */
/*
{
    "orderName": "burger",
    "orderId": 3,
    "price": 25,
    "drinks": [
        {
            "orderName": "cola",
            "orderId": 5
        }
    ],
    "extras": [
        {
            "extraName": "cheese",
            "orderId": 1
        }
    ]
}
*/



/* Exercise 2 */
// Go through planets.json and figure out the data structure.
const planetsFlattened = JSON.parse('{"description": "Planets (including dwarf planets as recognized by the IAU) that orbit the Sun, with their natural satellites.","planets": [{"name": "Mercury","moons": []},{"name": "Venus","moons": []},{"name": "Earth","moons": ["Moon"]},{"name": "Mars","moons": ["Deimos","Phobos"]},{"name": "Ceres","moons": []},{"name": "Jupiter","moons": ["Metis","Adrastea","Amalthea","Thebe","Io","Europa","Ganymede","Callisto","Themisto","Leda","Himalia","Lysithea","Elara","S/2000 J11","S/2003 J12","Carpo","Euporie","S/2003 J3","S/2003 J18","Orthosie","Euanthe","Harpalyke","Praxidike","Thyone","S/2003 J16","Iocaste","Mneme","Hermippe","Thelxinoe","Helike","Ananke","S/2003 J15","Eurydome","Arche","Herse","Pasithee","S/2003 J10","Chaldene","Isonoe","Erinome","Kale","Aitne","Taygete","S/2003 J9","Carme","Sponde","Megaclite","S/2003 J5","S/2003 J19","S/2003 J23","Kalyke","Kore","Pasiphae","Eukelade","S/2003 J4","Sinope","Hegemone","Aoede","Kallichore","Autonoe","Callirrhoe","Cyllene","S/2003 J2"]},{"name": "Saturn","moons": ["Tarqeq","Pan","Daphnis","Atlas","Prometheus","Pandora","Epimetheus","Janus","Aegaeon","Mimas","Methone","Anthe","Pallene","Enceladus","Tethys","Calypso","Telesto","Polydeuces","Dione","Helene","Rhea","Titan","Hyperion","Iapetus","Kiviuq","Ijiraq","Phoebe","Paaliaq","Skathi","Albiorix","S/2007 S2","Bebhionn","Erriapo","Siarnaq","Skoll","Tarvos","Greip","S/2004 S13","Hyrrokkin","Mundilfari","S/2006 S1","Jarnsaxa","Narvi","Bergelmir","S/2004 S17","Suttungr","Hati","S/2004 S12","Bestla","Farbauti","Thrymr","S/2007 S3","Aegir","S/2004 S7","S/2006 S3","Kari","Fenrir","Surtur","Ymir","Loge","Fornjot"]},{"name": "Uranus","moons": ["Cordelia","Ophelia","Bianca","Cressida","Desdemona","Juliet","Portia","Rosalind","Cupid","Belinda","Perdita","Puck","Mab","Miranda","Ariel","Umbriel","Titania","Oberon","Francisco","Caliban","Stephano","Trinculo","Sycorax","Margaret","Prospero","Setebos","Ferdinand"]},{"name": "Neptune","moons": ["Naiad","Thalassa","Despina","Galatea","Larissa","Proteus","Triton","Nereid","Halimede","Sao","Laomedeia","Psamathe","Neso"]},{"name": "Pluto","moons": ["Charon","Styx","Nix","Kerberos","Hydra"]},{"name": "Haumea","moons": ["Namaka","Hiiaka"]},{"name": "Makemake","moons": []},{"name": "Eris","moons": ["Dysnomia"]}]}');

// Using the planetsFlattened variable:
// Console.log jupiters last moon.

/* Solution*/
/*

console.log(planetsFlattened.planets[8].moons[12]);
*/


/* Code debugging in Chrome */


function logNumbers(iterations) {
    const test = "hej";
    for (let i = 0; i < iterations; i++) {
        console.log(i);
    }
}
/*
logNumbers(10);



/*  Code flow (order of execution) */
/*

Different contexts: Global and execution.

Only one global and multiple execution contexts

http://davidshariff.com/blog/wp-content/uploads/2012/06/img1.jpg

In a browser the javascript interpreter is implemented as single threaded.

Global context always at bottom. 
http://davidshariff.com/blog/wp-content/uploads/2012/06/ecstack.jpg


When js is loaded it enters global scope.
If a function is called the program enters a new execution context, and pushes that context to the execution stack.This complete stack is called the callstack
Multiple functions
When the function is done, pop the context.

http://davidshariff.com/blog/wp-content/uploads/2012/06/es1.gif

Remember these things:

Single threaded.
Synchronous execution.
1 Global context.
Infinite function contexts.
Each function call creates a new execution context, even a call to itself.
Execution Context in Detail


In a execution context these things happen:

Creation Stage [when the function is called, but before it executes any code inside]:
    Create the Scope Chain.
    Create variables, functions and arguments.
    Determine the value of "this".
Activation / Code Execution Stage:
    Assign values, references to functions and interpret / execute code.

*/


function a(x) {
     // Function a added to the stack
     b(x);
     // Function a removed from the stack;
}

function b(x) {
      // Function b is added to the stack
      console.log("Value passed is "+ x);
      // Function b is removed from the stack
}

// Starting work for the global stack
a(22);
// Stopping work for this stack. stack would be empty after this


/* Exercise */

// What will be printed

const firstFunction = function (second) {
    for (let i = 0; i < 3; i++) {
        console.log(i);
    }

    second();
    console.log('In first function');
}


function test() {
    console.log('This is a test');
}


function second() {
    console.log('In second function');
    test();
}


firstFunction(second)

