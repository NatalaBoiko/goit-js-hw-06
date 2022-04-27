const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

const imagesEl = document.querySelector(".gallery");

// === V-3
const makeImages = (image) => {
  const { url, alt } = image;
  return `
  <li class = 'gallery__item'><img src='${url}' alt='${alt}' class="gallery__img" />
  </li>
  `;
};

const makeImagesList = images.map(makeImages).join("");
console.log(makeImagesList);
imagesEl.insertAdjacentHTML("afterbegin", makeImagesList);

// === V-1
// const elements = images.map(({ url, alt }) => {
//   const imageEl = document.createElement("img");
//   imageEl.src = url;
//   imageEl.alt = alt;
//   imageEl.classList = "gallery__img";

//   const itemEl = document.createElement("li");
//   itemEl.classList = "gallery__item";
//   itemEl.append(imageEl);

//   return itemEl;
// });
// imagesEl.append(...elements);

// === V-2
// const makeImages = (images) => {
//   return images.map(({ url, alt }) => {
//     const imageEl = document.createElement("img");
//     imageEl.src = url;
//     imageEl.alt = alt;
//     imageEl.classList = "gallery__img";

//     const itemEl = document.createElement("li");
//     itemEl.classList = "gallery__item";
//     itemEl.append(imageEl);

//     return itemEl;
//   });
// };
// const elements = makeImages(images);
// imagesEl.append(...elements);
