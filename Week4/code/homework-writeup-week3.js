
console.log("in js");

const books = [
    {
        title: 'book title 1',
        author: 'Peter hansen'
    },
    {
        title: 'book title 2',
        author: 'Mogens Dalsgaard'
    },
];

const bookListElement = document.querySelector('.book-list');
console.log(bookListElement);

books.forEach(function(book) {
    const liElement = document.createElement('li');

    liElement.innerHTML = book.author + ': ' + book.title;

    bookListElement.appendChild(liElement);
});

