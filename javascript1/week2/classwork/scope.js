
let area = 12;
function getCircleArea(radius) {
    // local scope
    const pi = 3;
    // let area: will create the local
    // variable area 
    area = pi * radius * radius;
    //console.log("Inside function: area = ", area);
    return area;
}
let returnedValue = getCircleArea(5);

console.log(area);
