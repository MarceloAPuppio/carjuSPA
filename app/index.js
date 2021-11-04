import { APP } from "./App.js";
import { observer, observerImg } from "./helpers/observer.js";

document.addEventListener("DOMContentLoaded", APP);
window.addEventListener("load", () => {
  const clipPath = document.querySelector(".about-img");
  const details = document.querySelectorAll("details");
  const video = document.getElementsByTagName("video")[0];
  video.playbackRate = 0.75;
  console.log(video);
  details.forEach((e) => {
    observer.observe(e);
  });
  observerImg.observe(clipPath);
});
