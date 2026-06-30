// Image Imports:
import willowBall from "../../../assets/images/rabbit-care/recommendations/toys/willow-ball.webp";
import appleSticks from "../../../assets/images/rabbit-care/recommendations/toys/apple-sticks.webp";
import timothyTunnel from "../../../assets/images/rabbit-care/recommendations/toys/timothy-tunnel.webp";
import grassMat from "../../../assets/images/rabbit-care/recommendations/toys/grass-mat.webp";
import chewToys from "../../../assets/images/rabbit-care/recommendations/toys/chew-toys.webp";
import stackingCups from "../../../assets/images/rabbit-care/recommendations/toys/stacking-cups.webp";
import foragePuzzle from "../../../assets/images/rabbit-care/recommendations/toys/forage-puzzle.webp";
import digbox from "../../../assets/images/rabbit-care/recommendations/toys/dig-box.webp";

const toys = {
  id: "toys",

  title: "Toys & Enrichment",

  description:
    "Rabbits are intelligent, curious animals that need daily mental stimulation and safe chewing opportunities. Providing a variety of enrichment toys helps prevent boredom while encouraging natural behaviors like chewing, digging, tossing, and foraging.",

  products: [
    {
      id: "willow-ball",

      name: "Natural Willow Ball",

      featured: true,

      badge: "Breeder Favorite",

      image: willowBall,

      alt: "Natural willow ball rabbit toy",

      priceRange: "$5-10",

      stores: ["Amazon", "Chewy", "PetSmart", "Petco"],

      description:
        "A woven willow ball made from natural willow branches that's perfect for chewing and tossing.",

      whyRecommended:
        "Encourages natural chewing while helping maintain healthy teeth.",

      pros: [
        "100% natural willow",
        "Safe to chew",
        "Provides enrichment",
        "Long lasting",
      ],

      note: "Rotate toys regularly to keep your rabbit interested.",
    },

    {
      id: "apple-sticks",

      name: "Apple Wood Chew Sticks",

      featured: true,

      badge: "Essential",

      image: appleSticks,

      alt: "Natural apple wood chew sticks",

      priceRange: "$6-12",

      stores: ["Amazon", "Chewy", "Petco", "PetSmart"],

      description:
        "Untreated apple wood sticks that satisfy your rabbit's natural urge to chew.",

      whyRecommended:
        "One of the safest and healthiest chew toys available for rabbits.",

      pros: [
        "Supports dental health",
        "100% natural",
        "Great for all ages",
        "Helps prevent boredom",
      ],

      note: "Always provide fresh chew toys since rabbit teeth continuously grow.",
    },

    {
      id: "timothy-tunnel",

      name: "Timothy Hay Tunnel",

      featured: true,

      badge: "Most Popular",

      image: timothyTunnel,

      alt: "Edible timothy hay tunnel for rabbits",

      priceRange: "$12-20",

      stores: ["Amazon", "Chewy", "PetSmart"],

      description:
        "An edible tunnel made from compressed timothy hay that encourages hiding, chewing, and exploration.",

      whyRecommended:
        "Combines enrichment, shelter, and healthy chewing into one product.",

      pros: [
        "Edible",
        "Provides hiding space",
        "Encourages exploration",
        "High fiber",
      ],

      note: "Replace once heavily chewed or soiled.",
    },

    {
      id: "grass-mat",

      name: "Natural Grass Activity Mat",

      featured: false,

      badge: "Recommended",

      image: grassMat,

      alt: "Natural woven grass mat",

      priceRange: "$10-18",

      stores: ["Amazon", "Chewy", "Petco"],

      description:
        "A woven grass mat that gives rabbits a safe place to chew, lounge, and play.",

      whyRecommended:
        "Adds variety to your rabbit's environment while protecting flooring.",

      pros: ["Natural material", "Safe to chew", "Comfortable resting spot"],

      note: "",
    },

    {
      id: "palm-leaf-toys",

      name: "Palm Leaf Chew Toys",

      featured: false,

      badge: "",

      image: chewToys,

      alt: "Palm leaf rabbit chew toys",

      priceRange: "$8-15",

      stores: ["Amazon", "Etsy", "Chewy"],

      description:
        "Natural woven palm leaf toys designed for safe chewing and tossing.",

      whyRecommended:
        "Great enrichment that encourages natural chewing instincts.",

      pros: ["Natural fibers", "Lightweight", "Safe for chewing"],

      note: "",
    },

    {
      id: "stacking-cups",

      name: "Baby Stacking Cups",

      featured: false,

      badge: "Budget Pick",

      image: stackingCups,

      alt: "Plastic stacking cups used as rabbit enrichment",

      priceRange: "$5-10",

      stores: ["Amazon", "Target", "Walmart"],

      description:
        "Simple baby stacking cups that rabbits enjoy tossing, nudging, and rearranging.",

      whyRecommended: "An inexpensive enrichment toy that many rabbits love.",

      pros: ["Very affordable", "Encourages play", "Easy to clean"],

      note: "Use sturdy, BPA-free plastic stacking cups without loose pieces.",
    },

    {
      id: "foraging-puzzle",

      name: "Rabbit Treat Puzzle",

      featured: false,

      badge: "Mental Enrichment",

      image: foragePuzzle,

      alt: "Rabbit puzzle feeder",

      priceRange: "$15-30",

      stores: ["Amazon", "Chewy"],

      description:
        "Interactive puzzle toy that encourages rabbits to forage for healthy treats.",

      whyRecommended:
        "Provides excellent mental stimulation and reduces boredom.",

      pros: ["Encourages foraging", "Mentally stimulating", "Reusable"],

      note: "Use healthy treats sparingly when filling puzzle toys.",
    },

    {
      id: "dig-box",

      name: "Rabbit Dig Box",

      featured: true,

      badge: "Highly Recommended",

      image: digbox,

      alt: "Rabbit digging box",

      priceRange: "$20-40",

      stores: ["Amazon", "DIY"],

      description:
        "A digging box filled with shredded paper, hay, or safe rabbit-friendly materials.",

      whyRecommended:
        "Digging is a completely natural rabbit behavior that provides excellent enrichment.",

      pros: [
        "Encourages natural instincts",
        "Reduces boredom",
        "Easy DIY project",
      ],

      note: "You can easily make your own dig box using a cardboard box and rabbit-safe materials.",
    },
  ],
};

export default toys;
