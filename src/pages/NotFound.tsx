import { Link } from 'react-router-dom';
import calangoLogo from '../assets/imagens/calango-logo-nova.png';

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] bg-[var(--bg-primary)] text-[var(--text-primary)] px-4">
      <img
        src={calangoLogo}
        alt="CalangoFlux"
        className="w-32 h-32 mb-8"
      />
      <h1 className="text-3xl font-bold mb-4">Página não encontrada</h1>
      <p className="text-[var(--text-muted)] text-center mb-8 max-w-md">
        A página que você procura não existe ou foi movida.
      </p>
      <Link
        to="/"
        className="px-6 py-3 text-[var(--accent-primary)] border border-[var(--accent-primary)] rounded-lg hover:bg-[var(--accent-primary)] hover:text-[var(--bg-primary)] transition-all duration-300 font-semibold"
      >
        Voltar ao início
      </Link>
    </div>
  );
};

export default NotFound;
