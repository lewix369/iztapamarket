
import React from 'react';
import { Link } from 'react-router-dom';
import { AlertTriangle } from 'lucide-react';
import { Button } from '@/components/ui/button.jsx';

const BusinessNotFound = ({ error }) => {
  return (
    <div className="container mx-auto px-4 py-16 flex flex-col items-center justify-center text-center min-h-[60vh]">
      <AlertTriangle className="h-20 w-20 text-destructive mb-6" />
      <h1 className="text-4xl font-bold text-destructive mb-4">
        {error ? "Error al Cargar" : "Negocio no Encontrado"}
      </h1>
      <p className="text-lg text-muted-foreground mb-8 max-w-md">
        {error 
          ? `Lo sentimos, ocurrió un problema al intentar cargar los detalles del negocio. (${error})`
          : "El negocio que estás buscando no existe o ha sido eliminado. Por favor, verifica el enlace o intenta buscar de nuevo."}
      </p>
      <div className="flex space-x-4">
        <Button asChild>
          <Link to="/">Ir a la Página Principal</Link>
        </Button>
        <Button variant="outline" asChild>
          <Link to="/categorias">Explorar Categorías</Link>
        </Button>
      </div>
    </div>
  );
};

export default BusinessNotFound;
