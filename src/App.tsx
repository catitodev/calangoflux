import HeroSaaS from './components/HeroSaaS';
import Navbar from './components/Navbar';
import FeaturesSection from './components/FeaturesSection';
import LiveAgentDemo from './components/LiveAgentDemo';
import PricingSection from './components/PricingSection';
import LLMCarousel from './components/LLMCarousel';
import FAQSection from './components/FAQSection';
import FooterSection from './components/FooterSection';
import PortfolioSection from './components/PortfolioSection';
import SocialIntegrationsSection from './components/SocialIntegrationsSection';
import PoeAgentsSection from './components/PoeAgentsSection';
import LLMsDisruptiveSection from './components/LLMsDisruptiveSection';
import FloatingChatbot from './components/FloatingChatbot';

function App() {
  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <Navbar isScrolled={false} />
      
      <main className="relative">
        <section id="inicio">
          <HeroSaaS />
        </section>
        
        <section id="features">
          <FeaturesSection />
        </section>
        
        <section id="servicos">
          <LiveAgentDemo />
        </section>
        
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
          <FAQSection />
        </section>
      </main>
      
      <FooterSection />
      <FloatingChatbot />
    </div>
  );
}

export default App;