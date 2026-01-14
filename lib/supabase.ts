
import { createBrowserClient } from "@supabase/ssr";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_DEFAULT_KEY;

export const createClient = () =>
  createBrowserClient(
    supabaseUrl!,
    supabaseKey!,
  );

const supabase = createClient();

export interface Message {
  id: string
  sender_id: string    
  sender_username: string
  sender_name: string
  sender_avatar_url: string
  content: string
  timestamp: string 
}

export default supabase;