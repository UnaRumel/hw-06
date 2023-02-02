let counterValue = 0;
const counterEl = document.querySelector("#value");

const render = () => {
  counterEl.textContent = counterValue;
};

const handleDecrement = () => {
    counterValue -= 1;
    render();
}

 const handleIncrement = () => {
    counterValue += 1;
    render();
}
 
const btnDecrementEl = document.querySelector(`button[data-action = "decrement"]`);
const btnIncrementEl = document.querySelector(`button[data-action = "increment"]`);

btnDecrementEl.addEventListener("click", handleDecrement);
btnIncrementEl.addEventListener("click", handleIncrement);
