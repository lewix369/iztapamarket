
import React from 'react';
import { Button } from '@/components/ui/button';
import { MessageSquare } from 'lucide-react';
import { motion } from 'framer-motion';

const WhatsAppButton = () => {
  const phoneNumber = "525647547221"; 
  const message = "Hola, me gustaría obtener más información sobre IztapaMarket.";
  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1, duration: 0.5, type: "spring", stiffness: 120 }}
      className="fixed bottom-5 right-5 z-[100]"
    >
      <Button 
        asChild 
        className="bg-[#25D366] hover:bg-[#1ebe5d] text-white font-bold p-0 rounded-full shadow-lg transition-colors duration-300 ease-in-out h-14 w-14 sm:h-16 sm:w-auto sm:px-4 sm:py-3"
        size="icon" 
      >
        <a 
          href={whatsappLink} 
          target="_blank" 
          rel="noopener noreferrer" 
          aria-label="Contactar por WhatsApp con IztapaMarket" 
          className="flex items-center justify-center"
          data-ga-event="click"
          data-ga-category="whatsapp"
          data-ga-label="click_whatsapp_floating"
        >
          <MessageSquare className="h-6 w-6 sm:mr-0 md:mr-2 sm:h-7 sm:w-7" />
          <span className="hidden sm:inline text-base">Chat</span>
        </a>
      </Button>
    </motion.div>
  );
};

export default WhatsAppButton;
