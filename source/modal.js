// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const closeIcon = document.querySelector(".close");
const submitBtn = document.getElementById("submit-form");
const input = document.getElementsByTagName("input");
const form = document.querySelector('form');
const confirmModal = document.querySelector(".confirm-bg");
const confirmModalText = document.querySelector(".confirm-modal");
const confirmModalBtn = document.querySelector(".confirm-modal-btn");
const formControl = document.getElementById("body-form");
const locationRadio = document.querySelectorAll(
  "input[name=location]"
)

// regex to control names and email.
const mailRegex = /^[a-zA-Z][a-zA-Z0-9\-\_\.]+@[a-zA-Z0-9]{2,}\.[a-zA-Z0-9]{2,}$/;
const nameRegex = /[a-zA-Z]+/i;
// const lNameRegex = /[a-zA-Z]+/i;
// // const lNameRegex = /\s+.*[a-zA-Z]+/i;

// Nav bar
function editNav() {
  let y = document.getElementById("nav-list");
  let x = document.getElementById("myTopnav");
  if (x.className === "header" && y.className === "header__nav") {
    x.className += " responsive"
    y.className += " responsive";
  } else {
    x.className = "header";
    y.className = "header__nav";
  }
}

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// close modal
function closeModal(){
  modalbg.style.display = "none";
  confirmModal.style.display = "none";
}

// close modal by clicking 'X' icon
closeIcon.addEventListener("click", closeModal);

// close confirmation modal
confirmModalBtn.addEventListener("click", closeModal);

// close modals by ESC key
document.addEventListener('keydown', (e)=> {
  if (e.key === 'Escape') {
  closeModal();
  }
});

/***************************************** 
Validation check.

1. First name & Last name validation.
******************************************/

const firstNameValidation = () => {
  const fName = document.getElementById("first");
  if (fName.value === "" || fName.value.length < 2 || !fName.value.match(nameRegex)) {
        fName.parentNode.setAttribute("data-error-visible", "true");
      }
  else {
    fName.parentNode.setAttribute("data-error-visible", "false");
  }
}

const lastNameValidation = () => {
  const lName = document.getElementById("last");
  if (lName.value === "" || lName.value.length < 2 || !lName.value.match(nameRegex)) {
        lName.parentNode.setAttribute("data-error-visible", "true");
      }
  else {
    lName.parentNode.setAttribute("data-error-visible", "false");
  }
}

/*********************
2. Email validation.
**********************/
const emailValidation = () => {
  const enteredEmail = document.getElementById("email");
  if(!enteredEmail.value.match(mailRegex) || enteredEmail.value === "") {
    enteredEmail.parentNode.setAttribute("data-error-visible", "true");
  }
  else {
    enteredEmail.parentNode.setAttribute("data-error-visible", "false");
  }
}

/********************
3. B-day validation.
*********************/

const bdayValidation = () => {
  const birthdate = document.getElementById("birthdate");
  // today's date
  let currentDate = new Date();

  // to get the date from input
  let selectedDate = document.getElementById("birthdate").value;

  // the date that user selected
  let userBday = new Date(selectedDate);

  // diff : current date minus user's birthday
	let diff = new Date(currentDate - userBday);

	let age = Math.abs(diff.getUTCFullYear() - 1970);

  if(birthdate.value === "" ){
    birthdate.parentNode.setAttribute("data-error-visible", "true");
  }

  else if(
    age <= 18
  ) {
    birthdate.parentNode.setAttribute("data-error", " Vous ne pouvez pas vous inscrire si vous êtes mineur.")
  }

  else{
    birthdate.parentNode.setAttribute("data-error-visible", "false");
  }
}



// unable to choose birthdate after today

// let today as today.
let today = new Date();

// let dd as today's date.
let dd = today.getDate();

// let mm as today's month
let mm = today.getMonth() + 1; //January is 0!

// let yyyy as today's year
let yyyy = today.getFullYear();

// if today's day is smaller than 10, add 0 (so July is 07 instead of 7)
if (dd < 10) {
  dd = `0${dd}`;
}
if (mm < 10) {
  mm = `0${mm}`;
} 

today = `${yyyy}-${mm}-${dd}`;

// the max date for HTML input type date is set to today.
birthdate.setAttribute("max", today);


/***************************************  
4. Participation quantity validation.
****************************************/
const quantityValidation = () => {
  const quantity = document.getElementById("quantity");
  if(quantity.value == "") {
    quantity.parentNode.setAttribute("data-error-visible", "true");
  }
  else {
    quantity.parentNode.setAttribute("data-error-visible", "false");
  }
}

/*************************************
5. Location radio button validation. 
**************************************/
const radioValidation = () => {
let isChecked = false;
  locationRadio.forEach((radio) => {
    if(radio.checked) {
      isChecked = true;
    }
  });
  if(!isChecked) {
    locationRadio[0].parentNode.setAttribute("data-error-visible", "true");
  }
  else {
    locationRadio[0].parentNode.setAttribute("data-error-visible", "false");
  }
}

/***********************
6. Checkbox validation. 
***********************/
const checkboxValidation = () => {
  const agreeBox = document.getElementById("checkbox1");
  if(agreeBox.checked === false) {
    agreeBox.parentNode.setAttribute("data-error-visible", "true");
  }
  else{
    agreeBox.parentNode.setAttribute("data-error-visible", "false");
  }
}

/************************************
7. Submit button.
All validation functions combined.
When submit btn is clicked -> validate all inputs. 
************************************/

const validate = (event) => {
  // to prevent all inputs being default after 'c'est parti'
  event.preventDefault();

  //to trigger the annonymous functions for each inputs
  firstNameValidation();
  lastNameValidation();
  emailValidation();
  bdayValidation();
  quantityValidation();
  radioValidation();
  checkboxValidation();

  confirmModalOn();
  } 

/************************
To open 'Confirm' modal.
*************************/

const confirmModalOn = () => {
  // when the validation failed
  const errorsVisible = document.querySelectorAll('[data-error-visible="true"]');
  // when error message is 0, open confirm modal.
  const noError = errorsVisible.length === 0;
  if(noError){
    confirmModal.style.display= "block";
    confirmModalText.style.display= "block";
    // when there is no error, close input modal.
    modalbg.style.display = "none";
    formControl.reset();
  }
}
