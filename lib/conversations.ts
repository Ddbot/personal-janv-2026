// lib/conversations.ts (Updated for your schema)
// import supabase from '@/lib/supabase';
import createServer from './serverClient';
import supabaseClient from './supabase';
import { redirect, RedirectType } from 'next/navigation'

const adminUID = process.env.NEXT_PUBLIC_ADMIN_UID;

export interface Conversation {
  id: string
  user_id: string
  title: string
  created_at: string
  updated_at: string
  metadata?: Record<string, unknown>
}

export interface Message {
  id: string
  timestamp: string
  sender_id: string
  sender_username: string
  sender_name: string
  sender_avatar_url: string
  content: string
  conversation_id: string
  sender_type: 'user' | 'assistant'
}

// Create a new conversation for the authenticated user
export async function createConversation(title?: string) {
  const supabase = await createServer()
  const { data: { user } } = await supabase.auth.getUser()
  
  if (!user) {
    throw new Error('User not authenticated')
  }

  const { data, error } = await supabase
    .from('conversations')
    .insert({
      user_id: user.id,
      title: user.id !== adminUID ? user.email : 'Andry'
    })
    .select()
    .single()

  if (error) throw error
  return data as Conversation
}

// Get all conversations for the authenticated user
export async function getUserConversations() {    
  const supabase = await createServer()
  console.log('Server client created:', supabase)
  
  const { data: { user } } = await supabase.auth.getUser()
  console.log('User data:', user)
  
  if (!user) {
    console.log('No user found, throwing error')
    throw new Error('User not authenticated')
  }

    // Sera seulement utile pour moi l'admin, les visiteurs n'ont qu'un interlocuteur = MOI
    if (user.id !== adminUID) {
        const { data, error } = await supabase
        .from('conversations')
        .select('*')
        .eq('user_id', user.id)
        .order('updated_at', { ascending: false });
        
        if (error) {
            console.log('Database error:', error)
            throw error
        }
        return data as Conversation[] | []
    } else {
        const { data, error } = await supabase
        .from('conversations')
        .select('*')
        // .eq('user_id', user.id)
        .order('updated_at', { ascending: false });
        
        if (error) {
            console.log('Database error with ADMIN UID:', error)
            throw error
        }
        return data as Conversation[] | []        
    }

}

// Get a specific conversation
export async function getConversation(conversationId: string) {
  const supabase = await createServer()
  const { data, error } = await supabase
    .from('conversations')
    .select('*')
    .eq('id', conversationId)
    .single()

  if (error) throw error
  return data as Conversation
}

// Add a message to a conversation
export async function addMessage(
  conversationId: string,
  senderType: 'user' | 'assistant',
  content: string,
  senderUsername: string,
  senderName: string,
  senderAvatarUrl: string
) {
  const supabase = await createServer()
  const { data: { user } } = await supabase.auth.getUser()
  
  if (!user) {
    throw new Error('User not authenticated')
  }

  const { data, error } = await supabase
    .from('messages')
    .insert({
      conversation_id: conversationId,
      sender_id: user.id,
      sender_type: senderType,
      sender_username: senderUsername,
      sender_name: senderName,
      sender_avatar_url: senderAvatarUrl,
      content
    })
    .select()
    .single()

  if (error) throw error
  return data as Message
}

// Simplified version for user messages (uses auth user data)
export async function addUserMessage(
  conversationId: string,
  content: string
) {
  const supabase = await createServer()
  const { data: { user } } = await supabase.auth.getUser()
  
  if (!user) {
    throw new Error('User not authenticated')
  }

  // You can customize these defaults
  const username = user.email?.split('@')[0] || 'user'
  const name = user.user_metadata?.full_name || user.email || 'User'
  const avatarUrl = user.user_metadata?.avatar_url || `https://ui-avatars.com/api/?name=${encodeURIComponent(name)}`

  return addMessage(
    conversationId,
    'user',
    content,
    username,
    name,
    avatarUrl
  )
}

// Add assistant message
export async function addAssistantMessage(
  conversationId: string,
  content: string
) {
  const supabase = await createServer()
  const { data: { user } } = await supabase.auth.getUser()
  
  if (!user) {
    throw new Error('User not authenticated')
  }

  const { data, error } = await supabase
    .from('messages')
    .insert({
      conversation_id: conversationId,
      sender_id: 'assistant',
      sender_type: 'assistant',
      sender_username: 'assistant',
      sender_name: 'AI Assistant',
      sender_avatar_url: 'https://ui-avatars.com/api/?name=AI&background=4F46E5&color=fff',
      content
    })
    .select()
    .single()

  if (error) throw error
  return data as Message
}

// Get all messages for a conversation
export async function getConversationMessages(conversationId: string) {
    const supabase = await createServer();
    const { data: { user } } = await supabase.auth.getUser()
    
    if (!user) {
        throw new Error('User not authenticated')
    }
    
  const { data, error } = await supabase
    .from('messages')
    .select('*')
    .eq('conversation_id', conversationId)
    .order('timestamp', { ascending: true })

  if (error) throw error
  return data as Message[]
}

// Update conversation title
export async function updateConversationTitle(
  conversationId: string,
  title: string
) {
  const supabase = await createServer()
  const { data, error } = await supabase
    .from('conversations')
    .update({ title })
    .eq('id', conversationId)
    .select()
    .single()

  if (error) throw error
  return data as Conversation
}

// Delete a conversation (messages will be deleted automatically due to CASCADE)
export async function deleteConversation(conversationId: string) {
  const supabase = await createServer()
  const { error } = await supabase
    .from('conversations')
    .delete()
    .eq('id', conversationId)

  if (error) throw error
}

// Subscribe to new messages in a conversation (real-time)
export function subscribeToMessages(
  conversationId: string,
  callback: (message: Message) => void
) {
  // Real-time subscriptions must use the client-side Supabase instance.
  // `createServer()` is for server-side operations and will not work correctly
  // when called from a client-side component to set up a subscription, as it
  // cannot access user session cookies, leading to authentication errors.
  const channel = supabaseClient
    .channel(`messages:${conversationId}`)
    .on(
      'postgres_changes',
      {
        event: 'INSERT',
        schema: 'public',
        table: 'messages',
        filter: `conversation_id=eq.${conversationId}`,
      },
      (payload: { new: Message }) => {
        callback(payload.new);
      }
    )
    .subscribe();

  return channel;
}