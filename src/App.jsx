import { useState } from "react";
import HeroSlider from "./components/HeroSlider";
import ServicesSection from "./components/ServiceSection";
import VisionSection from "./components/VisionSection";

import AdvantagesSection from "./components/AdvantagesSection";
import GallerySection from "./components/GallerySection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import AboutSection from "./components/AboutSection";
import Navigation from "./components/Navigation";
import CtaSection from "./components/CtaSection";

const App = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Navigation
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
      />
      <HeroSlider />
      <ServicesSection />
      <VisionSection />
      <AboutSection />
      <CtaSection />
      <AdvantagesSection />
      <GallerySection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default App;
