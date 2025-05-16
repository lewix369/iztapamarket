
import React from 'react';
import BusinessCard from '@/components/BusinessCard.jsx';

const RelatedBusinessesSection = ({ relatedBusinesses, categoryDisplay }) => {
  if (!relatedBusinesses || relatedBusinesses.length === 0) {
    return null;
  }

  return (
    <section className="mt-12 md:mt-16">
      <h2 className="text-2xl md:text-3xl font-bold text-secondary mb-6 md:mb-8 text-center">
        Otros Negocios Similares en {categoryDisplay}
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {relatedBusinesses.map(relatedBiz => (
          <BusinessCard key={relatedBiz.id} business={relatedBiz} />
        ))}
      </div>
    </section>
  );
};

export default RelatedBusinessesSection;
