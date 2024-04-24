const getStartedButton = document.getElementById("get-started-button");
const errorMessage = document.getElementById("error-message");
const inputEmail = document.getElementById("email");
const getButtonStarted = document.getElementById("button-one");
const emailErrorButton = document.getElementById("error-email");
const getEmailAddress = document.getElementById("email-adress");
let emailText = "";
let inputText = "";

inputEmail.addEventListener("input", (event) => {
  inputText = event.target.value;
});

getStartedButton.addEventListener("click", () => {
  if (inputText.length > 0) {
    errorMessage.style.display = "block";
  }
});

getEmailAddress.addEventListener("input", (event) => {
  emailText = event.target.value;
});
getButtonStarted.addEventListener("click", () => {
  if (emailText.length > 0) {
    emailErrorButton.style.display = "block";
  }
});
