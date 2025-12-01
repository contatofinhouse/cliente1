import React, { useState, useEffect } from 'react';
import { Menu, X, Smile } from 'lucide-react';
import { NAV_LINKS, COMPANY_NAME } from '../constants';

interface HeaderProps {
  forceOpaque?: boolean;
}

const Header: React.FC<HeaderProps> = ({ forceOpaque = false }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);
  
  const isActive = isScrolled || forceOpaque;

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    window.location.hash = href;
    setIsOpen(false);
  };

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 ${
        isActive ? 'bg-white/95 backdrop-blur-md shadow-md py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <a 
          href="#home" 
          onClick={(e) => handleNavClick(e, '#home')}
          className="flex items-center gap-2 group"
        >
          <div className="bg-primary p-2 rounded-lg text-white transition-transform group-hover:rotate-12">
            <Smile size={24} />
          </div>
          <span className={`font-heading font-bold text-xl tracking-tight ${isActive ? 'text-secondary' : 'text-slate-800 lg:text-white lg:drop-shadow-sm'}`}>
            {COMPANY_NAME}
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className={`font-medium text-sm uppercase tracking-wide transition-colors ${
                isActive ? 'text-slate-600 hover:text-primary' : 'text-slate-100 hover:text-white drop-shadow-sm'
              }`}
            >
              {link.label}
            </a>
          ))}
          <a 
            href="#contact" 
            onClick={(e) => handleNavClick(e, '#contact')}
            className={`px-6 py-2.5 rounded-full font-bold text-sm transition-all transform hover:-translate-y-0.5 ${
                isActive 
                ? 'bg-primary text-white hover:bg-accent hover:shadow-lg' 
                : 'bg-white text-primary hover:bg-slate-100 shadow-lg'
            }`}
          >
            Agendar Agora
          </a>
        </nav>

        {/* Mobile Toggle */}
        <button 
          onClick={toggleMenu} 
          className={`lg:hidden p-2 rounded-md transition-colors ${isActive ? 'text-secondary' : 'text-white bg-black/20 backdrop-blur-sm'}`}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Nav Overlay */}
      <div 
        className={`fixed inset-0 bg-white z-30 flex flex-col items-center justify-center gap-8 transition-transform duration-300 ease-in-out lg:hidden ${
          isOpen ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0 pointer-events-none'
        }`}
      >
        <button onClick={toggleMenu} className="absolute top-6 right-6 text-slate-500">
           <X size={32} />
        </button>
        {NAV_LINKS.map((link) => (
          <a
            key={link.label}
            href={link.href}
            onClick={(e) => handleNavClick(e, link.href)}
            className="font-heading text-2xl font-semibold text-slate-800 hover:text-primary"
          >
            {link.label}
          </a>
        ))}
        <a 
          href="#contact"
          onClick={(e) => handleNavClick(e, '#contact')}
          className="px-8 py-3 bg-primary text-white rounded-full font-bold text-lg shadow-lg hover:bg-accent mt-4"
        >
          Agendar Consulta
        </a>
      </div>
    </header>
  );
};

export default Header;