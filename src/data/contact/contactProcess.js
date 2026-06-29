// Icon Imports
import { FaComments, FaHandshake } from "react-icons/fa";
import { LuRabbit } from "react-icons/lu";

const contactProcess = [
  {
    id: 1,
    number: "01",
    title: "Reach Out",
    description:
      "Contact us by phone, Facebook, or our contact form with any questions about our available rabbits or the adoption process.",
    icon: FaComments,
  },

  {
    id: 2,
    number: "02",
    title: "We'll Connect",
    description:
      "We'll answer your questions, discuss available rabbits, and help you determine which bunny is the best fit for your family.",
    icon: FaHandshake,
  },

  {
    id: 3,
    number: "03",
    title: "Welcome Your Bunny",
    description:
      "Once everything is arranged, you'll bring home a healthy, well-socialized bunny and begin a lifetime of companionship.",
    icon: LuRabbit,
  },
];

export default contactProcess;
