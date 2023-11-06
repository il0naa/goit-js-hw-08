import throttle from 'lodash.throttle';

const feedbackForm = document.querySelector('.feedback-form');
const emailInput = document.querySelector('input[name="email"]');
const messageInput = document.querySelector('textarea[name="message"]');

function saveFormData() {
  const formData = {
    email: emailInput.value,
    message: messageInput.value,
  };
  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
}

function restoreForm() {
  const formData = JSON.parse(localStorage.getItem('feedback-form-state'));
  if (formData) {
    emailInput.value = formData.email || '';
    messageInput.value = formData.message || '';
  }
}

emailInput.addEventListener('input', throttle(saveFormData, 500));

window.onload = () => {
  restoreForm();
};

feedbackForm.addEventListener('submit', function (event) {
  event.preventDefault();
  localStorage.removeItem('feedback-form-state');

  const formData = {
    email: emailInput.value,
    message: messageInput.value,
  };
  console.log(formData);
});
