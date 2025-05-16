
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { MessageSquare, Phone, Heart, Share2 } from 'lucide-react';

const BusinessContactSidebar = ({ business }) => {
  const whatsappNumber = business.whatsapp || business.telefono;
  const whatsappLink = whatsappNumber ? `https://wa.me/${whatsappNumber.replace(/\D/g, '')}?text=Hola,%20vi%20tu%20negocio%20${encodeURIComponent(business.nombre)}%20en%20IztapaMarket%20y%20quisiera%20más%20información.` : null;
  
  const mapEmbedUrl = business.mapa_embed_url || 
    (business.direccion ? `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3762.497091495098!2d-99.071234!3d19.357890!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85ce000000000000%3A0xabcdef1234567890!2s${encodeURIComponent(business.direccion)}!5e0!3m2!1ses!2smx!4v1700000000000` : null);

  return (
    <div className="space-y-6">
      <Card className="bg-muted/50 p-6 rounded-lg shadow">
        <CardHeader className="p-0 mb-4">
          <CardTitle className="text-xl text-primary font-semibold">Contacto Rápido</CardTitle>
        </CardHeader>
        <CardContent className="p-0 space-y-4">
          {whatsappLink && (
            <Button asChild size="lg" className="w-full bg-[#25D366] hover:bg-[#1ebe5d] text-white font-bold shadow-md transition-colors duration-300 ease-in-out">
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer" aria-label={`Chatear por WhatsApp con ${business.nombre}`}>
                <MessageSquare className="mr-2 h-5 w-5" /> Chatear por WhatsApp
              </a>
            </Button>
          )}
           {business.telefono && !whatsappLink && (
            <Button asChild variant="outline" size="lg" className="w-full border-primary text-primary hover:bg-primary/10">
              <a href={`tel:${business.telefono}`} aria-label={`Llamar a ${business.nombre}`}>
                <Phone className="mr-2 h-5 w-5" /> Llamar Ahora
              </a>
            </Button>
          )}
          <div className="flex justify-around pt-2">
            <Button variant="ghost" size="sm" className="text-foreground/70 hover:text-primary" aria-label="Añadir a favoritos">
              <Heart className="mr-2 h-4 w-4" /> Favorito
            </Button>
            <Button variant="ghost" size="sm" className="text-foreground/70 hover:text-primary" aria-label="Compartir negocio">
              <Share2 className="mr-2 h-4 w-4" /> Compartir
            </Button>
          </div>
        </CardContent>
      </Card>
      
      {mapEmbedUrl && (
        <div className="rounded-lg overflow-hidden shadow">
          <iframe
            src={mapEmbedUrl}
            width="100%"
            height="250"
            style={{ border:0, borderRadius: '12px' }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title={`Mapa de ubicación de ${business.nombre}`}>
          </iframe>
        </div>
      )}
    </div>
  );
};

export default BusinessContactSidebar;
