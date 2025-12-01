import React from 'react';
import { Shield, Lock } from 'lucide-react';
import { COMPANY_NAME } from '../constants';

const PrivacyPolicy: React.FC = () => {
  return (
    <section className="pt-32 pb-24 bg-surface min-h-screen">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-slate-100">
            <div className="flex items-center gap-4 mb-8 pb-8 border-b border-slate-100">
                <div className="bg-blue-50 p-3 rounded-xl text-primary">
                    <Shield size={32} />
                </div>
                <h1 className="font-heading text-3xl md:text-4xl font-bold text-secondary">
                    Política de Privacidade
                </h1>
            </div>
            
            <div className="space-y-6 text-slate-600 leading-relaxed">
                <p>
                    A <strong>{COMPANY_NAME}</strong> tem o compromisso de proteger a sua privacidade. Esta Política de Privacidade explica como coletamos, usamos e protegemos suas informações pessoais ao utilizar nosso site e serviços.
                </p>

                <div>
                    <h3 className="text-xl font-bold text-secondary mb-3 flex items-center gap-2">
                        <Lock size={20} className="text-primary" />
                        1. Coleta de Informações
                    </h3>
                    <p>
                        Coletamos informações que você nos fornece voluntariamente ao preencher formulários de contato ou agendamento, como nome, telefone e mensagens. Também podemos coletar dados técnicos de navegação (cookies) para melhorar a experiência do usuário.
                    </p>
                </div>

                <div>
                    <h3 className="text-xl font-bold text-secondary mb-3">2. Uso das Informações</h3>
                    <p>
                        As informações coletadas são utilizadas exclusivamente para:
                    </p>
                    <ul className="list-disc pl-6 space-y-2 mt-2">
                        <li>Agendamento de consultas e avaliações;</li>
                        <li>Comunicação via WhatsApp ou telefone para confirmações;</li>
                        <li>Melhoria contínua de nossos serviços e do site;</li>
                        <li>Cumprimento de obrigações legais.</li>
                    </ul>
                </div>

                <div>
                    <h3 className="text-xl font-bold text-secondary mb-3">3. Compartilhamento de Dados</h3>
                    <p>
                        Não vendemos, alugamos ou compartilhamos suas informações pessoais com terceiros para fins de marketing. Seus dados podem ser acessados apenas por nossa equipe interna e parceiros tecnológicos essenciais para a operação do site, sob estrito sigilo.
                    </p>
                </div>

                <div>
                    <h3 className="text-xl font-bold text-secondary mb-3">4. Segurança</h3>
                    <p>
                        Adotamos medidas de segurança técnicas e organizacionais para proteger seus dados contra acesso não autorizado, alteração ou destruição.
                    </p>
                </div>

                <div>
                    <h3 className="text-xl font-bold text-secondary mb-3">5. Seus Direitos</h3>
                    <p>
                        Você tem o direito de solicitar o acesso, correção ou exclusão de seus dados pessoais a qualquer momento. Para isso, entre em contato conosco através dos canais disponíveis no site.
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

export default PrivacyPolicy;