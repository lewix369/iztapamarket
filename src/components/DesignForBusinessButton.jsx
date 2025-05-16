
import React from 'react';
import { Palette } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

const DesignForBusinessButton = ({ phoneNumber, message }) => {
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <motion.a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-24 right-6 z-50 md:bottom-6 md:right-40"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 0.7, type: 'spring', stiffness: 260, damping: 20 }}
      whileHover={{ scale: 1.1, rotate: 5 }}
      whileTap={{ scale: 0.9 }}
    >
      <Button size="lg" className="rounded-full shadow-xl bg-secondary text-secondary-foreground hover:bg-secondary/90 px-5 py-3">
        <Palette className="mr-2 h-5 w-5" />
        Diseño para Negocios
      </Button>
    </motion.a>
  );
};

export default DesignForBusinessButton;
  