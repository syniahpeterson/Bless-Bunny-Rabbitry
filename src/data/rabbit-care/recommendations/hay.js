// Image Import:
import standleeTimothy from "../../../assets/images/rabbit-care/recommendations/hay/standlee-timothy.webp";
import standleeOrchard from "../../../assets/images/rabbit-care/recommendations/hay/standlee-orchard.webp";
import smallPetSelectTimothy from "../../../assets/images/rabbit-care/recommendations/hay/small-pet-select-timothy.webp";
import hayStorage from "../../../assets/images/rabbit-care/recommendations/hay/hay-storage.webp";
const hay = {
  id: "hay",

  title: "Hay",

  description:
    "Hay should make up approximately 80-90% of an adult rabbit's diet and should always be available. Unlimited grass hay supports healthy digestion, encourages natural foraging, and helps wear down continuously growing teeth.",

  products: [
    {
      id: "standlee-timothy",

      name: "Standlee Timothy Hay",

      featured: true,

      badge: "Breeder Favorite",

      image: standleeTimothy,

      alt: "Bag of Standlee Timothy Hay",

      priceRange: "$8-31",

      stores: ["Amazon", "Chewy", "PetSmart", "Petco", "Tractor Supply"],

      description:
        "Premium hand-selected western timothy hay that provides the long-stem fiber rabbits need every day.",

      whyRecommended:
        "One of the most trusted rabbit hays available and an excellent everyday choice for adult rabbits.",

      pros: [
        "High in fiber",
        "Supports healthy digestion",
        "Promotes dental health",
        "Fresh long-stem hay",
      ],

      note: "Hay should always be available to your rabbit and should never be restricted.",
    },

    {
      id: "small-pet-select-timothy",

      name: "Small Pet Select Timothy Hay",

      featured: true,

      badge: "Premium Pick",

      image: smallPetSelectTimothy,

      alt: "Box of Small Pet Select Timothy Hay",

      priceRange: "$20-40",

      stores: ["Amazon", "Small Pet Select"],

      description:
        "Fresh, hand-packed timothy hay sourced directly from family farms.",

      whyRecommended:
        "Excellent quality with soft, fragrant hay that many rabbits absolutely love.",

      pros: [
        "Farm fresh",
        "Long strands",
        "Minimal dust",
        "Excellent quality control",
      ],

      note: "Available in multiple cuttings to suit different rabbit preferences.",
    },

    {
      id: "standlee-orchard-grass",

      name: "Standlee Orchard Grass Hay",

      featured: false,

      badge: "Great Alternative",

      image: standleeOrchard,

      alt: "Bag of Standlee Orchard Grass Hay",

      priceRange: "$6-37",

      stores: ["Amazon", "Tractor Supply", "Chewy", "Petco", "PetSmart"],

      description:
        "A soft, fragrant grass hay that's an excellent alternative or supplement to timothy hay.",

      whyRecommended:
        "Perfect for picky eaters or rabbits that enjoy a softer texture while still receiving plenty of fiber.",

      pros: [
        "Soft texture",
        "Highly palatable",
        "High fiber",
        "Supports digestive health",
      ],

      note: "Can be fed alone or mixed with timothy hay for additional variety.",
    },

    {
      id: "hay-storage-bin",

      name: "Airtight Hay Storage Container",

      featured: false,

      badge: "Helpful Accessory",

      image: hayStorage,

      alt: "Airtight hay storage container",

      priceRange: "$20-45",

      stores: ["Amazon", "Target", "Walmart"],

      description:
        "Keeps hay dry, fresh, and protected from moisture between feedings.",

      whyRecommended:
        "Proper storage helps maintain freshness and reduces waste.",

      pros: ["Keeps hay dry", "Reduces mess", "Easy to access"],

      note: "Store hay in a cool, dry location with good airflow.",
    },
  ],
};

export default hay;
