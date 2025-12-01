import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import { DIFFERENTIALS } from '../constants';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* Image Grid */}
          <div className="w-full lg:w-1/2 relative">
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-primary/10 rounded-full blur-2xl"></div>
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-teal-500/10 rounded-full blur-2xl"></div>
            
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
              <img 
                src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&w=1974&auto=format&fit=crop" 
                alt="Dentista explicando tratamento ao paciente" 
                className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-8">
                <p className="text-white font-bold text-lg">Tecnologia Avançada</p>
                <p className="text-slate-200 text-sm">Equipamentos de última geração</p>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="w-full lg:w-1/2">
            <h4 className="text-primary font-bold uppercase tracking-wider mb-2 text-sm">Sobre Nós</h4>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-secondary mb-6 leading-tight">
              Cuidamos do seu sorriso com excelência clínica e atendimento humanizado
            </h2>
            
            <p className="text-slate-600 mb-6 leading-relaxed">
              Nossa clínica oferece cuidados completos em odontologia, unindo precisão técnica, equipamentos modernos e atendimento acolhedor. Cada paciente recebe uma avaliação detalhada e um plano de tratamento claro, baseado em necessidades reais e resultados duradouros.
            </p>
            
            <p className="text-slate-600 mb-8 leading-relaxed">
              Trabalhamos com foco em saúde, estética e prevenção, garantindo segurança e qualidade em cada procedimento.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {DIFFERENTIALS.map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="mt-1 text-primary">
                    <CheckCircle2 size={20} />
                  </div>
                  <span className="text-slate-700 font-medium">{item}</span>
                </div>
              ))}
            </div>
            
            <div className="mt-10">
              <a href="#contact" className="inline-block border-b-2 border-primary text-primary font-bold hover:text-accent transition-colors pb-1">
                Saiba mais sobre nossa estrutura
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;