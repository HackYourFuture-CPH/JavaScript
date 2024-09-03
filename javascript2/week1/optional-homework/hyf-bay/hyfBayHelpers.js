/* DONT MODIFY ANY OF THIS CODE!!!*/

window.getAvailableProducts = function() {
  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  function getRandomItem(availableProductNames) {
    return availableProductNames[
      getRandomInt(0, availableProductNames.length - 1)
    ];
  }

  function getRandomProductname() {
    const preWords = [
      "Used",
      "Fantastic",
      '"Used"',
      "Broken",
      "Beautiful",
      "Wet",
      "Green",
      "Sloppy",
      "Dirty"
    ];
    const productNames = [
      "Carrot",
      "Drone",
      "Giftcard",
      "Puppy",
      "Car",
      "Shirt",
      "Milk",
      "Chalk",
      "Fish fingers",
      "Socks",
      "Chocolate",
      "Toothbrush",
      "Computer",
      "Nokia",
      "Cologne"
    ];

    let chosenProductName = getRandomItem(productNames);
    const shouldHavePreWord = getRandomInt(0, 10) > 6;

    if (shouldHavePreWord) {
      const preWord = preWords[getRandomInt(0, preWords.length - 1)];
      chosenProductName = `${preWord} ${chosenProductName}`;
    }

    return chosenProductName;
  }

  const numberOfAvailableProducts = getRandomInt(0, 30);
  const availableProducts = Array.apply(
    null,
    Array(numberOfAvailableProducts)
  ).map(() => {
    const name = getRandomProductname();
    return {
      id: `${name}${getRandomInt(0, 100000)}`,
      name,
      price: getRandomInt(0, 10000),
      rating: getRandomInt(1, 10)
    };
  });

  return availableProducts;
};
