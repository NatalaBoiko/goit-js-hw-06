const inputEl = document.querySelector("#validation-input");

const onInputBlur = (event) => {
  console.log("blure");
  if (event.currentTarget.value.length === Number(inputEl.dataset.length)) {
    event.currentTarget.classList.add("valid");
    event.currentTarget.classList.remove("invalid");
  } else {
    event.currentTarget.classList.remove("valid");
    event.currentTarget.classList.add("invalid");
  }
};

inputEl.addEventListener("blur", onInputBlur);
