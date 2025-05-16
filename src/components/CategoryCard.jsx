
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { ArrowRight, Tag } from 'lucide-react';

const CategoryCard = ({ category, isFullPage = false, index = 0 }) => {
  const IconComponent = category.icon || Tag;

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { delay: index * 0.05, duration: 0.4, ease: "easeOut" }
    },
    hover: { 
      scale: 1.05,
      boxShadow: "0px 8px 25px rgba(var(--primary-rgb), 0.15)",
      transition: { duration: 0.2, ease: "circOut" }
    }
  };

  const content = (
    <>
      <CardHeader className="items-center text-center p-4 md:p-6">
        <motion.div 
          className="p-3 bg-primary/10 rounded-full mb-3 md:mb-4"
          whileHover={{ rotate: 15, scale: 1.1 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <IconComponent className={`h-10 w-10 md:h-12 md:w-12 text-primary ${isFullPage ? 'group-hover:animate-pulse' : ''}`} />
        </motion.div>
        <CardTitle className="text-lg md:text-xl font-semibold text-secondary group-hover:text-primary transition-colors duration-200">
          {category.name}
        </CardTitle>
      </CardHeader>
      <CardContent className="text-center p-4 md:p-6 pt-0">
        <CardDescription className="text-xs md:text-sm text-foreground/70 mb-3 md:mb-4 h-10 line-clamp-2">
          {category.description || `Explora negocios en la categoría ${category.name}.`}
        </CardDescription>
        {isFullPage && (
          <div className="flex items-center justify-center text-sm text-primary group-hover:underline">
            Ver negocios <ArrowRight className="ml-1 h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
          </div>
        )}
      </CardContent>
    </>
  );

  if (isFullPage) {
    return (
      <motion.div variants={cardVariants} initial="hidden" animate="visible" whileHover="hover" className="h-full">
        <Link to={`/categorias/${category.slug}`} className="block h-full">
          <Card className="h-full flex flex-col justify-between items-center text-center cursor-pointer group bg-card hover:border-primary/50 transition-all duration-200 shadow-md hover:shadow-xl rounded-xl overflow-hidden border border-border/50">
            {content}
          </Card>
        </Link>
      </motion.div>
    );
  }

  return (
    <motion.div variants={cardVariants} initial="hidden" animate="visible" whileHover="hover">
      <Link to={`/categorias/${category.slug}`}>
        <Card className="cursor-pointer group bg-card hover:border-primary/50 transition-all duration-200 shadow-md hover:shadow-lg rounded-xl overflow-hidden border border-border/50">
          {content}
        </Card>
      </Link>
    </motion.div>
  );
};

export default CategoryCard;
