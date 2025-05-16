
import React from 'react';

export const validateBusinessForm = (formData, isAdmin = false) => {
  const errors = {};

  if (!formData.name.trim()) errors.name = "El nombre del negocio es obligatorio.";
  else if (formData.name.length < 3) errors.name = "El nombre debe tener al menos 3 caracteres.";
  else if (formData.name.length > 100) errors.name = "El nombre no debe exceder los 100 caracteres.";

  if (!formData.phone.trim()) errors.phone = "El WhatsApp es obligatorio.";
  else if (!/^\+?[0-9\s-()]{7,20}$/.test(formData.phone)) errors.phone = "Ingresa un número de WhatsApp válido (incluye código de país si es necesario).";
  
  if (!formData.address.trim()) errors.address = "La dirección es obligatoria.";
  else if (formData.address.length < 10) errors.address = "La dirección debe ser más específica.";
  else if (formData.address.length > 150) errors.address = "La dirección no debe exceder los 150 caracteres.";

  if (!formData.category) errors.category = "Selecciona una categoría.";
  
  if (!formData.hours.trim()) errors.hours = "El horario de atención es obligatorio.";
  else if (formData.hours.length < 5) errors.hours = "El horario debe ser más específico.";
  else if (formData.hours.length > 100) errors.hours = "El horario no debe exceder los 100 caracteres.";

  if (!formData.description.trim()) errors.description = "La descripción es obligatoria.";
  else if (formData.description.length < 10) errors.description = "La descripción debe ser más detallada (mínimo 10 caracteres).";
  else if (formData.description.length > 300) errors.description = "La descripción no debe exceder los 300 caracteres.";
  
  const urlPattern = /^(ftp|http|https):\/\/[^ "]+$/;

  if (formData.mainImageUrl.trim() && !urlPattern.test(formData.mainImageUrl)) {
    errors.mainImageUrl = "Ingresa una URL válida para la imagen principal.";
  }
  if (formData.logoUrl.trim() && !urlPattern.test(formData.logoUrl)) {
    errors.logoUrl = "Ingresa una URL válida para el logo.";
  }
  formData.galleryImages.forEach((url, index) => {
    if (url.trim() && !urlPattern.test(url)) {
      errors[`galleryImage${index}`] = `Ingresa una URL válida para la imagen de galería ${index + 1}.`;
    }
  });
   if (formData.website.trim() && !urlPattern.test(formData.website)) {
    errors.website = "Ingresa una URL válida para el sitio web.";
  }
  if (formData.facebook.trim() && !urlPattern.test(formData.facebook)) {
    errors.facebook = "Ingresa una URL válida para Facebook.";
  }
  if (formData.instagram.trim() && !urlPattern.test(formData.instagram)) {
    errors.instagram = "Ingresa una URL válida para Instagram.";
  }

  if (formData.services.length > 500) errors.services = "Los servicios/productos no deben exceder los 500 caracteres.";


  if (!isAdmin) { // Only validate terms if not admin
    if (!formData.termsAccepted) errors.termsAccepted = "Debes aceptar los términos y condiciones.";
  }
  
  return errors;
};
