const array = [True, True, True]

// array[0] && array[1] && array[2]
if(array.every(x => x)){
    console.log("Waiting for...")
}

// array[0] || array[1] || array[2]
if(array.some(x => x)){
    console.log("... Pizza")
}