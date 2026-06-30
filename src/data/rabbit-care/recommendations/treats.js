// Image Imports:
import strawberries from "../../../assets/images/rabbit-care/recommendations/treats/strawberry.webp";
import chamomile from "../../../assets/images/rabbit-care/recommendations/treats/chamomile.webp";
import calendula from "../../../assets/images/rabbit-care/recommendations/treats/calendula.webp";
import dandelion from "../../../assets/images/rabbit-care/recommendations/treats/dandelion.webp";
import rosePetals from "../../../assets/images/rabbit-care/recommendations/treats/rose-petals.webp";
import oxbowTreats from "../../../assets/images/rabbit-care/recommendations/treats/oxbow-treats.webp";

const treats = {
  id: "treats",

  title: "Healthy Treats",

  description:
    "Treats should always be offered in moderation and should never replace unlimited hay, quality pellets, and fresh leafy greens. We recommend natural, rabbit-safe treats without added sugars, seeds, or artificial ingredients.",

  products: [
    {
      id: "freeze-dried-strawberries",

      name: "Freeze-Dried Strawberries",

      featured: true,

      badge: "Breeder Favorite",

      image: strawberries,

      alt: "Freeze-dried strawberries for rabbits",

      priceRange: "$8-15",

      stores: ["Amazon", "Chewy", "Petco", "PetSmart"],

      description:
        "Naturally sweet freeze-dried strawberries that make an occasional reward for rabbits.",

      whyRecommended:
        "A simple, single-ingredient treat that's easy to portion for training or bonding.",

      pros: [
        "Single ingredient",
        "No added sugar",
        "Easy to portion",
        "Great training reward",
      ],

      note: "Offer only small amounts due to the natural sugar content.",
    },

    {
      id: "dried-chamomile",

      name: "Dried Chamomile Flowers",

      featured: true,

      badge: "Natural Favorite",

      image: chamomile,

      alt: "Dried chamomile flowers for rabbits",

      priceRange: "$8-15",

      stores: ["Amazon", "Small Pet Select", "Etsy"],

      description:
        "A fragrant dried herb that many rabbits enjoy as an occasional treat.",

      whyRecommended:
        "Provides variety while encouraging natural foraging behavior.",

      pros: ["100% natural", "High fiber", "Great forage topper"],

      note: "Offer occasionally as part of a varied, balanced diet.",
    },

    {
      id: "dried-rose-petals",

      name: "Dried Rose Petals",

      featured: false,

      badge: "Foraging Favorite",

      image: rosePetals,

      alt: "Dried rose petals for rabbits",

      priceRange: "$8-15",

      stores: ["Amazon", "Small Pet Select"],

      description:
        "Naturally dried rose petals that provide a colorful and aromatic forage treat.",

      whyRecommended:
        "Adds enrichment while encouraging natural foraging instincts.",

      pros: ["Natural forage", "Colorful enrichment", "Low calorie"],

      note: "Scatter a few petals throughout your rabbit's play area for enrichment.",
    },

    {
      id: "dried-calendula",

      name: "Dried Calendula Flowers",

      featured: false,

      badge: "Natural Treat",

      image: calendula,

      alt: "Dried calendula flowers for rabbits",

      priceRange: "$8-15",

      stores: ["Amazon", "Small Pet Select"],

      description:
        "Bright dried calendula flowers that rabbits enjoy nibbling as an occasional treat.",

      whyRecommended:
        "A simple way to add variety to your rabbit's enrichment routine.",

      pros: ["Natural ingredients", "Encourages foraging", "Low sugar"],

      note: "",
    },

    {
      id: "dried-dandelion",

      name: "Dried Dandelion Leaves & Flowers",

      featured: true,

      badge: "Highly Recommended",

      image: dandelion,

      alt: "Dried dandelion leaves and flowers for rabbits",

      priceRange: "$8-15",

      stores: ["Amazon", "Small Pet Select", "Etsy"],

      description: "A natural forage treat that many rabbits absolutely love.",

      whyRecommended:
        "Provides enrichment while supporting a varied, hay-based diet.",

      pros: ["Natural forage", "High fiber", "Rabbit favorite"],

      note: "Feed in moderation alongside unlimited hay and fresh water.",
    },

    {
      id: "oxbow-simple-rewards",

      name: "Oxbow Simple Rewards Baked Treats",

      featured: false,

      badge: "Store Favorite",

      image: oxbowTreats,

      alt: "Oxbow Simple Rewards baked rabbit treats",

      priceRange: "$5-8",

      stores: ["Amazon", "PetSmart", "Petco", "Chewy"],

      description:
        "A rabbit-safe baked treat made with wholesome ingredients and designed specifically for small herbivores.",

      whyRecommended:
        "A convenient commercial treat that's formulated specifically for rabbits.",

      pros: ["Made for rabbits", "Easy to portion", "Widely available"],

      note: "Treats should make up only a very small portion of your rabbit's daily diet.",
    },
  ],
};

export default treats;
