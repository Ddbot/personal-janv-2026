
// ============================================
// 2. Fonctions Chat (lib/chat.ts)
// ============================================
import { supabase, Message } from './supabase'

// Envoyer un message
export const sendMessage = async (content: string, userId: string, username: string) => {
  const { data, error } = await supabase
    .from('messages')
    .insert([{
      user_id: userId,
      username: username,
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
    .order('created_at', { ascending: true })
    .limit(limit)
  
  return { data, error }
}

// Écouter les nouveaux messages en temps réel
export const subscribeToMessages = (onNewMessage: (message: Message) => void) => {
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
export const unsubscribeFromMessages = (channel: any) => {
  supabase.removeChannel(channel)
}