import CircleLight from "@/components/shard/CircleLight";
import AdBanner from "./components/AdBanner";

const AdBannerSection = () => {
  return (
    <section
      className="relative w-full h-auto py-16 overflow-hidden"
      id="Offer"
    >
      <CircleLight type="Yellow" />
      <CircleLight type="Sky" />
      <h2 className="sectionTitle">ADs Banners</h2>
      <AdBanner />
    </section>
  );
};

export default AdBannerSection;
