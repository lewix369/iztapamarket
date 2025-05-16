
import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X, Home, List, DollarSign, MessageCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { name: 'Inicio', path: '/', icon: <Home className="mr-2 h-5 w-5" />, ariaLabel: "Ir a la página de inicio" },
    { name: 'Categorías', path: '/categorias', icon: <List className="mr-2 h-5 w-5" />, ariaLabel: "Ver categorías de negocios" },
    { name: 'Planes', path: '/planes', icon: <DollarSign className="mr-2 h-5 w-5" />, ariaLabel: "Consultar planes de publicidad" },
    { name: 'Contacto', path: '/contacto', icon: <MessageCircle className="mr-2 h-5 w-5" />, ariaLabel: "Contactar con IztapaMarket" },
  ];

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  const mobileMenuVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
    exit: { opacity: 0, y: -20, transition: { duration: 0.2 } },
  };

  const originalLogoUrl = "https://storage.googleapis.com/hostinger-horizons-assets-prod/726a303c-0921-4d09-936a-1d5c7a669090/2d6f075a47aa9b26c9c48f243da11480.png";


  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-lg shadow-md">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <div className="flex-1 md:flex-none">
          <Link to="/" className="flex items-center justify-center md:justify-start" aria-label="Página de inicio de IztapaMarket">
            <img  src={originalLogoUrl} alt="IztapaMarket Logo - Directorio de Negocios de Iztapalapa" className="h-10 sm:h-11 md:h-12" />
          </Link>
        </div>
        
        <nav className="hidden md:flex flex-1 justify-center items-center space-x-2 lg:space-x-4" aria-label="Navegación principal">
          {navItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              aria-label={item.ariaLabel}
              className={({ isActive }) =>
                `px-3 py-2 rounded-md text-base lg:text-lg font-semibold transition-all duration-300 ease-in-out flex items-center
                 ${isActive 
                    ? 'bg-primary/10 text-primary scale-105 shadow-sm' 
                    : 'text-secondary hover:bg-primary/5 hover:text-primary/90'
                  }`
              }
            >
              {item.icon} {item.name}
            </NavLink>
          ))}
        </nav>

        <div className="flex-1 md:flex-none flex justify-end">
          <Button variant="ghost" size="icon" onClick={toggleMobileMenu} className="text-secondary hover:text-primary md:hidden" aria-label={isMobileMenuOpen ? "Cerrar menú móvil" : "Abrir menú móvil"} aria-expanded={isMobileMenuOpen}>
            {isMobileMenuOpen ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
          </Button>
        </div>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            variants={mobileMenuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="md:hidden bg-background shadow-lg absolute w-full border-t border-border"
            role="dialog"
            aria-modal="true"
          >
            <nav className="flex flex-col items-start space-y-1 p-4" aria-label="Navegación móvil">
              {navItems.map((item) => (
                <NavLink
                  key={item.name}
                  to={item.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  aria-label={item.ariaLabel}
                  className={({ isActive }) =>
                    `w-full px-4 py-3 rounded-md text-lg font-semibold transition-colors flex items-center
                     ${isActive ? 'bg-primary/10 text-primary' : 'text-secondary hover:bg-muted'}`
                  }
                >
                  {item.icon} {item.name}
                </NavLink>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
