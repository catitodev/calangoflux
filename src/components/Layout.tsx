import { Outlet } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Navbar from './Navbar';
import FooterSection from './FooterSection';
import CalangoBot from './CalangoBot';
import ErrorBoundary from './ErrorBoundary';

const Layout = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="flex flex-col min-h-screen overflow-x-hidden bg-[var(--bg-primary)] text-[var(--text-primary)]">
      <Navbar isScrolled={isScrolled} />
      <main className="flex-grow" role="main" aria-label="Conteúdo principal">
        <ErrorBoundary>
          <Outlet />
        </ErrorBoundary>
      </main>
      <footer role="contentinfo">
        <FooterSection />
      </footer>
      <CalangoBot />
    </div>
  );
};

export default Layout;
