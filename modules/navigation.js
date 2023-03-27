export const formSection = document.getElementById('form-section');
export const list = document.getElementById('list');
export const contact = document.getElementById('contact');
export const listLink = document.getElementById('list-link');
export const formLink = document.getElementById('form-link');
export const contactLink = document.getElementById('contact-link');

export const showForm = () => {
  formSection.style.display = 'block';
  contact.style.display = 'none';
  list.style.display = 'none';
};

export const showContact = () => {
  contact.style.display = 'block';
  formSection.style.display = 'none';
  list.style.display = 'none';
};

export const showList = () => {
  list.style.display = 'block';
  formSection.style.display = 'none';
  contact.style.display = 'none';
};