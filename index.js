const booksList = document.getElementById('books-list');

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

books.forEach(book => {
    booksList.innerHTML += `
    <li class="book-item">
        <h3> The Lord of the Rings </h3>
        <p> J.R.R. Tolkien </p>
        <button class="remove-btn"> Remove </button>
        <hr />
    </li>
    `;
});