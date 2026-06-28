// Icon Imports
import {
  FaHome,
  FaCarrot,
  FaHeart,
  FaClipboardList,
  FaComments,
} from "react-icons/fa";

import { LuRabbit } from "react-icons/lu";

const faqCategories = [
  {
    id: 1,
    title: "Adoption Process",
    description: "Learn how reserving and bringing home your new bunny works.",
    icon: LuRabbit,
    target: "adoption-process",
  },

  {
    id: 2,
    title: "Preparing Your Home",
    description: "Everything you'll need before your bunny arrives home.",
    icon: FaHome,
    target: "preparing-your-home",
  },

  {
    id: 3,
    title: "Feeding & Nutrition",
    description:
      "Discover the best diet for keeping your rabbit healthy and happy.",
    icon: FaCarrot,
    target: "feeding-nutrition",
  },

  {
    id: 4,
    title: "Health & Care",
    description: "Answers about grooming, wellness, exercise, and daily care.",
    icon: FaHeart,
    target: "health-care",
  },

  {
    id: 5,
    title: "Rabbitry Policies",
    description: "Read about deposits, pickups, reservations, and guarantees.",
    icon: FaClipboardList,
    target: "rabbitry-policies",
  },

  {
    id: 6,
    title: "General Questions",
    description: "Helpful answers to the questions we receive most often.",
    icon: FaComments,
    target: "general-questions",
  },
];

export default faqCategories;
