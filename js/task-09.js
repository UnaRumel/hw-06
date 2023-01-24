function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const btnEl = document.querySelector(".change-color");
const colorHex = document.querySelector(".color");
const body = document.querySelector("body");
const onBtnClick = (event) => {
  body.style.backgroundColor = getRandomHexColor();
  colorHex.textContent = body.style.backgroundColor;
};
btnEl.addEventListener("click", onBtnClick);
console.log(body.style.backgroundColor);
