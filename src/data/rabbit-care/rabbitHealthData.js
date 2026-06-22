// Icon Imports
import { LuEye } from "react-icons/lu";
import { LuShieldCheck } from "react-icons/lu";
import { LuHeartPulse } from "react-icons/lu";

// Image Imports
import observationImage from "../../assets/images/rabbit-care/regular-observation.webp";
import cleanSpaceImage from "../../assets/images/rabbit-care/clean-living-space.webp";
import veterinaryImage from "../../assets/images/rabbit-care/veterinary-care.webp";

const rabbitHealthData = [
  {
    id: 1,
    title: "Regular Observation",
    description:
      "Monitor your rabbit's eating habits, energy level, behavior, and appearance. Changes can be an early sign that something needs attention.",
    icon: LuEye,
    image: observationImage,
  },

  {
    id: 2,
    title: "Clean Living Space",
    description:
      "Regularly clean your rabbit's enclosure, litter area, food dishes, and water bowls to promote a healthy environment.",
    icon: LuShieldCheck,
    image: cleanSpaceImage,
  },

  {
    id: 3,
    title: "Veterinary Care",
    description:
      "Establish a relationship with a rabbit-savvy veterinarian and schedule regular wellness checks when needed.",
    icon: LuHeartPulse,
    image: veterinaryImage,
  },
];

export default rabbitHealthData;
