// Image Imports:
import standleeTimothy from "../../../assets/images/rabbit-care/recommendations/forage/standlee-timothy.webp"
import standleeAlfalfa from "../../../assets/images/rabbit-care/recommendations/forage/standlee-alfalfa.webp"
import oxbowCube from "../../../assets/images/rabbit-care/recommendations/forage/oxbow-cubes.webp"

const foragePellets = {
  id: "forage-pellets",

  title: "Forage Pellets",

  description:
    "Forage pellets are made from compressed grasses or alfalfa and can be offered as a healthy supplement or enrichment. While they're a great addition to a rabbit's diet, they should never replace unlimited loose hay, which is essential for proper digestion and dental health.",

  products: [
    {
      id: "standlee-timothy-pellets",

      name: "Standlee Premium Timothy Grass Pellets",

      featured: true,

      badge: "Bless Bunny Recommended",

      image: standleeTimothy,

      alt: "Bag of Standlee Premium Timothy Grass Pellets",

      priceRange: "$18-28",

      stores: ["Amazon", "Chewy", "Tractor Supply"],

      description:
        "Made from 100% premium timothy grass with no added fillers or artificial ingredients.",

      whyRecommended:
        "An excellent way to provide additional long-stem forage in pellet form while maintaining a simple, natural diet.",

      pros: [
        "100% timothy grass",
        "No fillers or additives",
        "High fiber",
        "Great for enrichment",
      ],

      note: "Offer as a supplement alongside unlimited loose hay—not as a replacement for hay or complete rabbit pellets.",
    },

    {
      id: "standlee-alfalfa-pellets",

      name: "Standlee Organic Alfalfa Pellets",

      featured: true,

      badge: "Young Rabbits",

      image: standleeAlfalfa,

      alt: "Bag of Standlee Organic Alfalfa Pellets",

      priceRange: "$22-30",

      stores: ["Amazon", "Chewy", "Tractor Supply"],

      description:
        "Certified organic alfalfa pellets made from a single ingredient with no added fillers or preservatives.",

      whyRecommended:
        "Ideal for young, growing rabbits, pregnant or nursing does, or as an occasional forage supplement for healthy adults.",

      pros: [
        "100% organic alfalfa",
        "Single ingredient",
        "Excellent source of fiber",
        "Supports growing rabbits",
      ],

      note: "Because alfalfa is higher in protein and calcium, it's best suited for young rabbits or offered sparingly to healthy adults.",
    },

    {
      id: "oxbow-timothy-hay-cubes",

      name: "Oxbow Timothy Hay Cubes",

      featured: false,

      badge: "Enrichment",

      image: oxbowCube,

      alt: "Bag of Oxbow Timothy Hay Cubes",

      priceRange: "$7-12",

      stores: ["Amazon", "Chewy", "PetSmart", "Petco"],

      description:
        "Compressed cubes made from premium timothy hay that encourage chewing and provide additional forage.",

      whyRecommended:
        "Great as an enrichment item that encourages natural chewing behavior while increasing hay consumption.",

      pros: ["Promotes chewing", "High fiber", "Long-lasting", "Mess-free"],

      note: "Use as an enrichment item or occasional supplement. Rabbits should always have unlimited access to loose hay.",
    },
  ],
};

export default foragePellets;
