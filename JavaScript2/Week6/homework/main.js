const availableProducts = getAvailableProducts();

const prices = availableProducts.map((availableProduct) => availableProduct.price);
sendPricesToServer(prices, (receivedText) => {
    console.log(receivedText);
});

function renderProducts(products) {
    products.innerHTML = '';
    const $products = document.querySelector('section.products ul');

    $products.innerHTML = '<li><div class="name">Name</div><div class="price">Price</div><div class="rating">Rating</div><div class="ships-to">Ships To</div><div>Buy</div</li>';;
    products.forEach((product) => {
        const {name, price, rating, shipsTo} = product;
        const $li = document.createElement('li');
        $li.innerHTML = `<div class="name">${name}</div><div class="price"> ${price}</div><div class="rating">${rating}</div><div class="ships-to">${shipsTo}</div><button>Add to cart</button>`;
        $li.addEventListener('click', () => {
            addProductToCart(product);
        });
        $products.appendChild($li);
    });
}

function addProductToCart(product) {
    const $cart = document.querySelector('section.cart ul');
    const $li = document.createElement('li');

    const {name, price, rating, shipsTo} = product;
    $li.innerHTML = `<div class="name">${name}</div><div class="price"> ${price}</div>`;
    $cart.appendChild($li);
}

renderProducts(availableProducts);

function attachSorting() {
    const $select = document.querySelector('select');
    
    $select.addEventListener('change', () => {
        if ($select.value === 'cheap') {
            availableProducts.sort((a, b) => {
                return a.price - b.price;
            });
        } else if ($select.value === 'expensive') {
            availableProducts.sort((a, b) => {
                return b.price - a.price;
            });
        }

        renderProducts(availableProducts);
    });
}

attachSorting();

