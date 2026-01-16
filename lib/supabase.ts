
"use server";

import { createBrowserClient, createServerClient } from "@supabase/ssr";
import { cookies } from "next/headers";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_DEFAULT_KEY!;

export const createClient = async () =>
  createBrowserClient(
    supabaseUrl,
    supabaseKey,
  );

// Server-side client for App Router server components and server actions
export const createServerComponentClient = async () => {
  const cookieStore = await cookies();
  return createServerClient(
    supabaseUrl,
    supabaseKey,
    {
      cookies: {
        getAll() {
          return cookieStore.getAll();
        },
        setAll(cookiesToSet) {
          cookiesToSet.forEach(({ name, value, options }) => {
            cookieStore.set(name, value, options);
          });
        },
      },
    }
  );
};
export interface Message {
  id: string
  sender_id: string    
  sender_username: string
  sender_name: string
  sender_avatar_url: string
  content: string
  timestamp: string 
}
