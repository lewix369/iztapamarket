
import React from 'react';
import BusinessCard from '@/components/BusinessCard.jsx';
import { Search } from 'lucide-react';
import { motion } from 'framer-motion';

const BusinessList = ({ businesses }) => {
  if (businesses.length === 0) {
    return (
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="text-center py-10 bg-white rounded-lg shadow"
      >
        <Search className="mx-auto h-16 w-16 text-gray-400 mb-4" />
        <p className="text-xl font-semibold text-gray-700">No se encontraron negocios.</p>
        <p className="text-gray-500">Intenta ajustar tu búsqueda o filtros.</p>
      </motion.div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
      {businesses.map((business, index) => (
        <motion.div
          key={business.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1, duration: 0.4 }}
        >
          <BusinessCard business={{...business, category: business.categoryDisplay || business.category }} />
        </motion.div>
      ))}
    </div>
  );
};

export default BusinessList;
