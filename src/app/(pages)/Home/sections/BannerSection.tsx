import CircleLight from "@/components/shard/CircleLight";
import AdBanner from "./components/AdBanner";

const AdBannerSection = () => {
  return (
    <section className="py-16 relative w-full h-auto overflow-hidden">
      <CircleLight type="Yellow" />
      <CircleLight type="Sky" />
      <h2 className="sectionTitle">ADs Banners</h2>
      <AdBanner />
    </section>
  );
};

export default AdBannerSection;
