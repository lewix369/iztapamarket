
import React from 'react';
import { Input } from '@/components/ui/input.jsx';
import { Label } from '@/components/ui/label.jsx';
import { Textarea } from '@/components/ui/textarea.jsx'; 
import { Image, Link as LinkIcon } from 'lucide-react';

const ImageUrlFields = ({ formData, errors, handleChange, handleGalleryImageChange }) => {
  return (
    <div className="space-y-6 p-6 bg-gradient-to-br from-primary/5 via-transparent to-orange-500/5 rounded-lg border border-primary/20 shadow-sm">
      <h3 className="text-xl font-semibold text-primary flex items-center">
        <Image className="mr-2 h-6 w-6" /> Imágenes y Enlaces
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <Label htmlFor="mainImageUrl" className="text-base font-medium text-secondary">URL de Imagen Principal (Opcional)</Label>
          <Input id="mainImageUrl" name="mainImageUrl" value={formData.mainImageUrl} onChange={handleChange} placeholder="https://ejemplo.com/imagen.jpg" className={`mt-1 text-base ${errors.mainImageUrl ? 'border-red-500' : ''}`} />
          {errors.mainImageUrl && <p className="text-red-500 text-sm mt-1">{errors.mainImageUrl}</p>}
        </div>
        <div>
          <Label htmlFor="logoUrl" className="text-base font-medium text-secondary">URL de Logo (Opcional)</Label>
          <Input id="logoUrl" name="logoUrl" value={formData.logoUrl} onChange={handleChange} placeholder="https://ejemplo.com/logo.png" className={`mt-1 text-base ${errors.logoUrl ? 'border-red-500' : ''}`} />
          {errors.logoUrl && <p className="text-red-500 text-sm mt-1">{errors.logoUrl}</p>}
        </div>
      </div>
      <div>
        <Label className="text-base font-medium text-secondary">URLs de Galería de Imágenes (Opcional, hasta 3)</Label>
        <div className="space-y-3 mt-1">
          {formData.galleryImages.map((url, index) => (
            <div key={index}>
              <Input
                name={`galleryImage${index}`}
                value={url}
                onChange={(e) => handleGalleryImageChange(index, e.target.value)}
                placeholder={`https://ejemplo.com/galeria${index + 1}.jpg`}
                className={`text-base ${errors[`galleryImage${index}`] ? 'border-red-500' : ''}`}
              />
              {errors[`galleryImage${index}`] && <p className="text-red-500 text-sm mt-1">{errors[`galleryImage${index}`]}</p>}
            </div>
          ))}
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4 border-t border-primary/10">
         <div>
            <Label htmlFor="website" className="text-base font-medium text-secondary flex items-center"><LinkIcon size={16} className="mr-1.5 opacity-70"/>Sitio Web (Opcional)</Label>
            <Input id="website" name="website" value={formData.website} onChange={handleChange} placeholder="https://minegocio.com" className={`mt-1 text-base ${errors.website ? 'border-red-500' : ''}`} />
            {errors.website && <p className="text-red-500 text-sm mt-1">{errors.website}</p>}
        </div>
        <div>
            <Label htmlFor="facebook" className="text-base font-medium text-secondary flex items-center"><LinkIcon size={16} className="mr-1.5 opacity-70"/>Facebook (Opcional)</Label>
            <Input id="facebook" name="facebook" value={formData.facebook} onChange={handleChange} placeholder="https://facebook.com/minegocio" className={`mt-1 text-base ${errors.facebook ? 'border-red-500' : ''}`} />
            {errors.facebook && <p className="text-red-500 text-sm mt-1">{errors.facebook}</p>}
        </div>
        <div>
            <Label htmlFor="instagram" className="text-base font-medium text-secondary flex items-center"><LinkIcon size={16} className="mr-1.5 opacity-70"/>Instagram (Opcional)</Label>
            <Input id="instagram" name="instagram" value={formData.instagram} onChange={handleChange} placeholder="https://instagram.com/minegocio" className={`mt-1 text-base ${errors.instagram ? 'border-red-500' : ''}`} />
            {errors.instagram && <p className="text-red-500 text-sm mt-1">{errors.instagram}</p>}
        </div>
      </div>
       <div>
          <Label htmlFor="services" className="text-base font-medium text-secondary">Servicios Principales / Productos (Opcional, separado por comas)</Label>
          <Textarea id="services" name="services" value={formData.services} onChange={handleChange} rows={3} placeholder="Ej: Cortes de cabello, Tintes, Peinados" className={`mt-1 text-base ${errors.services ? 'border-red-500' : ''}`} />
           {errors.services && <p className="text-red-500 text-sm mt-1">{errors.services}</p>}
        </div>
    </div>
  );
};

export default ImageUrlFields;
