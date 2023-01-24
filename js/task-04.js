const decrementBtn = document.querySelector('[data-action="decrement"]');
const incrementBtn = document.querySelector('[data-action="increment"]');
let value = document.querySelector("#value");
let counterValue = 0;

const onDecrementBtn = (event) => {
  counterValue -= 1;
  console.log(counterValue);
  value.textContent = counterValue;
};
const onIncrementBtn = (event) => {
  counterValue += 1;
  console.log(counterValue);
  value.textContent = counterValue;
};
decrementBtn.addEventListener("click", onDecrementBtn);
incrementBtn.addEventListener("click", onIncrementBtn);
