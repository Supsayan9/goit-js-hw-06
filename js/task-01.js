const cat_children = document.getElementById("categories").children;
const items = document.querySelectorAll(".item");

console.log(`Number of categories: ${cat_children.length}`);
items.forEach((element) => {
  console.log("\n");
  console.log(`Category: ${element.firstElementChild.textContent}`);
  console.log(`Elements: ${element.lastElementChild.children.length}`);
});