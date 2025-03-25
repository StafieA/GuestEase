import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://bnnoqqutapejleoccnmp.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJubm9xcXV0YXBlamxlb2Njbm1wIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDI3MjgxNDUsImV4cCI6MjA1ODMwNDE0NX0.sFhN_YzsLn8qRVEw8oWRFV0PErxLPq4Rrgb3rrvpNBw";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
