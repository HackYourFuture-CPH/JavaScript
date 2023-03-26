const buttonTag = document.getElementById("eventButton")
const body = document.body
let isDarkMode = false

buttonTag.addEventListener("click", function(){
    if(!isDarkMode) {
        body.style.backgroundColor = "black"
        body.style.color = "white"
    } else {
        body.style.backgroundColor = "white"
        body.style.color = "black"
    }
    isDarkMode = !isDarkMode
})