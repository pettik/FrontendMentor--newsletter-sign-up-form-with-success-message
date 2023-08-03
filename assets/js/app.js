'use strict';
const btnSend = document.getElementById('btn-send');
const emailInput = document.getElementById('email');
const emailError = document.querySelector('.email-error');

btnSend.addEventListener('click', () => {
  const emailValue = emailInput.value.trim();
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (emailValue === '' || !emailPattern.test(emailValue)) {
    // Invalid email format
    emailInput.classList.add('error');
    emailError.classList.remove('hidden');
  } else {
    // Valid email format
    emailInput.classList.remove('error');
    emailError.classList.add('hidden');
  }
});
