'use strict';

const emailInput = document.getElementById('email');
const emailError = document.querySelector('.email-error');
const inputedEmail = document.querySelector('.inputedEmail');
const firstSection = document.querySelector('#first');
const secondSection = document.querySelector('#second');
const secondSectionBtn = document.querySelector('#second .btn');
const form = document.getElementById('newsletter-form');
const imageElement = document.getElementById('illustrationImage');

const requiredElements = [
  emailInput,
  emailError,
  inputedEmail,
  firstSection,
  secondSection,
  form,
];

const hasRequiredElements = requiredElements.every(Boolean);

const handleFormSubmit = function () {
  if (!hasRequiredElements) return;

  const emailValue = emailInput.value.trim();
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (emailValue === '' || !emailPattern.test(emailValue)) {
    emailInput.classList.add('error');
    emailError.classList.remove('hidden');
    return;
  }

  emailInput.classList.remove('error');
  emailError.classList.add('hidden');

  inputedEmail.textContent = emailValue;

  firstSection.classList.add('d-none');
  secondSection.classList.remove('d-none');
};

if (form && hasRequiredElements) {
  form.addEventListener('submit', function (event) {
    event.preventDefault();
    handleFormSubmit();
  });
}

if (secondSectionBtn && emailInput && firstSection && secondSection) {
  secondSectionBtn.addEventListener('click', () => {
    emailInput.value = '';
    firstSection.classList.remove('d-none');
    secondSection.classList.add('d-none');
  });
}

function updateImageSrc() {
  if (!imageElement) return;

  imageElement.src =
    window.innerWidth >= 768
      ? 'assets/images/illustration-sign-up-desktop.svg'
      : 'assets/images/illustration-sign-up-mobile.svg';
}

updateImageSrc();

if (imageElement) {
  window.addEventListener('resize', updateImageSrc);
}
