import Carbonara from "../assets/carbonara.jpg";
import Amatriciana from "../assets/amatriciana.jpg";
import Bolognese from "../assets/bolognese.webp";
import Funghi from "../assets/funghi.jpg";
import Aglio from "../assets/aglio.png";
import Napolitana from "../assets/napolitana.jpg";
import Spinaci from "../assets/spinaci.webp";
import Arrabiata from "../assets/arrabiata.jpg";
import PolloEPesto from "../assets/polloepesto.webp";
import Quatro from "../assets/quatro.jpg";
import Pesto from "../assets/pesto.jpg";
import Primavera from "../assets/primavera.jpg";



export const MenuList = [
  {
    name: "Carbonara",
    image: Carbonara,
    ingredients: ['slanina', 'jaje', 'pavlaka', 'parmezan', 'peršun'].join(' / '),
    type: "standard",
    price: 380,
  },
  {
    name: "Amatriciana",
    image: Amatriciana,
    ingredients: ['slanina', 'Napolitana sos', 'parmezan', 'peršun'].join(' / '),
    type: "standard",
    price: 320,
  },
  {
    name: "Bolognese",
    image: Bolognese,
    ingredients: ['juneće meso', 'beli luk', 'pelat', 'crni luk', 'parmezan', 'peršun'].join(' / '),
    type: "standard",
    price: 340,
  },
  {
    name: "Funghi",
    image: Funghi,
    ingredients: ['pečurke', 'beli luk', 'pavlaka', 'parmezan', 'peršun'].join(' / '),
    type: "vegan",
    price: 300,
  },
  {
    name: "Aglio e Olio",
    image: Aglio,
    ingredients: ['maslinovo ulje', 'beli luk', 'čili papričice', '2 x parmezan', 'peršun'].join(' / '),
    type: "vegan",
    price: 290,
  },
  {
    name: "Napolitana",
    image: Napolitana,
    ingredients: ['pelat', 'beli luk', 'crni luk', 'parmezan', 'peršun'].join(' / '),
    type: "vegan",
    price: 250,
  },
  {
    name: "Spinaci",
    image: Spinaci,
    ingredients: ['spanać', 'beli luk', 'parmezan', 'pavlaka'].join(' / '),
    type: "vegan",
    price: 270,
  },
  {
    name: "Arrabiata",
    image: Arrabiata,
    ingredients: ['Napolitana sos', 'čili papričice', 'parmezan', 'peršun'].join(' / '),
    type: "vegan",
    price: 260,
  },
  {
    name: "Pollo e Pesto",
    image: PolloEPesto,
    ingredients: ['piletina', 'pavlaka', 'bosiljak', 'kikiriki', 'beli luk', 'maslinovo ulje', 'parmezan'].join(' / '),
    type: "standard",
    price: 380,
  },
  {
    name: "Quatro Formagggi",
    image: Quatro,
    ingredients: ['mocarela', 'gauda', 'gorgonzola', 'pavlaka', '2 x parmezan', 'peršun'].join(' / '),
    type: "standard",
    price: 370,
  },
  {
    name: "Pesto",
    image: Pesto,
    ingredients: ['bosiljak', 'beli luk', 'kikiriki', 'pavlaka', 'parmezan', 'maslinovo ulje'].join(' / '),
    type: "standard",
    price: 280,
  },
  {
    name: "Primavera",
    image: Primavera,
    ingredients: ['Napolitana sos', 'grašak', 'masline', 'crveni pasulj', 'parmezan', 'kukuruz', 'origano', 'peršun'].join(' / '),
    type: "vegan",
    price: 310,
  },
];
