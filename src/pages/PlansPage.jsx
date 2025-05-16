
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import { CheckCircle, Star, Zap, MessageSquare } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const plans = [
  {
    name: "Plan Básico",
    price: "GRATIS",
    priceSuffix: "por siempre",
    description: "Ideal para empezar y tener presencia online en Iztapalapa.",
    features: [
      "Listado en el directorio general",
      "Asignación a 1 Categoría",
      "Información de contacto (teléfono/WhatsApp)",
      "Mapa de ubicación (Google Maps)",
      "Horario de atención",
    ],
    cta: "¡Regístrate Gratis!",
    bgColor: "bg-gray-100",
    textColor: "text-gray-800",
    borderColor: "border-gray-300",
    highlight: false,
    whatsAppMessage: "Hola, quiero registrar mi negocio con el Plan Básico Gratuito en IztapaMarket.",
    gaLabel: "click_whatsapp_plan_basico"
  },
  {
    name: "Plan Destacado",
    price: "$99",
    priceSuffix: "MXN / mes",
    description: "Maximiza tu visibilidad y atrae más clientes locales.",
    features: [
      "Todo lo del Plan Básico",
      "Posicionamiento Preferente en búsquedas y categoría",
      "Hasta 3 Categorías",
      "Galería de Fotos (hasta 5 imágenes)",
      "Descripción detallada de tu negocio",
      "Enlace a Redes Sociales y Sitio Web",
      "Opción de mostrar Promociones Especiales",
      "Logo del Negocio visible",
    ],
    cta: "¡Quiero Destacar!",
    bgColor: "bg-gradient-to-br from-primary to-orange-500",
    textColor: "text-white",
    borderColor: "border-orange-600",
    highlight: true,
    whatsAppMessage: "Hola, estoy interesado en el Plan Destacado de $99 MXN para mi negocio en IztapaMarket.",
    gaLabel: "click_whatsapp_plan_destacado"
  },
  {
    name: "Plan Premium",
    price: "$199",
    priceSuffix: "MXN / mes",
    description: "La solución completa para el crecimiento acelerado de tu negocio.",
    features: [
      "Todo lo del Plan Destacado",
      "Publicación en Redes Sociales de IztapaMarket (1 vez al mes)",
      "Banner promocional en tu Categoría Principal (rotativo)",
      "Hasta 5 Categorías",
      "Galería de Fotos (hasta 10 imágenes)",
      "Soporte Prioritario vía WhatsApp",
      "Estadísticas de Visitas (próximamente)",
    ],
    cta: "¡Ser Premium!",
    bgColor: "bg-secondary",
    textColor: "text-white",
    borderColor: "border-blue-700",
    highlight: false,
    whatsAppMessage: "Hola, me interesa el Plan Premium de $199 MXN para mi negocio en IztapaMarket.",
    gaLabel: "click_whatsapp_plan_premium"
  },
];

const officialWhatsAppNumber = "525647547221";

