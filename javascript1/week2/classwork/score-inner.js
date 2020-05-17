const myConstant = 123; // global
function getCircleArea(radius) { // outer

    console.log(myConstant);
    const pi = 3;

    function getSquare(num) { // inner
        const innerVariable = 56;
        console.log(myConstant);
        console.log(pi);
        return num * num;
    }

    let answer = pi * getSquare(radius);
    return answer;
}

console.log(getCircleArea(6));
