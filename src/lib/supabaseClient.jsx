
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://wczyvsoghxqbazrvsppc.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Indjenl2c29naHhxYmF6cnZzcHBjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDY4NTYzODIsImV4cCI6MjA2MjQzMjM4Mn0.bbye4tsDuM9H2NQBTvZXld8nJaaasPDu1C37EZrOBUI';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
