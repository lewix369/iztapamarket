
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { FileText, ArrowLeft } from 'lucide-react';
import { motion } from 'framer-motion';

const TermsPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-3xl mx-auto py-8 px-4"
    >
      <Card className="shadow-xl border-2 border-primary/10">
        <CardHeader className="bg-gradient-to-br from-primary/10 via-orange-500/5 to-white p-8">
          <div className="flex items-center mb-4">
            <Link to="/registrarse" className="mr-4">
              <Button variant="outline" size="icon" className="border-primary text-primary hover:bg-primary/10">
                <ArrowLeft className="h-5 w-5" />
              </Button>
            </Link>
            <FileText className="h-10 w-10 text-primary" />
            <CardTitle className="ml-3 text-3xl font-bold text-secondary">Términos y Condiciones</CardTitle>
          </div>
        </CardHeader>
        <CardContent className="p-6 md:p-8 space-y-6 text-foreground/80 leading-relaxed">
          <p>Bienvenido a IztapaMarket. Al registrar tu negocio en nuestra plataforma, aceptas los siguientes términos y condiciones:</p>
          
          <section>
            <h2 className="text-xl font-semibold text-secondary mb-2">1. Uso de la Plataforma</h2>
            <p>IztapaMarket es un directorio digital local con el objetivo de conectar negocios de Iztapalapa con la comunidad. Te comprometes a proporcionar información veraz y actualizada sobre tu negocio.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-secondary mb-2">2. Contenido del Usuario</h2>
            <p>Eres responsable del contenido que publicas (nombre, descripción, imágenes, etc.). No se permite contenido ilegal, ofensivo, o que infrinja derechos de terceros. Nos reservamos el derecho de remover contenido que no cumpla estas normas.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-secondary mb-2">3. Privacidad de Datos</h2>
            <p>La información de tu negocio será pública en el directorio. Los datos de contacto como WhatsApp serán visibles para facilitar la comunicación con los clientes. Para más detalles, consulta nuestro Aviso de Privacidad (próximamente).</p>
          </section>
          
          <section>
            <h2 className="text-xl font-semibold text-secondary mb-2">4. Registro y Veracidad</h2>
            <p>Al registrarte, confirmas que tienes la autoridad para representar al negocio listado. La información proporcionada debe ser precisa. IztapaMarket no se hace responsable por la información incorrecta proporcionada por los negocios.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-secondary mb-2">5. Modificaciones</h2>
            <p>Nos reservamos el derecho de modificar estos términos y condiciones en cualquier momento. Se notificarán los cambios importantes a través de la plataforma o por correo electrónico.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-secondary mb-2">6. Limitación de Responsabilidad</h2>
            <p>IztapaMarket actúa como un intermediario. No somos responsables por las transacciones, acuerdos o disputas entre los negocios y los usuarios. La calidad de los productos o servicios ofrecidos es responsabilidad exclusiva de cada negocio.</p>
          </section>

          <p className="font-semibold text-secondary">Fecha de última actualización: 9 de Mayo de 2025.</p>

          <div className="text-center mt-8">
            <Link to="/registrarse">
              <Button className="btn-primary">
                Volver al Registro
              </Button>
            </Link>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default TermsPage;
  