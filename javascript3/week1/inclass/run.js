const jsonSample = `
{
    "data": [
        {
            "id": 1,
            "name": "John",
            "age": 25,
            "city": "New York"
        },
        {
            "id": 2,
            "name": "Peter",
            "age": 30,
            "city": "London"
        },
        {
            "id": 3,
            "name": "Mary",
            "age": 27,
            "city": "Paris"
        },
        {
            "id": 4,
            "name": "Bob",
            "age": 35,
            "city": "Tokyo"
        }
    ]
}
`;

console.log(typeof jsonSample)
// console.log(typeof jsonSample)

const jsonSampleParse = JSON.parse(jsonSample);
console.log(typeof jsonSampleParse)
console.log(jsonSample)