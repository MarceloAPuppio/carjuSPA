import { APP } from "./App.js";
import { observer, observerImg } from "./helpers/observer.js";

document.addEventListener("DOMContentLoaded", APP);
window.addEventListener("load", () => {
  const clipPath = document.querySelector(".about-img");
  const details = document.querySelectorAll("details");

  details.forEach((e) => {
    observer.observe(e);
  });
  observerImg.observe(clipPath);
});
