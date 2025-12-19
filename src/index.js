import "./style.css";
import img from "./images/example.png";

console.log("hi")
const newImg = document.createElement("img");
newImg.src = img;
document.body.appendChild(newImg);
