function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const changeColorBtn = document.querySelector(".change-color");
const colorCurrentSpanEl = document.querySelector(".color");

const changeColorBtnClick = () => {
  const colorRandom = getRandomHexColor();
  document.body.style.backgroundColor = colorRandom;
  colorCurrentSpanEl.textContent = colorRandom;
}

changeColorBtn.addEventListener("click", changeColorBtnClick);
