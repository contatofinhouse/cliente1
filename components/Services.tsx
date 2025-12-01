import React from 'react';
import { SERVICES } from '../constants';

const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-surface">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-secondary mb-4">
            Tratamentos Odontológicos Completos
          </h2>
          <p className="text-slate-600 text-lg">
            Soluções integradas para recuperar a saúde e a estética do seu sorriso em um só lugar.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {SERVICES.map((service) => (
            <div 
              key={service.id} 
              id={`service-${service.id}`}
              className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group border border-slate-100 scroll-mt-28"
            >
              <div className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary transition-colors duration-300">
                <service.icon size={28} className="text-primary group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="font-heading text-xl font-bold text-secondary mb-3">
                {service.title}
              </h3>
              <p className="text-slate-500 text-sm leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <a 
            href="#contact" 
            className="inline-block px-10 py-4 bg-secondary text-white font-bold rounded-full hover:bg-slate-800 transition-colors shadow-lg"
          >
            Agendar Avaliação Completa
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;