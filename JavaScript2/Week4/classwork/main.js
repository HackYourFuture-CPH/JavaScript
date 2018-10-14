//exercise
// Make the string into a json string, so the can parse it like this

    const almostJson = `[{
        name: "rohit",
        age: null
    }, {
        name: mikael,
        pet name: mike,
        age: 35
    }]`;

    const solution = JSON.parse(`[{
        "name": "rohit",
        "age": null
    }, {
        "name": "mikael",
        "pet name": "mike",
        "age": 35
    }]`);

    console.log(solution);

//json repos

    //output the the of the first the many repos (from jsonData.js)

    console.log(JSON.parse(repos)[0].name);