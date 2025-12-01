import React from 'react';
import { PROCESS_STEPS } from '../constants';

const Process: React.FC = () => {
  return (
    <section id="process" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          
          <div className="lg:w-1/2">
            <h4 className="text-primary font-bold uppercase tracking-wider mb-2 text-sm">Como Funciona</h4>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-secondary mb-6">
              Atendimento claro, seguro e personalizado
            </h2>
            <p className="text-slate-600 mb-8 text-lg">
              Acreditamos que confiança começa com transparência. Nosso objetivo é que o paciente entenda exatamente o que será feito, sem dúvidas ou surpresas.
            </p>
            
            <div className="space-y-6">
              {PROCESS_STEPS.map((step, index) => (
                <div key={index} className="flex gap-4 group">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-blue-50 text-primary font-heading font-bold text-xl flex items-center justify-center border-2 border-primary/20 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                    {step.number}
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-secondary mb-1">{step.title}</h3>
                    <p className="text-slate-500 text-sm">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:w-1/2 relative">
             <div className="absolute inset-0 bg-primary/10 rounded-3xl transform rotate-3 scale-105"></div>
             <img 
               src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=2080&auto=format&fit=crop" 
               alt="Equipe médica analisando exames" 
               className="relative rounded-3xl shadow-xl w-full object-cover h-[500px]"
             />
          </div>

        </div>
      </div>
    </section>
  );
};

export default Process;