
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ShieldCheck } from 'lucide-react';
import { motion } from 'framer-motion';

const PrivacyPolicyPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-3xl mx-auto py-8 px-4"
    >
      <Card className="shadow-lg">
        <CardHeader className="bg-secondary text-primary-foreground p-6 rounded-t-lg">
          <div className="flex items-center space-x-3">
            <ShieldCheck size={32} />
            <CardTitle className="text-3xl font-bold">Política de Privacidad</CardTitle>
          </div>
        </CardHeader>
        <CardContent className="p-6 space-y-6 text-foreground/90">
          <p className="text-sm text-muted-foreground">Última actualización: 13 de Mayo, 2025</p>
          
          <section>
            <h2 className="text-xl font-semibold text-secondary mb-2">1. Introducción</h2>
            <p>
              Bienvenido a IztapaMarket ("nosotros", "nuestro"). Estamos comprometidos a proteger su privacidad. Esta Política de Privacidad explica cómo recopilamos, usamos, divulgamos y salvaguardamos su información cuando visita nuestro sitio web iztapamarket.com (el "Sitio"). Lea atentamente esta política de privacidad. Si no está de acuerdo con los términos de esta política de privacidad, no acceda al sitio.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-secondary mb-2">2. Recopilación de su Información</h2>
            <p>
              Podemos recopilar información sobre usted de varias maneras. La información que podemos recopilar en el Sitio incluye:
            </p>
            <ul className="list-disc list-inside space-y-1 pl-4">
              <li>
                <strong>Datos Personales:</strong> Información de identificación personal, como su nombre, dirección de correo electrónico y número de teléfono, que usted nos proporciona voluntariamente cuando se registra en el Sitio o elige participar en diversas actividades relacionadas con el Sitio, como contactarnos o publicar un negocio.
              </li>
              <li>
                <strong>Datos Derivados:</strong> Información que nuestros servidores recopilan automáticamente cuando accede al Sitio, como su dirección IP, tipo de navegador, sistema operativo, tiempos de acceso y las páginas que ha visto directamente antes y después de acceder al Sitio.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-secondary mb-2">3. Uso de su Información</h2>
            <p>
              Tener información precisa sobre usted nos permite brindarle una experiencia fluida, eficiente y personalizada. Específicamente, podemos usar la información recopilada sobre usted a través del Sitio para:
            </p>
            <ul className="list-disc list-inside space-y-1 pl-4">
              <li>Crear y administrar su cuenta.</li>
              <li>Procesar sus transacciones y enviar información relacionada.</li>
              <li>Mejorar la eficiencia y el funcionamiento del Sitio.</li>
              <li>Notificarle sobre actualizaciones del Sitio.</li>
              <li>Solicitar comentarios y contactarlo sobre su uso del Sitio.</li>
            </ul>
          </section>
          
          <section>
            <h2 className="text-xl font-semibold text-secondary mb-2">4. Divulgación de su Información</h2>
            <p>
              No compartiremos su información con terceros excepto como se describe en esta Política de Privacidad o con su consentimiento.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-secondary mb-2">5. Seguridad de su Información</h2>
            <p>
              Utilizamos medidas de seguridad administrativas, técnicas y físicas para ayudar a proteger su información personal. Si bien hemos tomado medidas razonables para proteger la información personal que nos proporciona, tenga en cuenta que, a pesar de nuestros esfuerzos, ninguna medida de seguridad es perfecta o impenetrable, y ningún método de transmisión de datos puede garantizarse contra cualquier intercepción u otro tipo de uso indebido.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-secondary mb-2">6. Contacto</h2>
            <p>
              Si tiene preguntas o comentarios sobre esta Política de Privacidad, contáctenos en:
              <br />
              IztapaMarket
              <br />
              contacto@iztapamarket.com
              <br />
              525647547221
            </p>
          </section>
          <p className="text-xs text-muted-foreground text-center pt-4">
            Este es un documento de ejemplo. Asegúrese de adaptarlo a sus necesidades específicas y consultar con un profesional legal si es necesario.
          </p>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default PrivacyPolicyPage;
  