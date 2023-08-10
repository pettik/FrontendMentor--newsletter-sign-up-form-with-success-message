'use strict';
const btnSend = document.getElementById('btn-send');
const emailInput = document.getElementById('email');
const emailError = document.querySelector('.email-error');
const inputedEmail = document.querySelector('.inputedEmail');
const firstSection = document.querySelector('#first');
const secondSection = document.querySelector('#second');
const secondSectionBtn = document.querySelector('#second .btn');

// funkce pro ověření emailu
const overeniEmailu = function () {
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
};

// kliknutí na btnSend v hlavním formuláři
btnSend.addEventListener('click', () => {
  overeniEmailu();
});

// kliknutí na secondSectionBtn na vedlejším formuláři
secondSectionBtn.addEventListener('click', () => {
  emailInput.value = '';
  firstSection.classList.remove('d-none');
  secondSection.classList.add('d-none');
});

// stisknutí klávesy ENTER
document.addEventListener('keydown', function (event) {
  if (event.key === 'Enter' || event.keyCode === 13) {
    overeniEmailu();
  }
});

// změna obrázku na mobily
const imageElement = document.getElementById('illustrationImage');

function updateImageSrc() {
  if (window.innerWidth >= 768) {
    // Desktop screen (768px and above)
    imageElement.src = 'assets/images/illustration-sign-up-desktop.svg';
  } else {
    // Phone screen (less than 768px)
    imageElement.src = 'assets/images/illustration-sign-up-mobile.svg';
  }
}

// Initial update based on the current screen width
updateImageSrc();

// Listen for window resize and update image src accordingly
window.addEventListener('resize', updateImageSrc);
