import {
  displaySection,
  author,
  title,
} from './element.js';

export {
  displaySection,
  author,
  title,
};

export class Book {
  availableBooks;

  constructor() {
    this.getFromLocalStorage();
  }

  // save to localStorage
  saveToLocalStorage = (addedBooks) => localStorage.setItem('availableBooks', JSON.stringify(addedBooks));

  // get from localStorage
  getFromLocalStorage = () => {
    this.availableBooks = JSON.parse(localStorage.getItem('availableBooks')) ?? [];
  };

  displayItem = () => {
    this.getFromLocalStorage();
    displaySection.innerHTML = '';
    this.availableBooks.forEach((availableBook, i) => {
      displaySection.innerHTML += `<div class="availableBook">
        <p>"${availableBook.title}" by ${availableBook.author}</p>
        <button class="remove" id=${i}>Remove</button>
        </div>`;
    });
  };

  addBook = (e) => {
    e.preventDefault();
    const addedBook = {
      title: title.value,
      author: author.value,
    };
    this.availableBooks.push(addedBook);
    this.clear();
    this.saveToLocalStorage(this.availableBooks);
    this.displayItem();
  };

  deleteBook = (i) => {
    // eslint-disable-next-line
    const filterBooks = this.availableBooks.filter((availableBook) => availableBook !== this.availableBooks[i]);
    this.saveToLocalStorage(filterBooks);
    this.displayItem();
  };

  clear = () => {
    title.value = '';
    author.value = '';
  };
}