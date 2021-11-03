import { APP } from "./App.js";

const cargarContenido = (entradas, observador) => {
  entradas.forEach((entrada) => {
    if (entrada.isIntersecting) {
      console.log(entrada.target);
      entrada.target.classList.add("visible");
    } else {
    }
  });
};
const cargarImagen = (entradas, observador) => {
  entradas.forEach((entrada) => {
    if (entrada.isIntersecting) {
      console.log(entrada.target);
      entrada.target.classList.add("clipPath");
    } else {
      entrada.target.classList.remove("clipPath");
    }
  });
};
const observer = new IntersectionObserver(cargarContenido, {
  root: null,
  rootMargin: "200px",
  threshold: 0.9,
});
const observerImg = new IntersectionObserver(cargarImagen, {
  root: null,
  rootMargin: "200px",
  threshold: 0.9,
});
document.addEventListener("DOMContentLoaded", APP);
window.addEventListener("load", () => {
  const clipPath = document.querySelector(".about-img");
  const details = document.querySelectorAll("details");
  console.log(details);

  details.forEach((e) => {
    observer.observe(e);
  });
  observerImg.observe(clipPath);
});
