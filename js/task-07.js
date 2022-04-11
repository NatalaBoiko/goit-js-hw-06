const inputEl = document.querySelector("input#font-size-control");
const textEl = document.querySelector("span#text");

const onInputMove = (event) => {
  console.log(event.currentTarget.value);
  textEl.style.fontSize = `${event.currentTarget.value}px`;
};

inputEl.addEventListener("input", onInputMove);
