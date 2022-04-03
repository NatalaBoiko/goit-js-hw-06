const categoriesEl = document.querySelector("#categories");
console.log(`Number of categories: ${categoriesEl.children.length}`);

const firstEl = categoriesEl.firstElementChild;
// console.log(firstEl);

const firstCategoryEl = firstEl.firstElementChild;

const firstListEl = firstEl.lastElementChild;
console.log(`
Category: ${firstCategoryEl.textContent} 
Elements: ${firstListEl.children.length}`);

const secondEl = firstEl.nextElementSibling;
// console.log(secondEl);
const secondCategoryEl = secondEl.firstElementChild;

const secondListEl = secondEl.lastElementChild;
console.log(`
Category: ${secondCategoryEl.textContent}
Elements: ${secondListEl.children.length}`);

const lastEl = categoriesEl.lastElementChild;
// console.log(firstEl);

const lastCategoryEl = lastEl.firstElementChild;

const lastListEl = lastEl.lastElementChild;
console.log(`
Category: ${lastCategoryEl.textContent}
Elements: ${lastListEl.children.length}`);
