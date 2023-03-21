const booksList = document.getElementById('books-list');
const form = document.getElementById('form');
const title = document.getElementById('title');
const author = document.getElementById('author');

class Book {
  constructor(title, author) {
    this.title = title;
    this.author = author;
    this.id = Math.random();
  }
}

class Books {
  constructor() {
    this.books = [];
  }

  addBook(book) {
    this.books.push(book);
    this.saveBooks();
    this.renderBooks();
  }

  removeBook(id) {
    this.books = this.books.filter((book) => book.id !== id);
  }

  saveBooks() {
    localStorage.setItem('books', JSON.stringify(this.books));
  }

  getBooks() {
    const storedBooks = localStorage.getItem('books');
    if (storedBooks) {
      this.books = JSON.parse(storedBooks);
    }
    return [];
  }

  renderBooks() {
    booksList.innerHTML = '';
    this.books.forEach((book) => {
      booksList.innerHTML += `
          <li class="book-item">
              <p> ${book.title} by ${book.author} </p>
              <button class="remove-btn" onclick="remove(${book.id})"> Remove </button>
          </li>
          `;
    });
  }
}

let books = new Books();

const remove = (id) => {
  books.removeBook(id);
  books.saveBooks();
  books.renderBooks();
};

form.onsubmit = (e) => {
  e.preventDefault();
  books.addBook(new Book(title.value, author.value));
  form.reset();
};

window.onload = () => {
  books.getBooks();
  books.renderBooks();
};
