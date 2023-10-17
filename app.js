'use strict';

const firstName = document.getElementById('firstName');
const lastName = document.getElementById('lastName');
const email = document.getElementById('email');
const password = document.getElementById('password');

const firstNameError = document.getElementById('firstNameError');
const lastNameError = document.getElementById('lastNameError');
const emailError = document.getElementById('emailError');
const passwordError = document.getElementById('passwordError');

const formSubmit = document.getElementById('formSubmit');

formSubmit.addEventListener('click', function (e) {
  e.preventDefault();

  // Check if any required field is empty
  if (firstName.value === '') {
    firstNameError.style.display = 'block';
    firstName.style.border = '1px solid red';
    firstName.classList.add('red-placeholder');
    firstName.placeholder = '!!';
  } else {
    firstNameError.style.display = 'none';
  }

  if (lastName.value === '') {
    lastNameError.style.display = 'block';
    lastName.style.border = '1px solid red';
    lastName.classList.add('red-placeholder');
    lastName.placeholder = '!!';
  } else {
    lastNameError.style.display = 'none';
  }
  if (password.value === '') {
    passwordError.style.display = 'block';
    password.style.border = '1px solid red';
    password.classList.add('red-placeholder');
    password.placeholder = '!!';
  } else {
    passwordError.style.display = 'none';
  }

  if (email.value === '') {
    emailError.style.display = 'block';
    email.style.border = '1px solid red';
    email.classList.add('red-placeholder');
    email = document.getElementById('email').placeholder =
      'example/gmail.com..';
  } else {
    emailError.style.display = 'none';
  }
});
