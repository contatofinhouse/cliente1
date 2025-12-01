import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { FAQ_ITEMS } from '../constants';

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<string | null>(null);

  const toggleFAQ = (id: string) => {
    setOpenIndex(openIndex === id ? null : id);
  };

  return (
    <section id="faq" className="py-20 bg-surface">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 rounded-full text-primary mb-4">
            <HelpCircle size={24} />
          </div>
          <h2 className="font-heading text-3xl font-bold text-secondary">
            Perguntas Frequentes
          </h2>
        </div>

        <div className="space-y-4">
          {FAQ_ITEMS.map((item) => (
            <div 
              key={item.id} 
              className="bg-white rounded-xl shadow-sm border border-slate-100 overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(item.id)}
                className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none hover:bg-slate-50 transition-colors"
              >
                <span className="font-bold text-slate-800 text-lg">{item.question}</span>
                <ChevronDown 
                  className={`text-primary transition-transform duration-300 ${
                    openIndex === item.id ? 'rotate-180' : ''
                  }`} 
                />
              </button>
              <div 
                className={`px-6 transition-all duration-300 ease-in-out ${
                  openIndex === item.id ? 'max-h-48 py-4 opacity-100' : 'max-h-0 py-0 opacity-0'
                }`}
              >
                <p className="text-slate-600 border-t border-slate-100 pt-4">
                  {item.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;