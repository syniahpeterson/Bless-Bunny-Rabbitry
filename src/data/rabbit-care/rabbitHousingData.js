// Icon Imports
import { LuHouse } from "react-icons/lu";
import { PiRabbitLight } from "react-icons/pi";
import { LuShieldCheck } from "react-icons/lu";

// Image Imports
import enclosureImage from "../../assets/images/rabbit-care/spacious-enclosure.webp";
import exerciseImage from "../../assets/images/rabbit-care/daily-exercise.webp";
import safetyImage from "../../assets/images/rabbit-care/rabbit-proofed-space.webp";

const rabbitHousingData = [
  {
    id: 1,
    title: "Spacious Enclosure",
    description:
      "Provide an enclosure large enough for your rabbit to stand upright, stretch comfortably, and move freely throughout the day.",
    icon: LuHouse,
    image: enclosureImage,
  },

  {
    id: 2,
    title: "Daily Exercise",
    description:
      "Rabbits need supervised time outside their enclosure each day to explore, exercise, and stay mentally stimulated.",
    icon: PiRabbitLight,
    image: exerciseImage,
  },

  {
    id: 3,
    title: "Rabbit-Proofed Space",
    description:
      "Keep electrical cords, toxic plants, and small objects out of reach to create a safe environment for curious rabbits.",
    icon: LuShieldCheck,
    image: safetyImage,
  },
];

export default rabbitHousingData;
