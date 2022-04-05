const inputEl = document.querySelector("#name-input");
const outputEl = document.querySelector("#name-output");

const onInputFn = (event) => {
  //   event.preventDefault();
  if (event.currentTarget.value !== "") {
    outputEl.textContent = event.currentTarget.value;
  } else {
    outputEl.textContent = "Anonymous";
  }
};
inputEl.addEventListener("input", onInputFn);

// === V-2
// const onInputFn = (event) => {
//   outputEl.textContent =
//     event.currentTarget.value !== "" ? event.currentTarget.value : "Anonymous";
// };
// inputEl.addEventListener("input", onInputFn);
