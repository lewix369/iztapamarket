
import React from 'react';
import { Label } from '@/components/ui/label.jsx';
import { Checkbox } from '@/components/ui/checkbox.jsx';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select.jsx';
import { ShieldCheck } from 'lucide-react';

const AdvancedFields = ({ formData, errors, handleChange }) => {
  return (
    <div className="space-y-6 p-6 bg-gradient-to-br from-blue-500/5 via-transparent to-indigo-500/5 rounded-lg border border-blue-500/20 shadow-sm">
      <h3 className="text-xl font-semibold text-blue-600 flex items-center">
        <ShieldCheck className="mr-2 h-6 w-6" /> Opciones de Administrador
      </h3>
      <div className="flex items-center space-x-3">
        <Checkbox
          id="isFeatured"
          name="isFeatured"
          checked={formData.isFeatured}
          onCheckedChange={(checked) => handleChange({ target: { name: 'isFeatured', value: checked, type: 'checkbox' } })}
        />
        <Label htmlFor="isFeatured" className="text-base font-medium text-secondary">
          ¿Marcar como Negocio Destacado?
        </Label>
      </div>

      <div>
        <Label htmlFor="planType" className="text-base font-medium text-secondary">Tipo de Plan</Label>
        <Select
          name="planType"
          value={formData.planType}
          onValueChange={(value) => handleChange({ target: { name: 'planType', value } })}
        >
          <SelectTrigger className={`w-full mt-1 text-base ${errors.planType ? 'border-red-500' : ''}`}>
            <SelectValue placeholder="Selecciona un tipo de plan" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="basic" className="text-base">Básico (Gratis)</SelectItem>
            <SelectItem value="featured" className="text-base">Destacado</SelectItem>
            <SelectItem value="premium" className="text-base">Premium</SelectItem>
          </SelectContent>
        </Select>
        {errors.planType && <p className="text-red-500 text-sm mt-1">{errors.planType}</p>}
      </div>
       <p className="text-sm text-blue-700/80">
        Estas opciones solo son visibles y aplicables en modo administrador. Los usuarios normales se registrarán con el plan básico por defecto.
      </p>
    </div>
  );
};

export default AdvancedFields;
