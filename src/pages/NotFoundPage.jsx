
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { AlertTriangle } from 'lucide-react';
import { motion } from 'framer-motion';

const NotFoundPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col items-center justify-center min-h-[60vh] text-center px-4"
    >
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.2, type: 'spring', stiffness: 120 }}
      >
        <AlertTriangle className="h-24 w-24 text-primary mb-6" />
      </motion.div>
      
      <h1 className="text-5xl md:text-7xl font-bold text-gray-800 mb-4">404</h1>
      <h2 className="text-2xl md:text-3xl font-semibold text-gray-700 mb-6">Página No Encontrada</h2>
      <p className="text-lg text-gray-600 mb-8 max-w-md">
        Lo sentimos, la página que estás buscando no existe o ha sido movida.
      </p>
      <Link to="/">
        <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
          Volver a la Página de Inicio
        </Button>
      </Link>
    </motion.div>
  );
};

export default NotFoundPage;
  