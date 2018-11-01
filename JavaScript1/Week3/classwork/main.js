let restaurants = [{
        restaurantId: 1,
        name: 'Pizza',
        menu: 'all kind of pizza',
        open: 12,
        close: 22,
        isOpen: true
    },
    {
        restaurantId: 2,
        name: 'Indian Spicy',
        menu: 'Indian Spicy Indian Spicy Indian SpicyIndian Spicy',
        open: 17,
        close: 22,
        isOpen: true
    },
    {
        restaurantId: 3,
        name: 'Thai delicious.',
        menu: 'Thai delicious Thai delicious. Thai delicious. Thai delicious.',
        open: 17,
        close: 22,
        isOpen: false
    },

    {
        restaurantId: 4,
        name: 'Burger Meal',
        menu: 'Burger Meal Burger Meal Burger Meal Burger Meal',
        open: 12,
        close: 22,
        isOpen: true
    },

    {
        restaurantId: 5,
        name: 'Sushi',
        menu: 'Sushi Sushi Sushi Sushi ',
        open: 11,
        close: 22,
        isOpen: true
    },
    {
        restaurantId: 6,
        name: 'Hot spicy',
        menu: 'Hot spicy Hot spicy Hot spicy Hot spicy Hot spicy',
        open: 10,
        close: 22,
        isOpen: false
    }

];

console.log(restaurants);


// Implement with fuction 
function showStatus(restaurant) {
    
    if (restaurant.isOpen) {
         // When restaurant is open

        document.getElementById('status-' + restaurant.restaurantId).innerHTML = `
        <span class="status-open"></span> Open
        `;

        document.getElementById('button-' + restaurant.restaurantId).innerHTML = 
        `
        <button type="button" class="btn btn-sm btn-outline-secondary">Menu</button>
        <button type="button" class="btn btn-sm btn-outline-secondary">Order</button>

            `;

    } else {

        // When restaurant is closed

        document.getElementById('status-' + restaurant.restaurantId).innerHTML = `
    <span class="status-closed"></span> Closed
        `;

        document.getElementById('button-' + restaurant.restaurantId).innerHTML = 
        `
        <button type="button" 
            class="btn btn-sm btn-outline-secondary" 
            onclick="showOpeningHour(${restaurant.restaurantId})">
            Opening Hour
        </button>

            `;
    }
}

for(let i=0; i<restaurants.length; i++){
    showStatus(restaurants[i]);
}

function showOpeningHour(restaurantId){
    alert('Open: ' + restaurants[restaurantId-1].open + ' close: '+restaurants[restaurantId-1].close );
}