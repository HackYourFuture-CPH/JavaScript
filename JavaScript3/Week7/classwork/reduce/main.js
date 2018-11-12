people = [
    {name: 'Oliver', age: 12},
    {name: 'Christopher', age: 17},
    {name: 'Benjamin', age: 43},
    {name: 'Abed', age: 15},
    {name: 'mikael', age: 67},
    {name: 'Badr', age: 99}
]

// Filter example
const underagePeople = people.filter(function(person) {
    return person.age < 18
})

console.log('Under age people: ', underagePeople)

// Map example
const ages = people.map(function(person) {
    return person.age
})

console.log('All ages: ', ages)



// Adding all ages with a for loop
let totalAge = 0;
for (let i = 0; i < people.length; i++) {
    totalAge = totalAge + people[i].age;
}

console.log('Total age for loop: ', totalAge)


// Adding all ages with reduce
function reduceFunction(accumulator, currentValue) {
    console.log(accumulator, currentValue)
    return accumulator + currentValue.age
}

const totalAgeReduce = people.reduce(reduceFunction, 0)

console.log('Total age reduce: ', totalAgeReduce)
