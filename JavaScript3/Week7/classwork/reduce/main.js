people = [
    {name: 'Oliver', age: 12},
    {name: 'Christopher', age: 17},
    {name: 'Benjamin', age: 43},
    {name: 'Abed', age: 15},
    {name: 'mikael', age: 67},
    {name: 'Badr', age: 99}
]


const underagePeople = people.filter(function(person) {
    return person.age < 18
})

console.log(underagePeople)

const ages = people.map(function(person) {
    return person.age
})

console.log(ages)


function reduceTotalAge(accumulator, currentValue) {
    console.log(accumulator, currentValue)
    return accumulator + currentValue.age
}

const totalAge = people.reduce(reduceTotalAge, 0)

console.log('total age: ' + totalAge)
