import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { supabase } from '@/lib/supabaseClient';
import BusinessList from '@/components/category_page/BusinessList';

const CategoryBusinessesPage = () => {
  const { categorySlug } = useParams();
  const [businesses, setBusinesses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBusinesses = async () => {
      const decodedSlug = decodeURIComponent(categorySlug || '');

      if (!decodedSlug) {
        setError('Slug de categoría inválido');
        setLoading(false);
        return;
      }

      try {
        setLoading(true);
        const { data, error } = await supabase
          .from('negocios')
          .select('*')
          .ilike('slug_categoria', decodedSlug)
          .order('created_at', { ascending: false });

        if (error) {
          throw new Error(error.message || 'Error desconocido al obtener negocios');
        }

        setBusinesses(data || []);
        if ((data || []).length === 0) {
          console.info(`ℹ️ No se encontraron negocios para: ${decodedSlug}`);
        }

      } catch (err) {
        console.error('❌ Error al obtener negocios:', err);
        setError(err.message || 'Ocurrió un error inesperado');
      } finally {
        setLoading(false);
      }
    };

    fetchBusinesses();
  }, [categorySlug]);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">
        Negocios en la categoría: {decodeURIComponent(categorySlug || '')}
      </h1>
      {loading && <p>Cargando negocios...</p>}
      {error && <p className="text-red-500">Error: {error}</p>}
      {!loading && businesses.length === 0 && (
        <p>No se encontraron negocios en esta categoría.</p>
      )}
      <BusinessList businesses={businesses} />
    </div>
  );
};

export default CategoryBusinessesPage;
