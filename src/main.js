import './styles/index.css';

const demoForm = document.querySelector('[data-demo-form]');
const formStatus = document.querySelector('#form-status');
const demoNameInput = document.querySelector('#demo-name');
const demoNameStatus = document.querySelector('#demo-name-status');
const buttonStatus = document.querySelector('[data-button-status]');
const demoButtons = document.querySelectorAll('[data-demo-button]');

if (demoForm && formStatus) {
  demoForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const emailInput = demoForm.querySelector('#email');

    if (!(emailInput instanceof HTMLInputElement)) {
      return;
    }

    if (!emailInput.validity.valid) {
      formStatus.textContent = 'Enter a valid email address before submitting.';
      return;
    }

    formStatus.textContent = `Demo subscription captured for ${emailInput.value}.`;
    demoForm.reset();
  });
}

if (demoNameInput instanceof HTMLInputElement && demoNameStatus) {
  demoNameInput.addEventListener('input', () => {
    demoNameStatus.textContent = demoNameInput.value
      ? `Preview value: ${demoNameInput.value}`
      : 'Start typing to see the input event update.';
  });
}

if (buttonStatus && demoButtons.length > 0) {
  demoButtons.forEach((button) => {
    button.addEventListener('click', () => {
      buttonStatus.textContent = `${button.textContent} activated.`;
    });
  });
}
