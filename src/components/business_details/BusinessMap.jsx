
import React from 'react';

const BusinessMap = ({ mapEmbedUrl, businessName }) => {
  if (!mapEmbedUrl) {
    return (
        <div className="rounded-lg overflow-hidden shadow p-4 bg-muted/30 text-center text-muted-foreground">
            <p>Mapa no disponible para este negocio.</p>
        </div>
    );
  }

  return (
    <div className="rounded-xl overflow-hidden shadow-lg aspect-video border border-border/30">
      <iframe
        src={mapEmbedUrl}
        width="100%"
        height="100%" 
        style={{ border:0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title={`Mapa de ubicación de ${businessName}`}>
      </iframe>
    </div>
  );
};

export default BusinessMap;
