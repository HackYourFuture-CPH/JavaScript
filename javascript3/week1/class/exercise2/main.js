const output = document.getElementById("output");

fetch("http://api.open-notify.org/astros.json")
  .then(response => response.json())
  .then(response => {
    console.log(response);

    const people = response.people;

    const header = document.createElement("h1");
    header.innerText = `There are ${people.length} astronauts in space, they are:`;
    output.appendChild(header);

    for (let i = 0; i < people.length; i++) {
      const person = people[i];

      console.log(person);

      const p = document.createElement("p");
      p.innerText = person.name;
      output.appendChild(p);
    }
  });
