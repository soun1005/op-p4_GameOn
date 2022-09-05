function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const closeIcon = document.querySelector(".close");
const submitBtn = document.querySelector(".btn-submit");
const input = document.getElementsByTagName("input");
const form = document.querySelector('form');
const fName = document.getElementById("first");
const lName = document.getElementById("last");
const enteredEmail = document.getElementById("email");
const birthdate = document.getElementById("birthdate");
const quantity = document.getElementById("quantity");
const locationRadio = document.querySelectorAll(
  "input[name=location]"
)
const agreeBox = document.getElementById("checkbox1");
// email regular expressions
const mailRegex = /^[a-zA-Z][a-zA-Z0-9\-\_\.]+@[a-zA-Z0-9]{2,}\.[a-zA-Z0-9]{2,}$/;

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// close modal form with X icon
closeIcon.addEventListener("click", ()=>{
  modalbg.style.display = "none";
})


/* 
  1. First name & Last name validation.
  */

function firstNameValidation() {
  if (fName.value == "" || fName.value.length < 2) {
        fName.parentNode.setAttribute("data-error-visible", "true");
      }
  else {
    fName.parentNode.setAttribute("data-error-visible", "false");
  }
  return true;
}

function lastNameValidation() {
  if (lName.value == "" || lName.value.length < 2) {
        lName.parentNode.setAttribute("data-error-visible", "true");
      }
  else {
    lName.parentNode.setAttribute("data-error-visible", "false");
    // lName.removeAttribute("data-error-visible");
  }
  return true;
}


/* 
  2. Email validation.
  */
function emailValidation(){
  if(!enteredEmail.value.match(mailRegex)) {
    enteredEmail.parentNode.setAttribute("data-error-visible", "true");
  }
  if(enteredEmail.value == ""){
    enteredEmail.parentNode.setAttribute("data-error-visible", "true");
  }
  else {
    enteredEmail.parentNode.setAttribute("data-error-visible", "false");
  }
  return true;
}

/* 
  3. B-day validation.
  */
function bdayValidation() {
  if(birthdate.value == ""){
    birthdate.parentNode.setAttribute("data-error-visible", "true");
  }
  else{
    birthdate.parentNode.setAttribute("data-error-visible", "false");
  }
  return true;
}

/* 
  4. Participation quantity validation.
  */
function quantityValidation() {
  if(quantity.value == "") {
    quantity.parentNode.setAttribute("data-error-visible", "true");
  }
  else {
    quantity.parentNode.setAttribute("data-error-visible", "false");
  }
  return true;
}

/* 
  5. Location radio button validation. 
  */
function radioValidation() {
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

 /* 
  6. Checkbox validation. 
  */
function checkboxValidation() {
  if(agreeBox.checked == false) {
    agreeBox.parentNode.setAttribute("data-error-visible", "true");
    console.log('it works');
  }
  else{
    agreeBox.parentNode.setAttribute("data-error-visible", "false");
  }

}

 /* 
  7. Submit button event.
  All validation functions combined. 
  */
function validateAll(){
  firstNameValidation();
  lastNameValidation();
  emailValidation();
  bdayValidation();
  quantityValidation();
  radioValidation();
  checkboxValidation();
}

 /* 
  When submit btn is clicked -> validate all inputs. 
  */
submitBtn.addEventListener("click", (validateAll));







// older versions
// submitBtn.addEventListener("submit", (e) => {
//     // preventing default when submitted.
//     e.defaultPrevented();
//     console.log('hello');    
//     //  firstNameValidation() === true &&
//     //   lastNameValidation() === true &&
//     //   emailValidation() === true &&
//     //   bdayValidation() === true &&
//     //   quantityValidation() === true 
//     //   successModal();
   
//   }) 



// function successModal(){
//   console.log(success);
// }

// function validate(event){
//   // const form = document.querySelector('form');
//   const fName = document.getElementById("first");
//   const lName = document.getElementById("last");
//   const enteredEmail = document.getElementById("email");
//   const mailRegex = /^[a-zA-Z][a-zA-Z0-9\-\_\.]+@[a-zA-Z0-9]{2,}\.[a-zA-Z0-9]{2,}$/;
//   const birthdate = document.getElementById("birthdate");
//   const quantity = document.getElementById("quantity");

//   event.preventDefault();
//   // form.reset();

//   // first and last name validation
//   if (fName.value == "" || fName.value.length < 2) {
//     fName.parentNode.setAttribute("data-error-visible", "true");
//   }
  
//   if (lName.value == "" || lName.value.length < 2) {
//     lName.parentNode.setAttribute("data-error-visible", "true");
//   }

//   // email validation
//   if(!enteredEmail.value.match(mailRegex) || enteredEmail.value == "") {
//     enteredEmail.parentNode.setAttribute("data-error-visible", "true");
//   }

//   // email validation
//   if(birthdate.value == ""){
//     birthdate.parentNode.setAttribute("data-error-visible", "true");
//   }

//   // quantity validation
//   if(quantity.value == "") {
//     quantity.parentNode.setAttribute("data-error-visible", "true");
//   }
// }

// submitBtn.addEventListener("click", ()=>{
//   if(enteredEmail.value.match(mailRegex)) {
//     console.log('correct');
//   }
//   else if(enteredEmail.value == "") {
//     enteredEmail.parentNode.setAttribute("data-error-visible", "true");
//   }
//   else {
//     console.log('voila')
//   }

// });

