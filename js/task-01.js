const numberCategoriesEl = document.querySelectorAll('li.item');
console.log(`Number of categories: ${numberCategoriesEl.length}`);
numberCategoriesEl.forEach(item => {
 console.log(`Category: ${item.querySelector("h2").innerText}`);
  console.log(`Elements: ${item.querySelectorAll("li").length}`);
});
    