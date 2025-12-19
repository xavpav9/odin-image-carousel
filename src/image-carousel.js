function createImageCarousel(images) {
  const pictureDiv = document.createElement("div");
  pictureDiv.classList.add("image-carousel");

  const allImagesDiv = document.createElement("div");
  allImagesDiv.classList.add("all-images");

  for (const imageSrc of images) {
    const image = document.createElement("img");
    console.log(imageSrc);
    image.classList.add("image-for-carousel");
    image.src = imageSrc;
    image.alt = "item in image carousel";

    allImagesDiv.appendChild(image);
  }

  pictureDiv.appendChild(allImagesDiv);
  return pictureDiv;
}

export default createImageCarousel;
