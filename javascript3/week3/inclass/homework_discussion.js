// Timeout
function setTimeoutPromise(time) {
    return new Promise(resolve => {
        setTimeout(function() {
            resolve();
        }, time)
    })
}
setTimeoutPromise(3000).then(() => {
    console.log("Called after 3 seconds ")
})

// Rewrite navigator.geolocation.getCurrentPosition

let currentLocation = document.createElement("p")
document.body.appendChild(currentLocation);

function getCurrentPosition() {
    return new Promise((resolve, reject) => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(position => {
                resolve(position.coords);
            })
        } else {
            reject();
        }
    })
}
getCurrentPosition()
    .then((data) => {
        console.log(data.longitude, data.latitude)
    })
    .catch(() => {
        console.log("Geolocation is not supported by this browser.")
    })

//Fetching and waiting with Promise
function setTimeoutPromise(time) {
    return new Promise(resolve => {
        setTimeout(function() {
            resolve();
        }, time)
    })
}

function getDogsNames() {
    return fetch("https://dog.ceo/api/breeds/list/all")
}

setTimeoutPromise(3000)
    .then(getDogsNames)
    .then(response => response.json())
    .then(data => {
        console.log(Object.keys(data.message))
    })