import calangoicone from '../assets/imagens/calangoicone.png';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Button } from './ui/button';
import { motion, AnimatePresence } from 'framer-motion';

interface NavbarProps {
  isScrolled: boolean;
}

const Navbar = ({ isScrolled: propIsScrolled }: NavbarProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(propIsScrolled);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    setActiveDropdown(null);
  };

  const toggleDropdown = (dropdown: string) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  const closeMenu = () => {
    setIsOpen(false);
    setActiveDropdown(null);
  };

  const navItems = [
    { name: "Sobre", href: "/about", isLink: false },
    { 
      name: "Serviços", 
      href: "#servicos",
      isLink: false,
      dropdown: [
        { name: "Agentes AI", href: "/agentes-ai", isLink: true },
        { name: "Automações", href: "/automacoes", isLink: true },
        { name: "Agentics", href: "/agentics", isLink: true },
        { name: "Web Design", href: "/webdesign", isLink: true },
        { name: "Letramento Web3", href: "/letramento-web3", isLink: true }
      ]
    },
    { name: "Recursos", href: "/features", isLink: false },
    { name: "Portfolio", href: "/portfolio", isLink: false },
    { name: "Preços", href: "/pricing", isLink: false },
  ];

  return (
    <motion.header 
      className={`fixed w-full z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-[var(--bg-primary)]/90 backdrop-blur-xl shadow-lg py-2' 
          : 'bg-transparent py-4'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link to="/" className="flex items-center group">
              <div className="flex items-center">
                <img 
                  className="w-8 h-8 sm:w-10 sm:h-10 group-hover:rotate-12 transition-transform duration-300" 
                  src={calangoicone} 
                  alt="CalangoFlux" 
                />
              </div>
              <span className="ml-2 sm:ml-3 font-heading font-bold text-lg sm:text-xl text-[var(--text-primary)]">
                Calango<span className="text-[var(--accent-primary)]">Flux</span>
              </span>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2">
            {navItems.map((item, index) => (
              <div key={item.name} className="relative group">
                {item.dropdown ? (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                  >
                    <button
                      className="flex items-center px-3 py-2 rounded-lg text-sm font-medium transition-all duration-300 text-[var(--text-secondary)] hover:text-[var(--accent-primary)] hover:bg-[var(--bg-elevated)]/50"
                      onMouseEnter={() => setActiveDropdown(item.name)}
                    >
                      {item.name}
                      <ChevronDown className="w-4 h-4 ml-1 transition-transform duration-200 group-hover:rotate-180" />
                    </button>
                    
                    <AnimatePresence>
                      {activeDropdown === item.name && (
                        <motion.div
                          initial={{ opacity: 0, y: 10, scale: 0.95 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 10, scale: 0.95 }}
                          transition={{ duration: 0.2 }}
                          className="absolute top-full left-0 mt-2 w-56 bg-[var(--bg-surface)] rounded-xl shadow-xl border border-[var(--bg-elevated)] py-2 z-50"
                          onMouseLeave={() => setActiveDropdown(null)}
                        >
                          {item.dropdown.map((subItem) => (
                            subItem.isLink ? (
                              <Link
                                key={subItem.name}
                                to={subItem.href}
                                className="block px-4 py-2 text-sm text-[var(--text-secondary)] hover:text-[var(--accent-primary)] hover:bg-[var(--bg-elevated)]/50 transition-all duration-200 rounded-lg mx-2"
                                onClick={() => setActiveDropdown(null)}
                              >
                                {subItem.name}
                              </Link>
                            ) : (
                              <a
                                key={subItem.name}
                                href={subItem.href}
                                className="block px-4 py-2 text-sm text-[var(--text-secondary)] hover:text-[var(--accent-primary)] hover:bg-[var(--bg-elevated)]/50 transition-all duration-200 rounded-lg mx-2"
                                onClick={() => setActiveDropdown(null)}
                              >
                                {subItem.name}
                              </a>
                            )
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                ) : (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {item.isLink ? (
                      <Link
                        to={item.href}
                        className="block px-3 py-2 rounded-lg text-sm font-medium transition-all duration-300 text-[var(--text-secondary)] hover:text-[var(--accent-primary)] hover:bg-[var(--bg-elevated)]/50"
                      >
                        {item.name}
                      </Link>
                    ) : (
                      <a
                        href={item.href}
                        className="block px-3 py-2 rounded-lg text-sm font-medium transition-all duration-300 text-[var(--text-secondary)] hover:text-[var(--accent-primary)] hover:bg-[var(--bg-elevated)]/50"
                      >
                        {item.name}
                      </a>
                    )}
                  </motion.div>
                )}
              </div>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center space-x-3 xl:space-x-4">
            <motion.a 
              href="https://aideaflux.xyz" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-sm font-bold transition-all duration-300 px-3 py-2 rounded-lg text-[var(--accent-primary)] hover:bg-[var(--accent-primary)]/10"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.3 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              🚀 100+ LLMs Grátis
            </motion.a>
            
            <motion.a 
              href="/contact"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.4 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button 
                variant="default" 
                size="sm"
                className="bg-[var(--accent-primary)] hover:bg-[var(--accent-primary)]/90 text-[var(--bg-primary)] font-semibold shadow-glow-sm hover:shadow-glow-md transition-all duration-300"
              >
                Começar Agora
              </Button>
            </motion.a>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            onClick={toggleMenu}
            className="lg:hidden p-2 rounded-lg transition-colors duration-300 text-[var(--text-primary)] hover:bg-[var(--bg-elevated)]/50"
            aria-label="Toggle menu"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <AnimatePresence mode="wait">
              {isOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <X size={24} />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu size={24} />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="lg:hidden bg-[var(--bg-primary)]/98 backdrop-blur-md border-t border-[var(--bg-elevated)] shadow-lg overflow-hidden"
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4">
              <div className="flex flex-col space-y-1">
                
                {/* Mobile Nav Items */}
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                  >
                    {item.dropdown ? (
                      <div>
                        <button
                          onClick={() => toggleDropdown(item.name)}
                          className="flex items-center justify-between w-full px-4 py-3 text-[var(--text-primary)] hover:text-[var(--accent-primary)] hover:bg-[var(--bg-surface)] rounded-lg transition-colors duration-200"
                        >
                          <span className="font-medium">{item.name}</span>
                          <ChevronDown 
                            className={`w-4 h-4 transition-transform duration-200 ${
                              activeDropdown === item.name ? 'rotate-180' : ''
                            }`} 
                          />
                        </button>
                        
                        <AnimatePresence>
                          {activeDropdown === item.name && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: "auto" }}
                              exit={{ opacity: 0, height: 0 }}
                              transition={{ duration: 0.2 }}
                              className="ml-4 mt-1 space-y-1 overflow-hidden"
                            >
                              {item.dropdown.map((subItem) => (
                                subItem.isLink ? (
                                  <Link
                                    key={subItem.name}
                                    to={subItem.href}
                                    className="block px-4 py-2 text-sm text-[var(--text-secondary)] hover:text-[var(--accent-primary)] hover:bg-[var(--bg-surface)] rounded-lg transition-colors duration-200"
                                    onClick={closeMenu}
                                  >
                                    {subItem.name}
                                  </Link>
                                ) : (
                                  <a
                                    key={subItem.name}
                                    href={subItem.href}
                                    className="block px-4 py-2 text-sm text-[var(--text-secondary)] hover:text-[var(--accent-primary)] hover:bg-[var(--bg-surface)] rounded-lg transition-colors duration-200"
                                    onClick={closeMenu}
                                  >
                                    {subItem.name}
                                  </a>
                                )
                              ))}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    ) : (
                      item.isLink ? (
                        <Link
                          to={item.href}
                          className="block px-4 py-3 text-[var(--text-primary)] hover:text-[var(--accent-primary)] hover:bg-[var(--bg-surface)] rounded-lg transition-colors duration-200 font-medium"
                          onClick={closeMenu}
                        >
                          {item.name}
                        </Link>
                      ) : (
                        <a
                          href={item.href}
                          className="block px-4 py-3 text-[var(--text-primary)] hover:text-[var(--accent-primary)] hover:bg-[var(--bg-surface)] rounded-lg transition-colors duration-200 font-medium"
                          onClick={closeMenu}
                        >
                          {item.name}
                        </a>
                      )
                    )}
                  </motion.div>
                ))}

                {/* Mobile CTA */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.5 }}
                  className="pt-4 mt-4 border-t border-[var(--bg-elevated)] space-y-3"
                >
                  <a 
                    href="https://aideaflux.xyz" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="block px-4 py-3 text-[var(--accent-primary)] font-bold hover:bg-[var(--bg-surface)] rounded-lg transition-colors duration-200"
                    onClick={closeMenu}
                  >
                    🚀 Acesse 100+ LLMs Grátis
                  </a>
                  
                  <a href="/contact" onClick={closeMenu}>
                    <Button 
                      className="w-full bg-[var(--accent-primary)] hover:bg-[var(--accent-primary)]/90 text-[var(--bg-primary)] font-semibold shadow-glow-sm"
                    >
                      Começar Agora
                    </Button>
                  </a>
                </motion.div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Navbar;
