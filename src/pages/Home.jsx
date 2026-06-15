import Hero from "../components/sections/Hero";
import Section from "../components/layout/Section";
import WhyChooseUs from "../components/sections/WhyChooseUs";
import OurBreeds from "../components/sections/OurBreeds";
import AvailableBunnies from "../components/sections/AvailableBunnies";
import OurStory from "../components/sections/OurStory";

export default function Home() {
  return (
    <main className="mt-24">
      <Hero />
      <WhyChooseUs />
      <OurBreeds />
      <AvailableBunnies />
      <OurStory />
    </main>
  );
}
