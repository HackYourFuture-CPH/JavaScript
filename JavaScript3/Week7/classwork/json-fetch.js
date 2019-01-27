/*
JSON

JSON stands for JavaScript Object Notation

JSON is a lightweight format for storing and transporting data
JSON is often used when data is sent from a server to a web page

Typical example of json: 
https://jsonplaceholder.typicode.com/users

For validating your JSON
https://jsonlint.com/

The most important rules:
JSON names require double quotes.
No trailing commas

In JSON, values must be one of the following data types:

a string
a number
an object (JSON object)
an array
a boolean
null

*/

// A string formatted like a JSON file
const jsonExample = '{"name": "Benjamin", "age": 23}';
// This is just a string!
console.log(jsonExample);
// Cannot access a the key name of a string
console.log(jsonExample.name);
 
// Now we parse (convert) the string (that we know is valid JSON) into a workable javascript object
const parsedJavascriptObject = JSON.parse(jsonExample);
// yeah we now have a js object
console.log(parsedJavascriptObject);
// where we can access the name key
console.log(parsedJavascriptObject.name);

// We can also go the other way! Here we have an object
const javascriptObject = {
    'name': 'TwentyThree',
    'age': 23
};
console.log(javascriptObject);

// Now we convert the object back into a string
console.log(JSON.stringify(javascriptObject));

// JSON does not have to be an object, it can also be an array
console.log(JSON.parse('[1,2,3]'));
 

// create json using JSON.stringify

// Exercise 2 solution
const planetsJson = '{"description": "Planets (including dwarf planets as recognized by the IAU) that orbit the Sun, with their natural satellites.","planets": [{"name": "Mercury","moons": []},{"name": "Venus","moons": []},{"name": "Earth","moons": ["Moon"]},{"name": "Mars","moons": ["Deimos","Phobos"]},{"name": "Ceres","moons": []},{"name": "Jupiter","moons": ["Metis","Adrastea","Amalthea","Thebe","Io","Europa","Ganymede","Callisto","Themisto","Leda","Himalia","Lysithea","Elara","S/2000 J11","S/2003 J12","Carpo","Euporie","S/2003 J3","S/2003 J18","Orthosie","Euanthe","Harpalyke","Praxidike","Thyone","S/2003 J16","Iocaste","Mneme","Hermippe","Thelxinoe","Helike","Ananke","S/2003 J15","Eurydome","Arche","Herse","Pasithee","S/2003 J10","Chaldene","Isonoe","Erinome","Kale","Aitne","Taygete","S/2003 J9","Carme","Sponde","Megaclite","S/2003 J5","S/2003 J19","S/2003 J23","Kalyke","Kore","Pasiphae","Eukelade","S/2003 J4","Sinope","Hegemone","Aoede","Kallichore","Autonoe","Callirrhoe","Cyllene","S/2003 J2"]},{"name": "Saturn","moons": ["Tarqeq","Pan","Daphnis","Atlas","Prometheus","Pandora","Epimetheus","Janus","Aegaeon","Mimas","Methone","Anthe","Pallene","Enceladus","Tethys","Calypso","Telesto","Polydeuces","Dione","Helene","Rhea","Titan","Hyperion","Iapetus","Kiviuq","Ijiraq","Phoebe","Paaliaq","Skathi","Albiorix","S/2007 S2","Bebhionn","Erriapo","Siarnaq","Skoll","Tarvos","Greip","S/2004 S13","Hyrrokkin","Mundilfari","S/2006 S1","Jarnsaxa","Narvi","Bergelmir","S/2004 S17","Suttungr","Hati","S/2004 S12","Bestla","Farbauti","Thrymr","S/2007 S3","Aegir","S/2004 S7","S/2006 S3","Kari","Fenrir","Surtur","Ymir","Loge","Fornjot"]},{"name": "Uranus","moons": ["Cordelia","Ophelia","Bianca","Cressida","Desdemona","Juliet","Portia","Rosalind","Cupid","Belinda","Perdita","Puck","Mab","Miranda","Ariel","Umbriel","Titania","Oberon","Francisco","Caliban","Stephano","Trinculo","Sycorax","Margaret","Prospero","Setebos","Ferdinand"]},{"name": "Neptune","moons": ["Naiad","Thalassa","Despina","Galatea","Larissa","Proteus","Triton","Nereid","Halimede","Sao","Laomedeia","Psamathe","Neso"]},{"name": "Pluto","moons": ["Charon","Styx","Nix","Kerberos","Hydra"]},{"name": "Haumea","moons": ["Namaka","Hiiaka"]},{"name": "Makemake","moons": []},{"name": "Eris","moons": ["Dysnomia"]}]}';

const planets = JSON.parse(planetsJson);
console.log(planets);
console.log(planets.planets);
console.log(planets.planets[5]);
const jupitersMoons = planets.planets[5].moons;
console.log(jupitersMoons);
const numberOfJupiterMoons = jupitersMoons.length;

console.log(jupitersMoons[numberOfJupiterMoons - 1]);


/*
FETCH
Uses ajax technology: load data quickly and asynchronously, or in the background without delaying page rendering.
*/
// Here we use the fetch method to get some json of a website
fetch('http://api.open-notify.org/astros.json')
    .then(response => response.json())
    .then((astronauts) => {
        console.log(astronauts);
        // HERE IS WHERE YOU WRITE YOUR CODE!!!!!!!!
    });

console.log(planets.description);

/*
API - Application Programming Interface

What is an interface? Programmers can use an api to access complex functionality in a simple way. 
Electricity socket. You just plug your appliance into the wall and it works. 
We dont have to worry about the wiring or anything. The complex functionality has been abstracted away.

Web API's are like that, but just for getting data from a server. 
There are some funny apis to play with: 
- http://deckofcardsapi.com/
- https://github.com/toddmotto/public-apis

This incredibly unique service generates true random numbers by measuring quantum fluctuations of a vacuum in real-time!
https://qrng.anu.edu.au/API/jsonI.php?length=1&type=uint8&#8217
https://yesno.wtf/api/

*/
