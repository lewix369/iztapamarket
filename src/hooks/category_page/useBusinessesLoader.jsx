
import { useState, useEffect, useCallback } from 'react';
import { useToast } from "@/components/ui/use-toast.jsx";
import { fetchBusinessesByCategory, formatBusinessData } from '@/services/businessService.jsx';

export const useBusinessesLoader = (category) => {
  const [businesses, setBusinesses] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const { toast } = useToast();

  const loadBusinesses = useCallback(async () => {
    if (!category || (!category.dbName && !category.name)) {
      setIsLoading(false);
      setError("Categoría no definida correctamente.");
      console.error("Error en useBusinessesLoader: Categoría no definida.", category);
      return;
    }

    setIsLoading(true);
    setError(null);
    
    const supabaseCategoryName = category.dbName || category.name;
    console.log(`Fetching businesses for category: '${supabaseCategoryName}' (derived from slug: ${category.slug})`);

    try {
      const rawData = await fetchBusinessesByCategory(supabaseCategoryName);
      console.log(`Raw data for ${supabaseCategoryName}:`, rawData);
      
      const formattedData = rawData.map(b => formatBusinessData(b, category.name));
      setBusinesses(formattedData);

      if (formattedData.length === 0) {
        console.log(`No businesses found for category: ${supabaseCategoryName}`);
      }

    } catch (fetchError) {
      setError(fetchError.message);
      toast({
        title: "Error de Carga",
        description: `No se pudieron cargar los negocios de ${category.name}. Detalles: ${fetchError.message}`,
        variant: "destructive",
      });
      console.error(`Error loading businesses for ${category.name}:`, fetchError);
    } finally {
      setIsLoading(false);
    }
  }, [category, toast]);

  useEffect(() => {
    loadBusinesses();
  }, [loadBusinesses]);

  return { businesses, isLoading, error, loadBusinesses };
};
