const button1 = document.querySelector('#button1');
const button2 = document.querySelector('#button2');

let count = 0;

function countUp() {
    console.log(count);
    count++;
}

button1.addEventListener('click', countUp);

button2.addEventListener('click', countUp);

// button1.removeEventListener('click', countUp);
