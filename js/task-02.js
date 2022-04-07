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
const createItem = (name) => {
  const itemEl = document.createElement("li");
  itemEl.textContent = name;
  itemEl.classList.add("item");
  return itemEl;
};
const newIngredients = ingredients.map(createItem);
console.log(newIngredients);
listEl.append(...newIngredients);
console.log(listEl);

// === V-2
// const itemsEl = ingredients
//   .map((item) => `<li class="item"> ${item} </li>`)
//   .join("");
// listEl.innerHTML = itemsEl;
// console.log(listEl);
