function getAddition(number1 ,number2) {
    let answer = number1 + number2;
    return answer;
}
let random = getAddition(23, 45);
console.log(random);

function printAddition(number1, number2) {
    if (number1 < 0) {
        console.error("Negative numbers not allowed.")
        return;
    }
    let answer = number1 + number2;
    console.log(answer);
}
printAddition(-23, 45);