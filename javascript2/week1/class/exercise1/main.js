const favoriteDishes = ['Pizza', 'Burger', 'Kebab'];

const list = document.querySelector('.list');

for(let i = 0; i < favoriteDishes.length; i++) {
    const dish = favoriteDishes[i];
    const li = document.createElement('li');
    li.innerText = dish;
    list.appendChild(li);
}

