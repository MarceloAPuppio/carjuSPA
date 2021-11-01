import { ProfileCard } from "./ProfileCard.js";

export const GroupCard = (group) => {
  return `
<details class="detail">
  <summary><div class="detail-name">${
    group.nombre
  }</div><div class="thumbnail-wrapper">${group.personal
    .map((empleado) => `<img class="thumbnail" src="${empleado.img}"/>`)
    .join("")}
</div></summary>
  <div class="equipoCardsContainer">
    ${group.personal.map((x) => ProfileCard(x)).join("")}
  </div>
  </details>          
  `;
};
