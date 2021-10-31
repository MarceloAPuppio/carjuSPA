export const ProfileCard = (people) => {
  return `
    <div class="card">
  <div class="cardHeader">
              <img class="card-image" src="${people.img}" alt="">
              </div>
              <div class="cardDescription">
              <h4>${people.nombre}</h4>
              <h6>${people.cargo}</h6>
              </div>
              <div class="cardFooter">
              <div class="socialmediacontainer">
              <i class="fab fa-linkedin-in"></i>
              </div>
              <div class="socialmediacontainer">
              <i class="fas fa-envelope-open"></i>
              </div>
              </div>
              </div>
              
    `;
};
