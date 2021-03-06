const header1 = document.querySelector("#header1");
const header2 = document.querySelector("#header2");
const header3 = document.querySelector("#header3");
const header4 = document.querySelector("#header4");
const header5 = document.querySelector("#header5");
const header6 = document.querySelector("#header6");
const header7 = document.querySelector("#header7");
const allInputs = document.querySelectorAll("input");
const nameInput = document.querySelector("#name");
const phoneNumberInput = document.querySelector("#phoneNumber");
const emailAddressInput = document.querySelector("#emailAddress");
const button = document.querySelector("#nextButton");
const submitButton = document.querySelector("#submitButton");
const projectTypes = document.querySelector("#projectTypes");
const textbox = document.querySelector("#textbox");
let step = 0;
let name = "";

function nextStep() {
  event.preventDefault();
  step++;
  console.log(step);

  if( step === 1 ) {
    hide(header1);
    hide(nameInput);
    name = nameInput.value;
    header2.innerHTML = "Hey there " + name + ", it's nice to meet you! <br> Can we get your number?";
    show(header2);
    show(phoneNumberInput);
  } else if ( step === 2 ) {
    hide(header2);
    hide(phoneNumberInput);
    show(header3);
    show(emailAddressInput);
  } else if ( step === 3 ) {
    hide(header3);
    hide(emailAddressInput);
    show(header4);
    show(projectTypes);
  } else if (step === 4) {
    hide(header4);
    hide(projectTypes);
    show(header5);
    show(textbox);
  } else if (step === 5) {
    hide(button);
    hide(textbox);
    hide(header5);
    show(header6);
    for (let i=0; i<allInputs.length; i++){
      allInputs[i].style.display = "inline-block";
    }
    show(projectTypes);
    show(submitButton);
  } else if (step >= 6) {
    confirm();
  }
}

function hide(element) {
  element.style.display = "none";
}

function show(element) {
  element.style.display = "inline-block";
}

function confirm() {
  event.preventDefault();
  hide(header6);
  for (let i=0; i<allInputs.length; i++){
    allInputs[i].style.display = "none";
  }
  hide(projectTypes);
  hide(submitButton);
  show(header7);
}

for (let i=0; i<allInputs.length; i++){
  allInputs[i].style.display = "none";
}
hide(projectTypes);
header1.innerHTML = "What's up? We're Umbrella Avenue. <br> What's your name, good lookin'?"
show(header1);
show(nameInput);

button.addEventListener("click", () => { nextStep() });
submitButton.addEventListener("click", () => { confirm() });