const PlansPage = () => {
  const pageHeaderImageUrl = "https://images.unsplash.com/photo-1504805572947-34fad45aed93?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80";


  return (
    <div className="container mx-auto px-4 py-12">
      <motion.section 
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, type: "spring" }}
        className="text-center mb-16"
      >
        <img  
            alt="IztapaMarket - Anuncia tu Negocio con nuestros planes de publicidad en Iztapalapa"
            className="mx-auto h-24 sm:h-28 md:h-32 w-auto mb-6 rounded-lg shadow-md object-cover"
         src={pageHeaderImageUrl} src="https://images.unsplash.com/photo-1567080185975-88eedc2b273a" />
        <h1 className="text-4xl md:text-5xl font-extrabold text-secondary mb-4">
          Haz Crecer tu Negocio en Iztapalapa
        </h1>
        <p className="text-lg md:text-xl text-foreground/80 max-w-2xl mx-auto">
          Elige el plan perfecto para conectar con miles de clientes locales. ¡Más visibilidad, más ventas! Ofrecemos opciones para cada necesidad y presupuesto.
        </p>
      </motion.section>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
        {plans.map((plan, index) => (
          <motion.div
            key={plan.name}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 * index, duration: 0.5 }}
            className={`flex flex-col ${plan.highlight ? 'transform lg:scale-105 z-10' : ''}`}
          >
            <Card className={`shadow-xl hover:shadow-2xl transition-shadow duration-300 border-2 ${plan.borderColor} flex flex-col flex-grow ${plan.bgColor} ${plan.textColor}`}>
              <CardHeader className={`p-6 ${plan.highlight ? 'relative' : ''}`}>
                {plan.highlight && (
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <span className="inline-flex items-center px-4 py-1.5 rounded-full text-sm font-semibold bg-yellow-400 text-yellow-900 shadow-lg">
                      <Star className="w-4 h-4 mr-1.5" /> MÁS POPULAR
                    </span>
                  </div>
                )}
                <CardTitle className={`text-3xl font-bold text-center ${plan.highlight ? 'pt-6' : ''}`}>{plan.name}</CardTitle>
                <CardDescription className={`text-center text-5xl font-extrabold mt-4 ${plan.textColor === 'text-white' ? 'text-white/90' : 'text-gray-700'}`}>
                  {plan.price}
                  {plan.priceSuffix && <span className="text-base font-normal"> {plan.priceSuffix}</span>}
                </CardDescription>
                <p className={`text-center mt-2 text-sm ${plan.textColor === 'text-white' ? 'text-white/80' : 'text-gray-600'}`}>{plan.description}</p>
              </CardHeader>
              <CardContent className="p-6 space-y-3 flex-grow">
                <h3 className="text-md font-semibold mb-2">Incluye:</h3>
                <ul className="space-y-2.5 text-sm">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start">
                      <CheckCircle className={`h-5 w-5 mr-2.5 mt-0.5 flex-shrink-0 ${plan.highlight ? 'text-yellow-300' : 'text-green-500'}`} />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter className="p-6 mt-auto">
                <Button 
                  asChild 
                  size="lg" 
                  className={`w-full font-bold text-base py-3 shadow-md transition-transform hover:scale-105 
                    ${plan.highlight 
                      ? 'bg-white text-primary hover:bg-gray-100' 
                      : plan.name === "Plan Básico" 
                        ? 'bg-primary text-primary-foreground hover:bg-primary/90' 
                        : 'bg-[#25D366] hover:bg-[#1ebe5d] text-white'
                    }`}
                >
                  <a 
                    href={`https://wa.me/${officialWhatsAppNumber}?text=${encodeURIComponent(plan.whatsAppMessage)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Contratar ${plan.name} por WhatsApp`}
                    data-ga-event="click"
                    data-ga-category="whatsapp"
                    data-ga-label={plan.gaLabel}
                  >
                    {plan.name === "Plan Básico" ? <Zap className="mr-2 h-5 w-5" /> : <MessageSquare className="mr-2 h-5 w-5" />}
                    {plan.cta}
                  </a>
                </Button>
              </CardFooter>
            </Card>
          </motion.div>
        ))}
      </div>

      <motion.section 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.7 }}
        className="mt-20 text-center"
      >
        <h2 className="text-2xl md:text-3xl font-bold text-secondary mb-6">¿Tienes Preguntas o Necesitas un Plan a Medida?</h2>
        <p className="text-foreground/70 mb-8 max-w-lg mx-auto">
          Estamos aquí para ayudarte. Contáctanos y diseñaremos la mejor estrategia para tu negocio en Iztapalapa. Queremos ser tu aliado para crecer.
        </p>
        <Button asChild size="lg" className="bg-[#25D366] hover:bg-[#1ebe5d] text-white font-bold py-3 px-6 rounded-lg shadow-md text-lg transition-colors duration-300 ease-in-out">
          <a 
            href={`https://wa.me/${officialWhatsAppNumber}?text=${encodeURIComponent("Hola, tengo algunas preguntas sobre los planes de IztapaMarket.")}`}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Hablar con un asesor por WhatsApp sobre planes de publicidad"
            data-ga-event="click"
            data-ga-category="whatsapp"
            data-ga-label="click_whatsapp_plans_asesor"
          >
            <MessageSquare className="mr-2 h-5 w-5" /> Hablar con un Asesor
          </a>
        </Button>
      </motion.section>
      
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7, duration: 0.5 }}
        className="mt-16 p-8 bg-muted/60 rounded-xl text-center"
      >
        <h2 className="text-xl font-semibold text-secondary mb-3">¿Listo para empezar pero no sabes cómo registrarte?</h2>
        <p className="text-foreground/70 mb-5">
          Visita nuestra página de registro para añadir tu negocio al directorio. Si tienes un plan de pago, te guiaremos después de contactarnos por WhatsApp.
        </p>
        <Button asChild variant="outline" className="border-primary text-primary hover:bg-primary/10">
          <Link to="/registrarse?admin=iztapasecreto2025" aria-label="Ir a la página de registro de negocios en IztapaMarket">
            Ir a la Página de Registro
          </Link>
        </Button>
      </motion.section>

    </div>
  );
};

export default PlansPage;
