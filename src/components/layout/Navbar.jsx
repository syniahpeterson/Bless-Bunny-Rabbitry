// Data Imports:
import links from "../../data/navLinks";

// Image Imports:
import Logo from "../../assets/logo/logo.webp";

// Tool Imports:
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

// Icon Imports:
import { IoMenu, IoClose } from "react-icons/io5";

// Component Imports:
import Button from "../ui/Button";
import { LuRabbit } from "react-icons/lu";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav
      className="w-full bg-beige/95 backdrop-blur-sm text-text fixed top-0 left-0 z-50 shadow-sm border-b border-gray-warm h-24"
      aria-label="Primary navigation"
    >
      {/* Desktop Container */}
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 lg:px-8 py-4">
        {/* Branding: Name + Logo */}
        <Link to="/" aria-label="Bless Bunny Rabbitry Home">
          <div className="flex items-center gap-4 shrink-0">
            <img
              src={Logo}
              alt="Bless Bunny Rabbitry Logo"
              width={60}
              height={60}
              className="rounded-full border-2 border-sage"
            />
            <span className="text-lg md:text-xl font-semibold tracking-wide text-forest font-serif">
              Bless Bunny Rabbitry
            </span>
          </div>
        </Link>

        {/* Desktop Links */}
        <ul className="hidden xl:flex items-center gap-6 mx-auto">
          {links.map((link) => (
            <li key={link.id}>
              <NavLink
                to={link.path}
                className={({ isActive }) =>
                  `px-3 py-2 whitespace-nowrap rounded-full transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest focus-visible:ring-offset-2 ${isActive ? "bg-forest text-white shadow-sm" : "hover:bg-sage hover:text-forest"}`
                }
              >
                {link.name}
              </NavLink>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-4">
          {/* Navbar CTA */}
          <div className="hidden xl:block">
            <Button
              variant="navbar"
              rightIcon={LuRabbit}
              to="/available-bunnies"
              className="hover:scale-105"
            >
              Available Bunnies
            </Button>
          </div>

          {/* Menu Toggle Button */}
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="xl:hidden text-3xl text-forest focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest focus-visible:ring-offset-2"
            aria-label={
              isOpen ? "Close navigation menu" : "Open navigation menu"
            }
            aria-expanded={isOpen}
            aria-controls="mobile-navigation"
          >
            {isOpen ? <IoClose /> : <IoMenu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Container */}
      <div
        id="mobile-navigation"
        className={`xl:hidden fixed top-24 left-0 w-full bg-beige shadow-lg transition-all duration-300 z-40 ${isOpen ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 -translate-y-4 pointer-events-none"}`}
      >
        {/* Mobile Menu Links */}
        <div>
          <ul className="flex flex-col gap-2 mx-2">
            {links.map((link) => (
              <li key={link.id}>
                <NavLink
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) =>
                    `flex p-4 w-full rounded-xl transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest focus-visible:ring-offset-2 ${isActive ? "bg-forest text-white font-semibold" : "hover:bg-sage"}`
                  }
                >
                  {link.name}
                </NavLink>
              </li>
            ))}
          </ul>

          {/* Mobile CTA */}
          <div className="p-4">
            <Button
              variant="navbar"
              rightIcon={LuRabbit}
              to="/available-bunnies"
              fullWidth
            >
              Available Bunnies
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}
