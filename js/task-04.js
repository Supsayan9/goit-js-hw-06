const counterValueSpan = document.querySelector("#value");
let counterValue = 0;

document.querySelector("#counter").addEventListener("click", event => {
  const action = event.target.dataset.action;

  if (action === "increment") {
    counterValue++;
  } else if (action === "decrement") {
    counterValue--;
  }

  counterValueSpan.textContent = counterValue;
});