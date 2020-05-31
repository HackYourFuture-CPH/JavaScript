//function simpleInterest(principle, numberOfYears, rateOfInterest)
function simpleInterest(p, n, r = 5.6) {
    console.log("p = ", p);
    console.log("n = ", n);
    console.log("r = ", r);
    let answer = (p * n * r) / 100;
    return answer;
}
console.log(simpleInterest(1000, 2)); //5.6 is default
console.log(simpleInterest(1000, 2, 3.2));