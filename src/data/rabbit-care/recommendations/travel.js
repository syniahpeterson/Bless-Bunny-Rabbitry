// Image Imports:
import sherpaCarrier from "../../../assets/images/rabbit-care/recommendations/travel/sherpa-carrier.webp"
import amazonCarrier from "../../../assets/images/rabbit-care/recommendations/travel/amazon-carrier.webp"
import niteangel from "../../../assets/images/rabbit-care/recommendations/travel/niteangel.webp"
import calunceHarness from "../../../assets/images/rabbit-care/recommendations/travel/calunce-harness.webp"
import blanket from "../../../assets/images/rabbit-care/recommendations/travel/blanket.webp"

const travel = {
  id: "travel",

  title: "Travel & Transportation",

  description:
    "Whether you're bringing your bunny home, visiting the veterinarian, or traveling with your rabbit, having the proper carrier and travel supplies helps make every trip safer and less stressful.",

  products: [
    {
      id: "sherpa-pet-carrier",

      name: "Sherpa Original Deluxe Pet Carrier",

      featured: true,

      badge: "Breeder Favorite",

      image: sherpaCarrier,

      alt: "Sherpa Deluxe soft-sided pet carrier",

      priceRange: "$45-70",

      stores: ["Amazon", "Chewy", "Petco"],

      description:
        "A comfortable, airline-approved soft-sided carrier that's perfect for vet visits and bringing your rabbit home.",

      whyRecommended:
        "Provides excellent ventilation while keeping rabbits secure and comfortable during travel.",

      pros: [
        "Airline approved",
        "Excellent ventilation",
        "Comfortable shoulder strap",
        "Machine-washable liner",
      ],

      note: "Place a towel or fleece blanket inside the carrier for extra comfort during travel.",
    },

    {
      id: "amazon-basics-soft-carrier",

      name: "Amazon Basics Soft-Sided Pet Carrier",

      featured: true,

      badge: "Best Value",

      image: amazonCarrier,

      alt: "Amazon Basics soft-sided pet carrier",

      priceRange: "$25-40",

      stores: ["Amazon"],

      description:
        "An affordable soft-sided carrier that works well for routine travel and veterinary visits.",

      whyRecommended:
        "Offers excellent value while providing a secure and comfortable travel space.",

      pros: [
        "Budget friendly",
        "Lightweight",
        "Mesh ventilation",
        "Easy to clean",
      ],

      note: "Choose the appropriate size so your rabbit has enough room to turn around comfortably.",
    },

    {
      id: "niteangel-rabbit-harness",

      name: "Niteangel Rabbit Harness & Leash",

      featured: false,

      badge: "Optional",

      image: niteangel,

      alt: "Niteangel rabbit harness and leash",

      priceRange: "$15-22",

      stores: ["Amazon"],

      description:
        "A soft adjustable harness designed specifically for rabbits.",

      whyRecommended:
        "Can be useful for supervised outdoor exploration with rabbits that tolerate wearing a harness.",

      pros: ["Soft adjustable fit", "Lightweight", "Designed for rabbits"],

      note: "Not every rabbit enjoys wearing a harness. Never force your rabbit to wear one, and always supervise outdoor time.",
    },

    {
      id: "calunce-soft-harness",

      name: "Calunce Soft Rabbit Harness",

      featured: false,

      badge: "Alternative",

      image: calunceHarness,

      alt: "Calunce rabbit harness",

      priceRange: "$12-18",

      stores: ["Amazon"],

      description:
        "A lightweight vest-style harness designed for small animals.",

      whyRecommended:
        "Another comfortable option for rabbits that are already comfortable using a harness.",

      pros: ["Vest-style design", "Adjustable straps", "Soft material"],

      note: "Harnesses should never replace a secure playpen or fenced outdoor exercise area.",
    },

    {
      id: "travel-blanket",

      name: "Soft Fleece Travel Blanket",

      featured: false,

      badge: "Recommended",

      image: blanket,

      alt: "Soft fleece blanket for rabbit carrier",

      priceRange: "$10–20",

      stores: ["Amazon", "Target", "Walmart"],

      description:
        "A soft fleece blanket that provides comfort and traction inside your rabbit's carrier.",

      whyRecommended:
        "Helps reduce stress while preventing your rabbit from slipping during travel.",

      pros: ["Machine washable", "Comfortable", "Provides traction"],

      note: "Avoid towels with loose loops that curious rabbits may chew or snag.",
    },
  ],
};

export default travel;
