
import React from 'react';
import { Separator } from '@/components/ui/separator.jsx';
import { Star, MapPin, Clock, Globe } from 'lucide-react';

const BusinessInfoSection = ({ business }) => {
  return (
    <>
      {business.planType === 'premium' && ( 
        <div className="bg-gradient-to-r from-yellow-400/20 via-amber-400/20 to-orange-400/20 p-4 rounded-lg border border-yellow-500 text-yellow-700 font-semibold flex items-center shadow-inner">
          <Star className="h-6 w-6 mr-3 text-yellow-500 fill-current" />
          <span>¡Negocio Destacado en IztapaMarket!</span>
        </div>
      )}
      <h2 className="text-2xl font-semibold text-secondary border-b pb-2">Descripción del Negocio</h2>
      <p className="text-foreground/80 leading-relaxed whitespace-pre-line">{business.description || "Este negocio aún no ha agregado una descripción detallada."}</p>
      
      {business.services && business.services.length > 0 && (
        <>
          <Separator />
          <h3 className="text-xl font-semibold text-secondary">Servicios Ofrecidos</h3>
          <ul className="list-disc list-inside space-y-1 text-foreground/80">
            {business.services.map((service, index) => (
              <li key={index}>{service}</li>
            ))}
          </ul>
        </>
      )}

      <Separator />

      <div className="space-y-3">
        <h3 className="text-xl font-semibold text-secondary">Detalles</h3>
        {business.address && (
          <div className="flex items-start">
            <MapPin className="h-5 w-5 mr-3 mt-1 text-primary flex-shrink-0" />
            <span className="text-foreground/80">{business.address}</span>
          </div>
        )}
        {business.hours && (
          <div className="flex items-center">
            <Clock className="h-5 w-5 mr-3 text-primary flex-shrink-0" />
            <span className="text-foreground/80">{business.hours}</span>
          </div>
        )}
        {business.website && (
          <div className="flex items-center">
            <Globe className="h-5 w-5 mr-3 text-primary flex-shrink-0" />
            <a href={business.website.startsWith('http') ? business.website : `https://${business.website}`} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline hover:text-blue-700">
              Visitar Sitio Web
            </a>
          </div>
        )}
      </div>
    </>
  );
};

export default BusinessInfoSection;
