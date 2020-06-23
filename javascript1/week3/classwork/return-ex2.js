function testReturn(number) {
    if (number < 0) {
        console.error("negative number");
        return;
    }

    if (number > 1000) {
        console.error("Too large number");
        return;
    }

    console.log(number);
}
let answer = testReturn(3000);

console.log(answer);