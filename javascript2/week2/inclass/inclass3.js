apples = [
    {weight: 175, color: 'red', isPeeled: false, price: 0.5},
    {weight: 180, color: 'yellow', isPeeled: false, price: 0.6},
    {weight: 155, color: 'green', isPeeled: false, price: 0.4},
    {weight: 230, color: 'pink', isPeeled: false, price: 0.8},
    {weight: 140, color: 'red', isPeeled: false, price: 0.3},
    {weight: 200, color: 'yellow', isPeeled: false, price: 0.7},
    {weight: 165, color: 'green', isPeeled: false, price: 0.5},
    {weight: 250, color: 'pink', isPeeled: false, price: 0.9}
]
defaultOptions = {
    color: 'all'
}

// Form elements
const radioElements = document.getElementById("radioForm").appleRadios
const tableBodyTag = document.getElementById("tableBody")

// Functions
const resetTable = () => {
    tableBodyTag.innerHTML = ""
}

const appendElement = (elementTag, innerText, trTag) => {
    const tag = document.createElement(elementTag)
    tag.innerText = innerText
    trTag.appendChild(tag)
}

const renderTableBody = (apples, options) => {
    resetTable()

    if(options.color !== 'all') {
        apples = apples.filter(apple => apple.color === options.color)
    }

    apples = apples.map(apple => {
        apple.totalPrice = apple.weight * apple.price
        return apple
    })
    
    apples.forEach((apple, i) => {
        const trTag = document.createElement("tr")
        const cells = [
            {tag:"th", content: i + 1},
            {tag:"td", content: apple.weight},
            {tag:"td", content: apple.color},
            {tag:"td", content: apple.price},
            {tag:"td", content: apple.totalPrice},

        ]
        cells.forEach(cell => {
            appendElement(cell.tag, cell.content, trTag)
        })

        tableBodyTag.appendChild(trTag)
    });
    
}

radioElements.forEach(element => {
    element.addEventListener("change", event => {
        const options = {
            color: event.target.value
        }
        renderTableBody(apples, options)
    })
})

// main
renderTableBody(apples, defaultOptions)