/**
 * Get random integer between two numbers, found here: https://stackoverflow.com/a/7228322
 * @param {integer} min - The min number
 * @param {integer} max - The max number
 * @returns {Number} Random number between min and max
 */
function randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}


/**
 * Get an array with listing objects with random color and speed
 * @param {integer} numberOfListings - The number of listings 
 * @returns {array} Array containing the listing objects
 */
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

const listings = generateListings(20); // objects

console.log(listings)

// const filter = {
//     type: 'Farm',
//     minPrice: 1000,
//     maxPrice: 10000,
//     minSize: 20,
//     maxSize: 1000,
//     hasGarden: true,
// };

const filter = {
    facilities: ["Parkering", "Altan"]
};

const filterListings = (listings, filter) => {

	if('type' in filter){
		listings = listings.filter(item => item.type.toLowerCase() === filter.type.toLowerCase());
	}
	if('minPrice' in filter){
		listings = listings.filter(item => item.price > filter.minPrice);
	}
	if('maxPrice' in filter){
		listings = listings.filter(item => item.price < filter.maxPrice);
	}
	if('minSize' in filter){
		listings = listings.filter(item => item.size > filter.minSize);
	}
	if('maxSize' in filter){
		listings = listings.filter(item => item.size < filter.maxSize);
	}
	if('hasGarden' in filter){
		listings = listings.filter(item => item.hasGarden === filter.hasGarden);
	}
	if('facilities' in filter){
		for(let i=0; i < filter.facilities.length; i++){
			const facility = filter.facilities[i];
			listings = listings.filter(item => item.facilities.includes(facility));
		}
	}

	return listings;
}

const filtered_listings = filterListings(listings, filter);

console.log(filtered_listings)