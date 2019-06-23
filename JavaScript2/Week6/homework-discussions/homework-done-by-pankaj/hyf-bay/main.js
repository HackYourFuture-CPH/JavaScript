/**
 * Trim given string and convert to lowercase
 * @param {String} str a string value
 */
function convertToLowerCase(str) {
  return str.trim().toLocaleLowerCase();
}

const ALL_PRODUCTS = getAvailableProducts();
const productsInShoppingCart = [];

const productsUl = document.querySelector('section.products ul.data');
const shoppingCartUl = document.querySelector('section.cart ul');
const shoppingCartTotal = document.querySelector('section.cart .total span');

const searchInput = document.querySelector('.search > input[type="text"]');
const countryInput = document.querySelector('.filters > .country > select');
const priceInput = document.querySelector('.filters > .price > input[type="range"]');
const sortingKeyInput = document.querySelector('.sort > select');

function renderProducts(products) {
  productsUl.innerHTML = '';
  products.forEach(product => {
    const productLi = document.createElement('li');

    const shipsToHTML = product.shipsTo.reduce(
      (acc, country) => `<li>${acc}</li><li>${country}</li>`
    );
    productLi.innerHTML = `
              <ul>
                  <li>${product.name}</li>
                  <li>${product.price}</li>
                  <li>${product.rating}</li>
                  <li>
                  <ul class="ships-to">${shipsToHTML}</ul>
                  </li>
              </ul>
          `;
    productsUl.appendChild(productLi);

    const addToCartButton = document.createElement('button');
    addToCartButton.innerHTML = 'Add to Cart';
    addToCartButton.addEventListener('click', () => {
      productsInShoppingCart.push(product);
      refreshShoppingCart();
    });

    const nameLi = productLi.querySelector('ul > li:first-child');
    nameLi.insertAdjacentElement('afterbegin', addToCartButton);
  });
}

function refreshShoppingCart() {
  renderProductsInCart();
  const totalPrice = productsInShoppingCart.reduce((sum, product) => sum + product.price, 0);
  shoppingCartTotal.innerHTML = `${totalPrice}`;
}

function renderProductsInCart() {
  shoppingCartUl.innerHTML = '';

  productsInShoppingCart.forEach(product => {
    const li = document.createElement('li');
    li.innerHTML = `
    <div class="name">${product.name}</div>
    <div class="price">${product.price}</div>
          `;
    shoppingCartUl.appendChild(li);
  });
}

const filterProductByName = (productsList, searchText) => {
  searchText = convertToLowerCase(searchText);
  if (!searchText) {
    return productsList;
  }
  return productsList.filter(product => convertToLowerCase(product.name).includes(searchText));
};

const filterByShippingCountry = (productsList, countryName) => {
  countryName = convertToLowerCase(countryName);
  if (!countryName) {
    return productsList;
  }

  return productsList.filter(product => {
    return product.shipsTo.some(shippingCountry => {
      return convertToLowerCase(shippingCountry) === countryName;
    });
  });
};

const filterByPrice = (productsList, price) => {
  price = parseInt(price);

  return productsList.filter(product => Math.floor(product.price / 1000) === price);
};

const sortProductsList = (productsList, sortingKey) => {
  sortingKey = convertToLowerCase(sortingKey);

  if (!sortingKey) {
    return;
  }

  let sortingFunction;

  if (sortingKey === 'cheap') {
    sortingFunction = (a, b) => a.price - b.price;
  } else if (sortingKey === 'expensive') {
    sortingFunction = (a, b) => b.price - a.price;
  } else if (sortingKey === 'name') {
    sortingFunction = (a, b) => {
      if (a.name === b.name) {
        return 0;
      } else if (a.name > b.name) {
        return 1;
      } else {
        return -1;
      }
    };
  }

  if (sortingFunction) {
    productsList.sort(sortingFunction);
  }
};

const refreshSearchResults = () => {
  let filteredProducts = filterProductByName(ALL_PRODUCTS, searchInput.value);
  filteredProducts = filterByShippingCountry(filteredProducts, countryInput.value);
  filteredProducts = filterByPrice(filteredProducts, priceInput.value);

  sortProductsList(filteredProducts, sortingKeyInput.value);
  renderProducts(filteredProducts);
};

searchInput.addEventListener('keyup', refreshSearchResults);
countryInput.addEventListener('change', refreshSearchResults);
priceInput.addEventListener('change', refreshSearchResults);
sortingKeyInput.addEventListener('change', refreshSearchResults);

// Initial rendering
refreshSearchResults();
// renderProducts(ALL_PRODUCTS);
