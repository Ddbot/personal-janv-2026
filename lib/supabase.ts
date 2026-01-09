import { createClient } from '@supabase/supabase-js'

// const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseUrl="https://degpdieymuqeeojhrdrr.supabase.co"
const supabaseAnonKey = "sb_publishable_xtLNS80lkS-dBJBs2eLzKg_WVIe-kWT"

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

export interface Message {
  id: string
  sender_id: string    
  sender_username: string
  sender_name: string
  sender_avatar_url: string
  content: string
  timestamp: string 
}