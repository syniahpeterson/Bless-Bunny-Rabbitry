// Image Imports:
import livingworldHabitat from "../../../assets/images/rabbit-care/recommendations/housing/living-world-habitat.webp";
import midwestHabitat from "../../../assets/images/rabbit-care/recommendations/housing/midwest-habitat.webp";
import midwestPen from "../../../assets/images/rabbit-care/recommendations/housing/midwest-pen.webp";

const habitats = {
  id: "habitats",

  title: "Habitats & Housing",

  description:
    "Safe, spacious housing is one of the most important investments you can make for your rabbit. We recommend habitats that provide adequate room, proper ventilation, and are easy to clean.",

  products: [
    {
      id: "living-world-medium",

      name: "Living World Deluxe Habitat - Medium",

      featured: true,

      badge: "Breeder Favorite",

      image: livingworldHabitat,

      alt: "Living World Deluxe Habitat Medium",

      priceRange: "$140-170",

      stores: ["Amazon", "Petco", "Pet Supplies Plus"],

      description:
        "A spacious starter habitat complete with an elevated platform, food bowl, water bottle, and deep plastic base.",

      whyRecommended:
        "Excellent starter enclosure for Holland Lops and Netherland Dwarfs while providing room to grow.",

      pros: [
        "Elevated platform",
        "Deep base",
        "Water bottle included",
        "Food bowl included",
        "Easy cleaning",
      ],

      note: "Adult rabbits should also receive daily exercise in an x-pen or free-roam area.",
    },

    {
      id: "midwest-wabbitat",

      name: "MidWest Wabbitat",

      featured: false,

      badge: "Highly Recommended",

      image: midwestHabitat,

      alt: "MidWest Wabbitat rabbit habitat",

      priceRange: "$90-110",

      stores: ["Amazon", "Chewy"],

      description:
        "Popular indoor rabbit habitat with convenient front and top access.",

      whyRecommended:
        "Easy to assemble, easy to clean, and perfect for first-time rabbit owners.",

      pros: ["Large front door", "Top access", "Expandable"],

      note: "",
    },

    {
      id: "exercise-pen",

      name: 'MidWest Exercise Pen (36-42")',

      featured: true,

      badge: "Essential",

      image: midwestPen,

      alt: "MidWest exercise pen",

      priceRange: "$40-60",

      stores: ["Amazon", "Chewy", "Tractor Supply"],

      description:
        "Creates a spacious play area for supervised daily exercise.",

      whyRecommended:
        "We recommend every rabbit have access to an x-pen or free-roam space.",

      pros: ["Indoor or outdoor use", "Easy setup", "Foldable"],

      note: "Exercise pens should be used in addition to—not instead of—a proper habitat.",
    },
  ],
};

export default habitats;
