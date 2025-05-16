
import React from 'react';
import { Separator } from '@/components/ui/separator.jsx';

const BusinessGallery = ({ business }) => {
  if (!business.images || business.images.length <= 1) {
    // No gallery if 0 or 1 image (main image is shown in header)
    // Or if the only image is the logo and it's also the main image
    if (business.images?.length === 1 && business.images[0] === business.logoUrl && business.images[0] === (business.images?.[0] || business.logoUrl)) {
        return null;
    }
  }
  
  const mainImageInHeader = business.images?.[0] || business.logoUrl;
  const galleryImages = business.images.filter(img => img !== mainImageInHeader && img !== business.logoUrl);

  if (galleryImages.length === 0) return null;

  return (
    <>
      <Separator />
      <h3 className="text-xl font-semibold text-secondary">Galería</h3>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
        {galleryImages.map((imgSrc, index) => (
          <div key={index} className="rounded-lg overflow-hidden shadow-md aspect-w-1 aspect-h-1">
             <img   
              alt={`Imagen ${index + 1} de la galería de ${business.name}`} 
              className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
              src={imgSrc || "https://images.unsplash.com/photo-1691663118633-94108debcd5a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80"} />
          </div>
        ))}
      </div>
    </>
  );
};

export default BusinessGallery;
