
import React from 'react';
import { Helmet } from 'react-helmet-async';

const SeoManager = ({ title, description, canonicalUrl, children }) => {
  const siteName = "IztapaMarket";
  const defaultTitle = `Directorio de Negocios en Iztapalapa | ${siteName}`;
  const fullTitle = title ? `${title} | ${siteName}` : defaultTitle;

  return (
    <>
      <Helmet>
        <title>{fullTitle}</title>
        {description && <meta name="description" content={description.substring(0, 160)} />}
        {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}
      </Helmet>
      {children}
    </>
  );
};

export default SeoManager;
