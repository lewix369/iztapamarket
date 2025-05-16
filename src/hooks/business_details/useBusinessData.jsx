
import { useState, useEffect, useCallback } from 'react';
import { useToast } from "@/components/ui/use-toast.jsx";
import { categories as allCategories } from '@/data/categories.jsx';
import { fetchBusinessById, fetchRelatedBusinesses, formatBusinessData } from '@/services/businessService.jsx';

const useBusinessData = (businessId) => {
  const [business, setBusiness] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const { toast } = useToast();

  const loadBusinessDetails = useCallback(async () => {
    if (!businessId) {
      setError("ID de negocio no proporcionado.");
      setIsLoading(false);
      return;
    }

    setIsLoading(true);
    setError(null);
    try {
      const rawBusinessData = await fetchBusinessById(businessId);
      if (!rawBusinessData) {
        toast({
          title: "Negocio no encontrado",
          description: "El negocio que buscas no existe o no está disponible.",
          variant: "destructive",
        });
        setBusiness(null);
        setError("No encontrado"); 
        setIsLoading(false);
        return;
      }

      const categoryDetails = allCategories.find(c => 
        c.dbName === rawBusinessData.categoria || 
        c.slug === rawBusinessData.categoria || 
        c.name === rawBusinessData.categoria
      );
      
      let formattedBusiness = formatBusinessData(rawBusinessData, categoryDetails?.name);
      
      const mapEmbedUrlWithKey = rawBusinessData.mapa_embed_url || 
        (rawBusinessData.direccion 
          ? `https://www.google.com/maps/embed/v1/place?key=${import.meta.env.VITE_GOOGLE_MAPS_API_KEY || ''}&q=${encodeURIComponent(rawBusinessData.direccion)}` 
          : null);
      
      formattedBusiness = {
        ...formattedBusiness,
        mapEmbedUrl: mapEmbedUrlWithKey,
        categorySlug: categoryDetails?.slug,
      };

      setBusiness(formattedBusiness);

      if (formattedBusiness.category) {
        const rawRelatedData = await fetchRelatedBusinesses(formattedBusiness.category, formattedBusiness.id, 3);
        const formattedRelated = rawRelatedData.map(b => {
           const relCategoryDetails = allCategories.find(c => c.dbName === b.categoria || c.slug === b.categoria || c.name === b.categoria);
           return formatBusinessData(b, relCategoryDetails?.name);
        });
        setBusiness(prev => ({ ...prev, relatedBusinesses: formattedRelated }));
      }
    } catch (fetchError) {
      console.error('Error fetching business details:', fetchError);
      toast({
        title: "Error al cargar negocio",
        description: fetchError.message || "No se pudo encontrar el negocio solicitado o ocurrió un error.",
        variant: "destructive",
      });
      setError(fetchError.message || "Error desconocido");
      setBusiness(null);
    } finally {
      setIsLoading(false);
    }
  }, [businessId, toast]);

  useEffect(() => {
    loadBusinessDetails();
  }, [loadBusinessDetails]);

  return { business, isLoading, error };
};

export default useBusinessData;
