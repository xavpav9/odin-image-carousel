import "./image-carousel-style.css";
import createImageCarousel from "./image-carousel.js";

import image1 from "./images/image1.jpg";
import image2 from "./images/image1.jpg";
import image3 from "./images/image1.jpg";
import image4 from "./images/image1.jpg";
import image5 from "./images/image1.jpg";
import image6 from "./images/image1.jpg";
import image7 from "./images/image1.jpg";
import image8 from "./images/image1.jpg";
import image9 from "./images/image1.jpg";
import image10 from "./images/image1.jpg";
import image11 from "./images/image1.jpg";
import image12 from "./images/image1.jpg";
import image13 from "./images/image1.jpg";

const images = [image1, image2, image3, image4, image5, image6, image7, image8, image9, image10, image11, image12, image13]

const imageCarousel = createImageCarousel(images);

document.body.appendChild(imageCarousel);


