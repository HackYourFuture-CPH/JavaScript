// for vs while

/**
 * When you are doing something with iterations
 * or indexing or traversing a list/container/array
 * , use "for" loops
 * 
 * When you don't know the condition where the loop
 * should end/break, then use while
 */

/*  let somethingStrangeHappens = false;
 let counter = 1;
while(true) {
    // do something
    counter += 1;
    if (counter == 1000) {
        somethingStrangeHappens = true;
    }
    if (somethingStrangeHappens) {
        break;
    }
} */

for (let x = 10; x > 0; x -= 1) {
    if (x % 2 == 0) {
        break;
    }
    console.log(x);
}
for (let x = 1; x <= 10; x+= 1) {
    if (x % 2 == 0) {
        continue;
    }
    console.log(x);
}
