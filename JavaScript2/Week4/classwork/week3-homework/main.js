console.log('Script loaded');

const books = [
    {
        id: 'book_1',
        title: 'Awesome book',
        language: 'English',
    },
    {
        id: 'book_2',
        title: 'Cool book',
        language: 'English',
    }
];

const bookImages = {
    'book_1': 'img/book_1.jpg',
    'book_2': 'img/book_2.jpg',
};

const ulElement = document.querySelector('ul');

function addBooks() {
    console.log('addBooks');
    for(let i = 0; i < books.length; i++) {
        console.log('inside loop');
        const li = document.createElement('li');
        const language = books[i].language;
        li.innerHTML = language;

        const img = document.createElement('img');
        const bookId = books[i].id;
        console.log(bookId);
        const imagePath = bookImages[bookId]
        console.log(imagePath);
        
        img.src = bookImages[bookId];
        ulElement.appendChild(img);
        ulElement.appendChild(li);
    }
}

addBooks();
