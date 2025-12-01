import React from 'react';
import { Facebook, Instagram, Linkedin, Smile } from 'lucide-react';
import { COMPANY_NAME, NAV_LINKS } from '../constants';

const Footer: React.FC = () => {
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    window.location.hash = href;
  };

  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-8 border-t border-slate-800">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          
          {/* Brand */}
          <div className="col-span-1 md:col-span-1">
            <a href="#home" onClick={(e) => handleNavClick(e, '#home')} className="flex items-center gap-2 mb-6">
              <div className="bg-primary p-2 rounded-lg text-white">
                <Smile size={24} />
              </div>
              <span className="font-heading font-bold text-xl text-white">
                {COMPANY_NAME}
              </span>
            </a>
            <p className="text-sm leading-relaxed mb-6">
              Especialistas em saúde bucal, estética e reabilitação oral. Atendimento com excelência, segurança e cuidado em todas as etapas.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-white font-bold mb-6">Links Rápidos</h4>
            <ul className="space-y-3 text-sm">
              {NAV_LINKS.map(link => (
                <li key={link.label}>
                  <a 
                    href={link.href} 
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="hover:text-primary transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Treatments - Mapping to Constants IDs: 
              5: Implantes, 4: Ortodontia, 3: Lentes, 2: Clareamento, 6: Restaurações */}
          <div>
            <h4 className="text-white font-bold mb-6">Tratamentos</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#service-5" onClick={(e) => handleNavClick(e, '#service-5')} className="hover:text-primary transition-colors">Implantes Dentários</a></li>
              <li><a href="#service-4" onClick={(e) => handleNavClick(e, '#service-4')} className="hover:text-primary transition-colors">Ortodontia Invisível</a></li>
              <li><a href="#service-3" onClick={(e) => handleNavClick(e, '#service-3')} className="hover:text-primary transition-colors">Lentes de Contato</a></li>
              <li><a href="#service-2" onClick={(e) => handleNavClick(e, '#service-2')} className="hover:text-primary transition-colors">Clareamento a Laser</a></li>
              <li><a href="#service-6" onClick={(e) => handleNavClick(e, '#service-6')} className="hover:text-primary transition-colors">Harmonização / Estética</a></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-white font-bold mb-6">Legal</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#privacy" onClick={(e) => handleNavClick(e, '#privacy')} className="hover:text-primary transition-colors">Política de Privacidade</a></li>
              <li><a href="#terms" onClick={(e) => handleNavClick(e, '#terms')} className="hover:text-primary transition-colors">Termos de Uso</a></li>
              <li><a href="#technical" onClick={(e) => handleNavClick(e, '#technical')} className="hover:text-primary transition-colors">Responsável Técnico</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500">
          <p>&copy; {new Date().getFullYear()} {COMPANY_NAME}. Todos os direitos reservados.</p>
          <p>Desenvolvido com tecnologia HeroStack.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;