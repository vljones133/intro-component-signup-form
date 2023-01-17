// if field is empty, show icon for that field and error message
// check email address

const submitHandler = (event) => {
  event.preventDefault();

  checkFirstNameField();
  checkLastNameField();
  checkEmailField();
  checkPasswordField();
};

const checkFirstNameField = () => {
  const firstNameInput = document.getElementById('first-name-input');
  const firstNameErrorIcon = document.getElementById('first-name-error-icon');
  const firstNameErrorMsg = document.getElementById('first-name-error-msg');

  if (firstNameInput.value === '') {
    firstNameErrorIcon.style.display = 'block';
    firstNameErrorMsg.style.display = 'block';
  } else {
    firstNameErrorIcon.style.display = 'none';
    firstNameErrorMsg.style.display = 'none';
  }
};

const checkLastNameField = () => {
  const lastNameInput = document.getElementById('last-name-input');
  const lastNameErrorIcon = document.getElementById('last-name-error-icon');
  const lastNameErrorMsg = document.getElementById('last-name-error-msg');

  if (lastNameInput.value === '') {
    lastNameErrorIcon.style.display = 'block';
    lastNameErrorMsg.style.display = 'block';
  } else {
    lastNameErrorIcon.style.display = 'none';
    lastNameErrorMsg.style.display = 'none';
  }
};

const checkEmailField = () => {
  const emailInput = document.getElementById('email-input');
  const emailErrorIcon = document.getElementById('email-error-icon');
  const emptyEmailErrorMsg = document.getElementById('empty-email-error-msg');
  const invalidEmailErrorMsg = document.getElementById(
    'invalid-email-error-msg'
  );

  if (emailInput.value === '') {
    emailErrorIcon.style.display = 'block';
    emptyEmailErrorMsg.style.display = 'block';
  } else if (
    !emailInput.value.includes('@') ||
    !emailInput.value.includes('.')
  ) {
    emailErrorIcon.style.display = 'block';
    invalidEmailErrorMsg.style.display = 'block';
  } else {
    emailErrorIcon.style.display = 'none';
    emptyEmailErrorMsg.style.display = 'none';
  }
};

const checkPasswordField = () => {
  const passwordInput = document.getElementById('password-input');
  const passwordErrorIcon = document.getElementById('password-error-icon');
  const passwordErrorMsg = document.getElementById('password-error-msg');

  if (passwordInput.value === '') {
    passwordErrorIcon.style.display = 'block';
    passwordErrorMsg.style.display = 'block';
  } else {
    passwordErrorIcon.style.display = 'none';
    passwordErrorMsg.style.display = 'none';
  }
};

// module.exports = {
//   submitHandler,
// };
