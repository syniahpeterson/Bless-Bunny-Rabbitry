// Component imports:
import PageHero from "../components/sections/PageHero";
import DailyCare from "../components/sections/rabbit-care/DailyCare";
import Health from "../components/sections/rabbit-care/Health";
import HousingEssentials from "../components/sections/rabbit-care/HousingEssentials";
import Introduction from "../components/sections/rabbit-care/Introduction";
import Nutrition from "../components/sections/rabbit-care/Nutrition";

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
      <Nutrition />
      <DailyCare />
      <Health />
    </main>
  );
}
