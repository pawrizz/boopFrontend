import BannerSection from "../components/public/BannerSection";
import ServicesSection from "../components/public/ServicesSection";
import PricingSection from "../components/public/PricingSection";
import AboutSection from "../components/public/AboutSection";
import Footer from "../components/public/Footer";
import Header from "../components/public/Header";

export default function Home() {
  return (
    <>
      <Header />
      <BannerSection />
      <ServicesSection />
      <PricingSection />
      <AboutSection />
      <Footer />
    </>
  );
}
