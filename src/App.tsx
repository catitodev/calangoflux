import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import AgentesAI from './pages/AgentesAI';
import Automacoes from './pages/Automacoes';
import Agentics from './pages/Agentics';
import Webdesign from './pages/Webdesign';
import LetramentoWeb3 from './pages/LetramentoWeb3';
import AboutSection from './components/AboutSection';
import Contact from './components/Contact';
import PortfolioSection from './components/PortfolioSection';
import PricingSection from './components/PricingSection';
import Features from './components/Features';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="agentes-ai" element={<AgentesAI />} />
          <Route path="automacoes" element={<Automacoes />} />
          <Route path="agentics" element={<Agentics />} />
          <Route path="webdesign" element={<Webdesign />} />
          <Route path="letramento-web3" element={<LetramentoWeb3 />} />
          <Route path="about" element={<AboutSection />} />
          <Route path="contact" element={<Contact />} />
          <Route path="portfolio" element={<PortfolioSection />} />
          <Route path="pricing" element={<PricingSection />} />
          <Route path="features" element={<Features />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;