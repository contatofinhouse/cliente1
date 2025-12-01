import React, { useState } from 'react';
import { Phone, MapPin, Clock, Calendar, Send } from 'lucide-react';
import { PHONE_NUMBER, ADDRESS } from '../constants';
import { ContactFormData } from '../types';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    phone: '',
    service: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `*Nova solicitação de agendamento via Site* %0A%0A*Nome:* ${formData.name}%0A*Telefone:* ${formData.phone}%0A*Interesse:* ${formData.service || 'Geral'}%0A*Mensagem:* ${formData.message}`;
    
    window.open(`https://wa.me/${PHONE_NUMBER}?text=${text}`, '_blank');
  };

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 shadow-2xl rounded-3xl overflow-hidden">
          
          {/* Info Side */}
          <div className="bg-secondary p-10 md:p-14 text-white flex flex-col justify-between">
            <div>
              <h2 className="font-heading text-3xl font-bold mb-6">Agende sua avaliação</h2>
              <p className="text-slate-300 mb-10 text-lg">
                Entre em contato para marcar uma consulta ou tirar dúvidas sobre nossos tratamentos. Estamos prontos para transformar seu sorriso.
              </p>
              
              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="bg-white/10 p-3 rounded-lg">
                    <Phone className="text-primary" size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">Telefone & WhatsApp</h3>
                    <p className="text-slate-300">(11) 99999-9999</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-white/10 p-3 rounded-lg">
                    <MapPin className="text-primary" size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">Localização</h3>
                    <p className="text-slate-300">{ADDRESS}</p>
                    <p className="text-slate-400 text-sm mt-1">Estacionamento conveniado no local.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-white/10 p-3 rounded-lg">
                    <Clock className="text-primary" size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">Horário de Funcionamento</h3>
                    <p className="text-slate-300">Seg - Sex: 08:00 - 19:00</p>
                    <p className="text-slate-300">Sáb: 08:00 - 13:00</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-12 pt-8 border-t border-white/10">
              <p className="text-sm text-slate-400">
                Atendimento particular e reembolso.
              </p>
            </div>
          </div>

          {/* Form Side */}
          <div className="bg-white p-10 md:p-14">
            <h3 className="font-heading text-2xl font-bold text-secondary mb-6">Envie uma mensagem</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Nome Completo</label>
                <input 
                  type="text" 
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                  placeholder="Seu nome"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Telefone (WhatsApp)</label>
                  <input 
                    type="tel" 
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                    placeholder="(00) 00000-0000"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Tratamento de Interesse</label>
                  <div className="relative">
                    <select 
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all appearance-none bg-white"
                    >
                      <option value="">Selecione...</option>
                      <option value="Avaliação Geral">Avaliação Geral</option>
                      <option value="Implantes">Implantes</option>
                      <option value="Ortodontia">Ortodontia</option>
                      <option value="Estética">Estética</option>
                      <option value="Outros">Outros</option>
                    </select>
                    <Calendar className="absolute right-4 top-3.5 text-slate-400 pointer-events-none" size={20} />
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Mensagem (Opcional)</label>
                <textarea 
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all resize-none"
                  placeholder="Descreva sua dúvida ou melhor horário para contato..."
                ></textarea>
              </div>

              <button 
                type="submit" 
                className="w-full bg-primary hover:bg-accent text-white font-bold py-4 rounded-xl shadow-lg hover:shadow-primary/30 transition-all flex items-center justify-center gap-2"
              >
                <Send size={20} />
                Solicitar Agendamento
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;