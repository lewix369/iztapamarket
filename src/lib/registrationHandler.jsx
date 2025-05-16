
import React from 'react';
import { supabase } from '@/lib/supabaseClient.jsx';

export const handleRegistration = async (formData, isAdmin) => {
  const businessData = {
    nombre: formData.name,
    descripcion: formData.description,
    categoria: formData.category,
    telefono: formData.phone, 
    direccion: formData.address,
    imagen_url: formData.mainImageUrl,
    logo_url: formData.logoUrl,
    gallery_images: formData.galleryImages.filter(img => img.trim() !== ''),
    web: formData.website,
    facebook: formData.facebook,
    instagram: formData.instagram,
    services: formData.services,
    hours: formData.hours,
    is_featured: isAdmin ? formData.isFeatured : false, 
    plan_type: isAdmin ? formData.planType : 'basic',
  };

  const { data, error } = await supabase
    .from('negocios')
    .insert([businessData])
    .select();

  if (error) {
    console.error('Error inserting data:', error);
    throw new Error(error.message || 'Error al registrar el negocio en la base de datos.');
  }

  return data;
};
