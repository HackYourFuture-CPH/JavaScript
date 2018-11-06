# REVIEW JavaScript week 4

## Arrays

Lets create a new array and print it out

```js
const firstArray = ['milk', 'sugar', 'butter', 'flour', 'eggs'];

console.log(firstArray);

// get the last element of the array using array index
// Remember the index starts at 0.
const lastElementHardCoded = firstArray[4];

// This is smarter as we can add elements to the firstArray 
// and still get the right last element
const lastElement = firstArray[firstArray.length - 1];
```


## Adding and removing elements from array

We can add and remove elements from an array in 4 ways:

Push: Adds a new element to the back of the array
Pop: Removes an element from the back of the array
Unshift: Adds a new element to the front of the array
Shift: Removes a new element from the front of the array

Remember the rule: Shifting changes the first element of the array (it works in the front of the array). pop and push works in the back of the array. And the word push is longer than pop, so it makes the array longer. The same with shift and unshift. 

```js
// lets keep using firstArray:

firstArray.push('pizza');
console.log(firstArray) // logs: ['milk', 'sugar', 'butter', 'flour', 'eggs', 'pizza']

firstArray.pop();
console.log(firstArray) // logs: ['milk', 'sugar', 'butter', 'flour', 'eggs']

firstArray.unshift('bagel');
console.log(firstArray) // logs: ['bagel', 'milk', 'sugar', 'butter', 'flour', 'eggs']

firstArray.shift();
console.log(firstArray) // logs: ['milk', 'sugar', 'butter', 'flour', 'eggs']

```



## Array methods filter, map and sort

### Filter

The filter function works on arrays and it filters out elements in our array. 
It takes a function as input. This function is called on every element in the array. Just like forEach. If this function we create returns true the element is saved in the, if we return false the element is filtered out.


```js
// lets first create an array of three cars

const cars = [
    {
        make: 'Volvo',
        speed: 45,
        color: 'lightYellow',
    },
    {
        make: 'BMW',
        speed: 87,
        color: 'lightBlue',
    },
    {
        make: 'Fiat',
        speed: 78,
        color: 'lightCyan',
    }
];

// Lets get only cars with a speed larger than 60
const fastCars = cars.filter(function(car) {
    // This function is called for every car in the cars array
    if (car.speed > 60) {
        // save the car
        return true;
    } else if (car.speed <= 60) {
        // filter out the cars that are slower than 60
        return false;
    }
});

console.log(fastCars); // logs the BMW and the Fiat
```



### Map

The map function works on arrays. It maps (think transform) the elements of an array. Or from MDN: "The map() method creates a new array with the results of calling a provided function on every element in the calling array."


```js
// lets use the same cars array

// Lets transfrom it from an array of car objects to an array of car colors
const carColors = cars.map(function(car) {
    return car.color;
});

console.log(carColors); // ['lightYellow', 'lightBlue', 'lightCyan']

const carSpeeds = cars.map(function(car) {
    return car.speed;
});

console.log(carSpeeds); // [45, 87, 78]
```


### Sort

The sort function works on arrays. It sorts the elements of the array.
To see details see here: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort

```js
// lets use the same cars array

// Lets sort the cars after speed ascending
const sortedCars = cars.sort(function(a, b) {
    return a.speed - b.speed;
});

console.log(sortedCars); // it will return an array with the BMW object first, then the fiat and then the volvo
```


## Further useful array functions

IndexOf finds the index of an element in the array
Slice creates a subset of an array
Reverse reverses an array

```js
const firstArray = ['milk', 'sugar', 'butter', 'flour', 'eggs'];

console.log(firstArray.indexOf('sugar')); // 1

console.log(firstArray.slice(0, 2)); // ['milk', 'sugar']

console.log(firstArray.reverse()); // [, 'eggs', 'flour', 'butter' ,'sugar', 'milk']
```

Suggested exercises to use during the session.

#### Exercise 1
```
Add your favorite person to a list of famous people and show them on a HTML page

1. Copy JSON text from this URL - https://gist.githubusercontent.com/pankaj28843/3d637f1d50f681ab2b21b66573c7a3c3/raw/b7636197ea4517c38cdae519acea50112bf29850/famous-people.json
2. Store above JSON text into a variable called `jsonString`
3. Parse value of `jsonString` variable and store it in a new variable called `famousPeople`
4. Print value of `famousPeople` on console
5. Add details of another famous person at the beginning of `famousPeople` array
6. Show following details about each person in `famousPeople` array on a HTML page:
    a. Name of the person
    b. Their contributions
    c. Their picture
```

