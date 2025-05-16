
import React from 'react';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select.jsx";
// import { Slider } from "@/components/ui/slider.jsx"; // Comentado ya que no se usa
import { ListFilter, Search, MapPin } from 'lucide-react';

const FilterSidebar = ({ 
  categoryName, 
  searchTerm, 
  setSearchTerm, 
  sortOrder, 
  setSortOrder, 
  // distanceFilter, // Comentado ya que no se usa
  // setDistanceFilter // Comentado ya que no se usa
}) => {
  return (
    <aside className="w-full space-y-6 p-4 sm:p-6 bg-muted/50 rounded-xl shadow">
      <div>
        <h3 className="text-lg font-semibold mb-3 text-secondary flex items-center">
          <ListFilter className="mr-2 h-5 w-5" />
          Filtrar Resultados
        </h3>
      </div>
      
      <div>
        <label htmlFor="search-filter" className="block text-sm font-medium text-gray-700 mb-1">Buscar en {categoryName}</label>
        <div className="relative">
          <Input
            type="text"
            id="search-filter"
            placeholder="Nombre del negocio..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10 w-full"
          />
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
        </div>
      </div>

      <div>
        <label htmlFor="sort-filter" className="block text-sm font-medium text-gray-700 mb-1">Ordenar por</label>
        <Select value={sortOrder} onValueChange={setSortOrder}>
          <SelectTrigger id="sort-filter" className="w-full">
            <SelectValue placeholder="Seleccionar orden" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="name-asc">Nombre (A-Z)</SelectItem>
            <SelectItem value="name-desc">Nombre (Z-A)</SelectItem>
          </SelectContent>
        </Select>
      </div>
      
      {/* Sección de filtro por distancia eliminada temporalmente
      <div>
        <label htmlFor="distance-filter" className="block text-sm font-medium text-gray-700 mb-2">
          Distancia (km) <MapPin className="inline ml-1 h-4 w-4" />
        </label>
        <div className="flex items-center space-x-2">
          <Slider
            id="distance-filter"
            min={1}
            max={20}
            step={1}
            value={[distanceFilter]}
            onValueChange={(newValue) => setDistanceFilter(newValue[0])}
            className="w-full"
            disabled={true} 
          />
          <span className="text-sm text-gray-600 w-8 text-right flex-shrink-0">{distanceFilter}km</span>
        </div>
        <p className="text-xs text-gray-500 mt-1">Filtrar por distancia (próximamente).</p>
      </div>
      */}
    </aside>
  );
};

export default FilterSidebar;
