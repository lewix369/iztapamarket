
import React from 'react';
import { Utensils, SprayCan, Home, Shirt, Dog, Stethoscope, GraduationCap, Package, UtensilsCrossed } from 'lucide-react';

export const categories = [
  { name: 'Alimentos y Bebidas', slug: 'alimentos', icon: Utensils, description: "Restaurantes, fondas, antojos y más.", dbName: 'Alimentos y Bebidas' },
  { name: 'Belleza y Cuidado Personal', slug: 'belleza', icon: SprayCan, description: "Estéticas, barberías, spas, uñas.", dbName: 'Belleza y Cuidado Personal' },
  { name: 'Servicios del Hogar', slug: 'servicios', icon: Home, description: "Plomería, electricidad, limpieza y más.", dbName: 'Servicios del Hogar' },
  { name: 'Moda y Tiendas', slug: 'moda', icon: Shirt, description: "Ropa, accesorios, calzado y regalos.", dbName: 'Moda y Tiendas' },
  { name: 'Mascotas', slug: 'mascotas', icon: Dog, description: "Veterinarias, tiendas de mascotas, estética canina.", dbName: 'Mascotas' },
  { name: 'Salud y Bienestar', slug: 'salud', icon: Stethoscope, description: "Consultorios, farmacias, dentistas, terapeutas.", dbName: 'Salud y Bienestar' },
  { name: 'Educación y Cursos', slug: 'educacion', icon: GraduationCap, description: "Clases, talleres, regularización, escuelas.", dbName: 'Educación y Cursos' },
  { name: 'Otros Negocios', slug: 'otros', icon: Package, description: "Otros servicios y productos diversos.", dbName: 'Otros Negocios' },
];

export const defaultCategoryIcon = UtensilsCrossed;
