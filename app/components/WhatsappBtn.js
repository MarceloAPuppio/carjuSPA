export const WhatsappBtn = () => {
  let btn = document.createElement("button");
  btn.classList.add("fixed-btn");
  btn.innerHTML = `
  <a href="https://api.whatsapp.com/send?phone=541169282089" target="_blank" ><i class="fab fa-whatsapp"></i></a>
  
  `;
  return btn;
};
