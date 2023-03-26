const buttonTag = document.getElementById("eventButton")
const otherButtonTag = document.getElementById("otherEventButton")

const body = document.body

function changeColor(event) {
    console.log(event)
    event.target.style.backgroundColor = 'red';
}

buttonTag.addEventListener('click', changeColor);
otherButtonTag.addEventListener('click', changeColor);