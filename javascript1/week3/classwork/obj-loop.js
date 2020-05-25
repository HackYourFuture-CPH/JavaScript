let students_obj = [
    {name: "Elias", age: 33, country: "Eritrea"},
    {name: "Deepti", age: 21, country : "India"},
    {name: "Ahmad", age: 25, country : "Syria"},
    {name: "Florin", age: 30, country : "Romania"},
    {name: "Nuha", age: 21, country : "Iraq"},
]
// Use for loop to iterate this array of objects
// and print the name, age and country of all students.
keys = ["name", "age", "country"]
// "Elias" : 33 (Eritrea)
// "Deepti" : 21 (India)
for (let i = 0; i < students_obj.length; i++) {
    for (let j = 0; j < keys.length; j++) {
        if (keys[j] == "name") {
            console.log("\"", students_obj[i][keys[j]], "\"");
        } else {
            console.log(students_obj[i][keys[j]]);    
        }
    }
}