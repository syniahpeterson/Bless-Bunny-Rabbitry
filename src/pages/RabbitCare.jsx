// Component imports:
import PageHero from "../components/sections/PageHero";
import HousingEssentials from "../components/sections/rabbit-care/HousingEssentials";
import Introduction from "../components/sections/rabbit-care/Introduction";

export default function RabbitCare() {
  return (
    <main className="mt-24">
      <PageHero
        variant="meadow"
        eyebrow="Helpful Resources"
        title="Rabbit Care Guide"
        description="Everything you need to know about feeding, housing, and caring for your rabbit."
      />
      <Introduction />
      <HousingEssentials />
    </main>
  );
}
