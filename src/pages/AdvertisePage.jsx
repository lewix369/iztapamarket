
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { CheckCircle, Camera, ListChecks, MessageSquare, ShieldCheck, Zap } from 'lucide-react';
import { motion } from 'framer-motion';

const AdvertisePage = () => {
  const planFeatures = [
    { icon: <Camera className="h-6 w-6 text-green-500" />, text: "Publicación con foto, descripción y contacto" },
    { icon: <ListChecks className="h-6 w-6 text-green-500" />, text: "Aparición en la categoría correspondiente" },
    { icon: <Zap className="h-6 w-6 text-green-500" />, text: "Promoción inicial en nuestras redes" },
    { icon: <MessageSquare className="h-6 w-6 text-green-500" />, text: "Soporte personalizado" },
  ];

  const howItWorksSteps = [
    { number: "1", text: "Da clic en el botón de WhatsApp" },
    { number: "2", text: "Envíanos los datos de tu negocio y una imagen" },
    { number: "3", text: "Nosotros lo publicamos por ti" },
  ];

  const whatsappUrl = "https://wa.me/525647547221?text=Hola%2C%20quiero%20anunciar%20mi%20negocio%20en%20IztapaMarket.%20Estos%20son%20mis%20datos%3A%20%0A%0ANombre%3A%20%0ADescripci%C3%B3n%3A%20%0ACategor%C3%ADa%3A%20%0AWhatsApp%3A%20%0AURL%20o%20redes%3A%20%0AImagen%3A%20(adjunta%20la%20foto)";

  const sectionVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <motion.div 
      initial="hidden"
      animate="visible"
      variants={sectionVariants}
      className="max-w-4xl mx-auto py-10 px-4 sm:px-6 lg:px-8"
    >
      <Card className="shadow-2xl overflow-hidden border-t-4 border-primary bg-gradient-to-b from-background via-slate-50 to-stone-100">
        <CardHeader className="text-center p-6 md:p-10 bg-gradient-to-r from-primary to-orange-500">
          <motion.h1 
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-3"
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.1, type: "spring", stiffness: 120 }}
          >
            Anúnciate en IztapaMarket por solo <span className="underline decoration-yellow-400 decoration-4 underline-offset-4">$99 MXN/mes</span>
          </motion.h1>
          <motion.p 
            className="text-lg sm:text-xl text-white/90"
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 120 }}
          >
            📣 Tu negocio puede aparecer en nuestras categorías, portada y buscador local en minutos.
          </motion.p>
        </CardHeader>

        <CardContent className="p-6 md:p-10 space-y-10">
          <motion.section variants={sectionVariants}>
            <h2 className="text-2xl sm:text-3xl font-bold text-secondary mb-6 text-center">
              📷 ¿Qué incluye el plan?
            </h2>
            <ul className="space-y-4">
              {planFeatures.map((feature, index) => (
                <motion.li 
                  key={index} 
                  className="flex items-start p-4 bg-white rounded-lg shadow-md border border-border/70"
                  variants={itemVariants}
                  custom={index}
                  initial="hidden"
                  animate="visible"
                  transition={{ delay: index * 0.1 + 0.3, type: "spring", stiffness: 100 }}
                >
                  <div className="flex-shrink-0 mr-4">{feature.icon}</div>
                  <span className="text-md sm:text-lg text-foreground/90">{feature.text}</span>
                </motion.li>
              ))}
            </ul>
          </motion.section>

          <motion.section variants={sectionVariants}>
            <h2 className="text-2xl sm:text-3xl font-bold text-secondary mb-6 text-center">
              💬 ¿Cómo funciona?
            </h2>
            <div className="space-y-4">
              {howItWorksSteps.map((step, index) => (
                <motion.div 
                  key={index} 
                  className="flex items-center p-4 bg-white rounded-lg shadow-md border border-border/70"
                  variants={itemVariants}
                  custom={index}
                  initial="hidden"
                  animate="visible"
                  transition={{ delay: index * 0.1 + 0.6, type: "spring", stiffness: 100 }}
                >
                  <div className="flex-shrink-0 mr-4 bg-primary text-primary-foreground h-8 w-8 rounded-full flex items-center justify-center font-bold text-lg">
                    {step.number}
                  </div>
                  <p className="text-md sm:text-lg text-foreground/90">{step.text}</p>
                </motion.div>
              ))}
            </div>
          </motion.section>

          <motion.div 
            className="text-center pt-6"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.9, type: "spring", stiffness: 100 }}
          >
            <Button 
              asChild 
              size="lg" 
              className="bg-green-500 hover:bg-green-600 text-white text-xl sm:text-2xl px-8 sm:px-10 py-6 sm:py-7 shadow-xl font-bold rounded-full transform hover:scale-105 transition-all duration-300"
              data-ga-event="click"
              data-ga-category="whatsapp"
              data-ga-label="click_whatsapp_anunciate_page"
            >
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center">
                <MessageSquare className="mr-2 sm:mr-3 h-6 w-6 sm:h-7 sm:w-7" /> ¡Quiero Anunciarme en IztapaMarket!
              </a>
            </Button>
          </motion.div>

          <motion.div 
            className="text-center mt-8"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1.1 }}
          >
            <p className="text-xs sm:text-sm text-muted-foreground flex items-center justify-center">
              <ShieldCheck className="h-4 w-4 mr-2 text-gray-500" />
              *Revisamos cada anuncio antes de publicarlo para garantizar la calidad del directorio.*
            </p>
          </motion.div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default AdvertisePage;
