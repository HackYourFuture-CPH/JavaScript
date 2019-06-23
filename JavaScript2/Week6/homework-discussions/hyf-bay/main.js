console.log('Script loaded');

const products = getAvailableProducts();
const productsUl = document.querySelector('section.products ul');
console.log(productsUl);

const countryInput = document.querySelector('.filters .country select');
const searchInput = document.querySelector('.search input[type="text"]');

function renderProducts(products) {
    productsUl.innerHTML = '';
  products.forEach(product => {
    const li = document.createElement('li');

    const shipsToHTML = product.shipsTo.reduce(
      (acc, country) => `<li>${acc}</li><li>${country}</li>`
    );

    li.innerHTML = `
            <ul>
                <li>${product.name}</li>
                <li>${product.price}</li>
                <li>${product.rating}</li>
                <ul class="ships-to">${shipsToHTML}</ul>
            </ul>
        `;
    productsUl.appendChild(li);
  });
}

function covertToLowerCase(str) {
  return str.trim().toLocaleLowerCase();
}

function filterByCountryName(productsList, countryName) {
  countryName = covertToLowerCase(countryName);

  if (!countryName) {
      return productsList;
  }

  return productsList.filter(product => {
    for (let shippingCountry of product.shipsTo) {
      shippingCountry = covertToLowerCase(shippingCountry);
      if (shippingCountry === countryName) {
        return true;
      }
    }

    return false;
  });
}

function filterByName(productsList, searchText) {
    searchText = covertToLowerCase(searchText);

    if (!searchText) {
        return productsList;
    }

    return productsList.filter(product => {
        const name = covertToLowerCase(product.name);
        return name.includes(searchText);
    })
}


function refreshProductsView() {
    let filteredProducts = filterByCountryName(products, countryInput.value);
    filteredProducts = filterByName(filteredProducts, searchInput.value);

    renderProducts(filteredProducts);
}

countryInput.addEventListener('change', refreshProductsView);
searchInput.addEventListener('keyup', refreshProductsView);

refreshProductsView();

// renderProducts(products);
