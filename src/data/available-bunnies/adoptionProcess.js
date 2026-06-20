// Icon Imports:
import { PiRabbitLight } from "react-icons/pi";
import { HiOutlineChatBubbleLeftRight } from "react-icons/hi2";
import { LuCalendarCheck } from "react-icons/lu";
import { GiRabbit } from "react-icons/gi";

const adoptionProcess = [
  {
    id: 1,
    number: "01",
    title: "Browse Available Rabbits",
    description:
      "Explore our current Holland Lop and Netherland Dwarf rabbits to find a bunny that fits your family.",
    icon: PiRabbitLight,
  },
  {
    id: 2,
    number: "02",
    title: "Reach Out",
    description:
      "Contact us with any questions or to learn more about a specific rabbit.",
    icon: HiOutlineChatBubbleLeftRight,
  },
  {
    id: 3,
    number: "03",
    title: "Reserve Your Bunny",
    description:
      "Once you've found the perfect match, we'll guide you through the reservation process.",
    icon: LuCalendarCheck,
  },
  {
    id: 4,
    number: "04",
    title: "Bring Your Bunny Home",
    description:
      "Take home your new companion and begin making memories together.",
    icon: GiRabbit,
  },
];

export default adoptionProcess;
