
import React from 'react';
import { ShieldAlert } from 'lucide-react';

const AdminAccessMessage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-200px)] text-center px-4">
      <ShieldAlert className="h-16 w-16 text-destructive mb-4" />
      <h1 className="text-2xl font-semibold text-secondary mb-2">Acceso Restringido</h1>
      <p className="text-muted-foreground">Esta sección es solo para administradores.</p>
    </div>
  );
};

export default AdminAccessMessage;
  