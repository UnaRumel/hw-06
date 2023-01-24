const inputEl = document.querySelector("#name-input");
const nameEl = document.querySelector("#name-output");
const onInputTyping = (event) => {
  nameEl.textContent = event.currentTarget.value.trim();
  const valid = event.target.value.trim();
  nameEl.textContent = valid ? valid : "Anonymous";
};
inputEl.addEventListener("input", onInputTyping);
