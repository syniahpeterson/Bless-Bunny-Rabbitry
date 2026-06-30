// Image Imports:
import ceramicFoodBowl from "../../../assets/images/rabbit-care/recommendations/feeding/ceramic-food-bowl.webp";
import ceramicWaterBowl from "../../../assets/images/rabbit-care/recommendations/feeding/ceramic-water-bowl.webp";
import glassBottle from "../../../assets/images/rabbit-care/recommendations/feeding/glass-bottle.webp";
import metalHayFeeder from "../../../assets/images/rabbit-care/recommendations/feeding/metal-hay-feeder.webp";

const feeding = {
  id: "feeding",

  title: "Feeding Essentials",

  description:
    "Providing fresh food, clean water, and unlimited hay every day is essential for your rabbit's health. These feeding products help create a clean, safe, and enjoyable mealtime.",

  products: [
    {
      id: "ceramic-food-bowl",

      name: "Heavy Ceramic Food Bowl",

      featured: true,

      badge: "Breeder Favorite",

      image: ceramicFoodBowl,

      alt: "Heavy ceramic food bowl for rabbits",

      priceRange: "$8-15",

      stores: ["Amazon", "Petco", "PetSmart", "Chewy"],

      description:
        "A heavy ceramic bowl that stays in place during feeding and is easy to clean.",

      whyRecommended:
        "Helps prevent tipping while encouraging healthy eating habits.",

      pros: [
        "Tip-resistant",
        "Dishwasher safe",
        "Easy to sanitize",
        "Durable ceramic construction",
      ],

      note: "Choose an appropriately sized bowl based on your rabbit's breed and age.",
    },

    {
      id: "ceramic-water-bowl",

      name: "Heavy Ceramic Water Bowl",

      featured: true,

      badge: "Highly Recommended",

      image: ceramicWaterBowl,

      alt: "Heavy ceramic water bowl for rabbits",

      priceRange: "$8-15",

      stores: ["Amazon", "Petco", "PetSmart", "Chewy"],

      description:
        "A sturdy ceramic water bowl that provides constant access to fresh drinking water.",

      whyRecommended:
        "Many rabbits naturally drink more from a bowl than from a bottle.",

      pros: [
        "Encourages hydration",
        "Stable design",
        "Easy to refill",
        "Simple to clean",
      ],

      note: "Refresh your rabbit's water daily and clean the bowl regularly.",
    },

    {
      id: "glass-water-bottle",

      name: "Glass Water Bottle",

      featured: false,

      badge: "",

      image: glassBottle,

      alt: "Glass water bottle for rabbits",

      priceRange: "$12-20",

      stores: ["Amazon", "Chewy", "Petco"],

      description:
        "A durable glass bottle that offers an additional source of clean drinking water.",

      whyRecommended:
        "Useful as a backup water source or for rabbits accustomed to bottles.",

      pros: [
        "Leak-resistant",
        "Easy to monitor water level",
        "Durable glass construction",
      ],

      note: "Bless Bunny Rabbitry recommends offering a ceramic bowl alongside a water bottle whenever possible.",
    },

    {
      id: "metal-hay-feeder",

      name: "Metal Hay Feeder",

      featured: true,

      badge: "Recommended",

      image: metalHayFeeder,

      alt: "Metal hay feeder for rabbits",

      priceRange: "$15-25",

      stores: ["Amazon", "Chewy", "Petco"],

      description:
        "Keeps hay clean, dry, and easily accessible while reducing waste.",

      whyRecommended:
        "Encourages healthy grazing habits and helps prevent hay from becoming soiled.",

      pros: [
        "Reduces hay waste",
        "Keeps hay clean",
        "Easy to refill",
        "Durable metal design",
      ],

      note: "Hay should always be available to your rabbit, even when using a feeder.",
    },
  ],
};

export default feeding;
