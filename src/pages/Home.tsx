import HeroSaaS from '../components/HeroSaaS';
import FeaturesSection from '../components/FeaturesSection';
import DashboardPreview from '../components/DashboardPreview';
import About from '../components/About';
import Services from '../components/Services';
import TestimonialsSection from '../components/TestimonialsSection';
import PricingSection from '../components/PricingSection';
import FAQSection from '../components/FAQSection';
import Impact from '../components/Impact';
import Contact from '../components/Contact';
import { useEffect } from 'react';

const Home = () => {
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
    
    // Set page title
    document.title = 'CalangoFlux | Plataforma SaaS Agentic - Automação Inteligente';
  }, []);

  return (
    <>
      <HeroSaaS />
      <FeaturesSection />
      <DashboardPreview />
      <About />
      <Services />
      <TestimonialsSection />
      <PricingSection />
      <FAQSection />
      <Impact />
      <Contact />
    </>
  );
};

export default Home;