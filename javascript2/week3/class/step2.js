function myFunction(f) {
    console.log(f)
    const result = f();
    console.log(result);
}

function helloFunction() {
    return 'hello';
}

function helloInDanish() {
    return 'goddag';
}




// myFunction(2);
myFunction(helloFunction);
myFunction(helloInDanish);


const arr = [1, 2, 3];

function map(arrayToMap, mapFunction) {
    let result = [];
    for (let i = 0; i < arrayToMap.length; i++) {
        const r = mapFunction(arrayToMap[i]);
        result.push(r);
    }
    return result;
}

const newArray = arr.map(n => n * n);
const newArray = map(arr, n => n * n);
