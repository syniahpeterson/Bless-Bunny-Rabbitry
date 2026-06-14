import Hero from "../components/sections/Hero";
import Section from "../components/layout/Section";
import WhyChooseUs from "../components/sections/WhyChooseUs";
import OurBreeds from "../components/sections/OurBreeds";

export default function Home() {
  return (
    <main className="mt-24">
      <Hero />
      <WhyChooseUs />
      <OurBreeds />
    </main>
  );
}
