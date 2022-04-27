"use strict";

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const inputEl = document.querySelector('input[type="number"]');
const createEl = document.querySelector("[data-create]");
const destroyEl = document.querySelector("[data-destroy]");
const boxesEl = document.querySelector("#boxes");

const allItems = [];
let itemWidth = 30;
let itemHeight = 30;

const createItems = (items) => {
  for (let i = 0; i < items; i += 1) {
    const itemEl = document.createElement("div");
    itemEl.style.width = `${itemWidth}px`;
    itemEl.style.height = `${itemHeight}px`;
    itemEl.style.backgroundColor = getRandomHexColor();
    itemEl.classList.add("boxy");

    itemWidth += 10;
    itemHeight += 10;

    allItems.push(itemEl);
  }

  return boxesEl.append(...allItems);
};

const createBoxes = () => {
  createItems(inputEl.value);
};

const destroyBoxes = () => {
  boxesEl.innerHTML = " ";
  inputEl.value = "";
  allItems.length = 0;
  itemWidth = 30;
  itemHeight = 30;
};

createEl.addEventListener("click", createBoxes);
destroyEl.addEventListener("click", destroyBoxes);
