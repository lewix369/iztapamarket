
import React from 'react';
import { Tag } from 'lucide-react';

const CategoryHeader = ({ category, businessCount }) => {
  if (!category) return null;
  const IconComponent = category.icon || Tag;
  return (
    <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-6 bg-gradient-to-r from-primary to-orange-500 text-white rounded-xl shadow-lg">
      <div className="flex items-center">
        <IconComponent className="h-12 w-12 mr-4 text-white" />
        <div>
          <p className="text-sm font-medium opacity-80">Estás viendo</p>
          <h1 className="text-3xl md:text-4xl font-bold">{category.name}</h1>
        </div>
      </div>
      <p className="text-lg opacity-90 text-center sm:text-right">
        {businessCount} {businessCount === 1 ? 'negocio encontrado' : 'negocios encontrados'}
      </p>
    </div>
  );
};

export default CategoryHeader;
