"use server";
// ============================================
// 2. Fonctions Chat (lib/chat.ts)
// ============================================

// id,
// timestamp,
// sender_id,
// sender_username,
// sender_name,
// sender_avatar_url,
// content    
import { supabase, Message } from './supabase'

// Envoyer un message
export const sendMessage = async (content: string, userId: string, username: string) => {
  const { data, error } = await supabase
    .from('messages')
      .insert([{
        timestamp: new Date(),
        sender_id: userId,
        sender_username: username,
        sender_name: username,
        sender_avatar_url: 'https://i.pravatar.cc/150?img=2',
        content: content
    }])
    .select()
    .single()
  
  return { data, error }
}

// Récupérer les messages (les 100 derniers)
export const getMessages = async (limit = 100) => {
  const { data, error } = await supabase
    .from('messages')
    .select('*')
    .order('timestamp', { ascending: true })
    .limit(limit)
  
  return { data, error }
}

// Écouter les nouveaux messages en temps réel
export const subscribeToMessages = async (onNewMessage: (message: Message) => void) => {
  const channel = supabase
    .channel('public:messages')
    .on(
      'postgres_changes',
      {
        event: 'INSERT',
        schema: 'public',
        table: 'messages'
      },
      (payload) => {
        onNewMessage(payload.new as Message)
      }
    )
    .subscribe()
  
  return channel
}

// Se désabonner
export const unsubscribeFromMessages = async (channel: any) => {
  supabase.removeChannel(channel)
}