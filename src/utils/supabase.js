import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://yfmwrcohzgchhjzwqmyb.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlmbXdyY29oemdjaGhqendxbXliIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzQ2MTY5NjgsImV4cCI6MjA1MDE5Mjk2OH0.IHbAcoguu-7tnDiGj9Nec0S2u3j3Js-l8Why0sL4KrU";

export const supabase = createClient(supabaseUrl, supabaseKey);
