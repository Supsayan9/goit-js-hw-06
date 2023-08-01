const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ingredientsToAdd = document.querySelector("#ingredients");

const ingredientsMap = ingredients.map((e) => {
  const element = document.createElement("li");
  element.innerText = e;
  element.classList.add("item");
  return element;
});

ingredientsToAdd.append(...ingredientsMap);