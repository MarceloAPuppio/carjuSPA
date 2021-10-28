import { Nav } from "./Nav.js";
export const Header = () => {
  const header = document.createElement("header");
  header.classList.add("header");
  header.innerHTML = `
  <picture class="logo">
            <svg version="1.1" x="0px" y="0px">
                <path class="pathLogo" d="M39.7,13.3c0,0-10.6,0.5-14.4,0.7c-2.3,0.1-3.6-2-1.5-4.1c1.6-1.6,2.2-2.1,1.9-5.2c-0.3-3.5-3.7-4.7-6.5-4.6
                    c-2.9,0-6.1,1.6-7,4.5c-0.6,1.9-0.6,3.8,1,5c0.9,0.7,2.8,1.7,0.6,3.5c-1.2,1-12.9-0.2-12.9-0.2S0.4,23.4,0.8,26.4
                    C1,28.1,3,28.9,4.3,27.1c2.1-2.9,7.8-1,8,4.6c0.3,5.9-5.7,6.8-7,4.5c-1.2-2.1-4.6-2.7-4.8,0.1c-0.2,4.3,1.7,17.8,1.7,17.8
                    S10,56,13.4,55.4c1.6-0.3,2.4-3.2,0.9-4.5c-1.4-1.3-1.7-7.9,5.5-7.2c5.6,0.6,4.7,5.7,3.2,6.6c-1.4,0.9-1.3,3.7,1.5,4.5
                    c3.9,1.1,15.7-1.6,15.7-1.6s-1.6-10-1-13.2c0.6-3.5,4.4-1.4,4.9-0.7c3.1,4.3,9.5,1.9,9.5-5.3c0-10.5-9.2-8.7-10-6.2
                    c-1,2.8-4.1,2.1-4.4,0.4C38.4,24.1,39.7,13.3,39.7,13.3z"/>
                </svg>
            <figcaption class="logo-description">Center</figcaption>
        </picture>
        ${Nav()}
        <div class="socialMedia">
            <i class="fas fa-phone-square-alt"></i>
            <i class="fas fa-envelope-open"></i>
            <i class="fab fa-whatsapp-square"></i>

        </div>
        <div class="divisor"></div>
  `;
  return header;
};
