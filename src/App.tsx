import HeroSaaS from './components/HeroSaaS';
import Navbar from './components/Navbar';
import FeaturesSection from './components/FeaturesSection';
import LiveAgentDemo from './components/LiveAgentDemo';
import PricingSection from './components/PricingSection';
import LLMCarousel from './components/LLMCarousel';
import FAQSection from './components/FAQSection';
import PortfolioSection from './components/PortfolioSection';
import SocialIntegrationsSection from './components/SocialIntegrationsSection';
import PoeAgentsSection from './components/PoeAgentsSection';
import LLMsDisruptiveSection from './components/LLMsDisruptiveSection';
import FloatingChatbot from './components/FloatingChatbot';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar isScrolled={false} />
      <HeroSaaS />
      <FeaturesSection />
      <LiveAgentDemo />
      <PortfolioSection />
      <SocialIntegrationsSection />
      <PoeAgentsSection />
      <LLMCarousel />
      <PricingSection />
      <LLMsDisruptiveSection />
      <FAQSection />
      <FloatingChatbot />
    </div>
  );
}

export default App;