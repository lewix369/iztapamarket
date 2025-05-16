
import React from 'react';
import { Link } from 'react-router-dom';
import { categories as allCategories } from '@/data/categories.jsx';
import { Image as ImageIcon } from 'lucide-react';

const BusinessDetailsHeader = ({ business }) => {
  const categoryDetails = allCategories.find(cat => cat.name === business.categoryDisplay || cat.slug === business.category || cat.dbName === business.category);
  const CategoryIcon = categoryDetails ? categoryDetails.icon : ImageIcon;
  
  const mainImageToDisplay = business.images?.[0] || business.logoUrl || "https://images.unsplash.com/photo-1614312385003-dcea7b8b6ab6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80";
  const logoToDisplay = business.logoUrl || "https://images.unsplash.com/photo-1485531865381-286666aa80a9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80";

  return (
    <div className="relative h-64 md:h-96 w-full overflow-hidden">
      <img  
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        alt={`Imagen principal de ${business.name}`}
        src={mainImageToDisplay} />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
      <div className="absolute bottom-0 left-0 p-6">
        {logoToDisplay && (
          <img   
            alt={`Logo de ${business.name}`} 
            className="h-20 w-20 md:h-24 md:w-24 rounded-full bg-white p-1 shadow-lg border-2 border-white mb-2 object-contain"
            src={logoToDisplay} />
        )}
        <h1 className="text-3xl md:text-4xl font-extrabold text-white drop-shadow-lg">{business.name}</h1>
        {categoryDetails && (
          <Link to={`/categorias/${categoryDetails.slug}`} className="text-primary-foreground/90 hover:text-primary-foreground flex items-center mt-1 bg-black/40 backdrop-blur-sm px-3 py-1.5 rounded-lg w-fit shadow-md">
            <CategoryIcon className="mr-2 h-5 w-5" />
            {business.categoryDisplay}
          </Link>
        )}
      </div>
    </div>
  );
};

export default BusinessDetailsHeader;
