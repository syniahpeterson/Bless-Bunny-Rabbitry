// Component Imports:
import Button from "../../ui/Button";

// Icon Imports:
import { FaFacebookF, FaPhoneAlt, FaShieldAlt, FaHeart } from "react-icons/fa";
import { PiRabbitLight } from "react-icons/pi";
import { BsArrowRight } from "react-icons/bs";

export default function ContactForm() {
  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO:
    // Connect form to backend (Resend/Express API)
    // in future full-stack version.
  };

  return (
    <form className="flex h-full flex-col rounded-[2rem] border border-border bg-white p-8 shadow-xl lg:p-10" onSubmit={handleSubmit}>
      {/* Name */}
      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <label
            htmlFor="firstName"
            className="mb-2 block text-sm font-semibold text-forest"
          >
            First Name <span className="text-clay">*</span>
          </label>

          <input
            id="firstName"
            type="text"
            placeholder="Enter your first name"
            className="w-full rounded-xl border border-border bg-white px-5 py-4 text-text outline-none transition focus:border-sage focus:ring-4 focus:ring-sage/20"
            required
          />
        </div>

        <div>
          <label
            htmlFor="lastName"
            className="mb-2 block text-sm font-semibold text-forest"
          >
            Last Name <span className="text-clay">*</span>
          </label>

          <input
            id="lastName"
            type="text"
            placeholder="Enter your last name"
            className="w-full rounded-xl border border-border bg-white px-5 py-4 text-text outline-none transition focus:border-sage focus:ring-4 focus:ring-sage/20"
            required
          />
        </div>
      </div>
      {/* Phone + Facebook */}
      <div className="mt-6 grid gap-6 md:grid-cols-2">
        <div>
          <label
            htmlFor="phone"
            className="mb-2 block text-sm font-semibold text-forest"
          >
            Phone Number <span className="text-clay">*</span>
          </label>

          <div className="relative">
            <FaPhoneAlt className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400" />

            <input
              id="phone"
              type="tel"
              placeholder="(123) 456-7890"
              className="w-full rounded-xl border border-border py-4 pl-14 pr-5 outline-none transition focus:border-sage focus:ring-4 focus:ring-sage/20"
              required
            />
          </div>
        </div>

        <div>
          <label
            htmlFor="facebook"
            className="mb-2 block text-sm font-semibold text-forest"
          >
            Facebook Name{" "}
            <span className="font-normal text-text">(Optional)</span>
          </label>

          <div className="relative">
            <FaFacebookF className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400" />

            <input
              id="facebook"
              type="text"
              placeholder="Your Facebook name or profile"
              className="w-full rounded-xl border border-border py-4 pl-14 pr-5 outline-none transition focus:border-sage focus:ring-4 focus:ring-sage/20"
            />
          </div>
        </div>
      </div>
      {/* Breed + Subject */}
      <div className="mt-6 grid gap-6 md:grid-cols-2">
        <div>
          <label
            htmlFor="breed"
            className="mb-2 block text-sm font-semibold text-forest"
          >
            Interested Breed
          </label>

          <div className="relative">
            <PiRabbitLight className="absolute left-5 top-1/2 -translate-y-1/2 text-xl text-forest-light" />

            <select
              id="breed"
              className="w-full appearance-none rounded-xl border border-border bg-white py-4 pl-14 pr-10 outline-none transition focus:border-sage focus:ring-4 focus:ring-sage/20"
            >
              <option>Select a breed</option>
              <option>Holland Lop</option>
              <option>Netherland Dwarf</option>
              <option>Not Sure Yet</option>
            </select>

            <BsArrowRight className="pointer-events-none absolute right-5 top-1/2 -translate-y-1/2 rotate-90 text-gray-400" />
          </div>
        </div>

        <div>
          <label
            htmlFor="subject"
            className="mb-2 block text-sm font-semibold text-forest"
          >
            Subject
          </label>

          <div className="relative">
            <select
              id="subject"
              className="w-full appearance-none rounded-xl border border-border bg-white px-5 py-4 pr-10 outline-none transition focus:border-sage focus:ring-4 focus:ring-sage/20"
            >
              <option>What is this regarding?</option>
              <option>Available Rabbits</option>
              <option>Reservation</option>
              <option>Care Questions</option>
              <option>General Inquiry</option>
            </select>

            <BsArrowRight className="pointer-events-none absolute right-5 top-1/2 -translate-y-1/2 rotate-90 text-gray-400" />
          </div>
        </div>
      </div>
      {/* Message */}
      <div className="mt-6">
        <label
          htmlFor="message"
          className="mb-2 block text-sm font-semibold text-forest"
        >
          Message <span className="text-clay">*</span>
        </label>

        <textarea
          id="message"
          rows="6"
          placeholder="Tell us more about your question or what you're looking for..."
          className="w-full resize-none rounded-xl border border-border px-5 py-4 outline-none transition focus:border-sage focus:ring-4 focus:ring-sage/20"
          required
        />
      </div>
      {/* Button */}
      <Button
        type="submit"
        variant="cta"
        leftIcon={FaHeart}
        className="mt-8 w-full justify-center rounded-xl py-5 text-lg"
      >
        Send Message
      </Button>
      {/* Privacy */}
      <div className="mt-6 flex items-center justify-center gap-3 text-center text-sm text-forest-light">
        <FaShieldAlt />

        <p>
          Your information is safe with us and will only be used to respond to
          your inquiry.
        </p>
      </div>
    </form>
  );
}
