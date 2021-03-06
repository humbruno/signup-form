const form = document.querySelector("form");
const inputs = document.querySelectorAll("input");
const validation = document.querySelectorAll(".validation-text");
const email = document.querySelector("#email");
const emailValidation = document.querySelector("#validation-email");
const pattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let correctCount = 0; // keep track of how many inputs are correctly filled

  for (let i = 0; i < inputs.length; i++) {
    if (!inputs[i].value) {
      inputs[i].classList.add("empty", "icon");
      validation[i].innerHTML = `${inputs[i].placeholder} cannot be empty`;
    } else {
      inputs[i].classList.remove("empty", "icon");
      validation[i].innerHTML = "";
      correctCount += 1;

      if (!email.value.match(pattern)) {
        emailValidation.innerHTML = "Looks like this is not an email";
        email.classList.add("empty", "icon");
      } else {
        emailValidation.innerHTML = "";
        email.classList.remove("empty", "icon");
      }
    }
  }

  if (correctCount === inputs.length && email.value.match(pattern)) {
    document.querySelector("button").innerHTML =
      "You have signed up for the free trial!";
  }
});