For code flow, mentors can use following code and show how everything gets executed using this tool - http://latentflip.com/loupe/

```js
function firstFunction() {
    for (let i = 0; i < 5; i++) {
        console.log(i);
    }

    secondFunction();
    console.log('In first function');
}


function testFunction() {
    console.log('This is a test!');
}


function secondFunction() {
    console.log('Inside second function');
    testFunction();
}


firstFunction();
```



#### Exercise 2
```
Go through planets.json and figure out the data structure.
const planetsFlattened = JSON.parse('{"description": "Planets (including dwarf planets as recognized by the IAU) that orbit the Sun, with their natural satellites.","planets": [{"name": "Mercury","moons": []},{"name": "Venus","moons": []},{"name": "Earth","moons": ["Moon"]},{"name": "Mars","moons": ["Deimos","Phobos"]},{"name": "Ceres","moons": []},{"name": "Jupiter","moons": ["Metis","Adrastea","Amalthea","Thebe","Io","Europa","Ganymede","Callisto","Themisto","Leda","Himalia","Lysithea","Elara","S/2000 J11","S/2003 J12","Carpo","Euporie","S/2003 J3","S/2003 J18","Orthosie","Euanthe","Harpalyke","Praxidike","Thyone","S/2003 J16","Iocaste","Mneme","Hermippe","Thelxinoe","Helike","Ananke","S/2003 J15","Eurydome","Arche","Herse","Pasithee","S/2003 J10","Chaldene","Isonoe","Erinome","Kale","Aitne","Taygete","S/2003 J9","Carme","Sponde","Megaclite","S/2003 J5","S/2003 J19","S/2003 J23","Kalyke","Kore","Pasiphae","Eukelade","S/2003 J4","Sinope","Hegemone","Aoede","Kallichore","Autonoe","Callirrhoe","Cyllene","S/2003 J2"]},{"name": "Saturn","moons": ["Tarqeq","Pan","Daphnis","Atlas","Prometheus","Pandora","Epimetheus","Janus","Aegaeon","Mimas","Methone","Anthe","Pallene","Enceladus","Tethys","Calypso","Telesto","Polydeuces","Dione","Helene","Rhea","Titan","Hyperion","Iapetus","Kiviuq","Ijiraq","Phoebe","Paaliaq","Skathi","Albiorix","S/2007 S2","Bebhionn","Erriapo","Siarnaq","Skoll","Tarvos","Greip","S/2004 S13","Hyrrokkin","Mundilfari","S/2006 S1","Jarnsaxa","Narvi","Bergelmir","S/2004 S17","Suttungr","Hati","S/2004 S12","Bestla","Farbauti","Thrymr","S/2007 S3","Aegir","S/2004 S7","S/2006 S3","Kari","Fenrir","Surtur","Ymir","Loge","Fornjot"]},{"name": "Uranus","moons": ["Cordelia","Ophelia","Bianca","Cressida","Desdemona","Juliet","Portia","Rosalind","Cupid","Belinda","Perdita","Puck","Mab","Miranda","Ariel","Umbriel","Titania","Oberon","Francisco","Caliban","Stephano","Trinculo","Sycorax","Margaret","Prospero","Setebos","Ferdinand"]},{"name": "Neptune","moons": ["Naiad","Thalassa","Despina","Galatea","Larissa","Proteus","Triton","Nereid","Halimede","Sao","Laomedeia","Psamathe","Neso"]},{"name": "Pluto","moons": ["Charon","Styx","Nix","Kerberos","Hydra"]},{"name": "Haumea","moons": ["Namaka","Hiiaka"]},{"name": "Makemake","moons": []},{"name": "Eris","moons": ["Dysnomia"]}]}');

Using the planetsFlattened variable:
Console.log jupiters last moon.
```


#### Exercise 3 
```
Imagine your are running a meal ordering website.
Orders come in from the web and we need to store them in a json file.

create a json file with two orders that contain at least these things:

Order name
Order id
Price
List of drinks with the order
Order extras (fx cheese, lettuce etc.)
```


