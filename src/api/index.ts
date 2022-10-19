import { supabase } from "../initSupabase";
import { definitions } from "../types/supabase";
import { PostgrestResponse } from "@supabase/supabase-js";

export const getTest = async () => {
	const response = await supabase
		.from<definitions["test"]>("test")
		.select("*")

	return response
};