import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import Layout from './components/Layout';
import Home from './pages/Home';
import AgentesAI from './pages/AgentesAI';
import Automacoes from './pages/Automacoes';
import Agentics from './pages/Agentics';
import Webdesign from './pages/Webdesign';
import LetramentoWeb3 from './pages/LetramentoWeb3';
import NotFound from './pages/NotFound';
import AboutSection from './components/AboutSection';
import Contact from './components/Contact';
import PortfolioSection from './components/PortfolioSection';
import PricingSection from './components/PricingSection';
import Features from './components/Features';

const pageTransition = {
  initial: { opacity: 0, y: 12 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -12 },
  transition: { duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] },
};

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        initial={pageTransition.initial}
        animate={pageTransition.animate}
        exit={pageTransition.exit}
        transition={pageTransition.transition}
      >
        <Routes location={location}>
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
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </motion.div>
    </AnimatePresence>
  );
}

function App() {
  return (
    <Router>
      <AnimatedRoutes />
    </Router>
  );
}

export default App;