function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const size = 30;
const controls = {
  number: document.querySelector("[type='number']"),
  btnCreate: document.querySelector("[data-create]"),
  btnDestroy: document.querySelector("[data-destroy]"),
  box: document.querySelector("#boxes"),
};

controls.btnCreate.addEventListener("click", createBoxes);

function createBoxes() {
  //destroyBoxes();
  if (checkNumber()) {
    for (let i = 0; i < Number(controls.number.value); i++) {
      let s = size + 10 * i * Number(controls.number.step) + "px";
      const tempElem = document.createElement("div");
      tempElem.style.backgroundColor = getRandomHexColor();
      tempElem.style.width = s;
      tempElem.style.height = s;
      controls.box.append(tempElem);
    }
  } else {
    window.alert(
      `Min number must be - ${controls.number.min}\nMax number - ${controls.number.max}`
    );
  }
  controls.number.value = "";
}

function destroyBoxes() {
  controls.box.innerHTML = "";
}

controls.btnDestroy.addEventListener("click", destroyBoxes);

function checkNumber() {
  return (
    controls.number.value >= Number(controls.number.min) &&
    controls.number.value <= Number(controls.number.max)
  );
}