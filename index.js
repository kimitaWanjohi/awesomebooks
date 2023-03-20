const booksList = document.getElementById('books-list');
const form = document.getElementById('form');

let books = [];

function saveBooks() {
  localStorage.setItem('books', JSON.stringify(books));
}

function getAndSetBooks() {
  const storedBooks = localStorage.getItem('books');
  if (storedBooks) {
    books = JSON.parse(storedBooks);
  }
  return [];
}

function renderBooks() {
  booksList.innerHTML = '';
  books.forEach((book) => {
    booksList.innerHTML += `
          <li class="book-item">
              <h3> ${book.title} </h3>
              <p> ${book.author} </p>
              <button class="remove-btn" onclick="remove(${book.id})"> Remove </button>
              <hr />
          </li>
          `;
  });
}

form.onsubmit = (e) => {
  e.preventDefault();
  const title = document.getElementById('title').value;
  const author = document.getElementById('author').value;
  const newBook = {
    id: books.length + 1,
    title: title || 'No title',
    author: author || 'No author',
  };
  books.push(newBook);
  saveBooks();
  renderBooks();
  form.reset();
};

// eslint-disable-next-line no-unused-vars
function remove(id) {
  books = books.filter((book) => book.id !== id);
  saveBooks();
  renderBooks();
}

getAndSetBooks();
renderBooks();
