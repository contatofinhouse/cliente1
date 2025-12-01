import React from 'react';
import { Star, Quote } from 'lucide-react';
import { TESTIMONIALS } from '../constants';

const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-24 bg-slate-900 text-white relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10 pointer-events-none">
        <div className="absolute top-10 right-10 w-64 h-64 bg-blue-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-teal-500 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
            O que nossos pacientes dizem
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((item) => (
            <div key={item.id} className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-2xl relative">
              <div className="absolute -top-4 -left-2 bg-primary text-white p-2 rounded-lg">
                <Quote size={20} fill="currentColor" />
              </div>
              <div className="flex mb-4">
                {[...Array(item.rating)].map((_, i) => (
                  <Star key={i} size={18} fill="#fbbf24" className="text-amber-400" />
                ))}
              </div>
              <p className="text-slate-300 mb-6 italic">"{item.text}"</p>
              <div className="flex items-center gap-3 border-t border-white/10 pt-4">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-400 to-teal-400 flex items-center justify-center font-bold text-white">
                  {item.name.charAt(0)}
                </div>
                <span className="font-semibold text-white">{item.name}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;