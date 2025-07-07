import HeroSaaS from '../components/HeroSaaS';
import FeaturesSection from '../components/FeaturesSection';
import ServicesSection from '../components/ServicesSection';
import PortfolioSection from '../components/PortfolioSection';
import LLMsDisruptiveSection from '../components/LLMsDisruptiveSection';
import PoeAgentsSection from '../components/PoeAgentsSection';
import LLMCarousel from '../components/LLMCarousel';
import PricingSection from '../components/PricingSection';
import AboutSection from '../components/AboutSection';
import JourneySection from '../components/JourneySection';
import TestimonialsSection from '../components/TestimonialsSection';
import FAQSection from '../components/FAQSection';
import FooterSection from '../components/FooterSection';

const Home = () => {
  return (
    <div className="overflow-x-hidden">
      <HeroSaaS />
      <FeaturesSection />
      <ServicesSection />
      <PortfolioSection />
      <LLMsDisruptiveSection />
      <PoeAgentsSection />
      <LLMCarousel />
      <PricingSection />
      <AboutSection />
      <JourneySection />
      <TestimonialsSection />
      <FAQSection />
      <FooterSection />
    </div>
  );
};

export default Home;