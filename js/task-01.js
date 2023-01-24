const categoriesList = document.querySelector("#categories");
const categoriesListItem = document.querySelector(".item");
const categoriesSublist = categoriesListItem.querySelector("ul");
console.log("Number of categories:", categoriesList.childElementCount);

console.log("Category:", categoriesListItem.firstElementChild.textContent);
console.log("Elements:", categoriesSublist.childElementCount);

console.log(
  "Category:",
  categoriesListItem.nextElementSibling.firstElementChild.textContent
);
console.log(
  "Elements:",
  categoriesListItem.nextElementSibling.lastElementChild.childElementCount
);

console.log(
  "Category:",
  categoriesList.lastElementChild.firstElementChild.textContent
);
console.log(
  "Elements:",
  categoriesList.lastElementChild.lastElementChild.childElementCount
);
