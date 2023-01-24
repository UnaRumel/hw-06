function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const thumbEl = document.querySelector("#boxes");
const addBox = document.querySelector("[data-create]");
const destroyBtn = document.querySelector("[data-destroy]");
const numberOfBoxes = document.querySelector('[type="number"]');
const destroyBoxes = () => {
  thumbEl.innerHTML = "";
};
let boxesCollection;

destroyBtn.addEventListener("click", destroyBoxes);
function onInputChange(event) {
  let number = event.currentTarget.value;
  function createBoxes(amount) {
    const array = [];
    for (let i = 1; i <= number; i += 1) {
      array.push(i);
    }
    boxesCollection = array
      .map((value) => {
        return `
 <div style="background-color:${getRandomHexColor()}; width:${
          20 + value * 10
        }px; height:${20 + value * 10}px; margin-bottom: 10px" ></div>
 `;
      })
      .join("");
    return boxesCollection;
  }

  addBox.addEventListener("click", onAddBoxClick);

  function onAddBoxClick(event) {
    createBoxes(number);
    thumbEl.innerHTML = boxesCollection;
  }
}

numberOfBoxes.addEventListener("input", onInputChange);
