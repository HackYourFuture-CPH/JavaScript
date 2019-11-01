const testProductNames = ["Flat screen", "computer", "Stuff", "Thing"];

const productsUl = document.querySelector(".products ul");
const input = document.querySelector(".search input");
const countrySelect = document.querySelector(".country select");
const sortSelect = document.querySelector(".sort select");
const cartUl = document.querySelector(".cart ul");
const totalSpan = document.querySelector(".total span");

function appendLi(label, rowUl) {
    const nameLi = document.createElement("li");
    nameLi.innerText = label;
    rowUl.appendChild(nameLi);
}

const productsInCart = [];

function addProductToCart(product) {
    productsInCart.push(product);
    renderCart(productsInCart);
}

function renderCart(cart) {
    cartUl.innerHTML = "";
    let sum = 0;
    for (let i = 0; i < cart.length; i++) {
        const product = cart[i];

        const rowLi = document.createElement("li");
        cartUl.appendChild(rowLi);

        const nameDiv = document.createElement("div");
        nameDiv.classList.add("name");
        nameDiv.innerText = product.name;
        rowLi.appendChild(nameDiv);

        const priceDiv = document.createElement("div");
        priceDiv.classList.add("price");
        priceDiv.innerText = product.price;
        rowLi.appendChild(priceDiv);

        rowLi.addEventListener("click", () => {
            productsInCart.splice(i, 1);
            renderCart(productsInCart);
        });

        sum += product.price;
    }
    totalSpan.innerText = sum;
}

function renderProducts(products) {
    productsUl.innerHTML = "";
    for (let i = 0; i < products.length; i++) {
        const product = products[i];

        const rowLi = document.createElement("li");
        productsUl.appendChild(rowLi);
        const rowUl = document.createElement("ul");
        rowLi.appendChild(rowUl);

        rowLi.addEventListener("click", () => {
            console.log("here");
            addProductToCart(product);
        });

        // appendLi(product.id, rowUl);
        appendLi(product.name, rowUl);
        appendLi(product.price, rowUl);
        appendLi(product.rating, rowUl);

        const shipsToRowLi = document.createElement("li");
        rowUl.appendChild(shipsToRowLi);
        const shipsToRowUl = document.createElement("ul");
        shipsToRowLi.appendChild(shipsToRowUl);

        product.shipsTo.forEach(destination => {
            appendLi(destination, shipsToRowUl);
        });
    }
}

const products = getAvailableProducts();

searchForProducts("", "", "cheap");

function levenshteinDistance(a, b) {
  // Create empty edit distance matrix for all possible modifications of
  // substrings of a to substrings of b.
  const distanceMatrix = Array(b.length + 1).fill(null).map(() => Array(a.length + 1).fill(null));

  // Fill the first row of the matrix.
  // If this is first row then we're transforming empty string to a.
  // In this case the number of transformations equals to size of a substring.
  for (let i = 0; i <= a.length; i += 1) {
    distanceMatrix[0][i] = i;
  }

  // Fill the first column of the matrix.
  // If this is first column then we're transforming empty string to b.
  // In this case the number of transformations equals to size of b substring.
  for (let j = 0; j <= b.length; j += 1) {
    distanceMatrix[j][0] = j;
  }

  for (let j = 1; j <= b.length; j += 1) {
    for (let i = 1; i <= a.length; i += 1) {
      const indicator = a[i - 1] === b[j - 1] ? 0 : 1;
      distanceMatrix[j][i] = Math.min(
          distanceMatrix[j][i - 1] + 1, // deletion
          distanceMatrix[j - 1][i] + 1, // insertion
          distanceMatrix[j - 1][i - 1] + indicator, // substitution
      );
    }
  }

  return distanceMatrix[b.length][a.length];
}

const f = 'foo';
const b = 'foo';


function areNamesAlmostEqual(name, input) {
  if(!input) {
    return true;
  }

  const distance = levenshteinDistance(name, input);

  return distance < 3;


    /*
    const HOW_EQUAL = 0.7;

    const nameValues = name.split('');
    const inputValues = input.split('');

    let score = 0;
    let lastFoundIndex = 0;
    for (let i = 0; i < inputValues.length; i++) {
        const value = inputValues[i];

        for(let j = lastFoundIndex; j < nameValues.length; j++) {
          if (nameValues[j] === value) {
              score++;
              lastFoundIndex = i;
              break;
          }
        }

    }

    const maxAvailableScore = input.length;

    const percentMatch = score / maxAvailableScore;

    if (Number.isNaN(percentMatch)) {
        return true;
    }

    console.log('count', {count: score, name, input, percentMatch});

    return percentMatch >= HOW_EQUAL;
  */


}

function searchForProducts(name, country, sort) {
    const matchingProducts = products
        .filter(p => areNamesAlmostEqual(p.name.toLowerCase(), name.toLowerCase()))
        .filter(p => {
            if (country) {
                return p.shipsTo
                    .map(c => c.toLowerCase())
                    .includes(country.toLowerCase());
            } else {
                return true;
            }
        });

    if (sort) {
        switch (sort) {
            case "cheap":
                matchingProducts.sort((a, b) => a.price - b.price);
                break;
            case "expensive":
                matchingProducts.sort((a, b) => b.price - a.price);
                break;
            case "name":
                matchingProducts.sort((a, b) => {
                    const nameA = a.name.toUpperCase(); // ignore upper and lowercase
                    const nameB = b.name.toUpperCase(); // ignore upper and lowercase
                    if (nameA < nameB) {
                        return -1;
                    }
                    if (nameA > nameB) {
                        return 1;
                    }

                    // names must be equal
                    return 0;
                });
                break;
        }
    }

    renderProducts(matchingProducts);
}

input.addEventListener("input", () => {
    searchForProducts(input.value, countrySelect.value, sortSelect.value);
});

countrySelect.addEventListener("change", () => {
    searchForProducts(input.value, countrySelect.value, sortSelect.value);
});

sortSelect.addEventListener("change", () => {
    searchForProducts(input.value, countrySelect.value, sortSelect.value);
});

const prices = products.map(product => product.price);
sendPricesToServer(prices, confirmation => {
    console.log(confirmation);
});
