
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea.jsx';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { useToast } from '@/components/ui/use-toast.jsx';
import { categories } from '@/data/categories.jsx'; 
import useFormState from '@/hooks/useFormState.jsx';
import { validateBusinessForm } from '@/lib/formValidation.jsx';
import { handleRegistration } from '@/lib/registrationHandler.jsx';
import AdminAccessMessage from '@/components/register/AdminAccessMessage.jsx';
import RegistrationFormFields from '@/components/register/RegistrationFormFields.jsx';
import ImageUrlFields from '@/components/register/ImageUrlFields.jsx';
import AdvancedFields from '@/components/register/AdvancedFields.jsx';
import TermsAndSubmit from '@/components/register/TermsAndSubmit.jsx';
import { motion } from 'framer-motion';
import { useLocation } from 'react-router-dom';
import { CheckCircle, XCircle, Loader2, UploadCloud } from 'lucide-react';

const initialFormData = {
  name: '',
  description: '',
  category: '',
  phone: '',
  address: '',
  mainImageUrl: '',
  logoUrl: '',
  galleryImages: ['', '', ''],
  website: '',
  facebook: '',
  instagram: '',
  services: '',
  hours: '',
  isFeatured: false,
  planType: 'basic',
  termsAccepted: false,
};

const RegisterBusinessPage = () => {
  const { toast } = useToast();
  const location = useLocation();
  const [isAdmin, setIsAdmin] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const { 
    formData, 
    handleChange, 
    setFormData, 
    errors, 
    setErrors, 
    handleCategoryChange: hookHandleCategoryChange, 
    resetForm 
  } = useFormState(initialFormData);

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    if (queryParams.get('admin') === 'iztapasecreto2025') {
      setIsAdmin(true);
      toast({
        title: "Modo Administrador Activado",
        description: "Puedes registrar negocios sin restricciones y editar campos avanzados.",
        variant: "default",
        className: "bg-blue-500 text-white",
      });
    }
  }, [location.search, toast]);
  
  const handleCategoryChangeInternal = (value) => {
    hookHandleCategoryChange(value);
  };

  const handleGalleryImageChange = (index, value) => {
    const newGalleryImages = [...formData.galleryImages];
    newGalleryImages[index] = value;
    handleChange({ target: { name: 'galleryImages', value: newGalleryImages } });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    const validationErrors = validateBusinessForm(formData, isAdmin);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      try {
        await handleRegistration(formData, isAdmin);
        toast({
          title: (
            <div className="flex items-center">
              <CheckCircle className="mr-2 h-5 w-5 text-green-500" />
              ¡Negocio Registrado!
            </div>
          ),
          description: "Tu negocio ha sido enviado y pronto estará visible en IztapaMarket.",
          className: "bg-green-100 border-green-400 text-green-700",
        });
        resetForm();
      } catch (error) {
        toast({
          title: (
            <div className="flex items-center">
              <XCircle className="mr-2 h-5 w-5 text-red-500" />
              Error al Registrar
            </div>
          ),
          description: error.message || "No se pudo registrar el negocio. Intenta de nuevo.",
          variant: "destructive",
        });
      }
    } else {
      toast({
        title: (
          <div className="flex items-center">
            <XCircle className="mr-2 h-5 w-5 text-red-500" />
            Errores en el Formulario
          </div>
        ),
        description: "Por favor, corrige los campos marcados y acepta los términos.",
        variant: "destructive",
      });
    }
    setIsSubmitting(false);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="container mx-auto px-4 py-8"
    >
      <Card className="max-w-3xl mx-auto shadow-2xl border-t-4 border-primary bg-gradient-to-br from-background via-slate-50 to-stone-100">
        <CardHeader className="text-center p-6 md:p-8">
          <UploadCloud className="h-16 w-16 text-primary mx-auto mb-4 opacity-80" />
          <CardTitle className="text-3xl md:text-4xl font-extrabold text-secondary">Registra tu Negocio en IztapaMarket</CardTitle>
          <CardDescription className="text-md md:text-lg text-foreground/70 mt-2">
            Completa el formulario para que miles de clientes en Iztapalapa te encuentren. ¡Es fácil y rápido!
          </CardDescription>
        </CardHeader>
        <AdminAccessMessage isAdmin={isAdmin} />
        <CardContent className="p-6 md:p-8">
          <form onSubmit={handleSubmit} className="space-y-8">
            <RegistrationFormFields
              formData={formData}
              errors={errors}
              categories={categories}
              handleChange={handleChange}
              handleCategoryChange={handleCategoryChangeInternal}
            />
            <ImageUrlFields
              formData={formData}
              errors={errors}
              handleChange={handleChange}
              handleGalleryImageChange={handleGalleryImageChange}
            />
            {isAdmin && (
              <AdvancedFields
                formData={formData}
                errors={errors}
                handleChange={handleChange}
                setFormData={setFormData}
              />
            )}
            <TermsAndSubmit
              formData={formData}
              errors={errors}
              handleChange={handleChange}
            />
            <CardFooter className="flex justify-center p-0 pt-8">
               <Button 
                type="submit" 
                className="w-full sm:w-auto text-lg font-semibold px-10 py-6 bg-gradient-to-r from-primary to-orange-500 hover:from-primary/90 hover:to-orange-500/90 text-white shadow-lg transform hover:scale-105 transition-all duration-300" 
                disabled={isSubmitting}
                data-ga-event="submit"
                data-ga-category="formulario_registro_negocio"
                data-ga-label="envio_registro_negocio"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="mr-2 h-5 w-5 animate-spin" /> Enviando Registro...
                  </>
                ) : (
                  "Registrar Mi Negocio Ahora"
                )}
              </Button>
            </CardFooter>
          </form>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default RegisterBusinessPage;
