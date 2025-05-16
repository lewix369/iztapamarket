
import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, MessageCircle } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const nuevoLogoUrl = "https://storage.googleapis.com/hostinger-horizons-assets-prod/726a303c-0921-4d09-936a-1d5c7a669090/718028717e3d089443304f1c7d05a94c.png";
  const officialWhatsAppNumber = "525647547221";
  const contactMessage = "Hola, tengo una pregunta sobre IztapaMarket.";

  return (
    <footer className="bg-secondary text-secondary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          <div className="flex flex-col items-center md:items-start">
            <Link to="/" aria-label="Ir a la página de inicio de IztapaMarket" className="mb-4">
              <img 
                src={nuevoLogoUrl} 
                alt="IztapaMarket Avatar - Directorio de negocios locales en Iztapalapa" 
                className="w-32 h-auto md:w-40 object-contain" 
              />
            </Link>
            <p className="text-sm text-center md:text-left text-gray-300">
              Conectando negocios y clientes en Iztapalapa. Encuentra y anuncia servicios locales de forma fácil y efectiva.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Navegación</h4>
            <ul className="space-y-2">
              <li><Link to="/categorias" className="hover:text-primary transition-colors text-gray-300" aria-label="Explorar categorías de negocios">Categorías de Negocios</Link></li>
              <li><Link to="/planes" className="hover:text-primary transition-colors text-gray-300" aria-label="Ver planes para anunciar negocios">Anuncia tu Negocio</Link></li>
              <li><Link to="/contacto" className="hover:text-primary transition-colors text-gray-300" aria-label="Contactar con IztapaMarket">Contacto</Link></li>
              <li><Link to="/terminos" className="hover:text-primary transition-colors text-gray-300" aria-label="Leer términos y condiciones">Términos y Condiciones</Link></li>
              <li><Link to="/politica-privacidad" className="hover:text-primary transition-colors text-gray-300" aria-label="Leer política de privacidad">Política de Privacidad</Link></li>
              <li><Link to="/registrarse?admin=iztapasecreto2025" className="hover:text-primary transition-colors text-gray-300 block mt-2 pt-2 border-t border-gray-700/50" aria-label="Registrar un negocio (acceso de administrador)">Registrar Negocio (Admin)</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Síguenos</h4>
            <div className="flex space-x-4 mb-6">
              <a href="https://facebook.com/iztapamarket" target="_blank" rel="noopener noreferrer" aria-label="Facebook de IztapaMarket" className="text-gray-300 hover:text-primary transition-colors"><Facebook size={26} /></a>
              <a href="https://instagram.com/iztapamarket" target="_blank" rel="noopener noreferrer" aria-label="Instagram de IztapaMarket" className="text-gray-300 hover:text-primary transition-colors"><Instagram size={26} /></a>
            </div>
             <h4 className="text-lg font-semibold text-white mt-6 mb-3">¿Dudas?</h4>
             <a 
                href={`https://wa.me/${officialWhatsAppNumber}?text=${encodeURIComponent(contactMessage)}`} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md transition-colors text-sm font-medium"
                data-ga-event="click"
                data-ga-category="whatsapp"
                data-ga-label="click_whatsapp_footer"
                aria-label="Chatear con IztapaMarket por WhatsApp para resolver dudas"
              >
                <MessageCircle size={18} className="mr-2"/> Chatea con nosotros
            </a>
          </div>
        </div>
        <div className="pt-8 border-t border-gray-700 text-center text-sm text-gray-400">
          <p>&copy; {currentYear} IztapaMarket. Todos los derechos reservados.</p>
          <p>Un directorio digital impulsando el comercio local en Iztapalapa, Ciudad de México.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
