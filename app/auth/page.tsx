// app/auth/page.tsx
'use client'

import { useEffect, useState, use } from 'react'
import supabase from '@/lib/supabase'
import { useRouter } from 'next/navigation'
import { LangContext } from '@/contexts/LangContext'
import dictionary from './dictionary';
import { cn } from '@/lib/utils';
import styles from './styles.module.css';
import { useSearchParams } from 'next/navigation';

export default function AuthPage() {
  const searchParams = useSearchParams();
  const [email, setEmail] = useState('')
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState('')
  const [error, setError] = useState('')
  const router = useRouter()
  const { lang } = use(LangContext);
  
  const type = searchParams.get('type')

  // Check if user is already authenticated on mount
  useEffect(() => {
    checkExistingSession()
  }, [])
    
    useEffect(() => { 
        console.log('type demandé: ', type)
    }, [type]);
  
const checkExistingSession = async () => {
    try {
      const client = await supabase;
      const { data: { session } } = await client.auth.getSession()
      if (session) {
        // User is already logged in, redirect them
        router.push(`/contact?type=${type}`)
      }
    } catch (error) {
      console.error('Error checking session:', error)
    }
}

  const handleMagicLink = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError('')
    setMessage('')
    const client = await supabase;

      try {
        // First, check if a user with this email exists
        // Note: This is a basic check. Supabase doesn't expose a direct "user exists" API
        // for security reasons, but we can attempt to sign in
        const { error } = await client.auth.signInWithOtp({
        email,
        options: {
            emailRedirectTo: `${window.location.origin}/contact?type=${type ?? 'mail'}`,
            shouldCreateUser: true
        },
      })

      if (error) throw error

      setMessage('Check your email for the magic link!')
    } catch (error: any) {
      setError(error.message || 'An error occurred')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="absolute inset-0 flex items-center justify-center bg-background border-0">
      <div className={cn(styles.card)}>
        <div>
          <h2 className="text-3xl font-bold text-center text-gray-900">
            {dictionary[lang].signIn}
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            {dictionary[lang].explanation}
          </p>
        </div>

        <form onSubmit={handleMagicLink} className="mt-8 space-y-6">
          <div>
            <label htmlFor="email" className="sr-only">
              {dictionary[lang].emailAddressLabel}
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
              placeholder={dictionary[lang].placeholder}
            />
          </div>

          {message && (
            <div className="rounded-md bg-green-50 p-4">
              <p className="text-sm text-green-800">{message}</p>
            </div>
          )}

          {error && (
            <div className="rounded-md bg-red-50 p-4">
              <p className="text-sm text-red-800">{error}</p>
            </div>
          )}

          <button
            type="submit"
            disabled={loading}
            className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? dictionary[lang].sending : dictionary[lang].sendMagicLink}
          </button>
        </form>
      </div>
    </div>
  )
}