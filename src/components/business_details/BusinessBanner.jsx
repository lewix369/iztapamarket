
import React from 'react';
import { Link } from 'react-router-dom';
import { Image as ImageIcon } from 'lucide-react';

const BusinessBanner = ({ business, categoryDetails }) => {
  const CategoryIcon = categoryDetails ? categoryDetails.icon : ImageIcon;
  const defaultBanner = "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1200&q=80";
  const defaultLogo = "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?auto=format&fit=crop&w=200&q=80";

  const finalBannerUrl = business.imagen_url || defaultBanner;
  const finalLogoUrl = business.logo_url || defaultLogo;

  return (
    <div className="relative h-64 md:h-96 w-full overflow-hidden rounded-t-xl group">
      <img 
        class="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        alt={`Imagen principal de ${business.nombre}`}
       src="https://images.unsplash.com/photo-1649015931204-15a3c789e6ea" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
      <div className="absolute bottom-0 left-0 p-6">
        {business.logo_url && (
          <img 
            alt={`Logo de ${business.nombre}`}
            class="h-20 w-20 md:h-24 md:w-24 rounded-full bg-white p-2 shadow-lg border-2 border-white mb-2 object-contain"
           src="https://images.unsplash.com/photo-1649000808933-1f4aac7cad9a" />
        )}
        <h1 className="text-3xl md:text-4xl font-extrabold text-white shadow-black">{business.nombre}</h1>
        {categoryDetails && (
          <Link 
            to={`/categorias/${categoryDetails.slug}`} 
            className="text-primary-foreground/90 hover:text-primary-foreground flex items-center mt-1 bg-black/30 px-2 py-1 rounded-md w-fit"
            aria-label={`Ver más negocios en la categoría ${business.categoria}`}
          >
            <CategoryIcon className="mr-2 h-5 w-5" />
            {business.categoria}
          </Link>
        )}
      </div>
    </div>
  );
};

export default BusinessBanner;
