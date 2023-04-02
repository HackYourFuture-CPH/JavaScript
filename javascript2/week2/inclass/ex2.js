function randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}
function generateListings(numberOfListings) {
    const listings = [];

    const listingType = ['House', 'Apartment', 'Shed', 'Dorm', 'Farm'];
    const listingFacilities = ['Parkering', 'Elevator', 'Altan', 'Have', 'Husdyr'];
    
    for (let i = 0; i < numberOfListings; i++) {
        const listing = {};
        const randomTypeIndex = randomIntFromInterval(0, listingType.length - 1);
        const numberOfFacilities = randomIntFromInterval(1, listingFacilities.length - 1);
        const facilities = [];
        for(let i = 0; i < numberOfFacilities; i++) {
            const randomIndexFacilities = randomIntFromInterval(0, listingFacilities.length - 1);
            const randomFacility = listingFacilities[randomIndexFacilities];
            
            if (!(facilities.includes(randomFacility))) {
                facilities.push(randomFacility);
            }
        }

        listing.type = listingType[randomTypeIndex];
        listing.facilities = facilities;
        listing.price = randomIntFromInterval(1, 10000);
        listing.hasGarden = Boolean(randomIntFromInterval(0, 1));
        listing.size = randomIntFromInterval(12, 1000);
        listing.img = `https://loremflickr.com/200/200/${listing.type}`

        listings.push(listing);
    }

    return listings;
}
const tableBodyTag = document.getElementById("tableBody")
const listings = generateListings(37);

// Filter listings
const filter = {
    type: 'farm',
    minPrice: 1500,
    maxPrice: 8000,
};

// const filterListings = (listings, filter) => {
//     const filteredItems = listings
//         .filter(listing => listing.type.toLowerCase() === filter.type)
//         .filter(listing => listing.price >= filter.minPrice)
//     return filteredItems
// }

const filterListings = (listings, filter) => {
    const allowedKeys = ["type", "facilities", "minPrice", "maxPrice", "hasGarden", "minSize", "maxSize"]
    const filteredKeys = Object.keys(filter).filter(element => allowedKeys.includes(element))
    // console.log(filteredKeys)

    const filterFunctions = {
        type: listing => listing.type.toLowerCase() === filter.type,
        minPrice: listing => listing.price >= filter.minPrice,
        maxPrice: listing => listing.price <= filter.maxPrice,
        // add key and filtering function for each allowedKey from allowedKeys
    }

    filteredKeys.forEach(key => {
        listings = listings.filter(filterFunctions[key])
    })

    return listings
}
    

const filteredItems = filterListings(listings, filter);

// Functions
const resetTable = () => {
    tableBodyTag.innerHTML = ""
}

const appendElement = (elementTag, innerText, trTag) => {
    const tag = document.createElement(elementTag)
    tag.innerText = innerText
    trTag.appendChild(tag)
}

const renderTableBody = (listings) => {
    resetTable()
    
    listings.forEach((listing, i) => {
        const trTag = document.createElement("tr")
        const cells = [
            {tag:"th", content: i + 1},
            {tag:"td", content: listing.type},
            {tag:"td", content: listing.facilities},
            {tag:"td", content: listing.price},
            {tag:"td", content: listing.hasGarden},
            {tag:"td", content: listing.size},
            {tag:"td", content: listing.img},

        ]
        cells.forEach(cell => {
            appendElement(cell.tag, cell.content, trTag)
        })

        tableBodyTag.appendChild(trTag)
    });
    
}

renderTableBody(filteredItems)