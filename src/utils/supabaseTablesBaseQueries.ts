import { supabase } from "../initSupabase";
import { definitions } from "../types/supabase";

export const BarCode = supabase.from<definitions['BarCode']>('BarCode')

