function createImageCarousel(images) {
  let currentImg = 0;
  const maxImage = images.length - 1;

  const pictureDiv = document.createElement("div");
  pictureDiv.classList.add("image-carousel");

  const allImagesDiv = document.createElement("div");
  allImagesDiv.classList.add("all-images");

  for (const imageSrc of images) {
    const image = document.createElement("img");
    image.classList.add("image-for-carousel");
    image.src = imageSrc;
    image.alt = "item in image carousel";

    allImagesDiv.appendChild(image);
  }

  function goToImage(imageNumber) {
    if (maxImage >= imageNumber && imageNumber >= 0) {
      currentImg = imageNumber;
      allImagesDiv.style.left = `-${currentImg * 800}px`;
    }
  }

  pictureDiv.appendChild(allImagesDiv);
  return pictureDiv;
}

export default createImageCarousel;
