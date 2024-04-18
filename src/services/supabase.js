import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://pbkmwwadlnhazeasxaov.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBia213d2FkbG5oYXplYXN4YW92Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDQ5NTgzMjMsImV4cCI6MjAyMDUzNDMyM30.CGKE8OulCKDDy3YMnMmCOhVdqxrAtfB3JZBV2RrUhF0";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
