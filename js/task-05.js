const inputEl = document.querySelector("#name-input");
const outputEl = document.querySelector("#name-output");

const onInputChange = (event) => {
  if (event.currentTarget.value !== "") {
    outputEl.textContent = event.currentTarget.value;
  } else {
    outputEl.textContent = "Anonymous";
  }
};
inputEl.addEventListener("input", onInputChange);

// === V-2
// const onInputChange = (event) => {
//   outputEl.textContent =
//     event.currentTarget.value !== "" ? event.currentTarget.value : "Anonymous";
// };
// inputEl.addEventListener("input", onInputChange);
