// Image Imports:
import kilnPellets from "../../../assets/images/rabbit-care/recommendations/litter/kiln-pellets.webp";
import careFresh from "../../../assets/images/rabbit-care/recommendations/litter/care-fresh-bedding.webp";
import oxbowStraw from "../../../assets/images/rabbit-care/recommendations/litter/oxbow-straw.webp";
import litterBox from "../../../assets/images/rabbit-care/recommendations/litter/litter-box.webp";

const litter = {
  id: "litter",

  title: "Litter & Bedding",

  description:
    "Choosing the right litter helps keep your rabbit's living space clean, comfortable, and odor-free. We recommend rabbit-safe, highly absorbent litter while avoiding scented, clumping, or cedar-based products.",

  products: [
    {
      id: "kiln-dried-pine-pellets",

      name: "Kiln-Dried Pine Pellets",

      featured: true,

      badge: "Breeder Favorite",

      image: kilnPellets,

      alt: "Bag of kiln-dried pine pellets for rabbit litter",

      priceRange: "$6-10",

      stores: ["Tractor Supply", "Rural King", "Farm Supply Stores"],

      description:
        "Highly absorbent wood pellets that naturally control odors while providing a safe litter option for rabbits.",

      whyRecommended:
        "Our preferred litter choice because it's affordable, easy to clean, and excellent at controlling moisture and odors.",

      pros: [
        "Highly absorbent",
        "Excellent odor control",
        "Low dust",
        "Very economical",
      ],

      note: "Only use kiln-dried pine pellets. Never use cedar shavings or untreated pine bedding.",
    },

    {
      id: "carefresh-paper-bedding",

      name: "Carefresh Paper Bedding",

      featured: true,

      badge: "Soft Bedding",

      image: careFresh,

      alt: "Carefresh paper bedding for rabbits",

      priceRange: "$18-30",

      stores: ["PetSmart", "Petco", "Amazon", "Chewy"],

      description:
        "Soft, dust-controlled paper bedding that provides additional comfort for litter boxes or nesting areas.",

      whyRecommended:
        "A great alternative for owners who prefer paper bedding over wood pellets.",

      pros: [
        "Soft texture",
        "Low dust",
        "Excellent odor control",
        "Highly absorbent",
      ],

      note: "Works well alone or combined with pine pellets for added comfort.",
    },

    {
      id: "oxbow-eco-straw",

      name: "Oxbow Eco-Straw Litter",

      featured: false,

      badge: "Eco-Friendly",

      image: oxbowStraw,

      alt: "Oxbow Eco-Straw rabbit litter",

      priceRange: "$10-18",

      stores: ["Amazon", "Chewy", "Petco"],

      description:
        "Compressed wheat straw litter designed specifically for small animals.",

      whyRecommended:
        "Provides excellent absorbency while remaining environmentally friendly.",

      pros: ["Biodegradable", "Low dust", "Good odor control"],

      note: "Dispose of used litter according to local waste regulations.",
    },

    {
      id: "high-back-litter-box",

      name: "High-Back Rabbit Litter Box",

      featured: true,

      badge: "Recommended",

      image: litterBox,

      alt: "High-back rabbit litter box",

      priceRange: "$15-30",

      stores: ["Amazon", "Chewy", "Petco"],

      description:
        "A spacious litter box with high sides to help reduce scattered litter and hay.",

      whyRecommended:
        "Provides plenty of room for rabbits while helping keep their habitat cleaner.",

      pros: [
        "High sides",
        "Easy to clean",
        "Durable plastic",
        "Helps reduce mess",
      ],

      note: "Place fresh hay near or inside the litter area to encourage consistent litter habits.",
    },
  ],
};

export default litter;
