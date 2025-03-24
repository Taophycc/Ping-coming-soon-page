'use strict';
let menu = document.querySelector('.menu');
const menuDropdown = document.querySelector('.menu-dropdown');
const overlay = document.querySelector('.overlay');
const input = document.getElementById('input');
const button = document.querySelector('.btn');
const errorMessage = document.getElementById('error-message');

// Adding eventlistener to the menu icon
menu.addEventListener('click', function () {
  const isOpen = menuDropdown.classList.toggle('hidden');
  menu.src = isOpen ? 'images/menu-outline.svg' : 'images/xmark-solid.svg';

  if (isOpen) {
    overlay.classList.add('hidden');
  } else {
    overlay.classList.remove('hidden');
  }
});

//Removing overlay
const removeOverlay = function () {
  overlay.classList.add('hidden');
  menuDropdown.classList.add('hidden');
  menu.src = 'images/menu-outline.svg';
};

overlay.addEventListener('click', removeOverlay);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' || e.key === 'Tab') {
    removeOverlay();
  }
});

// Input and submit form validations
const submitButton = function () {
  if (input.validity.valueMissing) {
    errorMessage.textContent =
      'Whoops! It looks like you forgot to add your email';
  } else if (input.validity.typeMismatch) {
    errorMessage.textContent = 'Please provide a valid email address';
  } else {
    errorMessage.textContent = '';
  }
};

input.addEventListener('input', submitButton);
button.addEventListener('click', submitButton);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Enter') {
    submitButton();
  }
});
