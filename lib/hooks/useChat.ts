// ============================================
// 3. Hook React (hooks/useChat.ts)
// ============================================
import { useState, useEffect } from 'react'
import { Message } from '@/lib/supabase'
import { 
  getMessages, 
  sendMessage, 
  subscribeToMessages, 
  unsubscribeFromMessages 
} from '@/lib/chat'

export const useChat = (userId: string, username: string) => {
  const [messages, setMessages] = useState<Message[]>([])
  const [loading, setLoading] = useState(true)
  const [sending, setSending] = useState(false)

  useEffect(() => {
    // Charger les messages existants
    const loadMessages = async () => {
      const { data, error } = await getMessages()
      if (data) {
        setMessages(data)
      }
      if (error) {
        console.error('Erreur chargement messages:', error)
      }
      setLoading(false)
    }

    loadMessages()

    // S'abonner aux nouveaux messages
    const channel = subscribeToMessages((newMessage) => {
      setMessages((prev) => [...prev, newMessage])
    })

    // Cleanup à la fermeture
    return () => {
      unsubscribeFromMessages(channel)
    }
  }, [])

  const send = async (content: string) => {
    if (!content.trim()) return { error: 'Message vide' }
    
    setSending(true)
    const { data, error } = await sendMessage(content, userId, username)
    setSending(false)
    
    return { data, error }
  }

  return { messages, loading, sending, send }
}