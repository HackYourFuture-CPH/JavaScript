const myConstant = 123; // global scope
function getCircleArea(radius) {
    const pi = 3;
    console.log(myConstant + 'and' + pi);
    function getSquare(num) {
        //let pi = 4.5;
        let innnerVar = 6;
        console.log('myConstant = ' + myConstant);
        console.log('pi = ' + pi);
        return num * num;
    }
    console.log(innerVar);
    let answer = pi * getSquare(radius);
    return answer;
}

let output = getCircleArea(5);