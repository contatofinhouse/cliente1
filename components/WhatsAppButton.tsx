import React from 'react';
import { MessageCircle } from 'lucide-react';
import { PHONE_NUMBER } from '../constants';

const WhatsAppButton: React.FC = () => {
  const whatsappUrl = `https://wa.me/${PHONE_NUMBER}?text=Olá! Gostaria de agendar uma avaliação.`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-transform hover:scale-110 flex items-center justify-center animate-bounce duration-[2000ms]"
      aria-label="Fale conosco no WhatsApp"
    >
      <MessageCircle size={32} fill="white" />
    </a>
  );
};

export default WhatsAppButton;