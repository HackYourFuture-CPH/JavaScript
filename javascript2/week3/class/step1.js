function myFunction(functionThatSaysHelloInSomeLanguage) {
    functionThatSaysHelloInSomeLanguage();
    functionThatSaysHelloInSomeLanguage();
    functionThatSaysHelloInSomeLanguage();
}

function helloFunction() {
    console.log('hello');
}

function helloInDanish() {
    console.log("goddag");
}

myFunction(helloFunction);
myFunction(helloInDanish);
