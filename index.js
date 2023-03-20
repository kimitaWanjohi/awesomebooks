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
        <h3> ${book.title} </h3>
        <p> ${book.author} </p>
        <button class="remove-btn" onclick="remove(book.id)"> Remove </button>
        <hr />
    </li>
    `;
});