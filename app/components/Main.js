import { Ubication } from "./sections/Ubication.js";
import { Team } from "./sections/Team.js";

export const Main = () => {
  let main = document.createElement("main");
  //Acá debo ir poniendo las secciones
  main.innerHTML += Team();
  main.innerHTML += Ubication();

  return main;
};
