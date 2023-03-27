import { DateTime } from './modules/luxon.js';
import { Book, Books } from './modules/books.js';
import {
  showForm, showContact, showList, listLink, formLink, contactLink, formSection, contact,
} from './modules/navigation.js';

const form = document.getElementById('form');
const title = document.getElementById('title');
const author = document.getElementById('author');
const time = document.getElementById('time');


setInterval(() => {
  time.innerHTML = DateTime.now().toLocaleString(DateTime.DATETIME_FULL);
}, 1000);

formSection.style.display = 'none';
contact.style.display = 'none';

formLink.addEventListener('click', () => showForm());
contactLink.addEventListener('click', () => showContact());
listLink.addEventListener('click', () => showList());

const books = new Books();

form.onsubmit = (e) => {
  e.preventDefault();
  books.addBook(new Book(title.value, author.value));
  showList();
  form.reset();
};

books.getBooks();
books.renderBooks();
