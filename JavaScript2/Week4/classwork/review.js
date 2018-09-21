/* Array stuff */

const array = [1, 3, 3, 44, "superstar"];

console.log(array.indexOf(4));
console.log(array.indexOf(3));

const index = array.indexOf("superstar");
console.log(array[index]);

console.log('default array', array);

array.shift();

array.unshift(-4, 5, 7);

console.log('new array', array);

/*console.log(array[1]);

console.log(array);

array.push(4);
array.push(88);

console.log(array);

array.pop();

console.log('new array', array);*/


/*const a = [];

a.push({ name: 'younes' });
a.push(5);
a.push('hello world');

console.log(a);*/



const array = [1, 2, 3, 4];
console.log(array);
array.push(3, 4);
console.log(array);
array.shift();
console.log(array);
array.unshift(5);
console.log(array);
array.pop();
console.log(array);

// 2

function checkIfExist(array, variable) {
  const index = array.indexOf(variable);
  return index !== -1;
  /*if (index === -1) return false;
  else return true;*/
}

let a = checkIfExist(["younes", 1, 2], "younes");
console.log(a);
a = checkIfExist(["younes", 1, 2, 4], 4);


const array = ["hello", "younes", "test", 78];
const array2 = [1, 2, 3 ,4];
const array3 = ['pasta', 'dish2'];

function myFunc(arg1) {
  return "hello world " + arg1
}

function by2(element) {
  return element * 2;
}

function prepareDish(element) {
  return element + ' ready';
}

const newArray = array3.map(prepareDish);
console.log(newArray);


/*

function younesMap(array, func) {
  const newArray = [];
  for (let i = 0; i < array.length; ++i) {
    let result = func(array[i]);
    newArray.push(result);
  }
  return newArray;
}

const result = younesMap(["hello", "younes", "test", 78], myFunc);

console.log(result);

*/
console.log("loaded");

const array2 = [
  {
    name: 'younes',
    important: false
  },
  {
    name: 'personX',
    important: true
  },
  {
    name: 'personY',
    important: true
  }
];

function getImportant(element) {
  if (element.important == true) return true;
  else return false;
}

function getRegular(element) {
  if (element.important == false) return true;
  else return false;
}

const importantArray = array2.filter(getImportant);
const regularArray = array2.filter(getRegular);
console.log(importantArray);
console.log(regularArray);

function myFunc(element) {
  return array2.name;
}

console.log(array2.map(myFunc));




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
    },
];

console.log(cars);


// cars object vs cars.json
// // https://jsonformatter.org/

// There is one big difference from javascript objects to JSON: 
// Keys are string encoded with double quotes and no trailing commas.
// Json is quite strict

const jsonCars = JSON.parse('{"cars":[{"make":"BMW","color":"lightgrey","speed":96},{"make":"Fiat","color":"lightcyan","speed":33},{"make":"BMW","color":"lightyellow","speed":94},{"make":"Skoda","color":"lightcoral","speed":72,"add ons":[{"name":"GPS","price":1000},{"name":"Assisted drive","price":2000},{"name":"Bluetooth","price":500}]}]}');

/*
console.log(jsonCars);
console.log(jsonCars.cars);
console.log(jsonCars.cars[2].color);
*/


const planets = JSON.parse('{"description":"Planets (including dwarf planets as recognized by the IAU) that orbit the Sun, with their natural satellites.","planets":[{"name":"Mercury","moons":[]},{"name":"Venus","moons":[]},{"name":"Earth","moons":["Moon"]},{"name":"Mars","moons":["Deimos","Phobos"]},{"name":"Ceres","moons":[]},{"name":"Jupiter","moons":["Metis","Adrastea","Amalthea","Thebe","Io","Europa","Ganymede","Callisto","Themisto","Leda","Himalia","Lysithea","Elara","S/2000 J11","S/2003 J12","Carpo","Euporie","S/2003 J3","S/2003 J18","Orthosie","Euanthe","Harpalyke","Praxidike","Thyone","S/2003 J16","Iocaste","Mneme","Hermippe","Thelxinoe","Helike","Ananke","S/2003 J15","Eurydome","Arche","Herse","Pasithee","S/2003 J10","Chaldene","Isonoe","Erinome","Kale","Aitne","Taygete","S/2003 J9","Carme","Sponde","Megaclite","S/2003 J5","S/2003 J19","S/2003 J23","Kalyke","Kore","Pasiphae","Eukelade","S/2003 J4","Sinope","Hegemone","Aoede","Kallichore","Autonoe","Callirrhoe","Cyllene","S/2003 J2"]},{"name":"Saturn","moons":["Tarqeq","Pan","Daphnis","Atlas","Prometheus","Pandora","Epimetheus","Janus","Aegaeon","Mimas","Methone","Anthe","Pallene","Enceladus","Tethys","Calypso","Telesto","Polydeuces","Dione","Helene","Rhea","Titan","Hyperion","Iapetus","Kiviuq","Ijiraq","Phoebe","Paaliaq","Skathi","Albiorix","S/2007 S2","Bebhionn","Erriapo","Siarnaq","Skoll","Tarvos","Greip","S/2004 S13","Hyrrokkin","Mundilfari","S/2006 S1","Jarnsaxa","Narvi","Bergelmir","S/2004 S17","Suttungr","Hati","S/2004 S12","Bestla","Farbauti","Thrymr","S/2007 S3","Aegir","S/2004 S7","S/2006 S3","Kari","Fenrir","Surtur","Ymir","Loge","Fornjot"]},{"name":"Uranus","moons":["Cordelia","Ophelia","Bianca","Cressida","Desdemona","Juliet","Portia","Rosalind","Cupid","Belinda","Perdita","Puck","Mab","Miranda","Ariel","Umbriel","Titania","Oberon","Francisco","Caliban","Stephano","Trinculo","Sycorax","Margaret","Prospero","Setebos","Ferdinand"]},{"name":"Neptune","moons":["Naiad","Thalassa","Despina","Galatea","Larissa","Proteus","Triton","Nereid","Halimede","Sao","Laomedeia","Psamathe","Neso"]},{"name":"Pluto","moons":["Charon","Styx","Nix","Kerberos","Hydra"]},{"name":"Haumea","moons":["Namaka","Hiiaka"]},{"name":"Makemake","moons":[]},{"name":"Eris","moons":["Dysnomia"]}]}');
console.log(planets);
console.log(planets.planets[5].moons[62]);






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
// https://jsonformatter.org/
// To check if your Json is valid use: www.jsonformatter.com

// Get the second add ons price in the cars.json
