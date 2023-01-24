const inputEL = document.querySelector("#validation-input");
console.log(inputEL);
const onInputBlur = (event) => {
  if (
    event.currentTarget.value.length ===
    Number(event.currentTarget.dataset.length)
  ) {
    event.currentTarget.classList.add("valid");
    event.currentTarget.classList.remove("invalid");
  } else {
    event.currentTarget.classList.add("invalid");
    event.currentTarget.classList.remove("valid");
  }
  console.log(event.currentTarget);
};
inputEL.addEventListener("blur", onInputBlur);
