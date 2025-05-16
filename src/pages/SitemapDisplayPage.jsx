
import React from 'react';
import { motion } from 'framer-motion';
import { FileCode } from 'lucide-react';

const SitemapDisplayPage = () => {
  const sitemapContent = `
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://iztapamarket.com/</loc>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>https://iztapamarket.com/categorias</loc>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>https://iztapamarket.com/planes</loc>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://iztapamarket.com/contacto</loc>
    <changefreq>monthly</changefreq>
    <priority>0.5</priority>
  </url>
</urlset>
  `.trim();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-background py-8 px-4 md:px-6 lg:px-8"
    >
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center mb-6">
          <FileCode className="h-10 w-10 text-primary mr-3" />
          <h1 className="text-3xl md:text-4xl font-bold text-secondary">
            Mapa del Sitio (XML)
          </h1>
        </div>
        <p className="text-lg text-foreground/80 mb-8">
          Este archivo ayuda a los motores de búsqueda como Google a entender mejor la estructura de IztapaMarket y a rastrear nuestras páginas de manera más eficiente. El siguiente es el contenido de nuestro archivo <code>sitemap.xml</code>.
        </p>

        <div className="bg-muted/50 p-4 sm:p-6 rounded-lg shadow-md border border-border">
          <h2 className="text-xl font-semibold text-secondary mb-3">Contenido de <code>sitemap.xml</code>:</h2>
          <pre className="bg-gray-900 text-gray-100 p-4 rounded-md overflow-x-auto text-sm leading-relaxed custom-scrollbar">
            <code>
              {sitemapContent}
            </code>
          </pre>
        </div>
        
        <div className="mt-10 text-sm text-muted-foreground">
          <p>
            <strong>Nota:</strong> Este es una representación visual del contenido del archivo <code>sitemap.xml</code> que se encuentra en la raíz de nuestro dominio. Los motores de búsqueda acceden directamente al archivo XML, no a esta página.
          </p>
          <p className="mt-2">
            Si eres un desarrollador o un profesional SEO, puedes encontrar el archivo XML real en <a href="/sitemap.xml" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">https://iztapamarket.com/sitemap.xml</a>.
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default SitemapDisplayPage;
