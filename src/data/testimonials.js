// Image Imports:
import familyImage from "../assets/images/family.webp";
import bunnyImage from "../assets/images/bunny.webp";
import childImage from "../assets/images/child-bunny.webp";
import womanImage from "../assets/images/woman-bunny.webp";

const testimonials = {
  reviews: [
    {
      id: 1,
      name: "The Johnson Family",
      rating: 5,
      text: "Our Holland Lop settled in immediately and became part of the family. Friendly, sweet, and incredibly social.",
    },
    {
      id: 2,
      name: "Emily R.",
      rating: 5,
      text: "You can tell these rabbits are handled with love. Our bunny is gentle, curious, and wonderful with children.",
    },
    {
      id: 3,
      name: "Michael T.",
      rating: 5,
      text: "The adoption process was easy and we received plenty of guidance. Highly recommend Bless Bunny Rabbitry.",
    },
  ],

  gallery: [
    {
      id: 1,
      image: familyImage,
      alt: "Family sitting together holding a Holland Loop rabbit",
    },
    {
      id: 2,
      image: bunnyImage,
      alt: "Holland Lop rabbit relaxing indoors",
    },
    {
      id: 3,
      image: childImage,
      alt: "Young girl gently petting a rabbit",
    },
    {
      id: 4,
      image: womanImage,
      alt: "Woman holding and cuddling a Holland Lop rabbit",
    },
  ],
};

export default testimonials;
