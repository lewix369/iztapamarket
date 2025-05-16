
import React from 'react';
import { Input } from '@/components/ui/input.jsx';
import { Label } from '@/components/ui/label.jsx';
import { Textarea } from '@/components/ui/textarea.jsx';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select.jsx';

const RegistrationFormFields = ({ formData, errors, categories, handleChange, handleCategoryChange }) => {
  return (
    <>
      <div>
        <Label htmlFor="name" className="text-base font-semibold text-secondary">Nombre del Negocio</Label>
        <Input id="name" name="name" value={formData.name} onChange={handleChange} className={`mt-1 text-base ${errors.name ? 'border-red-500' : ''}`} />
        {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
      </div>

      <div>
        <Label htmlFor="whatsapp" className="text-base font-semibold text-secondary">WhatsApp (con código de país, ej: +5255...)</Label>
        <Input id="whatsapp" name="whatsapp" type="tel" value={formData.whatsapp} onChange={handleChange} className={`mt-1 text-base ${errors.whatsapp ? 'border-red-500' : ''}`} />
        {errors.whatsapp && <p className="text-red-500 text-sm mt-1">{errors.whatsapp}</p>}
      </div>

      <div>
        <Label htmlFor="address" className="text-base font-semibold text-secondary">Dirección (Colonia y Calle)</Label>
        <Input id="address" name="address" value={formData.address} onChange={handleChange} className={`mt-1 text-base ${errors.address ? 'border-red-500' : ''}`} />
        {errors.address && <p className="text-red-500 text-sm mt-1">{errors.address}</p>}
      </div>

      <div>
        <Label htmlFor="category" className="text-base font-semibold text-secondary">Categoría</Label>
        <Select onValueChange={handleCategoryChange} value={formData.category}>
          <SelectTrigger className={`w-full mt-1 text-base ${errors.category ? 'border-red-500' : ''}`}>
            <SelectValue placeholder="Selecciona una categoría" />
          </SelectTrigger>
          <SelectContent>
            {categories.map(cat => (
              <SelectItem key={cat.slug} value={cat.name} className="text-base">{cat.name}</SelectItem>
            ))}
          </SelectContent>
        </Select>
        {errors.category && <p className="text-red-500 text-sm mt-1">{errors.category}</p>}
      </div>

      <div>
        <Label htmlFor="hours" className="text-base font-semibold text-secondary">Horario de Atención</Label>
        <Input id="hours" name="hours" value={formData.hours} onChange={handleChange} placeholder="Ej: L-V: 9am - 6pm, S: 10am - 2pm" className={`mt-1 text-base ${errors.hours ? 'border-red-500' : ''}`} />
        {errors.hours && <p className="text-red-500 text-sm mt-1">{errors.hours}</p>}
      </div>

      <div>
        <Label htmlFor="description" className="text-base font-semibold text-secondary">Breve Descripción (máx. 200 caracteres)</Label>
        <Textarea id="description" name="description" value={formData.description} onChange={handleChange} rows={3} maxLength={200} className={`mt-1 text-base ${errors.description ? 'border-red-500' : ''}`} />
        <p className="text-sm text-muted-foreground mt-1 text-right">{formData.description.length}/200</p>
        {errors.description && <p className="text-red-500 text-sm mt-1">{errors.description}</p>}
      </div>
    </>
  );
};

export default RegistrationFormFields;
  