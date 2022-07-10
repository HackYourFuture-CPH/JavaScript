fetch('http://api.open-notify.org/astros.json')
.then(response => response.json())
.then(data => {
    const astronauts = data.people;
    const numberAstronauts = data.number;
    const headerStr = `There are ${numberAstronauts} astronauts in space, they are:`

    // now add headerStr to the Dom
    const h1 = document.createElement("h1")
    h1.innerHTML = headerStr;
    document.body.appendChild(h1)

    // add astronauts to the dom
    const ul = document.createElement("ul")
    // for loop
    astronauts.forEach(astronaut => {
        // add astronaut
        const li = document.createElement("li")
        li.innerHTML = `${astronaut.name}, ${astronaut.craft}`
        ul.appendChild(li)
    });
    document.body.appendChild(ul)
});