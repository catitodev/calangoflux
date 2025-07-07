import HeroSaaS from '../components/HeroSaaS';
import FeaturesSection from '../components/FeaturesSection';
import LLMCarousel from '../components/LLMCarousel';
import LLMsDisruptiveSection from '../components/LLMsDisruptiveSection';
import LiveAgentDemo from '../components/LiveAgentDemo';
import DashboardPreview from '../components/DashboardPreview';
import PortfolioSection from '../components/PortfolioSection';
import PoeAgentsSection from '../components/PoeAgentsSection';
import About from '../components/About';
import Services from '../components/Services';
import TeamAndVisionSection from '../components/TestimonialsSection';
import PricingSection from '../components/PricingSection';
import FAQSection from '../components/FAQSection';
import Impact from '../components/Impact';
import Contact from '../components/Contact';
import FloatingChatbot from '../components/FloatingChatbot';
import { useEffect } from 'react';

const Home = () => {
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
    
    // Set page title
    document.title = 'CalangoFlux | Early Access MVP - Automação Agentic Transparente';
  }, []);

  return (
    <>
      <HeroSaaS />
      <FeaturesSection />
      <LLMCarousel />
      <LLMsDisruptiveSection />
      <LiveAgentDemo />
      <DashboardPreview />
      <PortfolioSection />
      <PoeAgentsSection />
      <About />
      <Services />
      <TeamAndVisionSection />
      <PricingSection />
      <FAQSection />
      <Impact />
      <Contact />
      <FloatingChatbot />
    </>
  );
};

export default Home;