/* eslint max-classes-per-file: ["error", 2] */
const booksList = document.getElementById('books-list');
const form = document.getElementById('form');
const title = document.getElementById('title');
const author = document.getElementById('author');
const time = document.getElementById('time');
const list = document.getElementById('list');
const formSection = document.getElementById('form-section');
const contact = document.getElementById('contact');

// hide form and contact section
formSection.style.display = 'none';
contact.style.display = 'none';

// eslint-disable-next-line no-unused-vars
function showForm() {
  formSection.style.display = 'block';
  contact.style.display = 'none';
  list.style.display = 'none';
}

// eslint-disable-next-line no-unused-vars
function showContact() {
  contact.style.display = 'block';
  formSection.style.display = 'none';
  list.style.display = 'none';
}

// eslint-disable-next-line no-unused-vars
function showList() {
  list.style.display = 'block';
  formSection.style.display = 'none';
  contact.style.display = 'none';
}

setInterval(() => {
  const date = new Date();
  time.innerHTML = date.toLocaleTimeString();
}, 1000);

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

const books = new Books();

// eslint-disable-next-line no-unused-vars
const remove = (id) => {
  books.removeBook(id);
  books.saveBooks();
  books.renderBooks();
};

form.onsubmit = (e) => {
  e.preventDefault();
  books.addBook(new Book(title.value, author.value));
  showList();
  form.reset();
};

window.onload = () => {
  books.getBooks();
  books.renderBooks();
};
