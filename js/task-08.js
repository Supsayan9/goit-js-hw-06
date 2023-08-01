const form = document.querySelector(".login-form");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const {
    elements: { email, password },
  } = event.currentTarget;
  if (email.value === "" || password.value === "") {
    return window.alert("Please fill in all the fields!");
  }
  const log_in = { email: email.value, password: password.value };
  console.log(log_in);
  form.reset();
});