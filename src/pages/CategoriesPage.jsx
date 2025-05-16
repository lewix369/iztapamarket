
import React from 'react';
import { categories } from '@/data/categories.jsx';
import CategoryCard from '@/components/CategoryCard.jsx';
import { motion } from 'framer-motion';

const CategoriesPage = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.2,
      },
    },
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl sm:text-5xl font-extrabold text-primary mb-3 tracking-tight">
          Categorías de Negocios
        </h1>
        <p className="text-lg sm:text-xl text-foreground/80 max-w-2xl mx-auto">
          Explora la diversidad de comercios y servicios que Iztapalapa tiene para ofrecer. Encuentra lo que necesitas, ¡fácil y rápido!
        </p>
      </motion.div>
      
      <motion.div 
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {categories.map((category, index) => (
          <CategoryCard 
            key={category.slug} 
            category={category} 
            isFullPage={true} 
            index={index} 
          />
        ))}
      </motion.div>
    </div>
  );
};

export default CategoriesPage;
