const buttonTag = document.getElementById("eventButton")

buttonTag.addEventListener("click", function(event){
    event.target.innerText = "Button clicked!"
})