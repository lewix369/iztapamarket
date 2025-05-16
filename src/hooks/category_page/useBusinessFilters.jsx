
import { useMemo } from 'react';

export const useBusinessFilters = (businesses, searchTerm, sortOrder) => {
  const filteredAndSortedBusinesses = useMemo(() => {
    let result = [...businesses];

    if (searchTerm) {
      result = result.filter(business =>
        business.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        (business.description && business.description.toLowerCase().includes(searchTerm.toLowerCase()))
      );
    }

    // Distance filtering logic would go here if active

    switch (sortOrder) {
      case 'name-asc':
        result.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case 'name-desc':
        result.sort((a, b) => b.name.localeCompare(a.name));
        break;
      default:
        break;
    }
    return result;
  }, [businesses, searchTerm, sortOrder]);

  return filteredAndSortedBusinesses;
};
