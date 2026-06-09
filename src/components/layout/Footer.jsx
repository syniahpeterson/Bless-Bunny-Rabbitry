// Data Imports:
import links from "../../data/navLinks";
import contactInfo from "../../data/contactInfo";

// Tool Imports:
import { Link, NavLink } from "react-router-dom";

// Image Imports:
import Logo from "../../assets/logo/logo.webp";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-beige/95 border-t border-gray-warm px-6 md:px-8 lg:px-10 py-10">
      <div className="grid gap-y-4 max-w-7xl mx-auto">
        {/* Top Footer: Branding + Links + Contact */}
        <div className="grid gap-y-8 text-center md:grid-cols-[1fr_2fr_1fr] md:text-left items-center">
          {/* Branding */}
          <Link
            to="/"
            aria-label="Bless Bunny Rabbitry Home"
            className="inline-flex focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest focus-visible:ring-offset-2 rounded-md"
          >
            <div className="flex items-center justify-center md:justify-start gap-4">
              <img
                src={Logo}
                alt="Bless Bunny Rabbitry Logo"
                width={60}
                height={60}
                className="rounded-full border-2 border-sage"
              />
              <span className="text-base sm:text-lg md:text-xl font-semibold tracking-wide text-forest font-serif">
                Bless Bunny Rabbitry
              </span>
            </div>
          </Link>

          {/* Navigation Links */}
          <nav aria-label="Footer navigation">
            <ul className="grid grid-cols-2 justify-items-center gap-x-4 gap-y-2 md:flex md:flex-wrap md:justify-center md:gap-4">
              {links.map((link) => (
                <li key={link.id}>
                  <NavLink
                    to={link.path}
                    className="text-text hover:text-forest transition-colors duration-300 whitespace-nowrap md:text-base text-xs font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest focus-visible:ring-offset-2"
                  >
                    {link.name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact */}
          <address className="not-italic">
            <p className="text-sm uppercase tracking-wide text-forest font-medium">
              Call Us
            </p>

            <a
              href={`tel:+${contactInfo.phoneLink}`}
              className="text-lg text-text font-semibold hover:text-forest transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest focus-visible:ring-offset-2"
            >
              {contactInfo.phone}
            </a>
          </address>
        </div>
        {/* Bottom Footer: Copyright */}
        <div className="border-t border-gray-warm pt-6 mt-2 text-center">
          <small>
            &copy; {currentYear} Bless Bunny Rabbitry. All Rights Reserved.
          </small>
        </div>
      </div>
    </footer>
  );
}
