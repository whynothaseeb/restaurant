import "./styles.css";

import loadHome from "./home.js"
import loadMenu from "./menu.js"
import loadAbout from "./about.js"

document.querySelector("#home").addEventListener("click", loadHome);
document.querySelector("#menu").addEventListener("click", loadMenu);
document.querySelector("#about").addEventListener("click", loadAbout);

loadHome();