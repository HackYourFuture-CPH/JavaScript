# Exercises

## Exercise 1

Imagine your are running a meal ordering website.
Orders come in from the web and we need to store them in a json file.
Create a json file with two orders that contain at least these things:

- Order name
- Order id
- Price
- List of drinks
- Order extras (fx cheese, lettuce etc.)

## Exercise 2
1. Go through [planets.json](https://raw.githubusercontent.com/dariusk/corpora/master/data/science/planets.json) and explain the data structure.

1. Copy the following code into your javascript file:

```
const planetsJson = '{"description": "Planets (including dwarf planets as recognized by the IAU) that orbit the Sun, with their natural satellites.","planets": [{"name": "Mercury","moons": []},{"name": "Venus","moons": []},{"name": "Earth","moons": ["Moon"]},{"name": "Mars","moons": ["Deimos","Phobos"]},{"name": "Ceres","moons": []},{"name": "Jupiter","moons": ["Metis","Adrastea","Amalthea","Thebe","Io","Europa","Ganymede","Callisto","Themisto","Leda","Himalia","Lysithea","Elara","S/2000 J11","S/2003 J12","Carpo","Euporie","S/2003 J3","S/2003 J18","Orthosie","Euanthe","Harpalyke","Praxidike","Thyone","S/2003 J16","Iocaste","Mneme","Hermippe","Thelxinoe","Helike","Ananke","S/2003 J15","Eurydome","Arche","Herse","Pasithee","S/2003 J10","Chaldene","Isonoe","Erinome","Kale","Aitne","Taygete","S/2003 J9","Carme","Sponde","Megaclite","S/2003 J5","S/2003 J19","S/2003 J23","Kalyke","Kore","Pasiphae","Eukelade","S/2003 J4","Sinope","Hegemone","Aoede","Kallichore","Autonoe","Callirrhoe","Cyllene","S/2003 J2"]},{"name": "Saturn","moons": ["Tarqeq","Pan","Daphnis","Atlas","Prometheus","Pandora","Epimetheus","Janus","Aegaeon","Mimas","Methone","Anthe","Pallene","Enceladus","Tethys","Calypso","Telesto","Polydeuces","Dione","Helene","Rhea","Titan","Hyperion","Iapetus","Kiviuq","Ijiraq","Phoebe","Paaliaq","Skathi","Albiorix","S/2007 S2","Bebhionn","Erriapo","Siarnaq","Skoll","Tarvos","Greip","S/2004 S13","Hyrrokkin","Mundilfari","S/2006 S1","Jarnsaxa","Narvi","Bergelmir","S/2004 S17","Suttungr","Hati","S/2004 S12","Bestla","Farbauti","Thrymr","S/2007 S3","Aegir","S/2004 S7","S/2006 S3","Kari","Fenrir","Surtur","Ymir","Loge","Fornjot"]},{"name": "Uranus","moons": ["Cordelia","Ophelia","Bianca","Cressida","Desdemona","Juliet","Portia","Rosalind","Cupid","Belinda","Perdita","Puck","Mab","Miranda","Ariel","Umbriel","Titania","Oberon","Francisco","Caliban","Stephano","Trinculo","Sycorax","Margaret","Prospero","Setebos","Ferdinand"]},{"name": "Neptune","moons": ["Naiad","Thalassa","Despina","Galatea","Larissa","Proteus","Triton","Nereid","Halimede","Sao","Laomedeia","Psamathe","Neso"]},{"name": "Pluto","moons": ["Charon","Styx","Nix","Kerberos","Hydra"]},{"name": "Haumea","moons": ["Namaka","Hiiaka"]},{"name": "Makemake","moons": []},{"name": "Eris","moons": ["Dysnomia"]}]}';

const planets = JSON.parse(planetsJson);
```

Using the `planets` variable `console.log` jupiters last moon as simple as possible.

Try accessing jupiters last moon in a smarter way.

## Exercise 3
Use [this api](http://api.open-notify.org/astros.json) to fetch how many astronauts are currently in spaces. 

```
fetch('http://api.open-notify.org/astros.json/master/data/science/planets.json')
    .then(response => response.json())
    .then((planets) => {
        console.log(planets);

        // WRITE CODE HERE
    });
```

`console.log` the following using the data you get from the api:

```
There are NUMBER_OF_ASTRONAUTS astronauts in space, they are:
ASTRONAUT_NAME1
ASTRONAUT_NAME2
ASTRONAUT_NAME3
ASTRONAUT_NAME4
ASTRONAUT_NAME5
```

An example with 2 astronauts of this could be:

```
There are 2 astronauts in space, they are:
Benjamin Hughes
Jørgen Pedersen
```

## Exercise 4
Using this api: https://thecatapi.com/
https://api.thecatapi.com/v1/images/search?breed_ids=beng&api_key=YOUR_API_KEY
1. Find some information about cats that have the breed siberian.
1. Display 3 siberian cats.
https://api.thecatapi.com/v1/images/search?breed_ids=beng

DONT DO THIS API AGAIN! Do one with no authentication.


