import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

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