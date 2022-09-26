import {
  mainContent,
  addition,
  contact,
  logo,
  openBtn,
  mobileMenu,
} from './element.js';

export const openMenu = () => {
  mobileMenu.style.display = 'flex';
  openBtn.style.display = 'none';
  logo.style.display = 'none';
};

export const closeMenu = () => {
  mobileMenu.style.display = 'none';
  openBtn.style.display = 'block';
  logo.style.display = 'block';
};

export const list = () => {
  mainContent.style.display = 'flex';
  addition.style.display = 'none';
  contact.style.display = 'none';
  closeMenu();
};

export const addNew = () => {
  mainContent.style.display = 'none';
  addition.style.display = 'flex';
  contact.style.display = 'none';
  closeMenu();
};

export const contactUs = () => {
  mainContent.style.display = 'none';
  addition.style.display = 'none';
  contact.style.display = 'flex';
  closeMenu();
};