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

function galleryMaker() {
  return images
    .map(
      (image) =>
        `<li><img alt='${image.alt}' src=${image.url}  width="680" /></li>`
    )
    .join("");
}

const galleryMarkup = galleryMaker(images);

document
  .querySelector(".gallery")
  .insertAdjacentHTML("afterbegin", galleryMarkup);
