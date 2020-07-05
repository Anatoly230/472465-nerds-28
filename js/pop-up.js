let callPopUp = document.querySelector(".feedback-form-call");
let messageForm = document.querySelector(".pop-up-form");
let openPopUp = document.querySelector(".feedback-form-pop-up");
let closePopUp = document.querySelector(".close-btn");
let userName = document.querySelector(".custom-name");
let userMail = document.querySelector(".custom-mail");
let userMessage = document.querySelector(".custom-message");

let isStorageSupport = true;
let storage = "";

try {
  storage = localStorage.getItem("name");
} catch (err) {
  isStorageSupport = false;
}

callPopUp.addEventListener("click", function (evt) {
  evt.preventDefault();
  openPopUp.classList.add("show-pop-up");

  if (storage) {
    userName.value = storage;
    userMail.focus();
  } else {
    userName.focus();
  }
});

closePopUp.addEventListener("click", function (evt) {
  evt.preventDefault();
  openPopUp.classList.remove("show-pop-up");
  openPopUp.classList.remove("modal-error");
});

messageForm.addEventListener("submit", function (evt) {
  if (!userName.value || !userMail.value || !userMessage.value) {
    evt.preventDefault();
    openPopUp.classList.remove("modal-error");
    openPopUp.offsetWidth = openPopUp.offsetWidth;
    openPopUp.classList.add("modal-error");
  } else {
    localStorage.setItem("name", userName.value);
  }
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (openPopUp.classList.contains("show-pop-up")) {
      evt.preventDefault();
      openPopUp.classList.remove("show-pop-up");
      openPopUp.classList.remove("modal-error");
    }
  }
});
