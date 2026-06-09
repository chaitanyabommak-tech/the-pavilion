import { createClient } from '@/lib/supabase/server'
import { redirect } from 'next/navigation'
import SectionEditorClient from '@/components/admin/SectionEditorClient'

export default async function SectionEditorPage() {
  const supabase = await createClient()

  const { data: { user } } = await supabase.auth.getUser()
  if (!user) redirect('/admin/login')

  // Fetch all website sections
  const { data: sections } = await supabase
    .from('website_sections')
    .select('*')
    .order('section_key', { ascending: true })

  // Fetch CTA settings
  const { data: ctaSettings } = await supabase
    .from('cta_settings')
    .select('*')

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Section Editor</h1>
          <p className="text-gray-600">
            Edit website text content. Changes will appear on bommakugroup.com when you update public components.
          </p>
        </div>

        <SectionEditorClient
          initialSections={sections || []}
          ctaSettings={ctaSettings || []}
        />
      </div>
    </div>
  )
}
