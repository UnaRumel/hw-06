const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos', 
  'Herbs',
  'Condiments',
];

const makeItem = (ingredient) => {
  const item = document.createElement("li");
  item.innerText = ingredient;
  item.classList.add("item");
  return item;
}; 

const ingredientsItemEl = ingredients.map(makeItem);
const ingredientsEl = document.querySelector("#ingredients");
ingredientsEl.append(...ingredientsItemEl);
