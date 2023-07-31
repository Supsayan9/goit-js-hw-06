const validationInput = document.querySelector("#validation-input");
const validLength = Number(validationInput.dataset.length);

validationInput.addEventListener("blur", () => {
  const inputValue = validationInput.value.trim();
  const isValid = inputValue.length === validLength;

  validationInput.classList.remove("invalid", "valid");
  validationInput.classList.add(isValid ? "valid" : "invalid");
});