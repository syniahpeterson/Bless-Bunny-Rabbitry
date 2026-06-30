// Image Imports:
import slickerBrush from "../../../assets/images/rabbit-care/recommendations/grooming/slicker-brush.webp";
import nailClippers from "../../../assets/images/rabbit-care/recommendations/grooming/nail-clippers.webp";
import stypticPowder from "../../../assets/images/rabbit-care/recommendations/grooming/styptic-powder.webp";
import groomingWipes from "../../../assets/images/rabbit-care/recommendations/grooming/grooming-wipes.webp";

const grooming = {
  id: "grooming",

  title: "Grooming",

  description:
    "Routine grooming helps keep your rabbit clean, comfortable, and healthy. Regular brushing, nail trims, and wellness checks reduce shedding and help prevent common health issues.",

  products: [
    {
      id: "slicker-brush",

      name: "Small Animal Slicker Brush",

      featured: true,

      badge: "Breeder Favorite",

      image: slickerBrush,

      alt: "Small animal slicker brush for rabbits",

      priceRange: "$8-15",

      stores: ["Amazon", "Petco", "PetSmart", "Chewy"],

      description:
        "A gentle slicker brush designed to remove loose fur and reduce shedding.",

      whyRecommended:
        "Regular brushing helps prevent hair ingestion and keeps your rabbit's coat soft and healthy.",

      pros: [
        "Removes loose fur",
        "Comfortable grip",
        "Gentle wire bristles",
        "Suitable for regular grooming",
      ],

      note: "Brush more frequently during seasonal shedding to reduce the risk of wool block.",
    },

    {
      id: "nail-clippers",

      name: "Small Animal Nail Clippers",

      featured: true,

      badge: "Essential",

      image: nailClippers,

      alt: "Rabbit nail clippers",

      priceRange: "$8-15",

      stores: ["Amazon", "Petco", "PetSmart", "Chewy"],

      description:
        "Precision nail clippers designed for safely trimming small animal nails.",

      whyRecommended:
        "Routine nail trims help prevent discomfort, injury, and overgrown nails.",

      pros: [
        "Sharp stainless blades",
        "Easy to control",
        "Designed for small animals",
      ],

      note: "If you're unsure how to trim your rabbit's nails, ask your veterinarian or breeder for guidance.",
    },

    {
      id: "styptic-powder",

      name: "Styptic Powder",

      featured: false,

      badge: "Recommended",

      image: stypticPowder,

      alt: "Styptic powder for small animals",

      priceRange: "$6-12",

      stores: ["Amazon", "Petco", "PetSmart"],

      description:
        "Helps stop minor bleeding if a nail is accidentally trimmed too short.",

      whyRecommended:
        "A useful first-aid item to keep on hand during routine nail trims.",

      pros: ["Easy to apply", "Works quickly", "Compact container"],

      note: "Use only for minor nail bleeding. Contact your veterinarian for more serious injuries.",
    },

    {
      id: "grooming-wipes",

      name: "Fragrance-Free Pet Grooming Wipes",

      featured: false,

      badge: "",

      image: groomingWipes,

      alt: "Fragrance-free grooming wipes for rabbits",

      priceRange: "$8-15",

      stores: ["Amazon", "Petco", "Chewy"],

      description:
        "Gentle pet wipes for cleaning dirty paws or small areas without a full bath.",

      whyRecommended:
        "Rabbits should not be bathed, so wipes can help with occasional spot cleaning when necessary.",

      pros: ["Alcohol free", "Fragrance free", "Safe for spot cleaning"],

      note: "Never give your rabbit a full bath unless specifically instructed by a rabbit-savvy veterinarian.",
    },
  ],
};

export default grooming;
