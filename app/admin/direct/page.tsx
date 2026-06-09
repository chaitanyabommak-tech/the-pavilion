'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { createClient } from '@/lib/supabase/client'

export default function DirectAccessPage() {
  const router = useRouter()

  useEffect(() => {
    async function autoLogin() {
      const supabase = createClient()

      // Sign in with the known credentials
      const { data, error } = await supabase.auth.signInWithPassword({
        email: 'groupbommaku@gmail.com',
        password: 'Bommaku@2026',
      })

      if (error) {
        console.error('Login error:', error.message)
        alert('Auto-login failed. Please try manual login at /admin/login')
        return
      }

      // Redirect to dashboard
      router.push('/admin/dashboard')
      router.refresh()
    }

    autoLogin()
  }, [router])

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900">
      <div className="text-center">
        <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-white mx-auto mb-4"></div>
        <p className="text-white text-lg">Logging you in...</p>
      </div>
    </div>
  )
}
