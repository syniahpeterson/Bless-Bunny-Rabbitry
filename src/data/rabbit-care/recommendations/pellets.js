// Component Imports:
import modestoPellets from "../../../assets/images/rabbit-care/recommendations/pellets/modesto-pellets.webp";
import sherwoodPellets from "../../../assets/images/rabbit-care/recommendations/pellets/sherwood-pellets.webp";
import sciencePellets from "../../../assets/images/rabbit-care/recommendations/pellets/science-pellets.webp";
import smallPellets from "../../../assets/images/rabbit-care/recommendations/pellets/small-pellets.webp";

const pellets = {
  id: "pellets",

  title: "Pellets",

  description:
    "Pellets should supplement—not replace—your rabbit's unlimited hay. At Bless Bunny Rabbitry, we recommend keeping pellets as a small portion of the diet while providing unlimited high-quality hay as the primary source of nutrition.",

  products: [
    {
      id: "modesto-organic-rabbit",

      name: "Modesto Milling Organic Rabbit Pellets",

      featured: true,

      badge: "Bless Bunny Recommended",

      image: modestoPellets,

      alt: "Bag of Modesto Milling Organic Rabbit Pellets",

      priceRange: "$30-40",

      stores: ["Chewy", "Feed Stores"],

      description:
        "An organic, non-GMO complete rabbit pellet made without corn or soy and formulated for rabbits of all life stages.",

      whyRecommended:
        "Our preferred complete pellet because it focuses on simple, wholesome ingredients while providing balanced nutrition.",

      pros: ["Complete rabbit feed", "Organic & non-GMO", "No corn", "No soy"],

      note: "Feed in moderation alongside unlimited hay and fresh water.",
    },

    {
      id: "sherwood-adult",

      name: "Sherwood Adult Rabbit Food",

      featured: true,

      badge: "Premium Alternative",

      image: sherwoodPellets,

      alt: "Bag of Sherwood Adult Rabbit Food",

      priceRange: "$22-32",

      stores: ["Sherwood Pet Health", "Amazon"],

      description:
        "A premium rabbit pellet made with high-quality ingredients and no unnecessary fillers.",

      whyRecommended:
        "An excellent choice for owners looking for a premium soy-free pellet with simple ingredients.",

      pros: [
        "Soy-free",
        "High fiber",
        "Premium ingredients",
        "No artificial colors",
      ],

      note: "Sold primarily online, so it's a good idea to order before running low.",
    },

    {
      id: "science-selective-adult",

      name: "Science Selective Adult Rabbit Food",

      featured: false,

      badge: "Great Alternative",

      image: sciencePellets,

      alt: "Bag of Science Selective Adult Rabbit Food",

      priceRange: "$18-28",

      stores: ["Amazon", "Chewy", "Petco"],

      description:
        "A nutritionally balanced adult rabbit pellet with high fiber and no added sugars.",

      whyRecommended:
        "A trusted alternative that's widely available and supports digestive and dental health.",

      pros: [
        "High fiber",
        "No added sugars",
        "Supports digestion",
        "Widely available",
      ],

      note: "Recommended for healthy adult rabbits over approximately seven months of age.",
    },

    {
      id: "small-pet-select-adult",

      name: "Small Pet Select Adult Rabbit Food",

      featured: false,

      badge: "Quality Alternative",

      image: smallPellets,

      alt: "Bag of Small Pet Select Adult Rabbit Food",

      priceRange: "$18-26",

      stores: ["Amazon", "Small Pet Select"],

      description:
        "A timothy hay-based pellet made with quality ingredients for adult rabbits.",

      whyRecommended:
        "A dependable premium pellet from a company well known for its rabbit products.",

      pros: [
        "Timothy hay-based",
        "High fiber",
        "Premium ingredients",
        "No artificial colors",
      ],

      note: "Always provide unlimited hay alongside pellets.",
    },
  ],
};

export default pellets;
