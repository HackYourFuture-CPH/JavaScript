const podcasts = [{
    name: 'The mystery om of Johan Klausen Varbourg',
    imageUrl: 'https://picsum.photos/536/354'
},
{
    name: 'Tips about dogs with small legs',
    imageUrl: 'https://picsum.photos/536/354'
},
{
    name: 'You, me, we and us',
    imageUrl: 'https://picsum.photos/536/354'
},
{
    name: 'Breakfast news - Dinner edition'
}
];

function attachImageToElement(imageUrl, element) {
    const imgTag = document.createElement("img")
    imgTag.src = imageUrl
    element.appendChild(imgTag)
}

// create list
const ulTag = document.createElement("ul")

for(podcast of podcasts) {
    // create many list items
    const liTag = document.createElement("li")

    // handle name, create, add data, attach
    const h1Tag = document.createElement("h1")    
    h1Tag.innerText = podcast.name
    liTag.appendChild(h1Tag)

    // handle image, create, add data, attach
    if(podcast.imageUrl) {
        attachImageToElement(podcast.imageUrl, liTag)
    }

    ulTag.appendChild(liTag)
}

// append to the dom
document.body.appendChild(ulTag)