import rightArrow from "./images/right-arrow.svg";
import leftArrow from "./images/left-arrow.svg";

function createImageCarousel(images) {
  if (images.length === 0) return false;

  let currentImg = 0;
  const maxImage = images.length - 1;
  let currentTimeout;

  const imageCarousel = document.createElement("div");
  imageCarousel.classList.add("image-carousel");

  const pictureDiv = document.createElement("div");
  pictureDiv.classList.add("current-image");

  const allImagesDiv = document.createElement("div");
  allImagesDiv.classList.add("all-images");

  for (const imageSrc of images) {
    const image = document.createElement("img");
    image.classList.add("image-for-carousel");
    image.src = imageSrc;
    image.alt = "item in image carousel";

    allImagesDiv.appendChild(image);
  }

  const leftBtn = document.createElement("button");
  const leftArrowImg = document.createElement("img");
  leftBtn.classList.add("change-image-btn");
  leftArrowImg.src = leftArrow;
  leftBtn.appendChild(leftArrowImg);
  const rightBtn = document.createElement("button");
  const rightArrowImg = document.createElement("img");
  rightBtn.classList.add("change-image-btn");
  rightArrowImg.src = rightArrow;
  rightBtn.appendChild(rightArrowImg);

  leftBtn.addEventListener("click", evt => goToImage(currentImg - 1));
  rightBtn.addEventListener("click", evt => goToImage(currentImg + 1));

  const imagePicker = document.createElement("div");
  imagePicker.classList.add("image-picker");

  for (let i = 0; i < images.length; ++i) {
    const circle = document.createElement("button");
    circle.classList.add("circle");
    if (i == 0) circle.classList.add("selected");

    circle.addEventListener("click", evt => {
      goToImage(i);
    });
    imagePicker.appendChild(circle);
  }

  function goToImage(imageNumber) {
    if (maxImage >= imageNumber && imageNumber >= 0) {
      currentImg = imageNumber;
      allImagesDiv.style.left = `-${currentImg * 800}px`;

      for (let i = 0; i < imagePicker.children.length; ++i) {
        if (i == currentImg) imagePicker.children[i].classList.add("selected");
        else imagePicker.children[i].classList.remove("selected");
      }

      clearTimeout(currentTimeout);
      currentTimeout = setTimeout(() => {
        goToImage(currentImg + 1);
      }, 5000);
    }
  }

  goToImage(0);
  currentTimeout = setTimeout(() => {
    goToImage(currentImg + 1);
  }, 5000);

  pictureDiv.appendChild(allImagesDiv);
  imageCarousel.appendChild(leftBtn);
  imageCarousel.appendChild(pictureDiv);
  imageCarousel.appendChild(rightBtn);
  imageCarousel.appendChild(imagePicker);
  return imageCarousel;
}

export default createImageCarousel;
