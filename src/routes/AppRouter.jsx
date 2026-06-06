// Tool Imports:
import { Routes, Route } from "react-router-dom";

// Page Imports:
import Home from "../pages/Home";
import AvailableBunnies from "../pages/AvailableBunnies";
import About from "../pages/About";
import RabbitCare from "../pages/RabbitCare";
import Gallery from "../pages/Gallery";
import Testimonials from "../pages/Testimonials";
import FAQ from "../pages/FAQ";
import Contact from "../pages/Contact";

export default function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/available-bunnies" element={<AvailableBunnies />} />
      <Route path="/about" element={<About />} />
      <Route path="/rabbit-care" element={<RabbitCare />} />
      <Route path="/gallery" element={<Gallery />} />
      <Route path="/testimonials" element={<Testimonials />} />
      <Route path="/faq" element={<FAQ />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
}
