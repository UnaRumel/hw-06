const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

let item = document.createElement("li");

function ingredientMarkupAdder() {
  return ingredients
    .map((ingredient) => `<li class="item">${ingredient}</li>`)
    .join("");
}

document.querySelector("#ingredients").innerHTML =
  ingredientMarkupAdder(ingredients);
