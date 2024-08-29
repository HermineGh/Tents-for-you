import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://iotgrmovbeojcbttdyiw.supabase.co";
export const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImlvdGdybW92YmVvamNidHRkeWl3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjIzNTM5NTksImV4cCI6MjAzNzkyOTk1OX0.2BKlsy7LWeOk0-XqGXuOfrp0EwXt5-zGM6kXNQ43qSk";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
