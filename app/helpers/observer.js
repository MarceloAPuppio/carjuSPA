const cargarContenido = (entradas, observador) => {
  entradas.forEach((entrada) => {
    if (entrada.isIntersecting) {
      entrada.target.classList.add("visible");
    } else {
    }
  });
};
const cargarImagen = (entradas, observador) => {
  entradas.forEach((entrada) => {
    if (entrada.isIntersecting) {
      entrada.target.classList.add("clipPath");
    } else {
      entrada.target.classList.remove("clipPath");
    }
  });
};
export const observer = new IntersectionObserver(cargarContenido, {
  root: null,
  rootMargin: "200px",
  threshold: 0.2,
});
export const observerImg = new IntersectionObserver(cargarImagen, {
  root: null,
  rootMargin: "200px",
  threshold: 0.9,
});
