const img = document.createElement("img")
img.style.width = "400px"
document.body.appendChild(img)

const div = document.createElement("div")
document.body.appendChild(div)

function processDog(data) {
    // console.log(img)
    // console.log(data)
    img.src = data.message;
}

function fetchDog() {
    fetch('https://dog.ceo/api/breeds/image/random')
    .then(response => response.json())
    .then(processDog);
}

function fetchDogOfBreed(dogBreed) {
    fetch(`https://dog.ceo/api/breed/${dogBreed}/images/random`)
    .then(response => response.json())
    .then(processDog);
}

function fetchBreed() {
    fetch('https://dog.ceo/api/breeds/list/all')
    .then(response => response.json())
    .then(data => {
        const dogBreeds = Object.keys(data.message);
        // console.log(dogBreeds)
        const randomIdx = Math.floor(dogBreeds.length*Math.random())
        const dogBreed = dogBreeds[randomIdx]
        // console.log(dogBreed)
        fetchDogOfBreed(dogBreed)
        div.innerHTML = dogBreed
    });
}

// setInterval(fetchDog, 2000) // first part
setInterval(fetchBreed, 2000)