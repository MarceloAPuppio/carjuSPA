import { ProfileCard } from "./ProfileCard.js";

export const GroupCard = (group) => {
  return `
<details class="detail">
  <summary>${group.nombre}</summary>
  <div class="equipoCardsContainer">
    ${group.personal.map((x) => ProfileCard(x)).join("")}
  </div>
  </details>          
  `;
};
