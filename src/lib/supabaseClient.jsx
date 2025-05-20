import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  console.warn(
    "⚠️ Las variables de entorno de Supabase no están definidas. Verifica tu archivo .env y asegúrate de que VITE_SUPABASE_URL y VITE_SUPABASE_ANON_KEY estén presentes."
  );
  throw new Error("❌ Supabase no puede inicializarse sin las variables de entorno necesarias.");
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
