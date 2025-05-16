
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { MessageSquare, Globe, Heart, Share2 } from 'lucide-react';

const BusinessContactCard = ({ business }) => {
  return (
    <Card className="bg-gradient-to-br from-muted/30 to-muted/60 p-6 rounded-xl shadow-lg border border-border/30">
      <CardHeader className="p-0 mb-4">
        <CardTitle className="text-xl text-primary font-semibold">Contacto Rápido</CardTitle>
      </CardHeader>
      <CardContent className="p-0 space-y-4">
        {business.whatsapp && (
          <Button asChild size="lg" className="w-full bg-green-500 hover:bg-green-600 text-white font-bold shadow-md transition-all duration-300 ease-in-out transform hover:scale-105">
            <a href={`https://wa.me/${business.whatsapp.replace(/\D/g, '')}?text=Hola,%20vi%20tu%20negocio%20${encodeURIComponent(business.name)}%20en%20IztapaMarket%20y%20quisiera%20más%20información.`} target="_blank" rel="noopener noreferrer">
              <MessageSquare className="mr-2 h-5 w-5" /> Chatear por WhatsApp
            </a>
          </Button>
        )}
        {business.website && (
          <Button asChild variant="outline" size="lg" className="w-full border-blue-500 text-blue-600 hover:bg-blue-500/10 hover:text-blue-700 transform hover:scale-105 transition-all duration-300">
            <a href={business.website.startsWith('http') ? business.website : `https://${business.website}`} target="_blank" rel="noopener noreferrer">
              <Globe className="mr-2 h-5 w-5" /> Visitar Sitio Web
            </a>
          </Button>
        )}
        <div className="flex justify-around pt-2">
          <Button variant="ghost" size="sm" className="text-foreground/70 hover:text-primary">
            <Heart className="mr-2 h-4 w-4" /> Favorito
          </Button>
          <Button variant="ghost" size="sm" className="text-foreground/70 hover:text-primary">
            <Share2 className="mr-2 h-4 w-4" /> Compartir
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default BusinessContactCard;
