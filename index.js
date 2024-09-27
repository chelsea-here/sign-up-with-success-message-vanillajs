const feedBackElement = document.getElementById("emailFeedback");
const submitButton = document.getElementById("submitButton");
const successModal = document.getElementById("successModal");
const emailProvided = document.getElementById("emailProvided");
const email = document.getElementById("email");
const closeModalButton = document.getElementById("closeModalButton");

function validateEmailRegex(x) {
  const emailRegex =
    /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
  return emailRegex.test(x);
}

document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("registrationForm");

  email.addEventListener("keyup", function (e) {
    if (
      e.target.value.length > 4 &&
      validateEmailRegex(e.target.value) &&
      e.target.value.length < 100
    ) {
      feedBackElement.textContent = "";
      email.classList.remove("inputInvalid");
      submitButton.classList.remove("submitInvalid");
      submitButton.classList.add("submitValid");
    } else {
      feedBackElement.textContent = "Valid email required";
      email.classList.toggle("unfilled"); //turn off
      email.classList.add("inputInvalid");
      submitButton.classList.remove("submitValid");
      submitButton.classList.add("submitInvalid");
    }
  });

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    const submittedEmail = document.getElementById("email").value;

    if (submittedEmail.length < 4) {
      alert("Email is too short.");
      return;
    }

    if (submittedEmail.length > 100) {
      alert("Email is too long.");
      return;
    }

    if (!validateEmailRegex(submittedEmail)) {
      alert("Please enter a valid email address.");
      return;
    }
    emailProvided.innerText = submittedEmail;
    successModal.showModal();
  });

  closeModalButton.addEventListener("click", function () {
    successModal.close();
    // form.reset(); reloaded window to trigger reset of all event listeners, not just resetting the state of the form.
    window.location.reload();
  });
});

// submitButton.addEventListener("click", () => {
//   if (
//     email.value.length > 4 &&
//     emailRegex.test(email.value) &&
//     email.value.length < 100
//   ) {
//     email.innerText = email.value;
//     successModal.showModal();
//   } else {
//     submitButton.disable;
//   }
// });

// function onClick() {
//   if (isValidEmail) {
//     onSubmit;
//     setModalIsOpen(true);
//   }
// }
