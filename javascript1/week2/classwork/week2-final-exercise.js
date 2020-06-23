/*
* function that accepts two parameters
* string
* how many times to print it
* and
* it should print that string that many times.
*/
function logString(string, count) {
    // string = hello
   // count = 3
    for (let x = 1; x <= count; ++x) {
        console.log(string);
    }
}
logString('hello', 3);
logString('Hey', 12);

logString('asfasdf', 34);
