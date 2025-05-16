
import React from 'react';
import { Button } from '@/components/ui/button';
import { MessageSquare, Palette, Zap } from 'lucide-react';
import { motion } from 'framer-motion';

const CreativeServicesBanner = () => {
  const creativeServicesWhatsAppNumber = "525647547221"; 
  const whatsappLink = `https://wa.me/${creativeServicesWhatsAppNumber}?text=Hola%2C%20me%20interesa%20conocer%20m%C3%A1s%20sobre%20sus%20servicios%20creativos%20para%20negocios.`;

  return (
    <motion.div 
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5, duration: 0.8, type: "spring" }}
      className="bg-gradient-to-r from-secondary via-blue-900 to-secondary text-white p-6 shadow-lg sticky bottom-0 z-40"
    >
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center text-center md:text-left">
        <div className="mb-4 md:mb-0">
          <div className="flex items-center justify-center md:justify-start mb-2">
            <Zap className="h-6 w-6 mr-2 text-primary" />
            <h3 className="text-xl font-bold text-white">¿Te gustó esta plataforma?</h3>
          </div>
          <p className="text-sm text-gray-200">
            Nosotros también creamos redes, videos y branding para negocios como el tuyo.
          </p>
        </div>
        <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 font-bold shadow-md transition-transform hover:scale-105">
          <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
            <MessageSquare className="mr-2 h-5 w-5" /> Contáctanos por WhatsApp
          </a>
        </Button>
      </div>
    </motion.div>
  );
};

export default CreativeServicesBanner;
  