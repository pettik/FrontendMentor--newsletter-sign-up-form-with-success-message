"use strict";

const emailInput = document.getElementById("email");
const emailError = document.querySelector(".email-error");
const inputedEmail = document.querySelector(".inputedEmail");
const firstSection = document.querySelector("#first");
const secondSection = document.querySelector("#second");
const secondSectionBtn = document.querySelector("#second .btn");
const form = document.getElementById("newsletter-form");
const imageElement = document.getElementById("illustrationImage");

const overeniEmailu = function () {
  const emailValue = emailInput.value.trim();
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (emailValue === "" || !emailPattern.test(emailValue)) {
    emailInput.classList.add("error");
    emailError.classList.remove("hidden");
    return;
  }

  emailInput.classList.remove("error");
  emailError.classList.add("hidden");

  inputedEmail.textContent = emailValue;

  firstSection.classList.add("d-none");
  secondSection.classList.remove("d-none");
};

form.addEventListener("submit", function (event) {
  event.preventDefault();
  overeniEmailu();
});

secondSectionBtn.addEventListener("click", () => {
  emailInput.value = "";
  firstSection.classList.remove("d-none");
  secondSection.classList.add("d-none");
});

function updateImageSrc() {
  imageElement.src =
    window.innerWidth >= 768
      ? "assets/images/illustration-sign-up-desktop.svg"
      : "assets/images/illustration-sign-up-mobile.svg";
}

updateImageSrc();
window.addEventListener("resize", updateImageSrc);
