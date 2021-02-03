
const mainButton = document.querySelector('.btn-main');
const popup = document.querySelector('.popup');
const closeButton = document.querySelector('.btn-close');
const form = document.querySelector('.popup__form');
const message = document.querySelector('.message');
const email = document.querySelector('.email');
const password = document.querySelector('.password');
const checkbox = document.querySelector('.checkbox');
const invalidEmail = document.querySelector('.invalid__email-message')
const invalidPassword = document.querySelector('.invalid__password-message')
const invalidCheckbox = document.querySelector('.invalid__checkbox-message')
const label = document.querySelector('.label');

mainButton.addEventListener('click', () => {
  popup.classList.add('active')
});

closeButton.addEventListener('click', () => {
  popup.classList.remove('active')
});

form.addEventListener('submit', (e) => {
  e.preventDefault();

  validation();
});

const validation = () => {
  if (emailIsValid(email.value) &&
    password.value.length > 8 &&
    password.value.length < 30 &&
    checkbox.checked == true) {
    setTimeout(() => {
      mainButton.classList.add('not-active');
      message.classList.add('active');
      popup.classList.remove('active');
    }, 3000);
  }

  if (!emailIsValid(email.value) || email.value == '') {
    email.classList.add('invalid')
    invalidEmail.classList.add('active')
  } else {
    email.classList.remove('invalid')
    invalidEmail.classList.remove('active')
  }

  if (password.value.length < 8 ||
    password.value.length > 30 ||
    password.value == null) {
    password.classList.add('invalid')
    invalidPassword.classList.add('active')
  } else {
    password.classList.remove('invalid')
    invalidPassword.classList.remove('active')
  }

  if (checkbox.checked == false) {
    label.classList.add('invalid-label')
    invalidCheckbox.classList.add('active')
  } else {
    label.classList.remove('invalid-label')
    invalidCheckbox.classList.remove('active')
  }
}

function emailIsValid(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}