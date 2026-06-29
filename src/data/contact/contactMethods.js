// Icon Imports
import { FaFacebookF, FaPhone, FaMapMarkerAlt, FaClock } from "react-icons/fa";

// Data Imports
import contactInfo from "../contactInfo";

const contactMethods = [
  {
    id: 1,
    icon: FaPhone,
    title: "Phone",
    description:
      "Have questions about our rabbits or the adoption process? We'd love to hear from you.",
    action: contactInfo.phone,
    href: `tel:${contactInfo.phoneLink}`,
    newTab: false,
  },

  {
    id: 2,
    icon: FaFacebookF,
    title: "Facebook",
    description:
      "Follow our latest bunny updates, available litters, and announcements.",
    action: "Visit Our Facebook",
    href: contactInfo.facebook,
    newTab: true,
  },

  {
    id: 3,
    icon: FaMapMarkerAlt,
    title: "Location",
    description:
      "Proudly serving families throughout Northeast Wake County and the greater Raleigh area.",
    action: "Near Raleigh, NC",
    href: "https://maps.google.com/?q=Raleigh,+NC",
    newTab: true,
  },

  {
    id: 4,
    icon: FaClock,
    title: "Response Time",
    description:
      "We do our best to respond to every inquiry as quickly as possible.",
    action: "Typically within 24–48 hours",
    href: "/contact#contact-form",
    newTab: false,
  },
];

export default contactMethods;
