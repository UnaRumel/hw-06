const nameInputEl = document.querySelector("#name-input");
const nameOutputEl = document.querySelector("#name-output");

const chekInputValue = (e) => {
  if (e.currentTarget.value.trim() === "") {
    nameOutputEl.textContent = "Anonymous";
  } else nameOutputEl.textContent = e.currentTarget.value;
};

nameInputEl.addEventListener("input", chekInputValue);
