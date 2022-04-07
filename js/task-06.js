const inputEl = document.querySelector("#validation-input");
console.log(inputEl);
inputEl.addEventListener("blur", onChangeBorderColor);

const validLength = inputEl.dataset.length;

function onChangeBorderColor(event) {
  console.log(event.currentTarget.value.length);
  //   if (event.currentTarget.value.length === Number(validLength)) {
  //     event.currentTarget.classList.remove("invalid");
  //     event.currentTarget.classList.add("valid");
  //   } else {
  //     event.currentTarget.classList.remove("valid");
  //     event.currentTarget.classList.toggle("invalid");
  //   }
}
console.log(event.currentTarget.value.length);
