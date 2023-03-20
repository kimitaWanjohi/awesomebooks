const booksList = document.getElementById('books-list');
const form = document.getElementById('form');

let books = [
    {
        id: 1,
        title: 'The Awakening',
        author: 'Kate Chopin'
    },
    {
        id: 2,
        title: 'City of Glass',
        author: 'Paul Auster'
    }
]

form.onsubmit = (e) => {
    e.preventDefault();
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const newBook = {
        id: books.length + 1,
        title,
        author
    };
    books.push(newBook);
    renderBooks();
}

function renderBooks() {
    booksList.innerHTML = '';
    books.forEach(book => {
        booksList.innerHTML += `
        <li class="book-item">
            <h3> ${book.title} </h3>
            <p> ${book.author} </p>
            <button class="remove-btn" onclick="remove(book.id)"> Remove </button>
            <hr />
        </li>
        `;
    });
};

renderBooks();
