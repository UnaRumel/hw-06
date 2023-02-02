const inputRangeEl = document.querySelector("#font-size-control");
const textEl = document.querySelector("#text");

const setFontSize = (e) => {
  textEl.style.fontSize = `${e.currentTarget.value}px`;
}

inputRangeEl.addEventListener("input", setFontSize);