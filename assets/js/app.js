'use strict';
const btnSend = document.getElementById('btn-send');
const emailInput = document.getElementById('email');
const emailError = document.querySelector('.email-error');
const inputedEmail = document.querySelector('.inputedEmail');
const firstSection = document.querySelector('#first');
const secondSection = document.querySelector('#second');
const secondSectionBtn = document.querySelector('#second .btn');


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

    //insert input email to second text
    inputedEmail.textContent = emailValue;

    //visible second section
    firstSection.classList.add('d-none');
    secondSection.classList.remove('d-none');
  }
});


secondSectionBtn.addEventListener('click',()=>{
    emailInput.value = '';
    firstSection.classList.remove('d-none');
    secondSection.classList.add('d-none');
})
