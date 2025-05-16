
import { supabase } from '@/lib/supabaseClient.jsx';

const ALL_BUSINESS_FIELDS = 'id, nombre, descripcion, categoria, direccion, whatsapp, imagen_url, logo_url, web, hours, gallery_images, menu, telefono, plan_type, video_embed_url, mapa_embed_url, created_at, instagram, facebook, services';

export const fetchBusinessesByCategory = async (categoryName) => {
  const { data, error } = await supabase
    .from('negocios')
    .select(ALL_BUSINESS_FIELDS)
    .eq('categoria', categoryName)
    .order('created_at', { ascending: false });

  if (error) {
    console.error('Error fetching businesses by category:', error);
    throw new Error(error.message || 'Ocurrió un error al cargar los negocios por categoría.');
  }
  return data || [];
};

export const fetchBusinessById = async (id) => {
  const { data, error } = await supabase
    .from('negocios')
    .select(ALL_BUSINESS_FIELDS)
    .eq('id', id)
    .single();

  if (error) {
    console.error(`Error fetching business by ID ${id}:`, error);
    if (error.code === 'PGRST116') { 
      return null; 
    }
    throw new Error(error.message || `Ocurrió un error al cargar el negocio ${id}.`);
  }
  return data;
};

export const fetchRelatedBusinesses = async (categoryName, currentBusinessId, limit = 3) => {
  const { data, error } = await supabase
    .from('negocios')
    .select(ALL_BUSINESS_FIELDS)
    .eq('categoria', categoryName)
    .neq('id', currentBusinessId)
    .order('created_at', { ascending: false })
    .limit(limit);

  if (error) {
    console.error('Error fetching related businesses:', error);
    throw new Error(error.message || 'Ocurrió un error al cargar negocios relacionados.');
  }
  return data || [];
};

export const formatBusinessData = (businessData, displayCategoryName = null) => {
  if (!businessData) return null;

  let imagesArray = [];
  if (businessData.imagen_url) imagesArray.push(businessData.imagen_url);
  if (businessData.gallery_images && Array.isArray(businessData.gallery_images)) {
    businessData.gallery_images.forEach(img => {
      if (img && !imagesArray.includes(img)) {
        imagesArray.push(img);
      }
    });
  }
  
  let parsedMenu = null;
  if (businessData.menu) {
    try {
      if (typeof businessData.menu === 'string') {
        parsedMenu = JSON.parse(businessData.menu);
      } else if (Array.isArray(businessData.menu)) {
        parsedMenu = businessData.menu; 
      }
      if (!Array.isArray(parsedMenu)) parsedMenu = null;
    } catch (e) {
      console.warn(`Error parsing menu JSON for business ${businessData.id}:`, e, "Menu data:", businessData.menu);
      parsedMenu = null;
    }
  }

  return {
    id: businessData.id?.toString(),
    name: businessData.nombre || 'Nombre no disponible',
    description: businessData.descripcion,
    category: businessData.categoria, 
    address: businessData.direccion,
    whatsapp: businessData.whatsapp,
    images: imagesArray.filter(Boolean),
    logoUrl: businessData.logo_url,
    website: businessData.web,
    hours: businessData.hours,
    menuItems: parsedMenu,
    phone: businessData.telefono,
    planType: businessData.plan_type,
    videoEmbedUrl: businessData.video_embed_url,
    mapEmbedUrl: businessData.mapa_embed_url,
    createdAt: businessData.created_at,
    categoryDisplay: displayCategoryName || businessData.categoria,
    instagram: businessData.instagram,
    facebook: businessData.facebook,
    services: businessData.services ? businessData.services.split(',').map(s => s.trim()) : [],
  };
};
