function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const buttonEl = document.querySelector("button.change-color");

const spanColorEl = document.querySelector("span.color");

const bodyEl = document.body;

const onButtonClick = (event) => {
  const color = getRandomHexColor();
  bodyEl.style.background = color;
  spanColorEl.textContent = color;
  console.log(spanColorEl.textContent, bodyEl.style.background);
};
bodyEl.addEventListener("click", onButtonClick);
