
import React, { useState, useEffect, useCallback } from 'react';
import { useParams, Link, Navigate, useLocation } from 'react-router-dom';
import { supabase } from '@/lib/supabaseClient.jsx';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ChevronLeft, Loader2 } from 'lucide-react';
import { motion } from 'framer-motion';
import { useToast } from "@/components/ui/use-toast.jsx";
import { categories as allCategories } from '@/data/categories.jsx';
import { fetchBusinessById, fetchRelatedBusinesses, formatBusinessData } from '@/services/businessService.jsx';

import BusinessDetailsHeader from '@/components/business_details/BusinessDetailsHeader.jsx';
import BusinessInfoSection from '@/components/business_details/BusinessInfoSection.jsx';
import BusinessGallery from '@/components/business_details/BusinessGallery.jsx';
import BusinessContactCard from '@/components/business_details/BusinessContactCard.jsx';
import BusinessMap from '@/components/business_details/BusinessMap.jsx';
import RelatedBusinessesSection from '@/components/business_details/RelatedBusinessesSection.jsx';
import BusinessVideoSection from '@/components/business_details/BusinessVideoSection.jsx';
import SeoManager from '@/components/SeoManager.jsx';

const BusinessDetailsPage = () => {
  const { id } = useParams();
  const location = useLocation();
  const { toast } = useToast();
  const [business, setBusiness] = useState(null);
  const [relatedBusinesses, setRelatedBusinesses] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const loadBusinessDetails = useCallback(async () => {
    setIsLoading(true);
    try {
      const rawBusinessData = await fetchBusinessById(id);
      if (!rawBusinessData) {
        toast({
          title: "Negocio no encontrado",
          description: "El negocio que buscas no existe o no está disponible.",
          variant: "destructive",
        });
        setBusiness(null);
        setIsLoading(false);
        return;
      }

      const categoryDetails = allCategories.find(c => c.dbName === rawBusinessData.categoria || c.slug === rawBusinessData.categoria || c.name === rawBusinessData.categoria);
      const formattedBusiness = formatBusinessData(rawBusinessData, categoryDetails?.name);
      
      const mapEmbedUrlWithKey = rawBusinessData.mapa_embed_url || (rawBusinessData.direccion ? `https://www.google.com/maps/embed/v1/place?key=${import.meta.env.VITE_GOOGLE_MAPS_API_KEY || 'YOUR_GOOGLE_MAPS_API_KEY_FALLBACK'}&q=${encodeURIComponent(rawBusinessData.direccion)}` : null);
      formattedBusiness.mapEmbedUrl = mapEmbedUrlWithKey;
      formattedBusiness.categorySlug = categoryDetails?.slug;


      setBusiness(formattedBusiness);

      if (formattedBusiness.category) {
        const rawRelatedData = await fetchRelatedBusinesses(formattedBusiness.category, formattedBusiness.id, 3);
        const formattedRelated = rawRelatedData.map(b => {
           const relCategoryDetails = allCategories.find(c => c.dbName === b.categoria || c.slug === b.categoria || c.name === b.categoria);
           return formatBusinessData(b, relCategoryDetails?.name);
        });
        setRelatedBusinesses(formattedRelated);
      }
    } catch (error) {
      console.error('Error fetching business details:', error);
      toast({
        title: "Error al cargar negocio",
        description: error.message || "No se pudo encontrar el negocio solicitado o ocurrió un error.",
        variant: "destructive",
      });
      setBusiness(null);
    } finally {
      setIsLoading(false);
    }
  }, [id, toast]);

  useEffect(() => {
    loadBusinessDetails();
  }, [loadBusinessDetails]);


  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-[60vh]">
        <Loader2 className="h-16 w-16 animate-spin text-primary" />
      </div>
    );
  }

  if (!business) {
    return <Navigate to="/404" replace />;
  }
  
  const MotionCard = motion(Card);

  const seoTitle = `${business.name} - ${business.categoryDisplay} en Iztapalapa | IztapaMarket`;
  const seoDescription = business.description ? business.description.substring(0, 160) : `Detalles de ${business.name}, un negocio de ${business.categoryDisplay} en Iztapalapa. Encuentra dirección, contacto y más.`;
  const canonicalUrl = `${import.meta.env.VITE_APP_BASE_URL || 'https://iztapamarket.com'}${location.pathname}`;


  return (
    <SeoManager title={seoTitle} description={seoDescription} canonicalUrl={canonicalUrl}>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="container mx-auto px-4 py-8"
      >
        <div className="mb-6">
          <Button variant="outline" asChild>
            <Link to={business.categorySlug ? `/categorias/${business.categorySlug}` : "/categorias"} className="text-primary hover:text-primary/80">
              <ChevronLeft className="mr-2 h-4 w-4" /> Volver a {business.categoryDisplay || "Categorías"}
            </Link>
          </Button>
        </div>

        <MotionCard 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.1, duration: 0.5 }}
          className="overflow-hidden shadow-2xl rounded-xl border-2 border-primary/10"
        >
          <BusinessDetailsHeader business={business} />
          
          <CardContent className="p-6 md:p-8 grid md:grid-cols-3 gap-8">
            <div className="md:col-span-2 space-y-6">
              <BusinessInfoSection business={business} />
              <BusinessGallery business={business} />
              <BusinessVideoSection videoEmbedUrl={business.videoEmbedUrl} businessName={business.name} />
            </div>

            <div className="md:col-span-1 space-y-6">
              <BusinessContactCard business={business} />
              <BusinessMap mapEmbedUrl={business.mapEmbedUrl} businessName={business.name} />
            </div>
          </CardContent>
        </MotionCard>

        <RelatedBusinessesSection relatedBusinesses={relatedBusinesses} currentCategory={business.categoryDisplay} />
      </motion.div>
    </SeoManager>
  );
};

export default BusinessDetailsPage;
