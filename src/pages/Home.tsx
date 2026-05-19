import HeroSaaS from '../components/HeroSaaS';
import FeaturesSection from '../components/FeaturesSection';
import ServicesSection from '../components/ServicesSection';
import JourneySection from '../components/JourneySection';
import TestimonialsSection from '../components/TestimonialsSection';
import FAQSection from '../components/FAQSection';

const Home = () => {
  return (
    <div className="overflow-x-hidden">
      <HeroSaaS />
      <ServicesSection />
      <JourneySection />
      <FeaturesSection />
      <TestimonialsSection />
      <FAQSection />
    </div>
  );
};

export default Home;