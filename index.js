/* eslint-disable */ 
import {
  displaySection,
  addBtn,
  mainPage,
  additionPage,
  contactPage,
  logo,
  openBtn,
  closeBtn,
}from './modules/element.js';
import {Book} from './modules/Book.js';
import * as clicked from './modules/function.js';
import { DateTime } from './modules/luxon.js';

const availableBook = new Book();

document.addEventListener('DOMContentLoaded', () => {
// eslint-disable-next-line
  availableBook.displayItem();
});

addBtn.addEventListener('click', availableBook.addBook);

displaySection.addEventListener('click', (e) => {
  if (e.target.classList.contains('remove')) {
    const targetId = +e.target.getAttribute('id');
    availableBook.deleteBook(targetId);
  }
});


const displayedDate = () => {
  const date = DateTime.now();
  document.getElementById('current-date').innerHTML = date.toLocaleString(DateTime.DATETIME_MED_WITH_WEEKDAY);
};

setInterval(displayedDate, 1000);

closeBtn.addEventListener('click', clicked.closeMenu);
openBtn.addEventListener('click', clicked.openMenu);
logo.addEventListener('click', clicked.list);

for (let i = 0; i < 2; i++) {
  mainPage[i].addEventListener('click', clicked.list);
  additionPage[i].addEventListener('click', clicked.addNew);
  contactPage[i].addEventListener('click', clicked.contactUs);
}
