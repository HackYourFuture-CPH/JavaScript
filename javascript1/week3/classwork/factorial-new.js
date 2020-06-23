function factorial(number) {
    if (number < 0) {
        return;
    }
    let fact = 1;
    for (let i = 2; i <= number; ++i) {
        fact = fact * i;
    }

    return fact;
}

console.log(factorial(0));