import BannerSection from "../components/banner/BannerSection";
import ServicesSection from "../components/services/ServicesSection";
import PricingSection from "../components/pricing/PricingSection";
import AboutSection from "../components/about/AboutSection";


export default function Home() {
  return (
    <>
      <BannerSection />
      <ServicesSection />
      <PricingSection />
      <AboutSection />
    </>
  );
}
