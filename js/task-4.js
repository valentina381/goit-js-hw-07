'use strict';
const form = document.querySelector('form.login-form');

const email = form.elements[0];
const password = form.elements[1];

form.addEventListener('submit', (event) => {
  event.preventDefault();

  if (!email.value || !password.value) {
    alert('All form fields must be filled in');
  }

  const data = {
    email: email.value.trim(),
    password: password.value.trim(),
  };

  form.reset();
});

// Scho take output?
