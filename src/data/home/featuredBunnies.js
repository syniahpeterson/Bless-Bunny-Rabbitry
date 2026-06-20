// Image Imports:
import snowball from "../../assets/images/bunnies/Snowball.webp";
import luna from "../../assets/images/bunnies/Luna.webp";
import caramel from "../../assets/images/bunnies/Caramel.webp";

const bunnies = [
  {
    id: 1,
    name: "Snowball",
    price: 120,
    breed: "Holland Lop",
    gender: "Female",
    color: "Broken Cream",
    status: "Available",
    availableDate: "July 2026",
    image: snowball,
  },
  {
    id: 2,
    name: "Luna",
    price: 80,
    breed: "Netherland Dwarf",
    gender: "Male",
    color: "Blue",
    status: "Pending",
    availableDate: "July 2026",
    image: luna,
  },
  {
    id: 3,
    name: "Caramel",
    price: 100,
    breed: "Holland Lop",
    gender: "Female",
    color: "Orange",
    status: "Reserved",
    availableDate: "August 2026",
    image: caramel,
  },
];

export default bunnies;
