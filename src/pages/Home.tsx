import HeroSaaS from '../components/HeroSaaS';
import FeaturesSection from '../components/FeaturesSection';
import LiveAgentDemo from '../components/LiveAgentDemo';
import PricingSection from '../components/PricingSection';
import LLMCarousel from '../components/LLMCarousel';
import FAQSection from '../components/FAQSection';
import PortfolioSection from '../components/PortfolioSection';
import SocialIntegrationsSection from '../components/SocialIntegrationsSection';
import PoeAgentsSection from '../components/PoeAgentsSection';
import LLMsDisruptiveSection from '../components/LLMsDisruptiveSection';
import ServicesSection from '../components/ServicesSection';
import AboutSection from '../components/AboutSection';
import JourneySection from '../components/JourneySection';

export default function Home() {
  return (
    <div className="overflow-x-hidden">
      <section id="inicio">
        <HeroSaaS />
      </section>
      
      <section id="features">
        <FeaturesSection />
      </section>
      
      <section id="servicos">
        <ServicesSection />
      </section>
      
      <LiveAgentDemo />
      
      <section id="portfolio">
        <PortfolioSection />
      </section>
      
      <SocialIntegrationsSection />
      
      <PoeAgentsSection />
      
      <LLMCarousel />
      
      <section id="pricing">
        <PricingSection />
      </section>
      
      <LLMsDisruptiveSection />
      
      <section id="sobre">
        <AboutSection />
      </section>
      
      <JourneySection />
      
      <FAQSection />
    </div>
  );
}