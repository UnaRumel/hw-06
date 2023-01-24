const inputEl = document.querySelector("#font-size-control");
const text = document.querySelector("#text");
console.log(inputEl.value);
const onInputChange = (event) => {
  text.style.fontSize = `${event.currentTarget.value}px`;
};
inputEl.addEventListener("input", onInputChange);
