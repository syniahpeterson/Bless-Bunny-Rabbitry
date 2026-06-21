// Image Imports
import familyRaisedImage from "../../assets/images/available-bunnies/family-raised.webp";
import socializedImage from "../../assets/images/available-bunnies/socialized-daily.webp";
import pedigreeImage from "../../assets/images/available-bunnies/pedigreed-bloodlines.webp";

// Icon Imports
import { BsHouseHeart } from "react-icons/bs";
import { CiHeart } from "react-icons/ci";
import { PiMedalLight } from "react-icons/pi";

const whyChooseData = [
  {
    id: 1,
    title: "Family Raised",
    description:
      "Our rabbits are raised in a family environment where they receive daily interaction and attention from an early age.",
    image: familyRaisedImage,
    icon: BsHouseHeart,
  },

  {
    id: 2,
    title: "Socialized Daily",
    description:
      "Frequent handling helps our rabbits develop calm, friendly personalities that transition well into new homes.",
    image: socializedImage,
    icon: CiHeart,
  },

  {
    id: 3,
    title: "Pedigreed Bloodlines",
    description:
      "We focus on quality Holland Lop and Netherland Dwarf rabbits with carefully maintained pedigrees.",
    image: pedigreeImage,
    icon: PiMedalLight,
  },
];

export default whyChooseData;
