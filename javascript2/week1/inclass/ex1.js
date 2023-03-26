const dishes = ["Pizza", "Falafel", "Dal"]

// add UL tag
const ulTag = document.createElement("ul")

// add many LI tags
for(dish of dishes) {
    const liTag = document.createElement("li")
    // add data to element
    liTag.innerText = dish
    // Workspace manipulation
    ulTag.appendChild(liTag)
}

// DOM manipulation
document.body.appendChild(ulTag)