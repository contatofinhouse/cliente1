import React from 'react';
import { FileText, AlertCircle } from 'lucide-react';
import { COMPANY_NAME } from '../constants';

const TermsOfUse: React.FC = () => {
  return (
    <section className="pt-32 pb-24 bg-surface min-h-screen">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-slate-100">
            <div className="flex items-center gap-4 mb-8 pb-8 border-b border-slate-100">
                <div className="bg-blue-50 p-3 rounded-xl text-primary">
                    <FileText size={32} />
                </div>
                <h1 className="font-heading text-3xl md:text-4xl font-bold text-secondary">
                    Termos de Uso
                </h1>
            </div>
            
            <div className="space-y-6 text-slate-600 leading-relaxed">
                <p>
                    Bem-vindo à <strong>{COMPANY_NAME}</strong>. Ao acessar e utilizar nosso site, você concorda em cumprir e vincular-se aos seguintes termos e condições de uso.
                </p>

                <div>
                    <h3 className="text-xl font-bold text-secondary mb-3">1. Uso do Site</h3>
                    <p>
                        O conteúdo deste site é para sua informação geral e uso pessoal. Está sujeito a alterações sem aviso prévio. O uso de qualquer informação ou material neste site é inteiramente por sua conta e risco.
                    </p>
                </div>

                <div>
                    <h3 className="text-xl font-bold text-secondary mb-3">2. Agendamentos</h3>
                    <p>
                        A solicitação de agendamento através do site ou WhatsApp não garante automaticamente a reserva do horário. A confirmação será realizada por nossa equipe de atendimento conforme a disponibilidade da agenda.
                    </p>
                </div>

                <div>
                    <h3 className="text-xl font-bold text-secondary mb-3">3. Propriedade Intelectual</h3>
                    <p>
                        Este site contém material que é de nossa propriedade ou licenciado para nós. Este material inclui, mas não se limita a, design, layout, aparência, logotipos e gráficos. A reprodução é proibida, exceto em conformidade com o aviso de direitos autorais.
                    </p>
                </div>

                <div>
                    <h3 className="text-xl font-bold text-secondary mb-3 flex items-center gap-2">
                        <AlertCircle size={20} className="text-primary" />
                        4. Limitação de Responsabilidade
                    </h3>
                    <p>
                        As informações contidas no site têm caráter educativo e informativo e não substituem, em hipótese alguma, a consulta e o diagnóstico profissional realizado presencialmente por um dentista.
                    </p>
                </div>

                <div>
                    <h3 className="text-xl font-bold text-secondary mb-3">5. Links Externos</h3>
                    <p>
                        Nosso site pode conter links para outros sites de interesse. No entanto, depois de usar esses links para sair do nosso site, você deve observar que não temos controle sobre esse outro site e não somos responsáveis pela proteção e privacidade de qualquer informação que você fornecer.
                    </p>
                </div>
                
                <p className="text-sm text-slate-500 pt-8 border-t border-slate-100 mt-8">
                    Última atualização: {new Date().getFullYear()}
                </p>
            </div>
        </div>
      </div>
    </section>
  );
};

export default TermsOfUse;