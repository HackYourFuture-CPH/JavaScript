// PART 1
// Revising listeners

function handleClick(){
    console.log("Click")
}

function handleClick2(){
    console.log("Click2")
}

document.getElementById("button")
.addEventListener("click", handleClick);

document.getElementById("button")
.addEventListener("click", handleClick2);

document.getElementById("button")
.removeEventListener("click", handleClick2);

console.log("OK")

// PART 2
// Timeout and Interval

// const intervalID = setInterval(() => {
//     console.log("First")
// }, 1000)

// clearInterval(intervalID)

// PART 3
// Implementing timer as an example

// document.getElementById("button")
// .addEventListener("click", () => {
//     console.log("Click")
//     let x = 1;
//     const intervalID = setInterval(() => {
//         console.log(x);
//         x++;
//         if(x > 10)
//             clearInterval(intervalID);
//     }, 300)
// });

// PART 4
// Implementing timer as a packaged script

// function createTimer(times, tick, onTick, finish){
//     let count = 0;
//     const id = setInterval(() =>{
//         count++;
//         onTick();
//         if(count == times){
//             clearInterval(id);
//             finish();
//         }
//     }, tick);
// }

// let i = 20;

// const eachTime = () =>{
//     console.log(i);
//     i--;
// }

// const onFinish = () => {
//     console.log("Finished")
// }

// createTimer(20, 300, eachTime, onFinish)