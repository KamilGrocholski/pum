import { supabase } from "../initSupabase"
// import { BarCode } from "../utils/supabaseTablesBaseQueries"
import { definitions } from "../types/supabase"

const myId = supabase.auth.session()?.user?.id

type NewBarCode = Pick<definitions['BarCode'], 
    | 'name'
    | 'details'
    | 'data'
>

export const addBarCode = async ({ name, details, data }: NewBarCode) => {
    if (!name || !data) throw new Error('All of the fields are required')
    const res = await supabase.from<definitions['BarCode']>('BarCode')
        .insert({
            name,
            details,
            data,
            creator_id: myId
        })

    return res
}

export const getAllBarCodes = async () => {
    const res = await supabase.from<definitions['BarCode']>('BarCode')
        .select('*')
        .eq('creator_id', myId)

    return res.data
}


export const getBarCodeById = async (id: number) => {
    const res = await supabase.from<definitions['BarCode']>('BarCode')
        .select('*')
        .eq('creator_id', myId)
        .eq('id', id)

    return res
}