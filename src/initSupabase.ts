import AsyncStorage from "@react-native-async-storage/async-storage";
import { createClient } from "@supabase/supabase-js";

// Better put your these secret keys in .env file
const SUPABASE_URL = 'https://exnoeoqtqopnlgzlnoep.supabase.co'
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImV4bm9lb3F0cW9wbmxnemxub2VwIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjU3OTcyNjIsImV4cCI6MTk4MTM3MzI2Mn0.4GE51V9HjlFu2v6XE-DSqxkaVSIjcd5rOz-Jg8fZEmM'
export const supabase = createClient(SUPABASE_URL, SUPABASE_KEY, {
  localStorage: AsyncStorage as any,
  detectSessionInUrl: false // Prevents Supabase from evaluating window.location.href, breaking mobile
});
