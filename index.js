import SuccessReg from './alfabet/success-reg.js';

const form = document.querySelector('form');
const name = document.querySelector('#name');
const passwordInput = document.querySelector('#password');
const showPasswordCheckbox = document.querySelector('#showPassword');

const successReg = new SuccessReg();

if (showPasswordCheckbox) {
    showPasswordCheckbox.addEventListener('change', () => {
        passwordInput.type = showPasswordCheckbox.checked ? 'text' : 'password';
    });
}

form.addEventListener('submit', (event) => {
    event.preventDefault();
    successReg.writeName(name.value);
});
