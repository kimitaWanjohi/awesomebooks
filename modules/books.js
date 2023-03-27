const booksList = document.getElementById('books-list');

export class Book {
    constructor(title, author) {
      this.title = title;
      this.author = author;
      this.id = Math.random();
    }
  }
  
  export class Books {
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
        const li = document.createElement('li');
        li.classList.add('book-item');
        const p = document.createElement('p');
        p.innerHTML = `${book.title} by ${book.author}`;
        const button = document.createElement('button');
        button.classList.add('remove-btn');
        button.innerHTML = 'Remove';
        button.onclick = (e) => {
            this.removeBook(book.id);
            this.saveBooks();
            this.renderBooks();
        }
        li.appendChild(p);
        li.appendChild(button);
        booksList.appendChild(li);
      });
    }
  }

  