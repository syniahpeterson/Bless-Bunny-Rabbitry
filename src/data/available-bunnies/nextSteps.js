// Icon Imports:
import { HiOutlineChatBubbleLeftRight } from "react-icons/hi2";
import { BsCalendar2Heart, BsHouseHeart } from "react-icons/bs";
import { CiHeart } from "react-icons/ci";

const nextSteps = [
  {
    id: 1,
    title: "1. Contact Us",
    description:
      "Reach our to ask questions or confirm availability.",
    icon: HiOutlineChatBubbleLeftRight,
  },
  {
    id: 2,
    title: "2. Reserve Your Bunny",
    description:
      "A deposit may be required to reserve your chosen rabbit.",
    icon: BsCalendar2Heart,
  },
  {
    id: 3,
    title: "3. Prepare for Arrival",
    description:
      "We'll provide guidance on housing, feeding, and care.",
    icon: BsHouseHeart,
  },
  {
    id: 4,
    title: "4. Welcome Home",
    description:
      "Pick up your rabbit and begin your journey together.",
    icon: CiHeart,
  },
];

export default nextSteps;
