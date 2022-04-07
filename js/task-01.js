const categoriesEl = document.querySelector("#categories");
console.log(`Number of categories: ${categoriesEl.children.length}`);

const categoryEl = document.querySelectorAll("li.item");
console.log(categoryEl.length); //можна ще так )

categoryEl.forEach((categoty) => {
  console.log(`Category:  ${categoty.firstElementChild.textContent}   
Elements:  ${categoty.lastElementChild.children.length}`);
});
