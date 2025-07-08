import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import LetramentoDigital from './pages/LetramentoDigital';
import BensPublicos from './pages/BensPublicos';
import CulturaCommons from './pages/CulturaCommons';
import RelacoesAbundantes from './pages/RelacoesAbundantes';
import ReFi from './pages/ReFi';
import Jornada from './pages/Jornada';
import Comunidade from './pages/Comunidade';
import Impacto from './pages/Impacto';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="letramento-digital" element={<LetramentoDigital />} />
          <Route path="bens-publicos" element={<BensPublicos />} />
          <Route path="cultura-commons" element={<CulturaCommons />} />
          <Route path="relacoes-abundantes" element={<RelacoesAbundantes />} />
          <Route path="refi" element={<ReFi />} />
          <Route path="jornada" element={<Jornada />} />
          <Route path="comunidade" element={<Comunidade />} />
          <Route path="impacto" element={<Impacto />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;