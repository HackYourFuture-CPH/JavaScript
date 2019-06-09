const btn = document.querySelector('button.myBtn');

console.log(btn);

function myBtnClickHandler () {
  btn.innerHTML = 'You did click me!, yayyyy!!!';
}

btn.addEventListener('click', myBtnClickHandler);

