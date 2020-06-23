// Object = { key1: value1, key2: value2,...}
/** 
 * Object is a collection of properties.
 * Each property is a key-value pair.
 * 
 */

let student = {
    // 0 1 2 3 4
    // E l i a s
    name: "Elias", // property 1
    age : 33, // property 2
    country : "Eritrea",
    height : 1.71,
    isMarried : true,
    children : ['Natha', 'Hosie']
};

//console.log(student['name']);
//console.log(student.name); // . is called a member reference operator

console.log(student['name'][3]);
console.log(student.name[3]);

console.log(student["country"]);

