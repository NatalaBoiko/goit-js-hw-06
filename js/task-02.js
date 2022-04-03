const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
const listEl = document.querySelector("#ingredients");

// === V-1
const itemsEl = ingredients
  .map((item) => `<li class="item"> ${item} </li>`)
  .join("");
listEl.innerHTML = itemsEl;
console.log(listEl);

// === V-2

// const firstItemEl = document.createElement("li");
// firstItemEl.textContent = "Potatoes";
// // firstItemEl.classList = "item";
// firstItemEl.classList.add('item');

// const secondItemEl = document.createElement("li");
// secondItemEl.textContent = "Mushrooms";
// secondItemEl.classList.add('item');

// const thirdItemEl = document.createElement("li");
// thirdItemEl.textContent = "Garlic";
// thirdItemEl.classList.add('item');

// const fourthItemEl = document.createElement("li");
// fourthItemEl.textContent = "Tomatos";
// fourthItemEl.classList.add('item');

// const fifthItemEl = document.createElement("li");
// fifthItemEl.textContent = "Herbs";
// fifthItemEl.classList.add('item');

// const sixthItemEl = document.createElement("li");
// sixthItemEl.textContent = "Condiments";
// sixthItemEl.classList.add('item');

// listEl.append(
//   firstItemEl,
//   secondItemEl,
//   thirdItemEl,
//   fourthItemEl,
//   fifthItemEl,
//   sixthItemEl
// );
// console.log(listEl);
