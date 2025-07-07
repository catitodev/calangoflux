import calangoicone from '../assets/imagens/calangoicone.png';
import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from './ui/button';

interface NavbarProps {
  isScrolled: boolean;
}

const Navbar = ({ isScrolled }: NavbarProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/90 backdrop-blur-sm shadow-md py-2' 
          : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link to="/#inicio" className="flex items-center">
          <div className="flex items-center text-primary-600">
            <img className="w-10" src={calangoicone} alt="Icone da CalangoFlux" />
          </div>
          <span className="ml-2 font-heading font-bold text-xl">
            Calango<span className="text-secondary-500">Flux</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#features" className="text-gray-700 hover:text-primary-600 transition font-medium">
            Recursos
          </a>
          <a href="#pricing" className="text-gray-700 hover:text-primary-600 transition font-medium">
            Preços
          </a>
          <a href="#sobre" className="text-gray-700 hover:text-primary-600 transition font-medium">
            Sobre
          </a>
          <a 
            href="https://aideaflux.xyz" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-primary-600 hover:text-primary-700 transition font-bold"
          >
            Plataforma AI Gratuita
          </a>
        </nav>

        <div className="hidden md:flex items-center space-x-4">
          <a 
            href="#contato"
            className="text-sm font-medium text-gray-800 hover:text-primary-500 transition"
          >
            Contato
          </a>
          <Button 
            variant="default" 
            size="sm"
            className="bg-gradient-to-r from-primary-500 to-secondary-500 hover:from-primary-600 hover:to-secondary-600"
          >
            Teste Gratuito
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-gray-800 focus:outline-none"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-sm border-t">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <NavLink 
              to="/" 
              className={({ isActive }) => 
                `text-base font-medium py-2 ${isActive ? 'text-primary-600' : 'text-gray-800'}`
              }
              onClick={toggleMenu}
            >
              Início
            </NavLink>
            <a 
              href="#features" 
              className="text-base font-medium py-2 text-gray-800"
              onClick={toggleMenu}
            >
              Recursos
            </a>
            <a 
              href="#servicos" 
              className="text-base font-medium py-2 text-gray-800"
              onClick={toggleMenu}
            >
              Serviços
            </a>
            <a 
              href="#pricing" 
              className="text-base font-medium py-2 text-gray-800"
              onClick={toggleMenu}
            >
              Preços
            </a>
            <a 
              href="#sobre" 
              className="text-base font-medium py-2 text-gray-800"
              onClick={toggleMenu}
            >
              Sobre
            </a>
            <a 
              href="#contato" 
              className="text-base font-medium py-2 text-gray-800"
              onClick={toggleMenu}
            >
              Contato
            </a>
            <Button 
              variant="default" 
              className="bg-gradient-to-r from-primary-500 to-secondary-500 hover:from-primary-600 hover:to-secondary-600"
              onClick={toggleMenu}
            >
              Teste Gratuito
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;