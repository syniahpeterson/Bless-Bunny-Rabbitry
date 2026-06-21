// Icon Imports
import { LuDroplets, LuWheat, LuLeafyGreen } from "react-icons/lu";
import { PiBowlFoodLight } from "react-icons/pi";

const rabbitNutritionData = [
  {
    id: 1,
    title: "Timothy Hay",
    description:
      "Hay should make up the majority of your rabbit's diet and should be available at all times to support healthy digestion and dental health.",
    icon: LuWheat,
  },

  {
    id: 2,
    title: "Fresh Water",
    description:
      "Provide fresh, clean water daily using a bowl or bottle and monitor your rabbit's water intake regularly.",
    icon: LuDroplets,
  },

  {
    id: 3,
    title: "Quality Pellets",
    description:
      "Feed high-quality rabbit pellets in appropriate portions based on your rabbit's age, breed, and activity level.",
    icon: PiBowlFoodLight,
  },

  {
    id: 4,
    title: "Rabbit-Safe Greens",
    description:
      "Fresh leafy greens can be introduced gradually and provide important nutrients, enrichment, and variety.",
    icon: LuLeafyGreen,
  },
];

export default rabbitNutritionData;
