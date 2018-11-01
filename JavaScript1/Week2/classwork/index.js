

// variable: let , const , var

let name = 'Abed';
console.log('My name is ' + name );

name = 'Badr';
console.log('My name is ' + name );


// Number
const price1 = 4;
const price2 = "5.5";
const price3 = 6;
const sum = price1 + price2 + price3;
console.log(sum + ' type:' + typeof(sum));

// Boolean
let isSunnyDay = 33;
let myMood;

console.log(isSunnyDay +  ' type of isSunnyDay', typeof(isSunnyDay));

if (isSunnyDay < 20){
    myMood = 'nothappy';
} 
else if(isSunnyDay >= 20 && isSunnyDay < 33 ){
    myMood ='happy';  
} else{
    myMood = 'confused';
}

console.log('I\'m ' + myMood);

let hungry = (myMood == 'happy') ? 'hungry' : 'not hungry'; 
console.log('and I am ', hungry);


// Reserve keywords

let _class = '07';