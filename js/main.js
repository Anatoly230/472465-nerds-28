let callPopUp = document.querySelector('.feedback-form-call');
let openPopUp = document.querySelector('.close-pop-up');
let closePopUp = document.querySelector('.close-btn');


callPopUp.addEventListener("click", function (evt) {
  evt.preventDefault();
  openPopUp.classList.remove('close-pop-up');
});

closePopUp.addEventListener("click", function (evt){
  evt.preventDefault();
  openPopUp.classList.add('close-pop-up');
});
