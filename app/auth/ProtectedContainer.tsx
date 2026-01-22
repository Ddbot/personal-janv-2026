'use client'
import { useEffect, useCallback, useState } from 'react'
import supabase from '@/lib/supabase'
import { useRouter } from 'next/navigation'
import { User } from '@supabase/supabase-js'

export default function ProtectedContainer({ children }: { children: React.ReactNode }) {
    const [user, setUser] = useState<User | null>(null)
    const [loading, setLoading] = useState(true)
    const router = useRouter()

    const checkUser = useCallback(async () => {
        try {
            const { data: { user } } = await supabase.auth.getUser()
        
            if (!user) {
                router.push('/auth')
            } else {
                setUser(user)
            }
        } catch (error) {
            console.error('Error checking user:', error)
            router.push('/auth')
        } finally {
            setLoading(false)
        }
    }, [router, setUser, setLoading]);
    
    useEffect(() => {
        checkUser()

        // Listen for auth changes
        const { data: authListener } = supabase.auth.onAuthStateChange(
            (event, session) => {
            if (session?.user) {
                setUser(session.user)
                console.log(session.user)
            } else {
                console.log('Pas de user registered')
                router.push('/auth')
            }
            }
        )

        return () => {
            authListener.subscription.unsubscribe()
        }
    }, [router, checkUser])
    
    const handleSignOut = async () => {
      setUser(null)
    await supabase.auth.signOut()
    router.push('/')
  }

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-gray-600">Loading...</div>
      </div>
    )
  }

  return children
}