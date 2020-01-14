const header1 = document.querySelector("#header1");
const header2 = document.querySelector("#header2");
const header3 = document.querySelector("#header3");
const header4 = document.querySelector("#header4");
const allInputs = document.querySelectorAll("input");
const nameInput = document.querySelector("#name");
const phoneNumberInput = document.querySelector("#phoneNumber");
const emailAddressInput = document.querySelector("#emailAddress");
const button = document.querySelector("#nextButton");
const projectTypes = document.querySelector("#projectTypes");
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

    }
}

function hide(element) {
  element.style.display = "none";
}

function show(element) {
  element.style.display = "inline-block";
}

for (let i=0; i<allInputs.length; i++){
  allInputs[i].style.display = "none";
}
header1.innerHTML = "What's up? We're Umbrella Avenue. <br> What's your name, good lookin'?"
show(header1);
show(nameInput);
hide(projectTypes);

button.addEventListener("click", () => { nextStep() });
