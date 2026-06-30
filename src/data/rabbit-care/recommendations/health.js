// Image Imports:
import oxbowCC from "../../../assets/images/rabbit-care/recommendations/health/oxbow-critical-care.webp"
import digitalScale from "../../../assets/images/rabbit-care/recommendations/health/digital-scale.webp"
import feedingSyringe from "../../../assets/images/rabbit-care/recommendations/health/feeding-syringe.webp"
import firstAid from "../../../assets/images/rabbit-care/recommendations/health/first-aid-kit.webp"
import saltStone from "../../../assets/images/rabbit-care/recommendations/health/salt-stone.webp"
import mineralChew from "../../../assets/images/rabbit-care/recommendations/health/mineral-chew.webp"

const health = {
  id: "health",

  title: "Health & Wellness",

  description:
    "Keeping the right health supplies and daily wellness products on hand helps support your rabbit's long-term health while preparing you for routine care and unexpected situations.",

  products: [
    {
      id: "oxbow-critical-care",

      name: "Oxbow Critical Care",

      featured: true,

      badge: "Emergency Essential",

      image: oxbowCC,

      alt: "Oxbow Critical Care for herbivores",

      priceRange: "$15-25",

      stores: ["Amazon", "Chewy", "Petco", "Veterinary Clinics"],

      description:
        "A powdered recovery food formulated to provide nutritional support for rabbits that are ill or recovering from surgery.",

      whyRecommended:
        "Every rabbit owner should keep Critical Care on hand in case of illness until veterinary care can be obtained.",

      pros: [
        "Supports recovery",
        "Easy to syringe feed",
        "Veterinarian recommended",
        "Long shelf life",
      ],

      note: "Always consult a rabbit-savvy veterinarian if your rabbit stops eating or shows signs of illness.",
    },

    {
      id: "digital-kitchen-scale",

      name: "Digital Kitchen Scale",

      featured: true,

      badge: "Highly Recommended",

      image: digitalScale,

      alt: "Digital kitchen scale for weighing rabbits",

      priceRange: "$15-30",

      stores: ["Amazon", "Target", "Walmart"],

      description:
        "A precise digital scale for monitoring your rabbit's weight at home.",

      whyRecommended:
        "Unexpected weight loss is often one of the first signs that something may be wrong.",

      pros: ["Accurate measurements", "Easy to use", "Helps monitor health"],

      note: "Weigh your rabbit regularly and record any significant changes.",
    },

    {
      id: "feeding-syringes",

      name: "Oral Feeding Syringes",

      featured: false,

      badge: "Emergency Kit",

      image: feedingSyringe,

      alt: "Oral feeding syringes for rabbits",

      priceRange: "$5–10",

      stores: ["Amazon", "Chewy", "Veterinary Clinics"],

      description:
        "Soft-tip syringes for administering Critical Care, water, or medications when instructed by a veterinarian.",

      whyRecommended:
        "An inexpensive item that can be invaluable during an emergency.",

      pros: ["Reusable", "Easy to clean", "Multiple sizes available"],

      note: "Use only as directed by your veterinarian or breeder.",
    },

    {
      id: "first-aid-kit",

      name: "Small Animal First Aid Kit",

      featured: false,

      badge: "Preparedness",

      image: firstAid,

      alt: "Rabbit first aid kit",

      priceRange: "$20-40",

      stores: ["Amazon", "Chewy"],

      description:
        "A basic first aid kit containing bandage materials and other emergency supplies for small animals.",

      whyRecommended:
        "Being prepared can make emergencies less stressful while you're seeking veterinary care.",

      pros: ["Compact", "Organized", "Useful emergency supplies"],

      note: "A first aid kit is not a substitute for professional veterinary care.",
    },

    {
      id: "himalayan-salt-stone",

      name: "Himalayan Salt Stone",

      featured: false,

      badge: "Bless Bunny Recommendation",

      image: saltStone,

      alt: "Himalayan salt stone for rabbits",

      priceRange: "$5-10",

      stores: ["Amazon", "Petco", "PetSmart"],

      description:
        "A natural Himalayan salt stone that can be placed inside your rabbit's habitat.",

      whyRecommended:
        "Bless Bunny Rabbitry recommends offering a salt stone as part of your rabbit's habitat setup.",

      pros: ["Long lasting", "Natural mineral source", "Easy to mount"],

      note: "Monitor your rabbit's use and always provide unlimited fresh water.",
    },

    {
      id: "natural-mineral-chew",

      name: "Natural Mineral Chew",

      featured: false,

      badge: "Bless Bunny Recommendation",

      image: mineralChew,

      alt: "Natural mineral chew for rabbits",

      priceRange: "$4-8",

      stores: ["Amazon", "PetSmart", "Petco"],

      description:
        "A compressed mineral chew designed for rabbits to gnaw on as part of their habitat.",

      whyRecommended:
        "Bless Bunny Rabbitry recommends mineral chews as part of their overall rabbit care setup.",

      pros: ["Long lasting", "Encourages chewing", "Easy to place in habitat"],

      note: "Replace when heavily worn or soiled and always provide plenty of hay and safe wooden chew toys.",
    },
  ],
};

export default health;
