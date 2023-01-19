// https://developer.mozilla.org/en-US/docs/Learn/Forms/Form_validation

const form = document.querySelector('form');
const input = document.getElementsByTagName('input');
const emailRegExp =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

window.addEventListener('load', () => {
  input.className = 'valid';
});

form.addEventListener('submit', (event) => {
  event.preventDefault();

  checkFirstNameField();
  checkLastNameField();
  checkEmailField();
  checkPasswordField();
});

const checkFirstNameField = () => {
  const firstNameInput = document.getElementById('first-name-input');
  const firstNameErrorMsg = document.getElementById('first-name-error-msg');

  if (firstNameInput.value === '') {
    firstNameErrorMsg.style.display = 'block';
    firstNameInput.className = 'invalid';
  } else {
    firstNameErrorMsg.style.display = 'none';
    firstNameInput.className = 'valid';
  }
};

const checkLastNameField = () => {
  const lastNameInput = document.getElementById('last-name-input');
  const lastNameErrorMsg = document.getElementById('last-name-error-msg');

  if (lastNameInput.value === '') {
    lastNameErrorMsg.style.display = 'block';
    lastNameInput.className = 'invalid';
  } else {
    lastNameErrorMsg.style.display = 'none';
    lastNameInput.className = 'valid';
  }
};

const checkEmailField = () => {
  const emailInput = document.getElementById('email-input');
  const emptyEmailErrorMsg = document.getElementById('empty-email-error-msg');
  const invalidEmailErrorMsg = document.getElementById(
    'invalid-email-error-msg'
  );

  if (emailInput.value.length === 0) {
    emptyEmailErrorMsg.style.display = 'block';
    emailInput.className = 'invalid';
    invalidEmailErrorMsg.style.display = 'none';
  } else if (
    !emailInput.value.includes('@') ||
    !emailInput.value.includes('.')
  ) {
    invalidEmailErrorMsg.style.display = 'block';
    emptyEmailErrorMsg.style.display = 'none';
    emailInput.className = 'invalid';
  } else {
    emptyEmailErrorMsg.style.display = 'none';
    invalidEmailErrorMsg.style.display = 'none';
    emailInput.className = 'valid';
  }
};

const checkPasswordField = () => {
  const passwordInput = document.getElementById('password-input');
  const passwordErrorMsg = document.getElementById('password-error-msg');

  if (passwordInput.value === '') {
    passwordErrorMsg.style.display = 'block';
    passwordInput.className = 'invalid';
  } else {
    passwordErrorMsg.style.display = 'none';
    passwordInput.className = 'valid';
  }
};
