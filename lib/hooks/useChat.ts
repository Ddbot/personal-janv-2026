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

// ============================================
// 4. Exemple d'utilisation
// ============================================
/*
'use client'
import { useState } from 'react'
import { useChat } from '@/hooks/useChat'

export default function ChatComponent() {
  const [input, setInput] = useState('')
  
  // Remplacez par vos vraies données utilisateur
  const userId = 'user-123'
  const username = 'JohnDoe'
  
  const { messages, loading, sending, send } = useChat(userId, username)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!input.trim() || sending) return
    
    const { error } = await send(input)
    if (!error) {
      setInput('')
    }
  }

  if (loading) {
    return <div>Chargement du chat...</div>
  }

  return (
    <div className="flex flex-col h-screen">
      <div className="flex-1 overflow-y-auto p-4 space-y-2">
        {messages.map((msg) => (
          <div key={msg.id} className="p-2 bg-gray-100 rounded">
            <span className="font-bold">{msg.username}: </span>
            <span>{msg.content}</span>
          </div>
        ))}
      </div>
      
      <form onSubmit={handleSubmit} className="p-4 border-t">
        <div className="flex gap-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Tapez votre message..."
            disabled={sending}
            className="flex-1 p-2 border rounded"
          />
          <button 
            type="submit" 
            disabled={sending}
            className="px-4 py-2 bg-blue-500 text-white rounded disabled:opacity-50"
          >
            {sending ? 'Envoi...' : 'Envoyer'}
          </button>
        </div>
      </form>
    </div>
  )
}
*/