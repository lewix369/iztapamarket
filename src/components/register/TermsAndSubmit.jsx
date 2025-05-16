
import React from 'react';
import { Checkbox } from '@/components/ui/checkbox.jsx';
import { Label } from '@/components/ui/label.jsx';

const TermsAndSubmit = ({ formData, errors, handleChange }) => {
  return (
    <>
      <div className="flex items-center space-x-2">
        <Checkbox id="termsAccepted" name="termsAccepted" checked={formData.termsAccepted} onCheckedChange={(checked) => handleChange({ target: { name: 'termsAccepted', checked, type: 'checkbox' }})} className={`${errors.termsAccepted ? 'border-red-500' : ''}`} />
        <Label htmlFor="termsAccepted" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
          Acepto los <a href="/terminos" target="_blank" className="text-primary hover:underline">términos y condiciones</a>.
        </Label>
      </div>
      {errors.termsAccepted && <p className="text-red-500 text-sm -mt-3">{errors.termsAccepted}</p>}
    </>
  );
};

export default TermsAndSubmit;
  