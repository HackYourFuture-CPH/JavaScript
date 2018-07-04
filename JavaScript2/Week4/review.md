# REVIEW JavaScript week 4

```
This review covers:
• JSON
• Code debugging using the browser
• Functions + JSON/Arrays
• Code flow (order of execution)
• (capturing user input)
• Structuring code files
```

## Review by Pankaj

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

```
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

I also like following exercise from HYF-CPH repo - https://github.com/HackYourFuture-CPH/JavaScript/blob/master/JavaScript2/Week4/code/exercises.js


#### Exercise 2
```
Go through planets.json and figure out the data structure.
const planetsFlattened = JSON.parse('{"description": "Planets (including dwarf planets as recognized by the IAU) that orbit the Sun, with their natural satellites.","planets": [{"name": "Mercury","moons": []},{"name": "Venus","moons": []},{"name": "Earth","moons": ["Moon"]},{"name": "Mars","moons": ["Deimos","Phobos"]},{"name": "Ceres","moons": []},{"name": "Jupiter","moons": ["Metis","Adrastea","Amalthea","Thebe","Io","Europa","Ganymede","Callisto","Themisto","Leda","Himalia","Lysithea","Elara","S/2000 J11","S/2003 J12","Carpo","Euporie","S/2003 J3","S/2003 J18","Orthosie","Euanthe","Harpalyke","Praxidike","Thyone","S/2003 J16","Iocaste","Mneme","Hermippe","Thelxinoe","Helike","Ananke","S/2003 J15","Eurydome","Arche","Herse","Pasithee","S/2003 J10","Chaldene","Isonoe","Erinome","Kale","Aitne","Taygete","S/2003 J9","Carme","Sponde","Megaclite","S/2003 J5","S/2003 J19","S/2003 J23","Kalyke","Kore","Pasiphae","Eukelade","S/2003 J4","Sinope","Hegemone","Aoede","Kallichore","Autonoe","Callirrhoe","Cyllene","S/2003 J2"]},{"name": "Saturn","moons": ["Tarqeq","Pan","Daphnis","Atlas","Prometheus","Pandora","Epimetheus","Janus","Aegaeon","Mimas","Methone","Anthe","Pallene","Enceladus","Tethys","Calypso","Telesto","Polydeuces","Dione","Helene","Rhea","Titan","Hyperion","Iapetus","Kiviuq","Ijiraq","Phoebe","Paaliaq","Skathi","Albiorix","S/2007 S2","Bebhionn","Erriapo","Siarnaq","Skoll","Tarvos","Greip","S/2004 S13","Hyrrokkin","Mundilfari","S/2006 S1","Jarnsaxa","Narvi","Bergelmir","S/2004 S17","Suttungr","Hati","S/2004 S12","Bestla","Farbauti","Thrymr","S/2007 S3","Aegir","S/2004 S7","S/2006 S3","Kari","Fenrir","Surtur","Ymir","Loge","Fornjot"]},{"name": "Uranus","moons": ["Cordelia","Ophelia","Bianca","Cressida","Desdemona","Juliet","Portia","Rosalind","Cupid","Belinda","Perdita","Puck","Mab","Miranda","Ariel","Umbriel","Titania","Oberon","Francisco","Caliban","Stephano","Trinculo","Sycorax","Margaret","Prospero","Setebos","Ferdinand"]},{"name": "Neptune","moons": ["Naiad","Thalassa","Despina","Galatea","Larissa","Proteus","Triton","Nereid","Halimede","Sao","Laomedeia","Psamathe","Neso"]},{"name": "Pluto","moons": ["Charon","Styx","Nix","Kerberos","Hydra"]},{"name": "Haumea","moons": ["Namaka","Hiiaka"]},{"name": "Makemake","moons": []},{"name": "Eris","moons": ["Dysnomia"]}]}');

Using the planetsFlattened variable:
Console.log jupiters last moon.
```

[JavaScript2/Week4/code/exercises.js](https://github.com/HackYourFuture-CPH/JavaScript/blob/master/JavaScript2/Week4/code/exercises.js)

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


