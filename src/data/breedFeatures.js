// Icon Imports:
import { FaHeart, FaBolt } from "react-icons/fa";
import { BsHouseHeart } from "react-icons/bs";
import { GiRabbit, GiWeightScale, GiBrain } from "react-icons/gi";

// Image Imports:
import hollandLop from "../assets/images/holland-lop.webp";
import netherlandDwarf from "../assets/images/netherland-dwarf.webp";

const breeds = [
  {
    id: 1,
    breed: "Holland Lop",
    image: hollandLop,
    description:
      "Friendly, gentle rabbits known for their floppy ears and affectionate personalities.",
    features: [
      {
        id: 1,
        text: "Friendly temperament",
        icon: FaHeart,
      },
      {
        id: 2,
        text: "Floppy ears",
        icon: GiRabbit,
      },
      {
        id: 3,
        text: "Excellent family pet",
        icon: BsHouseHeart,
      },
      {
        id: 4,
        text: "Compact 2-4 lb size",
        icon: GiWeightScale,
      },
    ],
  },

  {
    id: 2,
    breed: "Netherland Dwarf",
    image: netherlandDwarf,
    description:
      "Small, intelligent rabbits with big personalities and endless curiosity.",
    features: [
      {
        id: 1,
        text: "Small 1-3 lb size",
        icon: GiWeightScale,
      },
      {
        id: 2,
        text: "Highly intelligent",
        icon: GiBrain,
      },
      {
        id: 3,
        text: "Energetic & playful",
        icon: FaBolt,
      },
      {
        id: 4,
        text: "Indoor companion",
        icon: BsHouseHeart,
      },
    ],
  },
];

export default breeds;
