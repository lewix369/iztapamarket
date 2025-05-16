
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { MessageSquare, Phone, MapPin, Mail, AlertTriangle } from 'lucide-react';
import { motion } from 'framer-motion';

const ContactPage = () => {
  const whatsappLink = "https://wa.me/525647547221?text=Hola,%20tengo%20dudas%20sobre%20IztapaMarket%20y%20me%20gustar%C3%ADa%20ayuda.";

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="container mx-auto px-4 py-12"
    >
      <header className="max-w-3xl mx-auto text-center mb-12">
        <MessageSquare className="h-16 w-16 sm:h-20 sm:w-20 text-primary mx-auto mb-6 opacity-90" />
        <h1 className="text-4xl md:text-5xl font-extrabold text-secondary mb-5">
          Ponte en Contacto con IztapaMarket
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl text-foreground/80">
          ¿Tienes dudas, sugerencias, o quieres ayuda para registrar tu negocio en IztapaMarket? Estamos aquí para escucharte. Escríbenos por WhatsApp para una respuesta rápida y te ayudamos paso a paso. Apoyamos a negocios reales de Iztapalapa que quieren crecer y ser visibles online.
        </p>
      </header>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        <Card className="max-w-xl mx-auto shadow-xl border-2 border-primary/10 bg-gradient-to-br from-white via-orange-50 to-gray-50">
          <CardHeader className="p-6 md:p-8 text-center">
            <CardTitle className="text-2xl md:text-3xl font-bold text-primary">Estamos para Ayudarte</CardTitle>
            <CardDescription className="text-md sm:text-lg text-foreground/70 mt-1">La forma más rápida y eficiente de contactarnos es a través de WhatsApp.</CardDescription>
          </CardHeader>
          <CardContent className="p-6 md:p-8 text-center">
            <Button asChild size="lg" className="bg-green-500 hover:bg-green-600 text-white text-lg sm:text-xl px-8 sm:px-10 py-4 sm:py-3 shadow-xl rounded-lg transform hover:scale-105 transition-transform duration-200 w-full">
              <a 
                href={whatsappLink} 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="Escribir a IztapaMarket por WhatsApp"
                data-ga-event="click"
                data-ga-category="whatsapp"
                data-ga-label="click_whatsapp_contact_page"
              >
                <MessageSquare className="mr-2 sm:mr-3 h-5 w-5 sm:h-6 sm:w-6" /> Escribir por WhatsApp
              </a>
            </Button>
            <p className="text-xs sm:text-sm text-muted-foreground mt-4">
              Nuestro equipo de soporte te atenderá lo antes posible durante horarios de oficina.
            </p>
            
            <div className="mt-8 pt-6 border-t border-gray-200">
                <h2 className="text-xl font-semibold text-secondary mb-4">Otros Canales de Comunicación:</h2>
                <div className="space-y-3 text-left text-foreground/80 max-w-xs mx-auto">
                    <p className="flex items-center justify-start sm:justify-center">
                        <Mail className="mr-3 h-5 w-5 text-primary flex-shrink-0"/> <a href="mailto:contacto@iztapamarket.com" className="hover:underline" aria-label="Enviar correo electrónico a IztapaMarket">contacto@iztapamarket.com</a>
                    </p>
                     <p className="flex items-center justify-start sm:justify-center">
                        <Phone className="mr-3 h-5 w-5 text-primary flex-shrink-0"/> (55) 5647-547221 (Atención telefónica próximamente)
                    </p>
                     <p className="flex items-center justify-start sm:justify-center">
                        <MapPin className="mr-3 h-5 w-5 text-primary flex-shrink-0"/> Iztapalapa, Ciudad de México (Solo referencia geográfica)
                    </p>
                </div>
            </div>

            <div className="mt-8 p-4 bg-yellow-50 border border-yellow-300 rounded-lg text-yellow-700">
                <div className="flex items-center">
                    <AlertTriangle className="h-6 w-6 mr-3 flex-shrink-0" />
                    <h3 className="font-semibold">Aviso Importante:</h3>
                </div>
                <p className="text-sm mt-1">IztapaMarket no solicita pagos ni información sensible a través de canales no oficiales. Toda contratación de planes de pago se realiza vía WhatsApp tras un contacto inicial o a través de nuestra plataforma segura (próximamente).</p>
            </div>

          </CardContent>
        </Card>
      </motion.div>
    </motion.div>
  );
};

export default ContactPage;
