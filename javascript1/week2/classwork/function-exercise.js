// Name is in camel case
function getCircleArea(radius) {
    const pi = 3.14;
    let area = pi * radius * radius;
    console.log("Inside function");
    return area;
}

let area = getCircleArea(5);
console.log(area);