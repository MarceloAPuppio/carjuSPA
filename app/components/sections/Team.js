import { GroupCard } from "../GroupCard.js";
const TEAM = [
  {
    nombre: "Área Dirección y Coordinación",
    personal: [
      {
        nombre: "Lic Yolanda Pereyra",
        cargo: "Directora",
        img: "https://source.unsplash.com/random/700x700?123",
      },
      {
        nombre: "Liliana Ariza",
        cargo: "Coordinadora",
        img: "https://source.unsplash.com/random/700x700?12",
      },
    ],
  },
  {
    nombre: "Área Terapéutica",
    personal: [
      {
        nombre: "Lic. Mariel Hurtado",
        cargo: "Trabajo Social",
        img: "https://source.unsplash.com/random/700x700?153",
      },
      {
        nombre: "Lic. Yolanda Pereyra",
        cargo: "Psicología",
        img: "https://source.unsplash.com/random/700x700?78",
      },
      {
        nombre: "Lic Yolanda Pereyra",
        cargo: "Médico clínico",
        img: "https://source.unsplash.com/random/700x700?132",
      },
      {
        nombre: "Lic Yolanda Pereyra",
        cargo: "Terapista Ocupacional",
        img: "https://source.unsplash.com/random/700x700?13",
      },
      {
        nombre: "Lic Yolanda Pereyra",
        cargo: "Prof. de Educación Física",
        img: "https://source.unsplash.com/random/700x700?79",
      },
    ],
  },
  {
    nombre: "Área Talleres",
    personal: [
      {
        nombre: "Lic Yolanda Pereyra",
        cargo: "Orientadora",
        img: "https://source.unsplash.com/random/700x700?123",
      },
      {
        nombre: "Liliana Ariza",
        cargo: "Orientadora",
        img: "https://source.unsplash.com/random/700x700?12",
      },
    ],
  },
  {
    nombre: "Área Enfermería y Auxiliares",
    personal: [
      {
        nombre: "Nombre",
        cargo: "Enfermera",
        img: "https://source.unsplash.com/random/700x700?153",
      },
      {
        nombre: "Nombre",
        cargo: "Auxiliar Enfermera",
        img: "https://source.unsplash.com/random/700x700?12",
      },
    ],
  },
  {
    nombre: "Área Cocina",
    personal: [
      {
        nombre: "Lila Lupo",
        cargo: "Cocinera",
        img: "https://source.unsplash.com/random/700x700?153",
      },
    ],
  },
  {
    nombre: "Área Limpieza",
    personal: [
      {
        nombre: "Lila Lupo",
        cargo: "Cocinera",
        img: "https://source.unsplash.com/random/700x700?153",
      },
    ],
  },
  {
    nombre: "Área Mantenimiento",
    personal: [
      {
        nombre: "Dino Lonero",
        cargo: "Cocinera",
        img: "https://source.unsplash.com/random/700x700?153",
      },
    ],
  },
  {
    nombre: "Área Soporte y Tecnología",
    personal: [
      {
        nombre: "Mauro Castro",
        cargo: "Soporte",
        img: "https://source.unsplash.com/random/700x700?153",
      },
    ],
  },
];
export const Team = () => {
  return `
    <section class="equipo">
    <h3>Equipo Profesional</h3>
     ${TEAM.map((personal) => GroupCard(personal)).join("")}
    </section>
        `;
};
