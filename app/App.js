import { BotoneraMobile } from "./components/BotoneraMobile.js";
import { Header } from "./components/Header.js";
import { Main } from "./components/Main.js";
import { WhatsappBtn } from "./components/WhatsappBtn.js";

const $root = document.getElementById("root");
export const APP = () => {
  $root.appendChild(Header());
  $root.appendChild(Main());
  $root.appendChild(WhatsappBtn());
  $root.appendChild(BotoneraMobile());
};
