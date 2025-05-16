
import { useState } from 'react';

const useFormState = (initialState) => {
  const [formData, setFormData] = useState(initialState);
  const [errors, setErrors] = useState({});
  const [isAdmin, setIsAdmin] = useState(false); 

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({ ...prev, [name]: type === 'checkbox' ? checked : value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: null }));
    }
  };

  const handleCategoryChange = (value) => {
    setFormData(prev => ({ ...prev, category: value }));
    if (errors.category) {
      setErrors(prev => ({ ...prev, category: null }));
    }
  };

  const resetForm = () => {
    setFormData(initialState);
    setErrors({});
  };
  
  return {
    formData,
    setFormData,
    errors,
    setErrors,
    isAdmin, 
    setIsAdmin,
    handleChange,
    handleCategoryChange,
    resetForm
  };
};

export default useFormState;
