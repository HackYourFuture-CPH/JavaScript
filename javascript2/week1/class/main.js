// const square = document.querySelector('.square');
// console.log(square);
// const innerSquare = document.createElement('div');
// console.log(innerSquare);
// document.body.insertBefore(innerSquare, square);
// // document.body.appendChild(innerSquare);
// // div.style.backgroundColor = 'red';
// div.style.height = '100px';
// const imageElement = document.createElement('img');
// imageElement.src = 'http://foo/bar.png'
// div.style.width = '100px';
// innerSquare.classList.add('red', 'small');
//
// const li = document.createElement('li');
// li.innerText = 'Whatever';
// square.appendChild(li);
// innerSquare.innerText = 'Hello there!';
// square.innerHTML = '<div class="square green small">Hello there!</div>';
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

const button = document.querySelector("#myButton");
console.log(button);

button.addEventListener("click", function () {
    console.log("button was clicked");
    button.style.backgroundColor = "pink";
});

const form = document.querySelector("#myForm");
console.log(form);

const nameInput = document.querySelector("#nameInput");

form.addEventListener("submit", function (event) {
    event.preventDefault();

    const value = nameInput.value;

    console.log(value);

    // if(value === '') {
    //     event.preventDefault();
    //     alert('Name is required');
    // console.log('saved!', value);
    // }
});

const specialButton = document.querySelector("#specialButton");
specialButton.addEventListener("click", function () {
    // console.log("doing something special");

    setTimeout(function() {
        console.log('1 second passed');
    }, 1000);
});

const passwordInput = document.querySelector("#passwordInput");
passwordInput.addEventListener("input", function () {
    const value = passwordInput.value;
    console.log(value);
});


button.addEventListener('mouseover', function () {
    console.log('mouseover');
});

window.addEventListener('mousemove', function (event) {
    const x = event.clientX;
    const y = event.clientY;
    // console.log('Mouse is at x: ' + x + ' and y: ' + y);
});


setInterval(function () {
   console.log('timeout');
}, 1000);



