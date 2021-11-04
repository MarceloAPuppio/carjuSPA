export const BotoneraMobile = () => {
  let div = document.createElement("div");
  div.classList.add("fixed-botoneraMobile");
  div.innerHTML = `
    <a class="botonerMobileAnchor color-azul" href="tel:1132470536"><i class="fas fa-phone-alt"></i></a>
    <a class="botonerMobileAnchor color-verde" href="https://api.whatsapp.com/send?phone=541169282089" target="_blank" ><i class="fab fa-whatsapp"></i></a>
    <a class="botonerMobileAnchor color-turquesa" href="mailto:mail@mail.com"><i class="fas fa-envelope-open"></i></a>
    <a class="botonerMobileAnchor color-fucsia" target="_blank" href="https://www.google.com/maps/dir//M.+Silva+4509,+B1653+Villa+Ballester,+Provincia+de+Buenos+Aires/@-34.5447012,-58.5468624,17z/data=!4m9!4m8!1m0!1m5!1m1!1s0x95bcb752cb98fea9:0x4f6ec7ffb68e36d0!2m2!1d-58.5446737!2d-34.5447012!3e0" ><i class="fas fa-directions"></i></a>
    `;
  return div;
};
