
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter, DialogClose } from "@/components/ui/dialog";
import { MapPin, Clock, ExternalLink, ShoppingCart, MessageSquare, Youtube, Image as ImageIcon } from 'lucide-react';
import { motion } from 'framer-motion';
import { categories as allCategories, defaultCategoryIcon } from '@/data/categories.jsx';

const BusinessCard = ({ business, className = '' }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  if (!business || !business.id) {
    console.warn("BusinessCard recibió datos de negocio incompletos o inválidos:", business);
    return null; 
  }

  const { 
    id, 
    name, 
    description, 
    category, 
    address, 
    hours, 
    images, 
    logoUrl, 
    whatsapp, 
    menuItems,
    website,
    videoEmbedUrl,
    categoryDisplay 
  } = business;
  
  const categoryDetails = allCategories.find(cat => cat.name === categoryDisplay || cat.dbName === categoryDisplay || cat.slug === categoryDisplay || cat.name === category || cat.dbName === category);
  const CategoryIconComponent = categoryDetails ? categoryDetails.icon : defaultCategoryIcon;

  const finalImageUrl = images?.[0] || logoUrl || `https://source.unsplash.com/random/600x400/?business,${encodeURIComponent(categoryDisplay || 'abstract')}&cachebust=${id}`;


  const isValidYoutubeLink = (url) => {
    if (!url) return false;
    try {
      const parsedUrl = new URL(url);
      return (parsedUrl.hostname === 'www.youtube.com' && parsedUrl.pathname === '/watch' && parsedUrl.searchParams.has('v')) || 
             (parsedUrl.hostname === 'youtu.be' && parsedUrl.pathname !== '');
    } catch (e) {
      return false;
    }
  };
  const showVideoLink = isValidYoutubeLink(videoEmbedUrl);

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className={`h-full ${className}`}
      >
        <Card className="h-full flex flex-col overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-xl border border-border/20 bg-card text-card-foreground">
          <div className="relative aspect-[16/10] overflow-hidden">
            <Link to={`/negocio/${id}`} aria-label={`Ver detalles de ${name}`}>
              <img  
                class="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                alt={`Imagen de ${name}`} src="https://images.unsplash.com/photo-1556491251-781a951fbc79" />
            </Link>
            {categoryDisplay && CategoryIconComponent && (
              <div className="absolute top-3 right-3 bg-primary/80 backdrop-blur-sm text-primary-foreground px-3 py-1.5 rounded-full text-xs font-semibold flex items-center shadow-md">
                <CategoryIconComponent className="mr-1.5 h-4 w-4" /> {categoryDisplay}
              </div>
            )}
          </div>

          <CardContent className="p-5 flex flex-col flex-grow">
            <h3 className="text-xl lg:text-2xl font-bold text-primary mb-2 truncate" title={name}>
              <Link to={`/negocio/${id}`} className="hover:underline">{name}</Link>
            </h3>
            
            {address && (
              <div className="flex items-center text-sm text-muted-foreground mb-1">
                <MapPin className="h-4 w-4 mr-2 text-primary/70 flex-shrink-0" />
                <span className="truncate" title={address}>{address}</span>
              </div>
            )}
            {hours && (
              <div className="flex items-center text-sm text-muted-foreground mb-3">
                <Clock className="h-4 w-4 mr-2 text-primary/70 flex-shrink-0" />
                <span className="truncate" title={hours}>{hours}</span>
              </div>
            )}

            <p className="text-sm text-foreground/80 mb-4 line-clamp-3 flex-grow">
              {description || 'Este negocio aún no ha agregado una descripción.'}
            </p>

            <div className="mt-auto space-y-2.5">
              <Button asChild variant="default" className="w-full bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 text-primary-foreground font-semibold shadow-md transition-all duration-300 ease-in-out transform hover:scale-[1.02]">
                <Link to={`/negocio/${id}`} aria-label={`Conocer más sobre ${name}`}>
                  Conocer Más <ExternalLink className="ml-2 h-4 w-4" />
                </Link>
              </Button>

              {whatsapp && (
                <Button asChild variant="outline" className="w-full border-green-500 text-green-600 hover:bg-green-500/10 hover:text-green-700 font-semibold shadow-sm transition-all duration-300 ease-in-out transform hover:scale-[1.02]">
                  <a href={`https://wa.me/${whatsapp.replace(/\D/g, '')}?text=Hola,%20vi%20tu%20negocio%20${encodeURIComponent(name)}%20en%20IztapaMarket%20y%20quisiera%20más%20información.`} target="_blank" rel="noopener noreferrer" aria-label={`Pedir por WhatsApp a ${name}`}>
                    <MessageSquare className="mr-2 h-4 w-4" /> Pedir por WhatsApp
                  </a>
                </Button>
              )}

              {showVideoLink && (
                 <Button asChild variant="outline" className="w-full border-red-500 text-red-600 hover:bg-red-500/10 hover:text-red-700 font-semibold shadow-sm transition-all duration-300 ease-in-out transform hover:scale-[1.02]">
                  <a href={videoEmbedUrl} target="_blank" rel="noopener noreferrer" aria-label={`Ver video de ${name} en YouTube`}>
                    <Youtube className="mr-2 h-4 w-4" /> Ver Video
                  </a>
                </Button>
              )}

              {menuItems && menuItems.length > 0 && (
                <Button variant="outline" className="w-full border-orange-500 text-orange-600 hover:bg-orange-500/10 hover:text-orange-700 font-semibold shadow-sm transition-all duration-300 ease-in-out transform hover:scale-[1.02]" onClick={() => setIsMenuOpen(true)}>
                  <ShoppingCart className="mr-2 h-4 w-4" /> Ver Menú
                </Button>
              )}
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {menuItems && menuItems.length > 0 && (
        <Dialog open={isMenuOpen} onOpenChange={setIsMenuOpen}>
          <DialogContent className="sm:max-w-[425px] bg-background text-foreground rounded-lg shadow-xl border-border">
            <DialogHeader>
              <DialogTitle className="text-2xl font-bold text-primary">Menú de {name}</DialogTitle>
              <DialogDescription>
                Descubre los deliciosos platillos que {name} tiene para ofrecer.
              </DialogDescription>
            </DialogHeader>
            <div className="max-h-[60vh] overflow-y-auto py-4 space-y-3 pr-2">
              {menuItems.map((item, index) => (
                <div key={index} className="p-3 bg-muted/50 rounded-md border border-border/50 flex justify-between items-center">
                  <div>
                    <h4 className="font-semibold text-foreground">{item.name || 'Artículo sin nombre'}</h4>
                    {item.description && <p className="text-xs text-muted-foreground">{item.description}</p>}
                  </div>
                  <p className="font-semibold text-primary whitespace-nowrap">
                    {typeof item.price === 'number' ? `$${item.price.toFixed(2)}` : (item.price || 'N/A')}
                  </p>
                </div>
              ))}
            </div>
            <DialogFooter>
              <DialogClose asChild>
                <Button type="button" variant="outline">Cerrar</Button>
              </DialogClose>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      )}
    </>
  );
};

export default BusinessCard;
