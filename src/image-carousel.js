import rightArrow from "./images/right-arrow.svg";
import leftArrow from "./images/left-arrow.svg";

function createImageCarousel(images) {
  let currentImg = 0;
  const maxImage = images.length - 1;

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

  function goToImage(imageNumber) {
    if (maxImage >= imageNumber && imageNumber >= 0) {
      currentImg = imageNumber;
      allImagesDiv.style.left = `-${currentImg * 800}px`;
    }
  }

  pictureDiv.appendChild(allImagesDiv);
  imageCarousel.appendChild(leftBtn);
  imageCarousel.appendChild(pictureDiv);
  imageCarousel.appendChild(rightBtn);
  return imageCarousel;
}

export default createImageCarousel;
