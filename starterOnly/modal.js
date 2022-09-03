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
const mailRegex = /^[a-zA-Z][a-zA-Z0-9\-\_\.]+@[a-zA-Z0-9]{2,}\.[a-zA-Z0-9]{2,}$/;
const birthdate = document.getElementById("birthdate");
const quantity = document.getElementById("quantity");

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


// 1. First name & Last name validation.
function firstNameValidation() {
  if (fName.value == "" || fName.value.length < 2) {
        fName.parentNode.setAttribute("data-error-visible", "true");
      }
  else {
    fName.removeAttribute("data-error-visible");
  }
  return true;

}

function lastNameValidation() {
  if (lName.value == "" || lName.value.length < 2) {
        lName.parentNode.setAttribute("data-error-visible", "true");
      }
  else {
    lName.removeAttribute("data-error-visible");
  }
  return true;
}

// 2. Email validation.
function emailValidation(){
  if(!enteredEmail.value.match(mailRegex)) {
    enteredEmail.parentNode.setAttribute("data-error-visible", "true");
  }
  if(enteredEmail.value == ""){
    enteredEmail.parentNode.setAttribute("data-error-visible", "true");
  }
  else {
    enteredEmail.removeAttribute("data-error-visible");
  }
  return true;
}

// 3. B-day validation.
function bdayValidation() {
  if(birthdate.value == ""){
    birthdate.parentNode.setAttribute("data-error-visible", "true");
  }
  else{
    birthdate.removeAttribute("data-error-visible");
  }
  return true;
}

// 4. Participation quantity validation.
function quantityValidation() {
  if(quantity.value == "") {
    quantity.parentNode.setAttribute("data-error-visible", "true");
  }
  else {
    quantity.removeAttribute("data-error-visible");
  }
  return true;
}

// 5. Location radio button validation.

// 6. Checkbox validation.


// 7. Submit button event.
  // all validation functions combined. 
function validateAll(){
  firstNameValidation();
  lastNameValidation();
  emailValidation();
  bdayValidation();
  quantityValidation();

}

// When submit btn is clicked -> validate all inputs.
submitBtn.addEventListener("click", (validateAll));


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

