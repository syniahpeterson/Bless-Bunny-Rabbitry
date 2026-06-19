// Icon Imports:
import { BiHomeHeart } from "react-icons/bi";
import { CiHeart } from "react-icons/ci";
import { FaAward } from "react-icons/fa";
import { GoShieldCheck } from "react-icons/go";

// Image Imports:
import image1 from "../assets/images/family-raised.webp";
import image2 from "../assets/images/daily-socialization.webp";
import image3 from "../assets/images/pedigreed-bloodlines.webp";
import image4 from "../assets/images/health-care.webp";

const aboutValues = [
  {
    id: 1,
    icon: BiHomeHeart,
    title: "Family Raised",
    description:
      "Our rabbits are raised in a family environment where they receive daily attention and interaction.",
    image: image1,
  },
  {
    id: 2,
    icon: CiHeart,
    title: "Daily Socialization",
    description:
      "Frequent handling from an early age helps our rabbits develop calm and friendly personalities.",
    image: image2,
  },
  {
    id: 3,
    icon: FaAward,
    title: "Pedigreed Bloodlines",
    description:
      "We focus on quality Holland Lop and Netherland Dwarf rabbits with carefully maintained pedigrees.",
    image: image3,
  },
  {
    id: 4,
    icon: GoShieldCheck,
    title: "Health & Care",
    description:
      "Clean housing, proper nutrition, and attentive care are essential parts of our breeding program.",
    image: image4,
  },
];

export default aboutValues;
