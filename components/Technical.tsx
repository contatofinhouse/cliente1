import React from 'react';
import { Award, UserCheck, Stethoscope } from 'lucide-react';
import { COMPANY_NAME, ADDRESS } from '../constants';

const Technical: React.FC = () => {
  return (
    <section className="pt-32 pb-24 bg-surface min-h-screen">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-slate-100">
            <div className="flex items-center gap-4 mb-8 pb-8 border-b border-slate-100">
                <div className="bg-blue-50 p-3 rounded-xl text-primary">
                    <Award size={32} />
                </div>
                <h1 className="font-heading text-3xl md:text-4xl font-bold text-secondary">
                    Responsável Técnico
                </h1>
            </div>
            
            <div className="space-y-8">
                <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                    <div className="flex items-start gap-4">
                        <div className="bg-white p-3 rounded-full shadow-sm text-primary">
                            <UserCheck size={24} />
                        </div>
                        <div>
                            <h3 className="text-lg font-bold text-secondary mb-1">Dr. Diretor Clínico</h3>
                            <p className="text-slate-600 font-medium">Cirurgião-Dentista</p>
                            <p className="text-slate-500 mt-2">CRO-SP: 00.000</p>
                        </div>
                    </div>
                </div>

                <div className="space-y-4 text-slate-600 leading-relaxed">
                    <p>
                        A <strong>{COMPANY_NAME}</strong> atua em estrita conformidade com as normas do Conselho Federal de Odontologia (CFO) e da Agência Nacional de Vigilância Sanitária (ANVISA).
                    </p>
                    <p>
                        Todas as informações técnicas e clínicas apresentadas neste website são de responsabilidade do Diretor Técnico, visando oferecer conteúdo educativo e esclarecedor, respeitando o Código de Ética Odontológica.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
                    <div className="flex items-start gap-3">
                         <Stethoscope className="text-primary mt-1" size={20} />
                         <div>
                             <h4 className="font-bold text-secondary">Registro EPAO</h4>
                             <p className="text-slate-500 text-sm">Inscrição CRO: 12345</p>
                         </div>
                    </div>
                    <div className="flex items-start gap-3">
                         <Award className="text-primary mt-1" size={20} />
                         <div>
                             <h4 className="font-bold text-secondary">Alvará Sanitário</h4>
                             <p className="text-slate-500 text-sm">Vigente e regularizado</p>
                         </div>
                    </div>
                </div>

                <div className="pt-8 border-t border-slate-100 mt-4">
                    <h3 className="font-bold text-secondary mb-2">Endereço da Clínica</h3>
                    <p className="text-slate-600">{ADDRESS}</p>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Technical;