# Frontend Mentor - Ping coming soon page solution 👨🏾‍💻

This is a solution to the [Ping coming soon page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/ping-single-column-coming-soon-page-5cadd051fec04111f7b848da). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents 📜

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Useful resources](#useful-resources)
- [Author](#author)


## Overview 📝

### The challenge ⚙️

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Submit their email address using an `input` field
- Receive an error message when the `form` is submitted if:
	- The `input` field is empty. The message for this error should say *"Whoops! It looks like you forgot to add your email"*
	- The email address is not formatted correctly (i.e. a correct email address should have this structure: `name@host.tld`). The message for this error should say *"Please provide a valid email address"*

### Screenshot 🌠

![image](https://github.com/user-attachments/assets/17ba7a67-da4d-4864-b710-400f1479a7d4)


### Links 📎

- Solution URL: [taophycc.github.com](https://github.com/Taophycc/Ping-coming-soon-page.git)
- Live Site URL: [taophycc.github.io](https://taophycc.github.io/Ping-coming-soon-page/)

## My process

### Built with 🛠🧱

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- Javascript 

### What I learned 📚

- How to toggle a menu icon using javascript

```html
<img src="images/menu-outline.svg" alt="menu" class="menu" />
```
```css
.menu {
  position: sticky;
  height: 40px;
  width: 40px;
  right: 100%;
  z-index: 9999;
}
```
```js
menu.addEventListener('click', function () {
  const isOpen = menuDropdown.classList.toggle('hidden');
  menu.src = isOpen ? 'images/menu-outline.svg' : 'images/xmark-solid.svg';

  if (isOpen) {
    overlay.classList.add('hidden');
  } else {
    overlay.classList.remove('hidden');
  }
});
```

- How to use form validations in javascript

```js
const submitButton = function () {
  if (input.validity.valueMissing) {
    errorMessage.textContent = 'You need to enter an email address.';
  } else if (input.validity.typeMismatch) {
    errorMessage.textContent = 'Enter a valid email address.';
  } else {
    errorMessage.textContent = '';
  }
};
```

### Useful resources 📚

- [MDN web docs](https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Forms/Form_validation#different_types_of_client-side_validation) - This helped with the email form validations.
- [Frontend mentor community](https://frontendmentor.io) - Frontend mentor has an amazing community on discord for help and discussions.


## Author ✍️

- Website - [taophycc.github.com](https://www.github.com/taophycc)
- Frontend Mentor - [@taophycc](https://www.frontendmentor.io/taophycc)
- Twitter - [@taophyc](https://www.twitter.com/taophyc_)

