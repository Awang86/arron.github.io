const form = document.forms["contactForm"];

const hiring = form.elements["about"][2]; 
const hourly = document.getElementById("hourly-rate");
const rate = document.getElementById('rate');
const postal = document.getElementById('postalCode');
const phone = document.getElementById('phone');
const message = document.getElementById('message');


let problem = false;

postal.addEventListener('input', function () {
  const postalInput = postal.value.trim(); 
  const postalRegex = /[^0-9DFIOQUWZ][0-9][^DFIOQU] ?[0-9][^0-9DFIOQU][0-9]/; 
  if (!postalRegex.test(postalInput)) {
    problem = true;
    showErrorMessage("must be a valid Canadian Postal Code e.g.  a#a#a#");
  } else {
    hideErrorMessage();
  }
});

phone.addEventListener('input', function() {
  let phonestr = phone.value.trim();
  phonestr = phonestr.replace(/\s+/g, "");
  const phoneRegex = /\D/g; 

  if (phoneRegex.test(phonestr)) {
    showErrorMessage("only enter numbers");
    problem = true;
  } else if (phonestr.length < 10){
    showErrorMessage("please enter a 10 digits phone number");
  } else {
    hideErrorMessage();
  }
  
});

rate.addEventListener('input', function() {
  const amount = parseFloat(rate.value);

  if (amount <= 0) {
    showErrorMessage("Enter a hourly rate greater than 0");
    problem = true;
  } else {
    hideErrorMessage();
  }

});

form.addEventListener("change", function() {

  if (hiring.checked) {
    hourly.style.display = "block";
    hourly.querySelector("input").setAttribute("required", true);
  } else {
    hourly.style.display = "none";
    hourly.querySelector("input").removeAttribute("required");
  }
});

const error = document.querySelector('#error');
const errorbox = document.querySelector('#error-box');

function showErrorMessage(msg) {
  errorbox.style.display ="block";
  error.style.display ="block";
  error.innerHTML = msg;
} 

function hideErrorMessage() {
  problem = false;
  errorbox.style.display ="none";
  error.innerHTML = "";
}


