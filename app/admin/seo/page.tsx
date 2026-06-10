import { createClient } from '@/lib/supabase/server'
import { redirect } from 'next/navigation'
import SEOClient from '@/components/admin/SEOClient'

export default async function SEOPage() {
  const supabase = await createClient()

  const { data: { user } } = await supabase.auth.getUser()
  if (!user) redirect('/admin/login')

  // Fetch SEO pages
  const { data: seoPages } = await supabase
    .from('seo_pages')
    .select('*')
    .order('page_path', { ascending: true })

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-5xl mx-auto px-4 py-8">
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">SEO Manager</h1>
          <p className="text-gray-600">
            Manage meta tags, Open Graph, and search engine optimization
          </p>
        </div>

        <SEOClient initialPages={seoPages || []} />
      </div>
    </div>
  )
}
