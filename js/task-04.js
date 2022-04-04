const decrementBtnEl = document.querySelector('[data-action="decrement"]');

const incrementBtnEl = document.querySelector('[data-action="increment"]');

const counterEl = document.querySelector("#value");

let counterValue = 0;

const onDecrementBtnClick = () => {
  counterValue -= 1;
  counterEl.textContent = counterValue;
};
decrementBtnEl.addEventListener("click", onDecrementBtnClick);

const onIncrementBtnClick = () => {
  counterValue += 1;
  counterEl.textContent = counterValue;
};
incrementBtnEl.addEventListener("click", onIncrementBtnClick);

incrementBtnEl.addEventListener("click", onIncrementBtnClick);
