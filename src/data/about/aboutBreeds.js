// Image Imports
import hollandLopImage from "../../assets/images/about/about-holland-lop.webp";
import netherlandDwarfImage from "../../assets/images/about/about-netherland-dwarf.webp";

// Icon Imports
import { CiHeart } from "react-icons/ci";
import { LuRabbit } from "react-icons/lu";
import { GiFamilyHouse } from "react-icons/gi";
import { BiHomeHeart } from "react-icons/bi";
import { PiBabyLight } from "react-icons/pi";
import { SiBunnydotnet } from "react-icons/si";
import { FaArrowDown } from "react-icons/fa";

const aboutBreeds = [
  {
    id: 1,
    name: "Holland Lop",
    image: hollandLopImage,

    description: [
      "Holland Lops are one of the most popular rabbit breeds thanks to their affectionate personalities, compact size, and distinctive floppy ears.",

      "Known for their calm and friendly nature, they make wonderful companions for families, first-time rabbit owners, and experienced enthusiasts alike.",
    ],

    features: [
      {
        id: 1,
        icon: CiHeart,
        text: "Friendly Temperament",
      },
      {
        id: 2,
        icon: FaArrowDown,
        text: "Floppy Ears",
      },
      {
        id: 3,
        icon: GiFamilyHouse,
        text: "Excellent Family Companion",
      },
      {
        id: 4,
        icon: LuRabbit,
        text: "Compact Size",
      },
    ],
  },

  {
    id: 2,
    name: "Netherland Dwarf",
    image: netherlandDwarfImage,

    description: [
      "Netherland Dwarfs are beloved for their tiny size, expressive faces, and energetic personalities.",

      "Although small in stature, they are full of curiosity and charm, making them a favorite among rabbit lovers looking for a playful companion.",
    ],

    features: [
      {
        id: 1,
        icon: LuRabbit,
        text: "Smallest Domestic Rabbit Breed",
      },
      {
        id: 2,
        icon: SiBunnydotnet,
        text: "Playful Personality",
      },
      {
        id: 3,
        icon: PiBabyLight,
        text: "Baby-Faced Appearance",
      },
      {
        id: 4,
        icon: BiHomeHeart,
        text: "Great for Smaller Spaces",
      },
    ],
  },
];

export default aboutBreeds;
